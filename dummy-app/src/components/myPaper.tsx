import React, { ReactType } from "react"
import { Paper } from "@material-ui/core"


export const MyPaper = (props:any) => 
<Paper elevation={0} variant="outlined" style={{backgroundColor: "rgb(250,250,250)"}}>{props.children}</Paper>
