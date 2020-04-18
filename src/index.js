import React from 'react'
import ReactDOM from 'react-dom'

import App from './container/app/app'
import store from './redux/store'

ReactDOM.render(<App store={store} />, document.getElementById('root'))

store.subscribe(function () {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
})
