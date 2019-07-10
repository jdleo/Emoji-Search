import React from 'react';
import './App.css';
import MainApp from './MainApp'
import emojiJson from './emoji.json'
import { Container, Row, Col } from 'reactstrap';


function renderEmojiList() {
  //numbers by groups of fours
  var nums = [];
  //create list
  for (var i = 0; i < emojiJson.length / 4; i++) {
    nums.push(i * 4);
  }

  return (
    <Container className="Main-container">
      {
        nums.map(num =>
          <Row>
            <Col style={{display: "inline-block", margin: "10px"}} key={emojiJson[num].char}>
              <div className="Card">
                <p className="Emoji-text">
                  {emojiJson[num].char}
                </p>
                <p className="Name-text">
                  {emojiJson[num].name}
                </p>
              </div>
            </Col>
            <Col style={{display: "inline-block", margin: "10px"}} key={emojiJson[num+1].char}>
              <div className="Card">
                <p className="Emoji-text">
                  {emojiJson[num+1].char}
                </p>
                <p className="Name-text">
                  {emojiJson[num+1].name}
                </p>
              </div>
            </Col>
            <Col style={{display: "inline-block", margin: "10px"}} key={emojiJson[num+2].char}>
              <div className="Card">
                <p className="Emoji-text">
                  {emojiJson[num+2].char}
                </p>
                <p className="Name-text">
                  {emojiJson[num+2].name}
                </p>
              </div>
            </Col>
            <Col style={{display: "inline-block", margin: "10px"}} key={emojiJson[num].char}>
              <div className="Card">
                <p className="Emoji-text">
                  {emojiJson[num+3].char}
                </p>
                <p className="Name-text">
                  {emojiJson[num+3].name}
                </p>
              </div>
            </Col>
          </Row>
        )
      }
    </Container>
  );
}

function App() {

  return (
    <div className="App">
      <MainApp/>
      {renderEmojiList()}
    </div>
  );
}

export default App;
