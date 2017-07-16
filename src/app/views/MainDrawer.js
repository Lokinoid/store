import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('RaisedButtons', theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
}));


export default class MainDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <Button 
                    raised 
                    className={classes.button}
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggle}>
                    Default
                </Button>

                <Drawer
                    width={200} 
                    openSecondary={false} 
                    open={this.state.open}>
                    <AppBar title="AppBar" />
                </Drawer>
            </div>
        );
    }
}