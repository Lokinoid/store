import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import {blueGrey50, blueGrey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import MainDrawer from './MainDrawer';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: blueGrey50,
    },
});

const iconElemen = 
    <IconButton>
        <NavigationMenu
            color={blueGrey900}
        />
    </IconButton>
                
class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.title = 'Dancing shoes';
    }

    render() {
        return (
            <AppBar
                title={this.title}
                style={{backgroundColor: blueGrey50}}
                iconElementLeft={iconElemen}
                titleStyle={{color: blueGrey900}}
            />
        );
    }
}

export default Header;