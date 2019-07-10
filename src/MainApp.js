import React from 'react';
import './App.css';
import emojiJson from './emoji.json'
import { Container, Row, Col } from 'reactstrap';

var currentEmojis = emojiJson.slice(0, 100);

class MainApp extends React.Component {

  renderEmojiList() {
    //numbers by groups of fours
    var nums = [];
    //create list
    for (var i = 0; i < currentEmojis.length / 4; i++) {
      nums.push(i * 4);
    }

    return (
      <Container className="Main-container">
        {
          nums.map(num =>
            <Row>
              <Col style={{display: "inline-block", margin: "10px"}} key={currentEmojis[num].char}>
                <div className="Card">
                  <p className="Emoji-text">
                    {currentEmojis[num].char}
                  </p>
                  <p className="Name-text">
                    {currentEmojis[num].name}
                  </p>
                </div>
              </Col>
              <Col style={{display: "inline-block", margin: "10px"}} key={currentEmojis[num+1].char}>
                <div className="Card">
                  <p className="Emoji-text">
                    {currentEmojis[num+1].char}
                  </p>
                  <p className="Name-text">
                    {currentEmojis[num+1].name}
                  </p>
                </div>
              </Col>
              <Col style={{display: "inline-block", margin: "10px"}} key={currentEmojis[num+2].char}>
                <div className="Card">
                  <p className="Emoji-text">
                    {currentEmojis[num+2].char}
                  </p>
                  <p className="Name-text">
                    {currentEmojis[num+2].name}
                  </p>
                </div>
              </Col>
              <Col style={{display: "inline-block", margin: "10px"}} key={currentEmojis[num].char}>
                <div className="Card">
                  <p className="Emoji-text">
                    {currentEmojis[num+3].char}
                  </p>
                  <p className="Name-text">
                    {currentEmojis[num+3].name}
                  </p>
                </div>
              </Col>
            </Row>
          )
        }
      </Container>
    );
  }

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
        {this.renderEmojiList()}
      </div>
    )
  }

}

export default MainApp;