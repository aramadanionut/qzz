import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import logo from 'assets/img/logo.png';
import { SIZES } from 'utils/constants';

import './Logo.scss';
export default function Logo(props) {
    const logoClasses = classNames({
        'Logo': true,
        [`Logo--size-${props.size.toLowerCase()}`]: !!props.size
    });

    return (
        <div className={logoClasses}>
            <img src={logo} alt="Logo"/>
        </div>
    );
}

Logo.propTypes = {
    size: PropTypes.oneOf(Object.values(SIZES))
};

Logo.defaultProps = {
    size: SIZES.SMALL
};
