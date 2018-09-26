import React from "react";
import "./style.scss";

import event4 from "./statics/event4.jpg";

class NewsLetterSubsriber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    this.setState({ userEmail: event.target.value });
  };

  render() {
    return (
      <div>
        <div
          className="footer"
          style={{
            backgroundImage: `url(${event4})`,
            backgroundSize: "cover",
            height: "0%"
          }}
        >
          <div className="footer-content">
            <span className="footer-content-title">
              SUBSCRIBE TO OUR NEWSLETTER
            </span>
            <span className="footer-content-subtitle">
              Stay up to date with our upcoming events
            </span>
            <span className="footer-content-email-label" />
            <input
              type="text"
              className="email-input"
              onChange={this.onChange}
              value={this.state.userEmail}
              placeholder="your@mail.here"

            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetterSubsriber;
