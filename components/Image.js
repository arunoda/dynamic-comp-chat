export default ({ src }) => (
  <div>
    <img src={src} />
    <style jsx>{`
      div {
        margin: 20px 0;
      }

      img {
        max-width: 500px;
      }
    `}</style>
  </div>
)
