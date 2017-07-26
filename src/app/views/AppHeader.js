import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Menu from 'material-ui-icons/Menu';


const styleSheet = createStyleSheet('Header', {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
});
             
class AppHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.title = 'Dance shoes';
        this.classes = props.classes;
    }

    render() {
        return (
                <AppBar position='fixed'>
                    <Toolbar>
                        {/*<IconButton color='contrast' aria-label='Menu'>
                            <Menu />
                        </IconButton>*/}
                        <Typography type='title' color='inherit' className={this.classes.flex}>
                            {this.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
        );
    }
}

export default withStyles(styleSheet)(AppHeader);
