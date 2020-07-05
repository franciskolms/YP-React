const Layout = props => (
  <div className="wrapper">
    {props.children}

    <style jsx global>{`
      :root {
        --yellow: #ffd800;
        --yellow-light: #ffef99;
        --black: #0e0e0e;
        --teal: #00a8a1;
        --lightgray: #f3f3f3;
        --lightgrey: #f3f3f3;
        --lightgraygrad: linear-gradient(0deg, rgba(241,241,241,1) 0%, rgba(255,255,255,1) 35%, rgba(243,243,243,1) 100%);
        --lightgreygrad: linear-gradient(0deg, rgba(241,241,241,1) 0%, rgba(255,255,255,1) 35%, rgba(243,243,243,1) 100%);
        --whychoose: #ffd800;
      }

      @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

      html,
      body {
        font-size:20px;
        padding: 0;
        margin: 0;
        font-family: 'Lato', sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      p {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size:1rem;
        color:var(--black);
        margin:auto;
        padding:.5rem 0;
        letter-spacing: .3px;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
        font-weight:500;
        letter-spacing: 1px;
      }

      img {
        max-width:100%;
      }

      a {
        text-decoration:none;
      }

      button {
        font-size: 1rem;
        padding: .5rem 2rem;
        border-radius: 5px;
        border: 2px solid white;
        transition:.3s;
        cursor:pointer;
      }

      a:visited {
        color:unset;
      }

      .wrapper {
        min-height: 100vh;
        padding: 0rem;
        box-sizing: border-box;
      }

      /* Service pages only */
      .grid-service {
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          grid-column-gap:1rem;
          grid-row-gap:1rem;
          margin:1rem auto;
        }
        .thumb-service img {
          border-bottom: .5rem solid var(--yellow);
        }
    `}</style>
  </div>
);

export default Layout