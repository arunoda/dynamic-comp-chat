export default ({ name, message }) => (
  <div>
    <span className="name">{name}:</span>
    <span className="message">{ message }</span>
    <style jsx>{`
      * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      div {
        margin: 20px 0;
      }

      .name {
        font-size: 14px;
        font-weight: bold;
      }

      .message {
        font-size: 14px;
        margin-left: 10px;
      }
    `}</style>
  </div>
)
