import React from "react"
import PropTypes from "prop-types"
import styles from "./cardImg.module.scss";

const CardImg = props => {
    return ( 
        <div id={props.id} className={`${styles.CardImg} ${props.customClass ? props.customClass : ''}`}>
            <img className={styles.imgResponsive} src={props.src} />
        </div>
     );
}

CardImg.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    customClass: PropTypes.string
}
 
export default CardImg;