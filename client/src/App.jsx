import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = { title: '' }
  }
  
  componentDidMount () {
    axios.get('http://localhost:3001')
      .then(({ data }) => {
        this.setState({ title: data.title })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    const { title } = this.state

    return (
      <h1>{title}</h1>
    )
  }
}

const container = document.createElement('div')

document.body.appendChild(container)

render(<App />, container)