import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import logo from 'assets/img/logo.png';
import { SIZES } from 'utils/constants';

import './Logo.scss';
export default function Logo(props) {
    const {
        size,
        showName,
        showTagline
    } = props;

    const logoClasses = classNames({
        Logo: true,
        [`Logo--size-${size.toLowerCase()}`]: !!size
    });

    return (
        <div className={logoClasses}>
            <img className="Logo__image" src={logo} alt="Logo"/>
            {(showName || showTagline) &&
                <div className="Logo__text">
                    {showName && (
                        <h1 className="Logo__name">
                            <span className="Logo__name__letter Logo__name__letter-1">Q</span>
                            <span className="Logo__name__letter Logo__name__letter-2">Z</span>
                            <span className="Logo__name__letter Logo__name__letter-3">Z</span>
                        </h1>
                    )}
                    {showTagline && <h2 className="Logo__tagline">Test Your Brain</h2>}
                </div>
            }
        </div>
    );
}

Logo.propTypes = {
    showName: PropTypes.bool,
    showTagline: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(SIZES))
};

Logo.defaultProps = {
    showName: true,
    showTagline: true,
    size: SIZES.SMALL
};
