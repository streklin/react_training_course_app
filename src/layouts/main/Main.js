import React from 'react';
import {Typography, BottomNavigation, BottomNavigationAction, Container} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../../pages/home/Home';
import Data from '../../pages/data/Data';
import Order from '../../pages/order/Order';

import './Main.css';

const MENU_HOME = 'home';
const MENU_DATA = 'data';
const MENU_ORDER = 'order';

function Main() {
    return (
        <Router>
            <div className="App">
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    align={'center'}>
                    Sailboats!
                </Typography>

                <Container>
                    <Switch>
                        <Route path="/data">
                            <Data />
                        </Route>
                        <Route path="/order">
                            <Order />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
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
        </Router>
    );
}


export default Main;