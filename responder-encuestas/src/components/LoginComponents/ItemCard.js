import React from "react"

export default function ItemCard(props){
    const {children,size,type,...rest}=props;
    
    return(
        <div className="form-group" >
            <label>{children}</label>
            <input type={type} className="itemCard" height="100" placeholder={children}></input>
        </div>
    );
}