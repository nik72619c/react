import React from "react";
export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.isShow = true;
    this.state = {
      isShow: this.isShow
    };
  }
  toggle() {
    this.isShow = !this.isShow;
    this.setState({ isShow: this.isShow });
  }
  render() {
    return (
      <div>
        {this.props.render({
          isShow: this.state.isShow,
          handler: this.toggle.bind(this)
        })}
      </div>
    );
  }
}
