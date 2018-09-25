import React from "react";
import "./style.scss";

class EventsLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false, height: 100, fixedHeight: 200 };
  }

  componentDidMount() {
    this.props.onLoadMoreEventsClick();
  }

  render() {
    return (
      null

    )

  }
}

export default EventsLoader;
