import React from "react";
import { Link } from 'react-router-dom';

import Button from "components/common/buttons/button/Button";
import { useStore } from "hooks/useStore";
import useWindowSize from "hooks/useWindowSize";

import './Home.scss';
import classNames from "classnames";
export default function Home(props) {
    const windowSize = useWindowSize();

    const [ user ] = useStore('user');

    const homeClasses = classNames({
        Home: true,
        'Home--mobile': !!windowSize.isMobile
    });

    return (
        <div className={ homeClasses }>
            <h3 className="Home__heading">Welcome!</h3>
            <p className="Home__text">Ready to put your knowledge to the test?</p>

            <div className="Home__button">
                <Link to={ user ? "/builder" : "/login" }>
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
