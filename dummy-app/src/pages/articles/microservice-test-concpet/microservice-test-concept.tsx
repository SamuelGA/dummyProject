import React from "react"
import { Grid } from "@material-ui/core"

export const MicroserviceTestConceptArticle = ({}) => <Grid container>
    <Grid item xs={12}  style={{height:"100px"}}/>
    <Grid item xs={1}>
    </Grid>
    <Grid item xs={10}>
        <h1>A 
            Systematic Test Concept including a Build Pipeline for a Microservie Environment
        </h1>
        <img src={require('./microservices.png')} style={{width:'100%'}}/>
    </Grid>
    <Grid item xs={1}></Grid>

</Grid>