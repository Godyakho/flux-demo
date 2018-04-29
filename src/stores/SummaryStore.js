import AppDispatcher from '../AppDispatcher'
import * as ActionTypes from '../ActionTypes'
import CouterStore from './CouterStore'
import {EventEmitter } from 'events'
const CHANGE_EVENT = 'changed'
function computeSummary(counterValues) {
    let sum = 0
    for(const key in counterValues){
        if(counterValues.hasOwnProperty(key)){
            sum += counterValues[key]
        }
    }
    return sum
}

const SummaryStore = Object.assign({},EventEmitter.prototype, {
    getSummary: function() {
        return computeSummary(CouterStore.getCouterValues())
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangesListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback) {
        this.removeListenetr(CHANGE_EVENT, callback)
    }
})

SummaryStore.dispatchToken = AppDispatcher.register((action)=>{
    if((action.type === ActionTypes.INCREMENT)||(action.type === ActionTypes.DECREMENT)){
        AppDispatcher.waitFor([CouterStore.dispatchToken])
        SummaryStore.emitChange()
    }
})


export default SummaryStore
