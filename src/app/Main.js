/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {blueGrey50} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Body from './components/Body';

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

class Main extends Component {
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

export default Main;
