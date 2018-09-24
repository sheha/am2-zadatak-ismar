
import React from 'react';
import './style.scss';

import { EventsSlider} from '../../components/EventsSlider/'


export default class Homepage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
      this.props.onHomePageLoad();
  }

  render() {
    const sliderPreload = false;
    const { loading, error, sliderEvents } = this.props;


    if (sliderEvents && sliderEvents.length > 1) {
      sliderPreload = sliderEvents.map((slide, i) => {
        return (
          <div key={i} style={{ backgroundImage: `url(${slide.imgurl})` }}>{slide.caption}</div>
        );
      })
    } else {
      sliderPreload = <div><a>ERROR LOADING FROM MOCK API :</a>
        <div>{error}</div>
      </div>

    }


    return (
      <div className="root__container">

        <section class="slider__container">

            <EventsSlider
              loop={true}
              showNav={false}
              selected={1}>
              {sliderPreload}
            </EventsSlider>
        </section>
      </div>

    );
  }
}
