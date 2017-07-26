import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import GenderList from './GenderList';


const styleSheet = createStyleSheet('AppDrawer', {
    root: {
        width: 250,
        // position: 'fixed'
    },
    paper: {
        backgroundColor: 'transparent',
        top: 64,
        paddingTop: 20
    }
});

class AppDrawer extends Component {
    state = {
        open: {
            top: false,
            left: true,
            bottom: false,
            right: false,
        },
    };

    render() {
        const classes = this.props.classes;

        // const filterListItems = (
        //     <div>
        //         <ListItem button>
        //             <ListItemText primary="Filter" />
        //         </ListItem>
        //     </div>
        // );

        // const sideList = (
        //     <div>
        //         <List className={classes.list}>
        //             {typeListItems}
        //         </List>
        //         <Divider />
        //         <List className={classes.list} disablePadding>
        //             {filterListItems}
        //         </List>
        //     </div>
        // );

        return (
                <Drawer 
                    className={classes.root}
                    classes={{paper: classes.paper}}
                    open={true}
                    docked={true}
                >
                    <GenderList />
                </Drawer>
        );
    }
}


export default withStyles(styleSheet)(AppDrawer);
