const Section = (props) => (
  <div className="section">
  {props.children}

  <style jsx>{`
    .section {
      padding:1rem 0;
    }
  `}
  </style>
  </div>
)

export default Section