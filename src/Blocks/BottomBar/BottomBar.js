import React from "react";
import styles from "./BottomBar.module.scss"
import { Row, Col } from 'react-bootstrap'
import { Button, List, ListItem, NavToggle } from "../../components";
import '../../global/styles/global.scss'

const BottomBar = () => {
    const showQuoteNav = e => {
        e.target.classList.toggle(styles.active)
        document.getElementById('mobileQuoteNav').classList.toggle('showNav')
    }
    return (
        <>
            <div className={styles.bottomBar}>
                    <Row>
                        <Col xs={6}>
                            <Button onClick={showQuoteNav} customClass={styles.getQuotesBtn}></Button>
                            <span className={styles.text}>Get Quotes</span>
                        </Col>
                        <Col xs={6}>
                            <NavToggle customClass='mx-auto' navid='mainNav' />
                            <span className={styles.text}>Menu</span>
                        </Col>
                    </Row>
            </div>
        
            <div id='mobileQuoteNav' className={styles.mobQuoteNav}>
                <List>
                    <ListItem><strong>Get quotes for:</strong></ListItem>
                    <ListItem><a href="/quote-forms/conveyancing">Conveyancing</a></ListItem>
                    <ListItem><a href="/quote-forms/surveyors">Surveyors</a></ListItem>
                    <ListItem><a href="/surveyors/valuations">Valuations</a></ListItem>
                    <ListItem><a href="/quote-forms/removals">House removals</a></ListItem>
                    <ListItem><a href="/mortgages">Mortgages</a></ListItem>
                    <ListItem><a href="/international-removals/get-quotes">International removals</a></ListItem>
                    <ListItem><a href="/energy-performance-certificates/get-quotes">EPCs</a></ListItem>
                    <ListItem><a href="/home-reports/get-quotes">Scottish Home Reports</a></ListItem>
                </List>
            </div>
        </>
     );
}
 
export default BottomBar;