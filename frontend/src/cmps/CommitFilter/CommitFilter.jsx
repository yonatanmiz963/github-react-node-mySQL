
import { useEffect, useState } from 'react'
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './CommitFilter.scss'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: '#333',
        backgroundColor: 'white',
        borderRadius: '4px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export function CommitFilter({ filterNames, onChangeFilter }) {

    const classes = useStyles();
    const [filterBy, setFilterBy] = useState({ byUserName: '', byRepositoryName: '' })

    const handleChange = ({ target }) => {
        console.log(target);
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFilterBy({ ...filterBy, [field]: value })
    }

    useEffect(() => {
        onChangeFilter(filterBy)
        return () => {
        }
    }, [filterBy])


    return (
        <section className="filter-container">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Repository</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={filterBy.byRepositoryName}
                    name="byRepositoryName"
                    onChange={handleChange}
                    className={classes.select}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {filterNames.repoNames && filterNames.repoNames.map((repoName, idx) => <MenuItem key={idx} value={repoName}>{repoName}</MenuItem>)}
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Username</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={filterBy.byUserName}
                    name="byUserName"
                    onChange={handleChange}
                    className={classes.select}
                    inputProps={{
                        classes: {
                            root: classes.border,
                            icon: classes.icon,
                        },
                    }}

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {filterNames.userNames && filterNames.userNames.map((username, idx) => <MenuItem key={idx} value={username}>{username}</MenuItem>)}
                </Select>
            </FormControl>

        </section>
    )
}

