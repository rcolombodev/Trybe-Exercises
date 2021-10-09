import React from "react";

class Button extends React.Component {
  render() {
    const {onClick} = this.props
    return(
      <button className="button-nxt" onClick={onClick}></button>
    )
  }
}

export default Button;