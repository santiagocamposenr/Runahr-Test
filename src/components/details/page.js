import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from '../Navbar/index';
import Button from '@material-ui/core/Button';
import './style.scss';

function Page(props) {
  const {
      goTo,
      currentItem,
  } = props;

  return (
      <Fragment className='details-container'>
          <CssBaseline />

          <Navbar />

          <div className="details-page">
              <Paper
                  elevation={1}
                  className="paper-container"
              >
                  {currentItem ?
                      <Fragment >
                          <Typography gutterBottom variant="h5" component="h2">
                              {currentItem.name}
                          </Typography>

                          <div
                              className="item-image"
                              style={{
                                  backgroundImage: `url(${currentItem.img})`,
                              }}
                          />

                          <Typography gutterBottom component="p" className="content">
                              {`Nickname: ${currentItem.nickname}`} <br/>
                              {`Status: ${currentItem.status}`} <br/>
                              {`Occupation: ${currentItem.occupation}`} <br/>
                              {`Portrayed: ${currentItem.portrayed}`} 
                              portrayed
                          </Typography>
                      </Fragment>
                      :
                      <CircularProgress className="item-loader" />
                  }

                  <Button
                      color="primary"
                      onClick={() => goTo('/')}
                  >
                      Volver
                  </Button>
              </Paper>
          </div>
      </Fragment>
  );
}

export default Page;