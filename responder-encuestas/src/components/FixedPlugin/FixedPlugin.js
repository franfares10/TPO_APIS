/*eslint-disable*/
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classnames from "classnames";


export default function FixedPlugin(props) {

  const handleClick = () => {
    props.handleFixedClick();
  };
  return (

   true
  );
                          
}

FixedPlugin.propTypes = {
  bgImage: PropTypes.string,
  handleFixedClick: PropTypes.func,
  rtlActive: PropTypes.bool,
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["blue"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func
};
