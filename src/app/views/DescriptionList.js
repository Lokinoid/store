import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, {
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';


const styleSheet = createStyleSheet('SwitchListSecondary', theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        background: theme.palette.background.paper,
    },
}));

class DescriptionList extends Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            checked: ['wifi'],
        };
        this.classes = this.props.classes;
        this.params = this.props.params;
    }

    handleToggle = (event, value) => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {

        return (
            <div className={this.classes.root}>
                <List>
                    <ListItem>
                        <ListItemText text primary='Fabric'/>
                        <ListItemText text primary={this.params.fabric} />
                    </ListItem>
                    <ListItem>
                        <ListItemText text primary="Color" />
                        <ListItemText text primary={this.params.color} />
                    </ListItem>
                    <ListItem>
                        <ListItemText text primary="Heel type" />
                        <ListItemText text primary={this.params.heelType} />
                    </ListItem>
                    <ListItem>
                        <ListItemText text primary="Heel height" />
                        <ListItemText text primary={this.params.heelHeight} />
                    </ListItem>
                </List>
            </div>
        );
    }
}

DescriptionList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(DescriptionList);