import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import {
    TextField, Button, InputLabel, MenuItem, FormHelperText, FormControl, Select, FormControlLabel, Checkbox
    , CheckBoxOutlineBlankIcon, CheckBoxIcon, Favorite, FavoriteBorder
} from '@material-ui/core';


function Cresume() {
    const signOut = () => {
        firebase.auth().signOut()
    }
    const [nsubmit, setnSubmit] = useState(true);
    const isnSubmit = () => {
        setnSubmit(false);
    }

    return (
        <div>

            {nsubmit ?
                <div>
                    <h2 style={{ color: 'Black' }}>Education:</h2>
                    <ul>
                        <h3 style={{ color: '#FF5733' }}>Completed High School Diploma</h3>
                    </ul>
                    <h2 style={{ color: 'Black' }}>Skills:</h2>
                    <ul>
                        <h3 style={{ color: '#FF5733' }}>Teamwork, Patience, Adaptability</h3>
                    </ul>
                    <h2 style={{ color: 'Black' }}>Work Experience:</h2>
                    <ul>
                        <h3 style={{ color: '#FF5733' }}>Grocer at Target</h3>
                    </ul>

                    <Button variant="contained" color="primary" onClick={isnSubmit}>
                        Generate Dream Resume
                    </Button>
                </div>
                : <div><h2 style={{ color: 'Black'}}>Education:</h2>
                <ul>
                    
                    <a href="https://ged.com/"><h3 style={{ color: '#FF5733' }}>Completed High School Diploma</h3></a>
                    <a href="https://www.nremt.org/rwd/public/document/emt"><h3 style={{ color: '#FF5733' }}>Emergency Medical Technician Licensed</h3></a>
                    <a href="https://www.fctconline.org/candidates/test-prep"><h3 style={{ color: '#FF5733' }}>Firefighting Candidacy Exam Qualified</h3></a>
                </ul>
                <h2 style={{ color: 'Black' }}>Skills:</h2>
                
                    <h3 style={{ color: '#FF5733' }}>Teamwork, Patience, Adaptability, Strength, Leadership</h3>
                <h2 style={{ color: 'Black' }}>Work Experience:</h2>
                <ul>
                    <h3 style={{ color: '#FF5733' }}>Probationary firefighter</h3>
                    <h3 style={{ color: '#FF5733' }}>Firefighter</h3>
                    <h3 style={{ color: '#FF5733' }}>Firefighter: Lieutenant</h3>
                </ul>
                <h2 style={{ color: 'Black' }}>Resources to help your dreams:</h2>
                <a href="https://www.udemy.com/topic/strength-training/"><h3 style={{ color: '#FF5733' }}>Strength Training</h3></a>
                <a href="https://www.classcentral.com/course/teamwork-skills-effective-communication-9661"><h3 style={{ color: '#FF5733' }}>Teamwork Skills and Effective Communication</h3></a>
                <a href="https://alison.com/course/what-great-leaders-do"><h3 style={{ color: '#FF5733' }}>What Great Leaders Do</h3></a>
                <Button variant="contained" color="primary" onClick={isnSubmit}>
                        Click Here To Get Email followups
                    </Button>
                    <br />
                    <br />
                
                </div>}
        </div>

    )

}
export default Cresume