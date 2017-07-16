import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import Avatar from 'material-ui/Avatar';



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
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
                    </Typography>
                    
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styleSheet)(StoreGridItem);
