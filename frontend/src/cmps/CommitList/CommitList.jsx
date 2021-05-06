

import './CommitList.scss'
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
});

export const CommitList = ({ commits }) => {

    const classes = useStyles();
    return (
        <div className="commitList flex wrap">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Text</TableCell>
                            <TableCell align="left">Committed At&nbsp;</TableCell>
                            <TableCell align="left">Repository&nbsp;</TableCell>
                            <TableCell align="left">By User&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {commits.map((commit) => (
                            <TableRow key={commit._id}>
                                <TableCell align="left">{commit.text}</TableCell>
                                <TableCell align="left">{new Date(commit.committedAt).toLocaleString()}</TableCell>
                                <TableCell align="left">{commit.name}</TableCell>
                                <TableCell align="left">{commit.fullname}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

