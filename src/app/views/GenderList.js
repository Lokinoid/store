import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu'

const styleSheet = createStyleSheet('GenderList', {
    list: {
        width: 250,
        top: 64,
        flex: 'initial',
    }
});

class GenderList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            anchorEl: undefined,
            open: false,
        };
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const classes = this.props.classes;

        return (
            <List className={classes.list}>
                <ListItem 
                    button
                    onClick={event => this.handleClick(event)}>
                    <ListItemText primary="Women" />
                </ListItem>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={this.state.open}
                        onRequestClose={this.handleRequestClose}
                    >
                        <MenuItem onClick={this.handleRequestClose}>Latin</MenuItem>
                        <MenuItem onClick={this.handleRequestClose}>Standard</MenuItem>
                        <MenuItem onClick={this.handleRequestClose}>Training</MenuItem>
                    </Menu>
                <ListItem button>
                    <ListItemText primary="Men" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Kids" />
                </ListItem>
            </List>
        );
    }
}


export default withStyles(styleSheet)(GenderList);
