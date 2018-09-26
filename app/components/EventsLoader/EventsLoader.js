import React from "react";
import "./style.scss";

const IMGPATH = './statics'

class EventsLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading:true};
  }


  render() {
    let { events } = this.props.loaded;


    return (
      <div className="events__container">
        <div className="events__content">
        {events.map((event, key) => (
            <div key={key} className="events__item">
              <img src={require( `${IMGPATH}`+`/`+`${event.imgurl}`)} alt="" />
              <div className="events__item-info">
                <div className="events__item-info-time">
                  <span className="info-time-month"> {event.month}</span>
                  <span className="info-time-date">{event.date}</span>
                </div>
                <div className="events__item-info-place">
                  <span className="info-place-title">
                    {event.name}
                  </span>
                  <span className="info-place-location">{event.address}</span>
                  <span className="info-place-city">{`${event.city} ${event.region},${event.country}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventsLoader;
