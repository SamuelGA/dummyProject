import React from 'react'
import { Grid, CardContent, Card, CardHeader, Typography } from '@material-ui/core';
import { log } from 'util';

type AboutMeProps = {

}



export const AboutMe = ({}:AboutMeProps) => <aside>
    <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={8}>
            <h1 style={{fontSize: "50px", textAlign: "left"}}>About Me</h1>
        </Grid>
        <Grid item xs={4}>
            <Grid item lg={12} md={12}>
                <img src={require('./me.jpg')} width={200} height={200} style={{borderRadius: "100%"}}/>
            </Grid>
        </Grid>
        <Grid item xs={8}>
            <Grid container>
                <Grid item xs={12} style={{height: "0px"}}/>
                {/** Row2*/}
                <Grid item lg={4}>
                    <div style={{backgroundColor:"rgb(204, 74, 255)", marginTop: "90px", height: "1px", left: "0px", right: "0px"}}/>
                </Grid>
                <Grid item lg={4}>
                    <h2 style={{marginTop: "74px"}}>Samuel Gassauer</h2>
                </Grid>
                <Grid item lg={4}/>
                {/** Row3*/}
                <Grid item lg={8} style={{color: "black", textAlign: "left", margin: "40px 0 0 0"}}>
                        <h3>
                        Im a computer science student living in Karlsruhe. My focus is web development of microservice based applications following
                        the Behaviour Driven Development (BDD) approach. Besided writing code im a passionate climber and traveller. This website gives
                        an overview about me.
                        </h3>
                </Grid>
                {/** Row4 */}
             
                {/** Row5 */}
                <Grid item lg={8}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <h1></h1>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} style={{height: "200px"}}/>
            </Grid>
        </Grid>
    </Grid>
   
</aside>