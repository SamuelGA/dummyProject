import React, { Component } from 'react'
import './animations.css'
import { Grid, Card, Paper, Hidden, CardContent, Button, CardActions } from '@material-ui/core'
import MenuRounded from '@material-ui/icons/Menu'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { MenuEntry } from './menuEntry'

interface Props {
    /** The height of the rectangle*/
    width: string;
    /** The width of the rectangle */
    height: string
}

interface State {
    hover:boolean
}

export class MainMenu extends Component<Props, State> {
    state: State = {
        hover: false
    }
    style = {
        backgroundImage: "linear-gradient(200deg, rgb(153, 0, 204) 0%, rgb(51, 102, 255) 100%)",
        top: "0px",
        left: - (window.innerWidth - 300) ,
        animationDuration: "1s",
        position: "absolute",
        transform: "rotate(7deg)",
        animationIterationCount: "1",
        animationFillMode: "forwards",
        animationTimingFunction: "ease"
    } as React.CSSProperties
    menuIconStyle = {
        fontSize: "120px",
        color: "rgb(250,250,250)",
        marginTop: "50px",
    } as React.CSSProperties


    render() {
        let rectAnimationName = {
            animationName: this.state.hover? "leftRectangleAnimation" : "leftRectangleAnimationBack"
        }
        console.log(this.state.hover)
        return(
            <div style={{...rectAnimationName, height: window.innerHeight, width: window.innerWidth, ...this.style}}>
                <Grid container>
                    <Grid item xs={10}>
                        <Grid container spacing={2} style={{margin: "40px", color: "rgb(250,250,250)"}}>
                            <Grid item xs={6}>     
                                <Grid container spacing={5} style={{alignItems:"left"}}>
                                    <Grid item xs={12}>
                                        <h1>About Me</h1>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <MenuEntry text="Technologies" target="/technologies" onClick={() => this.setState({hover: false})}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <MenuEntry text="Build Pipeline" target="/articles/microservice-build-pipeline"  onClick={() => this.setState({hover: false})}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <MenuEntry text="Work Experience" target="/work-experience"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <MenuEntry text="Frontend Development" target="/computer-science"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container spacing={5} style={{alignItems:"left"}}>
                                    <Grid item xs={12}>
                                        <h1>Navigation</h1>
                                    </Grid>
                                    <Grid item xs={12}>
                                            <MenuEntry text="Home" target="/" onClick={() => this.setState({hover: false})}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                        </Grid>
                    </Grid>
                    <Grid item xs={2} onClick={() => {this.setState({hover: !this.state.hover})}}>
                        <MenuRounded style={{...this.menuIconStyle}} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
