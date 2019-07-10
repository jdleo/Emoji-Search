import React from 'react';
import './App.css';
import MainApp from './MainApp'
import emojiJson from './emoji.json'
import { Container, Row, Col } from 'reactstrap';


function readJson() {
  //numbers by groups of fours
  var nums = [];
  //create list
  for (var i = 0; i < emojiJson.length / 4; i++) {
    nums.push(i * 4);
  }

  return (
    <Container>
      {
        nums.map(num =>
          <Row>
            <Col style={{display: "inline-block", padding: "10px"}} key={emojiJson[num].codes}>
              <div className="Card">
                <p>
                  {emojiJson[num].char}
                </p>
                <p>
                  {emojiJson[num].name}
                </p>
              </div>
            </Col>
            <Col style={{display: "inline-block", padding: "10px"}} key={emojiJson[num+1].codes}>
              <div className="Card">
                <p>
                  {emojiJson[num+1].char}
                </p>
                <p>
                  {emojiJson[num+1].name}
                </p>
              </div>
            </Col>
            <Col style={{display: "inline-block", padding: "10px"}} key={emojiJson[num+2].codes}>
              <div className="Card">
                <p>
                  {emojiJson[num+2].char}
                </p>
                <p>
                  {emojiJson[num+2].name}
                </p>
              </div>
            </Col>
            <Col style={{display: "inline-block", padding: "10px"}} key={emojiJson[num].codes}>
              <div className="Card">
                <p>
                  {emojiJson[num+3].char}
                </p>
                <p>
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
      {readJson()}
    </div>
  );
}

export default App;
