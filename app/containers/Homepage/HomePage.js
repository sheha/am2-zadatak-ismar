
import React from 'react';
import './style.scss';

import EventsSlider from 'components/EventsSlider';

import event1 from './statics/event1.jpg';
import event2 from './statics/event2.jpg';
import event3 from './statics/event3.jpg';

const sliderPreload = [
  {
    id: 1,
    imgurl: event1,
    date: "May 1 2019",
    caption: "Event 1"
  },
  {
    id: 2,
    imgurl: event2,
    date: "May 22 2019",
    caption: "Event 2"
  },
  {
    id: 3,
    imgurl: event3,
    date: "May 29 2019",
    caption: "Event 3"
  }

]


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {

    const { loading, error } = this.props;
    return (
      <div className="root__container">
        <div className="slider__container">
          <EventsSlider
            loop={true}
            showNav={true}
            selected={0}>
            {sliderPreload.map((slide, i) => {
              return (
                <div key={i} style={{ backgroundImage: `url(${slide.imgurl})`, backgroundSize:"contain", paddingTop:"10%", height:"0%" }}>{slide.caption}</div>
              );
            })}
          </EventsSlider>
        </div>
      </div>

    );
  }
}
