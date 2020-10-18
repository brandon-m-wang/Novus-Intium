import React, { useState, useEffect } from 'react';
import {
    TextField, Button, InputLabel, MenuItem, FormHelperText, FormControl, Select, FormControlLabel, Checkbox
    , CheckBoxOutlineBlankIcon, CheckBoxIcon, Favorite, FavoriteBorder
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import fireBaseInit from './firebase'
import Cresume from './Cresume'

function Form() {
    
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const signOut = () => {
        firebase.auth().signOut()
    }
    const [age, setAge] = React.useState('');

    const handleChange1 = (event) => {
        setAge(event.target.value);
    };
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
    });

    const handleChange2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [submit, setSubmit] = useState(true);
    const isSubmit = () => {
        setSubmit(false);
    }
    return (
        <div>

            <div>
                <Button onClick={signOut}>Sign Out!</Button>
            </div>
            {submit ?
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <br />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">What do you want to become?</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange1}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={0}>Firefighter</MenuItem>
                            <MenuItem value={1}>Freelance Web developer</MenuItem>
                            <MenuItem value={2}>Bookkeeper</MenuItem>
                            <MenuItem value={3}>Personal Trainer</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">What level of education did you complete?</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange1}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={0}>No high school diploma/equivalent (GED)</MenuItem>
                            <MenuItem value={1}>Completed high school diploma/equivalent (GED)</MenuItem>
                            <MenuItem value={2}>Associates degree</MenuItem>
                            <MenuItem value={3}>Bachelor's degree</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <p style={{ color: 'Black' }}>Soft Skills (Check all that apply):</p>
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox 
                                checked={state.checkedA}
                                onChange={handleChange2}
                                name="checkedA"
                                color="primary"
                            />
                        }
                        label="Teamwork" />

                    <br />
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange2}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Self Motivation" />
                    <br />
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox
                                checked={state.checkedC}
                                onChange={handleChange2}
                                name="checkedC"
                                color="primary"
                            />
                        }
                        label="Creativity/Problem solving" />
                    <br />
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox
                                checked={state.checkedD}
                                onChange={handleChange2}
                                name="checkedD"
                                color="primary"
                            />
                        }
                        label="Leadership skills" />
                    <br />
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox
                                checked={state.checkedE}
                                onChange={handleChange2}
                                name="checkedE"
                                color="primary"
                            />
                        }
                        label="Patience" />
                    <br />
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox
                                checked={state.checkedF}
                                onChange={handleChange2}
                                name="checkedF"
                                color="primary"
                            />
                        }
                        label="Adaptability" />
                    <br />
                    <FormControlLabel style={{ color: 'Black' }}
                        control={
                            <Checkbox
                                checked={state.checkedG}
                                onChange={handleChange2}
                                name="checkedG"
                                color="primary"
                            />
                        }
                        label="Communication skills" />
                    <br />
                    <p style={{ color: 'Black' }}>List work experiences if any:</p>
                    <TextField id="outlined-basic" label="Position and Workplace" variant="outlined" />
                    <br />
                    <TextField id="outlined-basic" label="Position and Workplace" variant="outlined" />
                    <br />
                    <TextField id="outlined-basic" label="Position and Workplace" variant="outlined" />
                    <br />
                    <Button variant="contained" color="primary" onClick={isSubmit}>
                        Submit
                    </Button>
                </form>
                <br /><br />
            </div>
            :
            <div>
                <Cresume />
            </div>
}
        </div>
    )
}

export default Form