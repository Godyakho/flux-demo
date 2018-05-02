import React, { component } from 'react'
import Counter from './Counter.js'
import Summary from './Summary.js'

class ControlPanel extends Components {
  render() {
    return (
        <div>
            <Counter caption="First" />
            <Counter caption="Sexond" />
            <Counter caption="Third" />
            <Summary />
        </div>
    )
  }
}

export default ControlPanel