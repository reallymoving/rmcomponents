import React from "react"
import PropTypes from "prop-types"
import styles from "./rmicon.module.scss"
import sprite from "../../Images/icon-spritesheet.png"

const Rmicon = props => {
    let icon = props.icon
    
    let i = null
    let s = null

    //scale
    switch (props.size) {
        case 'sm':
            s = styles.rmIconSm
            break;
        case 'md':
            s = styles.rmIconMd
            break;
        case 'lg':
            s = styles.rmIconLg
            break;
        default:
            s = styles.rmIconMd
            break;
    }

    //icons
    switch (icon) {
        case 'advertising':
             i = styles.advertising
             break;
        case 'arrowDown':
             i = styles.arrowDown
             break;
        case 'arrowFwd':
             i = styles.arrowFwd
             break;
        case 'bed':
             i = styles.bed
             break;
        case 'beds1':
             i = styles.beds1
             break;
        case 'beds2':
             i = styles.beds2
             break;
        case 'beds3':
             i = styles.beds3
             break;
        case 'beds4':
             i = styles.beds4
             break;
        case 'beds5':
             i = styles.beds5
             break;
        case 'box':
             i = styles.box
             break;
        case 'buyingv1':
             i = styles.buyingv1
             break;
        case 'buyingv2':
             i = styles.buyingv2
             break;
        case 'calcv1':
             i = styles.calcv1
             break;
        case 'calcv2':
             i = styles.calcv2
             break;
        case 'caution':
             i = styles.caution
             break;
        case 'circleInfo':
             i = styles.circleInfo
             break;
        case 'circleTick':
             i = styles.circleTick
             break;
        case 'cirlceCross':
             i = styles.cirlceCross
             break;
        case 'contact':
             i = styles.contact
             break;
        case 'conveyancing':
             i = styles.conveyancing
             break;
        case 'costsAndFees':
             i = styles.costsAndFees
             break;
        case 'documentTicked':
             i = styles.documentTicked
             break;
        case 'download':
             i = styles.download
             break;
        case 'emailClosed':
             i = styles.emailClosed
             break;
        case 'emailClosedTick':
            i = styles.emailClosedTick
            break;
        case 'emailOpen':
             i = styles.emailOpen
             break;
        case 'emailOpenTick':
             i = styles.emailOpenTick
             break;
        case 'feedback':
             i = styles.feedback
             break;
        case 'form':
             i = styles.form
             break;
        case 'graph':
             i = styles.graph
             break;
        case 'homeReport':
             i = styles.homeReport
             break;
        case 'house':
             i = styles.house
             break;
        case 'howWorks':
             i = styles.howWorks
             break;
        case 'insurance':
             i = styles.insurance
             break;
        case 'intRemovalsv1':
             i = styles.intRemovalsv1
             break;
        case 'intRemovalsv2':
             i = styles.intRemovalsv2
             break;
        case 'intRemovalsv3':
             i = styles.intRemovalsv3
             break;
        case 'intRemovalsv4':
             i = styles.intRemovalsv4
             break;
        case 'london':
             i = styles.london
             break;
        case 'media':
             i = styles.media
             break;
        case 'mortgages':
             i = styles.mortgages
             break;
        case 'partners':
             i = styles.partners
             break;
        case 'press':
             i = styles.press
             break;
        case 'print':
             i = styles.print
             break;
        case 'processing':
             i = styles.processing
             break;
        case 'purchase':
             i = styles.purchase
             break;
        case 'quotes':
             i = styles.quotes
             break;
        case 'remortgagev1':
             i = styles.remortgagev1
             break;
        case 'remortgagev2':
             i = styles.remortgagev2
             break;
        case 'removals':
             i = styles.removals
             break;
        case 'report':
             i = styles.report
             break;
        case 'reviewsAndComments':
             i = styles.reviewsAndComments
             break;
        case 'sale':
             i = styles.sale
             break;
        case 'salesAndPurchase':
             i = styles.salesAndPurchase
             break;
        case 'save':
             i = styles.save
             break;
        case 'scotland':
             i = styles.scotland
             break;
        case 'search':
             i = styles.search
             break;
        case 'socialFacebook':
             i = styles.socialFacebook
             break;
        case 'socialGoogle':
             i = styles.socialGoogle
             break;
        case 'socialTwitter':
             i = styles.socialTwitter
             break;
        case 'solicitorsConveyancers':
             i = styles.solicitorsConveyancers
             break;
        case 'star':
             i = styles.star
             break;
        case 'statsv1':
             i = styles.statsv1
             break;
        case 'statsv2':
             i = styles.statsv2
             break;
        case 'storage':
             i = styles.storage
             break;
        case 'suggestions':
             i = styles.suggestions
             break;
        case 'surveying':
             i = styles.surveying
             break;
        case 'tag':
             i = styles.tag
             break;
        case 'team':
             i = styles.team
             break;
        case 'tick':
             i = styles.tick
             break;
        case 'tradesmen':
             i = styles.tradesmen
             break;
        case 'van':
             i = styles.van
             break;
        case 'web':
             i = styles.web
             break;
        case 'beds6plus':
             i = styles.beds6plus
             break;
        default:
            i = styles.conveyancing
            break;
    }

    return ( 
        <i className={`${styles.rmIcon} ${i} ${s}`} style={{backgroundImage: `url(${sprite})`}}></i>
     );
}

Rmicon.propTypes = {
    icon: PropTypes.string,
    size: PropTypes.string
}
 
export default Rmicon;