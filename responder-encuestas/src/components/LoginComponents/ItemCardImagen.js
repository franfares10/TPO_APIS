import React from "react"

export default function ItemCard(props){
    const {children,size,...rest}=props;
    
    return(
        <div className="form-group" align="center" >
            <img src="assets/img/logo.png" width="160" height="140" align="center" ></img>
        </div>
    );
    }