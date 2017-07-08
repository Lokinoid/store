import React from 'react';
import { blueGrey50 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Body from './Body';
// import Footer from './Footer';

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 0,
        margin: 0
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: blueGrey50,
    },
});

class AppView extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <Header />
                    <Body />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppView;
