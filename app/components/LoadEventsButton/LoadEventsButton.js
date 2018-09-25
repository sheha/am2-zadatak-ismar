import React from "react";
import { Collapse } from "react-collapse";


import "./style.scss";

class LoadEventsButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpened: false, height: 100, fixedHeight: 200 };
  }

  toggle() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    const { isOpened, height, fixedHeight } = this.state;

    return (
      <div>
        <div className="load_events">
          <input
            className="load_events__button"
            type="button"
            value="Load More Events"
            onClick={this.toggle.bind(this)}
          />
        </div>

        <Collapse isOpened={isOpened} fixedHeight={fixedHeight}>
          <div style={{ height }} className="blob">

          </div>
        </Collapse>
      </div>
    );
  }
}
export default LoadEventsButton;
