import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Autocomplete from '../autocomplete';
import bad from '../../img/bad.png';
import Button from '@material-ui/core/Button';



// import './style.css';
import './style.scss';


function Page(props){
  const {
    goTo,
      text,
      suggestions,
      onChangeText,
      onChangeSelection,
  } = props;

  return(
    <AppBar position='static' className='navbar-appbar'>
        <Toolbar className='navbar'>
        <Button
                      color="primary"
                      onClick={() => goTo('/results')}
                  >
                      
            <img alt='bad' src={bad} className='bad-img' />
                  </Button>
        
       
            
            <Autocomplete 
                  text={text}
                  suggestions={suggestions}
                  onChangeText={onChangeText}
                  onChangeSelection={onChangeSelection}
             />
            {/* <AccountCircle /> */}
        </Toolbar>
    </AppBar>
  )
};

export default Page;


//onchangetext will be to change when the text in the box change
//onChangeSelection is only call when the user push ENTER 