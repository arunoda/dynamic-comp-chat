module.exports = [
  {
    type: "message",
    name: "Arunoda",
    message: "Next.js is a pretty cool framework. I like it so much."
  },
  {
    type: "message",
    name: "Rauch",
    message: "Zeit it super awesome. You can deploy anything you want with a single command."
  },
  {
    type: "code",
    code: `
import React from 'react'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return <div>
      Hello World {this.props.userAgent}
    </div>
  }
}
    `
  },
  {
    type: "image",
    src: "https://media.giphy.com/media/3oD3YEqJJzy6tCIoA8/giphy.gif"
  }
]
