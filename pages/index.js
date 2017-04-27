import dynamic from 'next/dynamic'
import Link from 'next/link'
import data from '../data'

const Components = {
  'message': dynamic(import('../components/Message')),
  'code': dynamic(import('../components/CodeBlock')),
  'image': dynamic(import('../components/Image'))
}

export default class App extends React.Component {
  getContent () {
    const items = shuffle(data).slice(0, 2)
    return items.map((item, index) => {
      const Component = Components[item.type]
      return (<Component key={index} {...item}/>)
    })
  }

  render () {
    return (
      <div className="app">
        <h1>The Chat App</h1>
        <div className="chat">
          {this.getContent()}
        </div>
        <style jsx>{`
          .app {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            margin: 30px 50px
          }

          .chat {
            border: 1px solid #EEEEEE;
            border-radius: 3px;
            max-width: 600px;
            padding: 10px;
          }
        `}</style>
      </div>
    )
  }
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }

  return a
}
