import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const MORE_EVENTS = '/upcoming';

export default class NewLinkButton extends React.Component {
    render() {
        return (
            <div className="load_button">
                <Link to={MORE_EVENTS}>
                    <Button
                        outline color="info"
                        onClick={val => {
                            val.stopPropagation();
                            this.props.onClick()
                        }}>
            LOAD MORE EVENTS
          </Button>
                </Link>
            </div>
        );
    }
}
