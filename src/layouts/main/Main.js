import React, {useState} from 'react';
import {Typography, BottomNavigation, BottomNavigationAction, Container} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";

import Home from '../../pages/home/Home';
import Data from '../../pages/data/Data';
import Order from '../../pages/order/Order';

import './Main.css';

const MENU_HOME = 'home';
const MENU_DATA = 'data';
const MENU_ORDER = 'order';

function Main() {
    const [state, setState] = useState({
        currentPage: MENU_HOME,
    });

    const onMenuChange = (event, newValue) => {
        setState({
            ...state,
            currentPage: newValue
        });
    };

    let redirectComponent = null;
    if (state.currentPage === MENU_HOME) {
        redirectComponent = (<Redirect to={'/'} />);
    } else if (state.currentPage === MENU_DATA) {
        redirectComponent = (<Redirect to={'/data'} />);
    } else {
        redirectComponent = (<Redirect to={'/order'} />);
    }

    return (
        <React.Fragment>
            <Router>
                {redirectComponent}
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
                                <Data/>
                            </Route>
                            <Route path="/order">
                                <Order/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </Container>

                    <BottomNavigation
                        showLabels
                        onChange={onMenuChange}
                    >
                        <BottomNavigationAction
                            label="Home"
                            value={MENU_HOME}
                            id={'home-button'}
                        />
                        <BottomNavigationAction
                            label="Data"
                            value={MENU_DATA}
                            id={'data-button'}
                        />
                        <BottomNavigationAction
                            label="Order"
                            value={MENU_ORDER}
                        />
                    </BottomNavigation>

                </div>
            </Router>
        </React.Fragment>
    );
}


export default Main;