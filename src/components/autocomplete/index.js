import React, { Component } from 'react';

// Material-UI
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

// Sass
import './style.scss';

// React icons
import { MdSearch } from "react-icons/md";


class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    };

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;

        const {
            isOpen,
        } = this.state;

        return (
            <div className="main-container">
                    <div className="container-icon">
                            <MdSearch className='search-icon' />
                    </div>
                    <InputBase
                            className='search'
                            placeholder="Search…"
                            value={text}
                            style={{ width: '100%' }}
                            onChange={(event) => {      
                                    const newText = event.target.value;
                                    onChangeText(newText);
                                    if (!isOpen && newText) { this.setState({ isOpen: true });
                                    } else if (isOpen && !newText) { this.setState({ isOpen: false });
                                    }
                            }}
                            onBlur={() => {
                                setTimeout(() => this.setState({ isOpen: false }), 100);
                            }}
                            onFocus={() => {
                                if (text) {
                                    this.setState({ isOpen: true });
                                }
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter' && text) {
                                    onChangeSelection(text);
                                }
                            }}
            />
                    {isOpen &&
                    <Paper className="container-results" square>
                            {suggestions.map(suggestion =>
                            <MenuItem
                                    key={suggestion.id}
                                    component="div"
                                    onClick={() => {
                                        onChangeSelection(suggestion.name);
                                        this.setState({ isOpen: false });
                                    }}
                            >
                                    {suggestion.name}
                            </MenuItem>)}
                    </Paper>}
            </div>
        );
    };
};

export default Autocomplete;