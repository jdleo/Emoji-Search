import React from 'react';
import './App.css';

class MainApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    textValue: ""
    }
  }

  handleChange (e) {
    console.log(e.target.value);
    this.setState({textValue: e.target.value});
  }

  handleClick () {
    this.setState({value: 'another random text'})
    var event = new Event('input', { bubbles: true });
    this.myinput.dispatchEvent(event);
  }

  render () {
    return (
      <div>
        <header className="Main-header">
        Emoji Search 😻💰🎉🔎
        </header>
        <input 
          type="text"
          placeholder="Search..." 
          value={this.state.textValue} 
          onChange={(e) => {this.handleChange(e)}}
          className="Input-bar"
        />
      </div>
    )
  }

}

export default MainApp;