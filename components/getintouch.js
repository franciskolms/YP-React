import React from 'react'
import SectionContainer from '../components/sectioncontainer'

export default class GetInTouch extends React.Component {
  render() {
    return(
      <div className="get-in-touch">
        <h2>Get in touch</h2>

        <div className="customer">
          <input
          type="text"
          name="name"
          placeholder="Name"
          />

          <input
          type="text"
          name="name"
          placeholder="Email"
          />
        </div>
        <div className="enquiry">
          <textarea
            type="textarea"
            rows="5"
            name="name"
            placeholder="Enquiry"
          />
        </div>
        <div className="submit">
          <button type="submit" className="send">Send</button>
        </div>

        <style jsx>{`
          input,
          textarea {
            font-family: 'Lato',sans-serif;
            font-weight: 300;
            font-size: 1rem;
            padding: .5rem 1rem;
            width: 100%;
            border: none;
          }
          h2 {
            color:white;
            text-align:left;
          }
          .customer {
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-column-gap:1rem;
            grid-row-gap:1rem;
          }
          .enquiry {
            margin-top:1rem;
          }
          .send {
            background: none;
            color: white;
            margin-top: .9rem;
          }
          .send:hover {
            background: white;
            color: var(--teal);
          }
          .get-in-touch {
            padding-bottom: 1.5rem;
          }
          .submit {
            text-align:left;
          }
        `}</style>
      </div>
    );
  };
};
  