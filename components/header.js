import Link from 'next/link'
import NavBar from '../components/navbar'
import Content from '../components/content'

const Header = props => (

    <div className="header">

      <NavBar />

      <Content>
        <div className="header-content">
          <h1>{props.heading}</h1>
          <p className="intro">{props.subheading}</p>
          {props.children}
        </div>
      </Content>

      <style jsx global>{`
        .header {
          min-height:${props.height || "20rem"};
          height: ${props.height || "auto"};
          width:100%;
          background-position: bottom;
          background-size: cover;
          background-repeat: no-repeat;
          background-color: var(--black);
        }
        .header-content {
          padding-top:7rem;
          min-height: 19rem;
          color:white;
        }
        .logo img {
          position: absolute;
          width: 10rem;
          padding-top: 1rem;
          z-index: 2;
          margin-left: 1rem;
        }
        .button {
          display:inline-block;
          color:var(--black);
          background:var(--yellow);
          padding:.5rem 1.1rem;
          font-size:.7rem;
          font-weight:700;
          margin:1px;
          cursor:pointer;
          border-radius:3px;
          transition:.3s;
          border:2px solid var(--yellow);
        }
        .button:hover {
          color:white;
          background:none;
        }
        .buttons {
          display:block;
          text-align:left;
          margin-top: 1.75rem;
        }
      `}
      </style>
      <style jsx>{`
        .header {
          background-image:url(${props.image});
        }
        p.intro {
          color:white;
          margin-top:-1.5rem;
          font-weight:400;
        }
        h1 {
            margin-top:1rem;
          }
      `}
      </style>
    </div>
  );

  export default Header