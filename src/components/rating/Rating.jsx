import React from "react";
import PropTypes from 'prop-types';

import './Rating.scss';
import classNames from "classnames";

export default function Rating(props) {
    const { size, value, total } = props;

    const getRatingBlockClasses = (index) => {
        return classNames({
            Rating__block: true,
            'Rating__block--active': value > index
        });
    };

    const ratingBlockStyle = {
        width: `${size}px`,
        height: `${size * 2}px`
    };

    const consecutiveArray = Array.from(Array(total).keys());

    console.log(consecutiveArray);

    return (
        <div className="Rating">
            {consecutiveArray.map((index) => (
                <div
                    key={ `rating-block-${index}`}
                    className={ getRatingBlockClasses(index) }
                    style={ ratingBlockStyle }>
                </div>
            ))}
        </div>
    )
};

Rating.propTypes = {
    size: PropTypes.number,
    value: PropTypes.number,
    total: PropTypes.number
};

Rating.defaultProps = {
    size: 10,
    value: 1,
    total: 3,
};
