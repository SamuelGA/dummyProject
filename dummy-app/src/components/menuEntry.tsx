import React, { Component } from 'react'
import { Card, Paper } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'

type Props = {
    text:string,
    target:string
    onClick?:any
}

type State = {
    hover:boolean
}

export class MenuEntry extends Component<Props, State> {

    state:State = {
        hover: false
    }

    render() {
        let hovered = this.state.hover

        let cardStyle = {
            backgroundColor: hovered? "rgb(50, 50, 50)": "rgb(250,250,250)",
            borderRadius: "4px",
            height: "75px"
        }
        let arrowStyle = {
            color: hovered? "rgb(255, 255, 255)":"rgb(51, 102, 255)", 
            fontSize:"20",
            right: "0px",
            marginTop: "28px"
        }
        let textStyle = {
            float:"left", 
            marginLeft: "30px", 
            marginTop: "26px",
            color: hovered? "rgb(255, 255, 255)":"rgb(51, 102, 255)"
        } as React.CSSProperties

        return(
            <Link to={this.props.target} onClick={this.props.onClick}>
                <Paper style={{...cardStyle}} onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})} elevation={0}>
                    <h4 style={{...textStyle}}>{this.props.text}</h4>
                    <div style={{top: "40px", right: "0px"}}>
                        <ArrowForwardIosIcon style={{...arrowStyle}}/>
                        <ArrowForwardIosIcon style={{...arrowStyle}}/>
                        <ArrowForwardIosIcon style={{...arrowStyle}}/>
                    </div>
                </Paper>
            </Link>
        )
    }
}