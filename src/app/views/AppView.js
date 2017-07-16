import React from 'react';
import { blueGrey, amber, red } from 'material-ui/colors';

import createMuiTheme from 'material-ui/styles/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette'

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

const muiTheme = createMuiTheme({
    palette: createPalette({
        primary: blueGrey,
        accent: amber,
        error: red,
        type: 'light'
    })
})

class AppView extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <div style={styles.container}>
                    <Header />
                    <Body items={this.props.items} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppView;
