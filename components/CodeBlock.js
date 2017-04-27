export default ({ code }) => (
  <div>
    <pre>
      <code>
        {code}
      </code>
    </pre>
    <style jsx>{`
      pre {
        padding: 0px 15px;
        background-color: #EFEFEF;
        border-radius: 3px;
        margin: 20px 0;
      }
    `}</style>
  </div>
)
