import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return (
    <h1>Hello World!</h1>
  )
}

const container = document.createElement('div')

document.body.appendChild(container)

render(<App />, container)