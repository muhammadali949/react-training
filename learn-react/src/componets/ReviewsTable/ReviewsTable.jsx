import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    MuiTableRowroot: {
        fontWeight: 'bold',
        fontSize: 17
    }
});
function ReviewsTable({ data }) {

    const classes = useStyles();
    return (
        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.MuiTableRowroot}>Author</TableCell>
                            <TableCell className={classes.MuiTableRowroot}>Excerpt</TableCell>
                            <TableCell className={classes.MuiTableRowroot}>More</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((d) => (
                            <TableRow key={d.id}>
                                <TableCell>{d.author}</TableCell>
                                <TableCell>{d.content}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ReviewsTable;