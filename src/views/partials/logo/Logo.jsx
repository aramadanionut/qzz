import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Logo.scss';

import logo from 'assets/img/logo.png';

export default function Logo(props) {
    const logoClasses = classNames({
        'Logo': true,
        [`Logo--size-${props.size}`]: !!props.size
    });

    return (
        <div className={logoClasses}>
            <img src={logo} alt="Logo"/>
        </div>
    );
}

Logo.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Logo.defaultProps = {
    size: 'small'
};
