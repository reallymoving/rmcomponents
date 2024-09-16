import React from "react";
import styles from './LineIllustrationBanner.module.scss';
import PropTypes from "prop-types"

import artboard1 from '../../Images/line-illustrations/Artboard-1.png';
import artboard2 from '../../Images/line-illustrations/Artboard-2.png';
import artboard3 from '../../Images/line-illustrations/Artboard-3.png';
import artboard4 from '../../Images/line-illustrations/Artboard-4.png';
import artboard5 from '../../Images/line-illustrations/Artboard-5.png';
import artboard6 from '../../Images/line-illustrations/Artboard-6.png';
import artboard7 from '../../Images/line-illustrations/Artboard-7.png';
import artboard8 from '../../Images/line-illustrations/Artboard-8.png';
import artboard9 from '../../Images/line-illustrations/Artboard-9.png';
import artboard10 from '../../Images/line-illustrations/Artboard-11.png';
import artboard11 from '../../Images/line-illustrations/Artboard-12.png';
import artboard12 from '../../Images/line-illustrations/Artboard-13.png';
import artboard13 from '../../Images/line-illustrations/Artboard-homepage.png';
import artboard14 from '../../Images/line-illustrations/Artboard-homepage2.png';

const LineIllustrationBanner = props => {

    let banner = null;

    switch (props.artboard) {
        case 1:
            banner = artboard1
            break;
        case 2:
            banner = artboard2
            break;
        case 3:
            banner = artboard3
            break;
        case 4:
            banner = artboard4
            break;
        case 5:
            banner = artboard5
            break;
        case 6:
            banner = artboard6
            break;
        case 7:
            banner = artboard7
            break;
        case 8:
            banner = artboard8
            break;
        case 9:
            banner = artboard9
            break;
        case 10:
            banner = artboard10
            break;
        case 11:
            banner = artboard11
            break;
        case 12:
            banner = artboard12
            break;
        case 13:
            banner = artboard13
            break;
        case 14:
            banner = artboard14
            break;
        default:
            banner = artboard1
            break;
    }

    return ( 
        <div 
        className={`${styles.banner} ${props.customClass ? props.customClass : null}`} 
        style={{backgroundImage: `url(${banner})`}}
        id={props.id ? props.id : null}
        aria-label={props.ariaLabel ? props.ariaLabel : 'line art drawing banner'}
        ></div>
     );
}

LineIllustrationBanner.propTypes = {
    artboard: PropTypes.number,
    id: PropTypes.string,
    customClass: PropTypes.string,
    ariaLabel: PropTypes.string
}
 
export default LineIllustrationBanner;