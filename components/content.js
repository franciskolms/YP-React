const Content = (props) => (
  <div className="content">
  {props.children}

  <style jsx>{`
    .content {
      max-width:1000px;
      width:100%;
      margin: 0 auto;
      padding:1rem;
    }
  `}
  </style>
  </div>
)

export default Content