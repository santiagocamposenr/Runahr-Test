import React, { Fragment } from 'react';

// Material UI
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

// Components
import Navbar from '../Navbar';

// Data
import items from '../../data/items';

// Sass
import './style.scss';

const Page = (props) => {
  const {
      results, 
      goTo,
  } = props;
    
  const isEmpty =  results.length === 0;

  return(
      <Fragment>
          <Navbar />
          <div className='results-page'>
              {
                isEmpty ?
                items.map( item => 
                <div   
                    key={item.char_id}
                    className='container-default-img'
                >
                        <Card
                            className="card"
                            onClick={() => goTo(`/details/${item.char_id}`)}
                        >
                                <CardActionArea>
                                        <CardMedia 
                                            className='card-media'
                                            image={item.img}
                                            title={item.name}
                                        />
                                        <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography component="p">
                                                    {item.nickname}
                                                </Typography>
                                        </CardContent>
                                </CardActionArea>
                        </Card>
                </div>
                )
                :
                results.map(item =>  
                  <div
                      key={item.char_id}
                      className='card-container'
                  >
                  <Card
                        className="card"
                        onClick={() => goTo(`/details/${item.char_id}`)}
                      >
                        <CardActionArea>
                              <CardMedia
                                  className="card-media"
                                  image={item.img}
                                  title={item.name}
                              />
                              <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.name}
                                    </Typography>
                                    <Typography component="p">
                                        {item.nickname}
                                    </Typography>
                              </CardContent>
                        </CardActionArea>
                  </Card>
                  </div>
                  )
              };
          </div>
      </Fragment>
  );
};

export default Page;