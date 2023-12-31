import React, { Component } from "react";

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">All rights Reserved 2024 @suraj480</span>
        </footer>
      </div>
    );
  }
}
