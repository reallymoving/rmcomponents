import React from "react";
import styles from './RmFooter.module.scss'
import { Row, Col, Container } from 'react-bootstrap'
import { Logo, List, ListItem } from '../../components'
import Facebook from '../../Images/facebook.svg'
import twitter from '../../Images/twitter.svg'
import instagram from '../../Images/instagram.svg'
import linkedin from '../../Images/linkedin.svg'

const RmFooter = () => {
    return ( 
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col className="ps-5 ps-md-0" md={3}>
                        <h3>Contact us</h3>
                        <List customClass={styles.contact}>
                            <ListItem>
                                <p>
                                    <span style={{fontWeight: '400'}}>Reallymoving.com Ltd</span>
                                    <br />
                                    Eclipse Court
                                    <br />
                                    14B Chequer Street
                                    <br />
                                    St Albans
                                    <br />
                                    AL1 3YD
                                </p>
                            </ListItem>
                            <ListItem>Tel: 01727 238010</ListItem>
                            <ListItem>
                                <a href='mailto:info@reallymoving.com'>Email: info@reallymoving.com</a>
                            </ListItem>
                        </List>
                    </Col>
                    <Col className="ps-5 ps-md-0" md={3}>
                        <h3>Services</h3>
                        <List type='pinkchevron'>
                            <ListItem><a href='#'>Conveyancing</a></ListItem>
                            <ListItem><a href='#'>Surveyors</a></ListItem>
                            <ListItem><a href='#'>Help & advice</a></ListItem>
                            <ListItem><a href='#'>Removals</a></ListItem>
                            <ListItem><a href='#'>Mortgages</a></ListItem>
                            <ListItem><a href='#'>International removals</a></ListItem>
                        </List>
                    </Col>
                    <Col className="ps-5 ps-md-0" md={3}>
                        <h3>Useful information</h3>
                        <List type='pinkchevron'>
                            <ListItem><a href="/about-us">About us</a></ListItem>
                            <ListItem><a href="/media">Media</a></ListItem>
                            <ListItem><a href="/reallymoving-reviews">reallymoving reviews</a></ListItem>
                            <ListItem><a href="/blog">Blog</a></ListItem>
                            <ListItem><a href="/become-a-partner">Join us</a></ListItem>
                            <ListItem><a href="/careers">Careers</a></ListItem>
                            <ListItem><a href="/terms-and-conditions">Terms & conditions</a></ListItem>
                            <ListItem><a href="/site-map">Site map</a></ListItem>
                            <ListItem><a href="/privacy-policy">Privacy policy</a></ListItem>
                        </List>
                    </Col>
                    <Col md={3}>
                        <Logo type='footer' customClass={styles.logo} />
                        <Row className="justify-content-center">
                            <Col xs={2} md={6} lg={3} className='text-center mb-3'>
                                <a target='_blank' href='http://www.facebook.com/reallymoving'>
                                    <img width='45' src={Facebook} />
                                </a>
                            </Col>
                            <Col xs={2} md={6} lg={3} className='text-center mb-3'>
                                <a target='_blank' href='http://twitter.com/#!/reallymoving'>
                                    <img width='45' src={twitter} />
                                </a>
                            </Col>
                            <Col xs={2} md={6} lg={3} className='text-center mb-3'>
                                <a target='_blank' href='https://www.instagram.com/wearereallymoving/'>
                                    <img width='45' src={instagram} />
                                </a>
                            </Col>
                            <Col xs={2} md={6} lg={3} className='text-center mb-3'>
                                <a target='_blank' href='https://www.linkedin.com/company/reallymoving-com'>
                                    <img width='45' src={linkedin} />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: '70px'}}>
                    <Col sm={12} className='text-center'>
                        <strong>© Reallymoving.com ltd {new Date().getFullYear()}</strong>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default RmFooter;