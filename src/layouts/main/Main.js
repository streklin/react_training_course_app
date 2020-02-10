import React from 'react';
import {Typography, BottomNavigation, BottomNavigationAction, Container} from "@material-ui/core";
import './App.css';

const MENU_HOME = 'home';
const MENU_DATA = 'data';
const MENU_ORDER = 'order';

function App() {
  return (
    <div className="App">
      <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align={'center'}>
        Sailboats!
      </Typography>

      <Container>
            <div>
              My Content will go here!
            </div>
      </Container>

      <BottomNavigation
          showLabels
      >
        <BottomNavigationAction
            label="Home"
            value={MENU_HOME}
        />
        <BottomNavigationAction
            label="Data"
            value={MENU_DATA}
        />
        <BottomNavigationAction
            label="Order"
            value={MENU_ORDER}
        />
      </BottomNavigation>

    </div>
  );
}

export default App;