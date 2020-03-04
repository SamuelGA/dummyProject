import React from 'react'

type imageButtonProps = {
    image: NodeRequire,
    width?: number,
    height?: number,
    text?: string,
    margin?: string
}

export const ImageButton = ({image, width, height, text, margin}: imageButtonProps) =>
<div style={{ display: "inline-block", borderRadius: "10px", backgroundImage: 'url(' + image + ')', backgroundSize: "240px 220px", width: "200px", height: "200px"}}>
    <h1 style={{margin: "10px", paddingTop: "60px", color: "rgb(255,255,255)"}}>{text}</h1>
</div>