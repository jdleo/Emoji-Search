import React from 'react';
import './App.css';
import emojiJson from './emoji.json'
import { Container, Row, Col } from 'reactstrap';

var currentEmojis = emojiJson.slice(0, 200);

class MainApp extends React.Component {

  //helper method to get the char of the current emoji in array
  getChar(index) {
    if (currentEmojis[index]) {
      return currentEmojis[index].char;
    } else {
      return -1;
    }
  }

  //helper method to get the char of the current emoji name in array
  getName(index) {
    if (currentEmojis[index] && this.state.didSearch) {
      const txt = this.state.textValue;
      const name = currentEmojis[index].name;
      const idx = name.toLowerCase().indexOf(txt.toLowerCase());
      const pre = name.slice(0, idx);
      const match = name.slice(idx, idx + txt.length);
      const post = name.slice(idx + txt.length);
      return (
        <p>
          {pre}
          <mark className="Highlighting">
          {match}
          </mark>
          {post}
        </p>
      );
    } else if (currentEmojis[index]) {
      return currentEmojis[index].name;
    } else {
        return -1;
    }
  }

  renderEmojiList() {
    //numbers by groups of fours
    var nums = [];
    //create list
    for (var i = 0; i < currentEmojis.length / 4; i++) {
      nums.push(i * 4);
    }

    if (currentEmojis.length === 0) {
      return (
        <p style={{color: "#153366", "font-weight": "800", "font-size": "2.85em"}}>Sorry, no results here. 😢😢😢</p>
      );
    } else {
      return (
        <Container className="Main-container">
          {
            nums.map(num =>
              <Row>
                <Col style={{display: "inline-block", margin: "10px", visibility: (this.getChar(num) === -1) ? "hidden": "visible"}} key={this.getChar(num)}>
                  <div className="Card">
                    <p className="Emoji-text">
                      {this.getChar(num)}
                    </p>
                    <p className="Name-text">
                      {this.getName(num)}
                    </p>
                  </div>
                </Col>
                <Col style={{display: "inline-block", margin: "10px", visibility: (this.getChar(num+1) === -1) ? "hidden": "visible"}} key={this.getChar(num+1)}>
                  <div className="Card">
                    <p className="Emoji-text">
                      {this.getChar(num+1)}
                    </p>
                    <p className="Name-text">
                      {this.getName(num+1)}
                    </p>
                  </div>
                </Col>
                <Col style={{display: "inline-block", margin: "10px", visibility: (this.getChar(num+2) === -1) ? "hidden": "visible"}} key={this.getChar(num+2)}>
                  <div className="Card">
                    <p className="Emoji-text">
                      {this.getChar(num+2)}
                    </p>
                    <p className="Name-text">
                      {this.getName(num+2)}
                    </p>
                  </div>
                </Col>
                <Col style={{display: "inline-block", margin: "10px", visibility: (this.getChar(num+3) === -1) ? "hidden": "visible"}} key={this.getChar(num+3)}>
                  <div className="Card">
                    <p className="Emoji-text">
                      {this.getChar(num+3)}
                    </p>
                    <p className="Name-text">
                      {this.getName(num+3)}
                    </p>
                  </div>
                </Col>
              </Row>
            )
          }
        </Container>
      );
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      textValue: "",
      didSearch: false
    }
  }

  handleChange (e) {
    //get current text field value
    const txt = e.target.value;
    //check if txt length is greater than 1
    if (txt.length > 1) {
      //filter array based on search query
      currentEmojis = emojiJson.filter(emoji => emoji.name.toLowerCase().includes(txt.toLowerCase()));
      //set state to trigger react reload
      this.setState({textValue: txt, didSearch: true});
    }
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
          onChange={(e) => {this.handleChange(e)}}
          className="Input-bar"
        />
        {this.renderEmojiList()}
      </div>
    )
  }

}

export default MainApp;