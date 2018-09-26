import React from "react";
import "./style.scss";

const IMGPATH = '../../containers/HomePage/statics';

class EventsLoader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {loading:true};
  }

  // componentDidMount() {
  //   this.props.loaded();
  // }

  render() {
    const loadedEvents = this.props.loaded;

    //let location = `${city} ${region},${country}`;

    //console.log(events)
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="events__container">
        <div className="events__content">
          {loadedEvents.map((event, key) => (
            <div key={key} className="events__item">
              <img src={require( `${IMGPATH}`+`${event.imgurl}`)} alt="" />
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
                  <span className="info-place-city">{`${city} ${region},${country}`}</span>
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
