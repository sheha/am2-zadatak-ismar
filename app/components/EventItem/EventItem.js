import React from "react";
import '../EventsLoader/style.scss';

class EventItem extends React.Component {
  render() {

    return (
      <div className="events__item">
        <img src="images/event2_main.jpg" alt="" />
        <div className="events__item-info">
          <div className="events__item-info-time">
            <span className="info-time-month"> MAY</span>
            <span className="info-time-date">20</span>
          </div>
          <div className="events__item-info-place">
            <span className="info-place-title">
              TONIGHT OUTBURST 500 WITH MAIN LOREM IPSUM
            </span>
            <span className="info-place-location">Harbour Event Centre</span>
            <span className="info-place-city">VANCOUVER BC, CANADA</span>
          </div>
        </div>
      </div>
    );
  }
}

export default EventItem;
