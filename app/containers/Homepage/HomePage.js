import React from "react";
import { Collapse } from "react-collapse";

import EventsSlider from "components/EventsSlider";
import EventsLoader from "components/EventsLoader";
import "./style.scss";

import event1 from "./statics/event1.jpg";
import event2 from "./statics/event4.jpg";
import event3 from "./statics/event3.jpg";

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
];

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { isCollapsed: false, height: 100, fixedHeight: 800 };
  }

  toggle() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  componentDidMount() {
    this.props.onLoadMoreEventsClick();
  }
  render() {
    const { isCollapsed, height, fixedHeight } = this.state;
    const { loading, error, events } = this.props;
    //console.log(this.props)
    return (
      <div className="root__container">
        <div className="slider__container">
          <EventsSlider loop showNav showArrows selected={0}>
            {sliderPreload.map((slide, i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${slide.imgurl})`,
                  backgroundSize: "cover",
                  paddingTop: "10%",
                  height: "0%"
                }}
              />
            ))}
          </EventsSlider>
        </div>

        <section className="">
          <div>
            <div className="load_events">
              <input
                className="load_events__button"
                type="button"
                value="Load More Events"
                onClick={this.toggle.bind(this)}
              />
            </div>

            <Collapse isOpened={isCollapsed}>
              <div className="blob">
                <EventsLoader loadedEvents={this.props.events} />
              </div>
            </Collapse>
          </div>
        </section>
      </div>
    );
  }
}
