import React from "react"
import PropTypes from "prop-types"
import styles from "./logo.module.scss"

import { ReactComponent as Horizontal } from "../../Images/RM_logo.svg"
import { ReactComponent as Stacked } from "../../Images/RM_Logo_stack.svg"
import { ReactComponent as Footer } from "../../Images/RM-logo-footer.svg"
import twenty from "../../Images/logo-20yrs.png"

const Logo = props => {

    let logo = 'horizontal'
    let width = '300px'
    let type = null

    switch (props.type) {
        case 'stacked':
            type = 'stacked'
            break;
        case 'footer':
            type = 'footer'
            break;
        case 'twenty':
            type = 'twenty'
            break;
        default:
            type = 'horizontal'
            break;
    }

    if (type === 'horizontal') {
        return <Horizontal id={props.id ? props.id : ''} className={`${props.customClass ? props.customClass : null}`} width={props.width ? props.width : width} fill='#000000' style={{fill: '#000'}}/>
    } 
    if(type === 'stacked') {
        return <Stacked id={props.id ? props.id : ''} className={`${props.customClass ? props.customClass : null}`} width={props.width ? props.width : width}  />
    }
    if(type === 'footer') {
        return <Footer id={props.id ? props.id : ''} className={`${props.customClass ? props.customClass : null}`} width={props.width ? props.width : width}  />
    }
    if(type === 'twenty') {
        logo = twenty
        return <img className={styles.logo} src={logo} alt='really moving logo' />
    } 
}

Logo.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    customClass: PropTypes.string,
    id: PropTypes.string
}

export default Logo;