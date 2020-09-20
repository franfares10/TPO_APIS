import React from "react"
import { Component } from "react";

export default function ItemCard(props){
    const {children,size,...rest}=props;
    
    return(
        <div className="form-group" align="center" >
            <img src="logo.png" width="160" height="140" align="center"  ></img>
        </div>
    );
}