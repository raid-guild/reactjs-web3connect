import React, { useContext } from 'react';
import { Web3SignIn } from './components/account/Web3SignIn';
import { CurrentUserContext } from './contexts/Store';
import Flex, { FlexItem } from 'styled-flex-component';

function App() {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  console.log('currentUser', currentUser);

  return (
    <div className="App">
      <Flex center full column>
        <Flex row>
          <FlexItem >1 of 2</FlexItem>
          <FlexItem >
            {currentUser && currentUser.username ? (<p>{currentUser.username}</p>) : (<Web3SignIn setCurrentUser={setCurrentUser} />)}
          </FlexItem>
        </Flex>
        <Flex row >
          <FlexItem >1 of 3</FlexItem>
          <FlexItem >2 of 3</FlexItem>
          <FlexItem >3 of 3</FlexItem>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
