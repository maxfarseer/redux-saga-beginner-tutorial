import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Counter from './Counter'
import reducer from './reducers'

import './index.css'

const store = createStore(reducer)

const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
