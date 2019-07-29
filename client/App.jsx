import React from 'react'
import { render } from 'react-dom'

const App = () => (<h1>Hello world!</h1>)

const container = document.createElement('div')

document.body.appendChild(container)

render(<App />, container)