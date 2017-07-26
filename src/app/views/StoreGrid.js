import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { LabelRadio, RadioGroup } from 'material-ui/Radio';
import { FormLabel } from 'material-ui/Form';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import StoreGridItem from './StoreGridItem';


const styleSheet = createStyleSheet('StoreGrid', theme => ({
  root: {
    marginTop: 100,
    marginLeft: 0,
    marginRight: 0,
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    height: 240,
    width: 320,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
}));

class StoreGrid extends Component {
    constructor(props, context) {
      super(props, context);
      this.classes = this.props.classes;
      this.state = { gutter: 16 };
      this.updateGridItems(props.items);
    }

    updateGridItems(items) {
      this.gridItems = items.map(item => {
        return (
          <Grid item key={item.id}>
              <StoreGridItem item = {item}/>
          </Grid>
        );
      });  
    }

    render() {
        this.updateGridItems(this.props.items);
        
        const { gutter } = this.state;

        return (
          <Grid container className={this.classes.root}>
            <Grid item xs={12}>
              <Grid container className={this.classes.demo} justify="center">
                {this.gridItems}
              </Grid>
            </Grid>
          </Grid>
        );
    }
}

export default withStyles(styleSheet)(StoreGrid);