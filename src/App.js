import React, { Component } from "react";
import PropTypes from "prop-types";

const MyLink = ({ text, handleClick }) => (
  <a href="/test" onClick={handleClick}>
    {text}
  </a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

MyLink.defaultProps = {
  text: "link",
  handleClick: () => {},
};

class App extends Component {
  // принимает аргумет, который не передавали
  handleClick = (e, word) => {
    e.preventDefault();
    console.log("Clicked on link!", word);
  };

  render() {
    // не передает объект события в качестве аргумента
    return <MyLink handleClick={(e) => this.handleClick(e, "test")} />;
  }
}

export default App;
