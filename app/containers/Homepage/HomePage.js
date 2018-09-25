
import React from 'react';
import EventsSlider from 'components/EventsSlider';
import LoadEventsButton from 'components/LoadEventsButton';
import './style.scss';


import event1 from './statics/event1.jpg';
import event2 from './statics/event4.jpg';
import event3 from './statics/event3.jpg';

const sliderPreload = [
  {
    id: 1,
    imgurl: event1,
    date: 'May 1 2019',
    caption: 'Event 1'
  },
  {
    id: 2,
    imgurl: event2,
    date: 'May 22 2019',
    caption: 'Event 2'
  },
  {
    id: 3,
    imgurl: event3,
    date: 'May 29 2019',
    caption: 'Event 3'
  }

];


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, error } = this.props;
    //console.log(this.props)
    return (
      <div className="root__container">
        <div className="slider__container">
          <EventsSlider
            loop
            showNav
            showArrows
            selected={0}
          >
            {sliderPreload.map((slide, i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${slide.imgurl})`, backgroundSize: 'cover', paddingTop: '10%', height: '0%'
                }}
              >
              </div>
            ))}
          </EventsSlider>
        </div>

        <div className="events__container">
          <LoadEventsButton {...this.props} />

        </div>

      </div>

    );
  }
}
