import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

export default function Footer(props) {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    const copyrightYears = `${startYear}${currentYear > startYear ? ' - ' + currentYear : ''}`;

    return (
        <div className="Footer">
            <div className="Footer__copyright">{`Copyright ${copyrightYears}`}</div>
            <div className="Footer__separator">/</div>
            <div className="Footer__built-by">
                Built by <a target="_blank" href="https://github.com/aramadanionut" className="Footer__author">danarama</a> 
            </div>
            <div className="Footer__separator">/</div>
            <a
                target="_blank"
                href="https://github.com/aramadanionut/qzz"
                className="Footer__repo">
                <FontAwesomeIcon icon={ faGithubSquare }/>
            </a>
        </div>
    )
}