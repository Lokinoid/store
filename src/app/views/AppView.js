import React from 'react';
import { blueGrey, amber, red } from 'material-ui/colors';

import createMuiTheme from 'material-ui/styles/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette'

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppDrawer from './AppDrawer';

// import Footer from './Footer';

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'stretch'
    }
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
                    <AppHeader />
                    <AppDrawer />
                    <AppContent items={this.props.items} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppView;
