import React from "react";
export class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle() {}
  render() {
    return (
      <div>
        show me<br />
        <button onClick={this.toggle.bind(this)}>toggle</button>
      </div>
    );
  }
}
