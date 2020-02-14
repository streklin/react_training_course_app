import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import SailBoatImage from './assets/buying-a-sailboat-checklist.jpg';

const Home = (props) => {
    return (
        <Card id={'#home-page'} className={'home-page'}>
            <CardActionArea>
               <img
                   style={{
                       width: '100%'
                   }}
                   src={SailBoatImage}
                   alt={"Sailboat"}
                   title={"Sailboat"}
               />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices lorem erat, ac tincidunt
                        risus luctus quis. Sed sem velit, dictum at condimentum rutrum, rhoncus ut massa. Suspendisse
                        facilisis ligula non ultrices dignissim. Nulla porta egestas arcu eget vestibulum. Vestibulum in
                        lorem ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Phasellus vehicula diam eu condimentum mattis. Etiam dolor mauris, dapibus vitae fringilla a,
                        blandit quis sapien. Mauris eget felis diam. Suspendisse dictum lobortis velit, at semper sapien
                        posuere quis. Nullam venenatis consectetur est non lacinia. Vestibulum consectetur, neque et
                        volutpat efficitur, eros ex faucibus dui, vel sollicitudin mauris turpis eu justo.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Home;
