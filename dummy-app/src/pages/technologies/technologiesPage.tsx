import React from 'react'
import { ImageButton } from '../../components/imageButton'
import { Grid, Card, CardContent } from '@material-ui/core';

type technologiesPageProps = {
}

let logoStyle = {
    margin: "10px",
    height: "40px",
} as React.CSSProperties

let boxStyle = {
    display: "grid"
}

export const TechnologiesPage = ({}: technologiesPageProps) => <div> 
    <Grid item lg={8} style={{margin: "100px 0 100px 0"}}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <h1>Technologies</h1>
                        </Grid>
                        <Grid item xs={12} md={6} style={{...boxStyle}}> 
                            <Card>
                                <CardContent>
                                    <h3>Software Development</h3>
                                    <img src={require("./cucumber-logo.jpg")} style={{...logoStyle}}/>
                                    <img src={require("./confluence-logo.png")} style={{...logoStyle}}/>
                                    <img src={require("./jira-logo.png")} style={{...logoStyle, height: "30px"}}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} style={{...boxStyle}}> 
                            <Card>
                                <CardContent>
                                    <h3>Frontend</h3>
                                    <img src={require("./react-logo.png")} style={{...logoStyle}}/>
                                    <img src={require("./node-js-logo.png")} style={{...logoStyle}}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} style={{...boxStyle}}> 
                            <Card>
                                <CardContent>
                                    <h3>Backend</h3>
                                    <img src={require("./spring-boot-logo.png")} style={{...logoStyle}}/>
                                    <img src={require("./swagger-logo.png")} style={{...logoStyle}}/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} style={{...boxStyle}}> 
                            <Card>
                                <CardContent>
                                    <h3>CICD</h3>
                                    <img src={require("./docker-logo.jpg")} style={{...logoStyle}}/>
                                    <img src={require("./gitlab-logo.png")} style={{...logoStyle}}/>
                                    <img src={require("./kubernetes-logo.png")} style={{...logoStyle}}/>
                                    <img src={require("./jenkins-logo.png")} style={{...logoStyle}}/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
</div>