import React from "react";
import "./style.scss";

export default class EventsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false, height: 100, fixedHeight: 200 };
  }

  componentDidMount() {
    this.props.onLoadMoreEventsClick();
  }
}
