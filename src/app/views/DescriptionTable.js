import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const styleSheet = createStyleSheet('DescriptionTable', theme => ({
    paper: {
        width: '100%',
        marginTop: 0,
        overflowX: 'auto',
    },
}));

class DescriptionTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.classes = props.classes;
        this.params = props.params;
    }

    formatParams(params) {
        let index = 0;
        return Object.keys(params).map(key => {
            return {
                id: index++,
                description: key,
                data: Array.isArray(params[key]) ? params[key].join(', ') : params[key]
            };
        });
    }

    render() {
        return (
            <Table className={this.classes.paper}>
                <TableBody>
                    {this.formatParams(this.params).map(obj => {
                        return (
                            <TableRow key={obj.id}>
                                <TableCell>
                                    {obj.description}
                                </TableCell>
                                <TableCell>
                                    {obj.data}
                                </TableCell>
                            </TableRow>
                        )}
                    )}
                </TableBody>
            </Table>
        );
    }
}

DescriptionTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(DescriptionTable);