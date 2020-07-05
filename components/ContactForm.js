import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      dbData:[],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    axios.get('https://wtscuj5kti.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunctionYSGET')
    .then(res => {
      console.log(res.data);
      this.setState({dbData: res.data.Items});
    });
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    await axios.post(
      'https://8801l5j6jf.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunctionYS',
      { key1: `${name}, ${message}` }
    );

    axios.get('https://wtscuj5kti.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunctionYSGET')
    .then(res => {
      this.setState({dbData: res.data.Items});
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>

        </form>

        <ul>
          {this.state.dbData.map(item => 
          <li key={item.date}>{item.message}</li>)}
        </ul>

        <style jsx>{`
          li {
            list-style: none;
          }
        `}
        </style>

      </div>
    );
  }
}