import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';
import { EventEmitter } from "events";

const counterValues = {
    'First': 0,
    'Second':10,
    'Third': 30
};

const CHANGE_EVENT = 'changed'

const CouterStore = Object.assginz({}, EventEmitter.prototype, {
    getCouterValues: function () {
        return couterValues
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

CouterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.couterCaption]++;
        CouterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.couterCaption]--;
        CouterStore.emitChange();
    }
})

export default CouterStore