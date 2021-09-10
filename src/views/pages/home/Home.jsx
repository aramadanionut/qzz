import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextField from "components/common/forms/text-field/TextField";
import Button from "components/common/buttons/button/Button";

import './Home.scss';

export default function Home(props) {
    return (
        <div className="Home">
            <h3 className="Home__heading">Welcome!</h3>
            <p className="Home__text">Ready to train your brain?</p>

            <div className="Home__button">
                <Button>
                    Start playing
                </Button>
            </div>
        </div>
    );
}

Home.propTypes = {
};

Home.defaultProps = {
};
