const SectionContainer = (props) => (
  <div className="section-container">
  {props.children}

  <style jsx>{`
    .section-container {
      min-height: 10rem;
      padding-top:${props.paddingTop};
      padding-bottom:${props.paddingBottom};
      margin-top:${props.marginTop};
      margin-bottom:${props.marginBottom};
      background:url(${props.url});
      background: ${props.bg};
      background:${props.bgGradient}
    }
  `}</style>
  </div>
)

export default SectionContainer