import React, {Component} from 'react';
import StoreGrid from './StoreGrid';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Header', {
  root: {
    // width: '100%',
  },
  flex: {
    flex: 1,
  },
});


class AppContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.classes = props.classes;
  }

  render() {
    return (
        <StoreGrid 
          classNames={this.classes.root}
          items={this.props.items}
        />
    );
  }
}

export default withStyles(styleSheet)(AppContent);
