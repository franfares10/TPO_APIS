/*eslint-disable*/

// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes



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
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["blue"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func
};
