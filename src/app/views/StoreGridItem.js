import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Avatar from 'material-ui/Avatar';
import Collapse from 'material-ui/transitions/Collapse';
import classnames from 'classnames';

import DescriptionTable from './DescriptionTable';


const styleSheet = createStyleSheet('StoreGridItem', theme => ({
    card: { maxWidth: 500 },
    media: {width: '100%'},
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: { backgroundColor: red[500] },
    flexGrow: { flex: '1 1 auto' },
}));

class StoreGridItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.classes = props.classes;
        this.item = props.item;
        this.state = { expanded: false };
    }

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    handleShareClick = () => {
        function reqListener(arg) {
            console.log(arg);
            console.log(oReq.response);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "http://localhost:2006/api/values");
        oReq.send();
    }

    render() {
        return (
            <Card className={this.classes.card}>
                {/*<CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={this.classes.avatar}>
                            {this.item.params.gender === 'male' ? 'M' : 'F'}
                        </Avatar>
                    }
                    title={this.item.params.model}
                    subheader={this.item.params.type}
                />*/}
                <CardMedia>
                    <img className={this.classes.media} src={this.item.img} alt="Shoes" />
                </CardMedia>
                <CardContent>
                    <Typography type="headline" component="h6">
                        Model: {this.item.params.model}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share"
                        onClick={this.handleShareClick}>
                        <ShareIcon />
                    </IconButton>
                    <div className={this.classes.flexGrow} />
                    <IconButton
                        className={classnames(this.classes.expand, {
                            [this.classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                <CardContent>
                    <DescriptionTable params={this.item.params} />
                </CardContent>
            </Collapse>
            </Card>
        );
    }
}

export default withStyles(styleSheet)(StoreGridItem);
