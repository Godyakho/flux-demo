import React,{ component } from 'react'
import * as ActionTypes from '../ActionTypes'
import SummaryStore from '../stores/SummaryStore'

class Summary extends component{
    constructor(props) {
        super(props);
        
        this.onUpdate = this.onUpdate.bind(this)

        this.state = {
            sum: SummaryStore.getSummary()
        }
    }
    componentDidMount() {
        SummaryStore.addChangesListener(this.onUpdate)
    }

    conponentWillMount() {
        SummaryStore.removeChangeListener(this.onUpdate)
    }
    
    onUpdate() {
        this.setDate({
            sum: SummaryStore.getSummary()
        })
    }
    render() {
        return(
            <div>Total count : {this.state.sum}</div>
        )
    }
}


export default Summary
