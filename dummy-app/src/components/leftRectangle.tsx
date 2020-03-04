import React, { Component } from 'react'
import './animations.css'
import { Grid, Card, Paper, Hidden } from '@material-ui/core';
import MenuRounded from '@material-ui/icons/Menu'

interface Props {
    /** The height of the rectangle*/
    width: string;
    /** The width of the rectangle */
    height: string
}

interface State {
    hover:boolean
}

export class LeftRectangle extends Component<Props, State> {
    state: State = {
        hover: false
    }
    style = {
        backgroundColor: "rgb(255, 220, 125)",
        top: "0px",
        left: - (window.innerWidth - 300) ,
        animationDuration: "1s",
        position: "relative",
        transform: "rotate(7deg)",
        animationIterationCount: "1",
        animationFillMode: "forwards",
        animationTimingFunction: "ease"
    } as React.CSSProperties
    menuIconStyle = {
        fontSize: "100px",
        color: "rgb(250,250,250)",
        marginTop: "50px",
    } as React.CSSProperties


    render() {
        let rectAnimationName = {
            animationName: this.state.hover? "leftRectangleAnimation" : "leftRectangleAnimationBack"
        }
        console.log(this.state.hover)
        return(
            <div style={{...rectAnimationName, height: window.innerHeight, width: window.innerWidth, ...this.style}} onClick={() => {this.setState({hover: !this.state.hover})}}>
                <Grid container>
                    <Grid item xs={10}>
                        <Grid container spacing={2} style={{margin: "40px", color: "rgb(100,100,100)"}}>
                            <Grid item xs={4}>
                                <h1>Hot Topics</h1>
                            </Grid>
                            <Grid item xs={8}>
                                <h1>Computer Science</h1>               
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <MenuRounded style={{...this.menuIconStyle}}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
