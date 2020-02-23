import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Web3SignIn } from './components/account/Web3SignIn';
import { CurrentUserContext } from './contexts/Store';


function App() {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  console.log('currentUser', currentUser);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>
            {currentUser && currentUser.username ? (<p>{currentUser.username}</p>) : (<Web3SignIn setCurrentUser={setCurrentUser} />)}
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
