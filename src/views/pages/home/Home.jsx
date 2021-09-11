import React from "react";
import { Link } from 'react-router-dom';

import Button from "components/common/buttons/button/Button";

import './Home.scss';
import { useStore } from "hooks/useStore";

export default function Home(props) {
    const [ user ] = useStore('user');

    return (
        <div className="Home">
            <h3 className="Home__heading">Welcome!</h3>
            <p className="Home__text">Ready to put your knowledge to the test?</p>

            <div className="Home__button">
                <Link to={ user ? "/quiz-builder" : "/login" }>
                    <Button>
                        Start
                    </Button>
                </Link>
            </div>
        </div>
    );
}

Home.propTypes = {
};

Home.defaultProps = {
};
