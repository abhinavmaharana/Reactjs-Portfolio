import React from "react";
import * as typeformEmbed from "@typeform/embed";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(
        this.el,
        "https://codingninjassrm.typeform.com/to/BiuGtVjH",
        {
          hideFooter: false,
          hideHeaders: false,
          opacity: 100,
        }
      );
    }
  }
  render() {
    return (
      <div
        ref={(el) => (this.el = el)}
        style={{ width: "100%", height: "1000px" }}
      />
    );
  }
}

export default Form;
