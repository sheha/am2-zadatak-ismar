import React from "react";
import EventItem from "../EventItem";
import "./style.scss";

class EventsLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // componentDidMount() {
  //   this.props.loaded();
  // }


  render() {

    //console.log(events)
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="events__container">
        <div className="events__content">
          <EventItem />
        </div>
      </div>
    );
  }
}

export default EventsLoader;
