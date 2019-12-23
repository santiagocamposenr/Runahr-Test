import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//Components
import Autocomplete from '../autocomplete';

// Image
import bad from '../../img/bad.png';

// Sass
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
        </Toolbar>
    </AppBar>
  );
};

export default Page;
