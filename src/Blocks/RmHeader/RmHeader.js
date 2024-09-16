import React, { useState, useEffect } from 'react'
import { Row, Col, Container, InputGroup, FormControl } from "react-bootstrap";
import { Nav, NavBar, NavCollapse, NavDropdown, NavLink, DropdownItem, Logo, Button } from '../../components';
import BottomBar from '../BottomBar/BottomBar';
import styles from './RmHeader.module.scss';
import ButtonBs from 'react-bootstrap/Button';

function genLinks(link, icon = 'down') {
    return (
        <NavDropdown title={link.name} icon={icon}>
            {link.sublinks.map((sublink, j) => {
                if(sublink.type === 'dropdown') return genLinks(sublink, 'right')
                return <DropdownItem key={j} href={sublink.href}>{sublink.name}</DropdownItem>
            })}
        </NavDropdown>
    )
}

const RmHeader = props => {

    let [topnav, setTopnav] = useState(false)
    let [nav, setNav] = useState(false)

    useEffect(() => {
        if(props.topnav) setTopnav(props.topnav)
        if(props.nav) setNav(props.nav)
    }, [])
    return ( 
        <header id={props.id ? props.id : null} className={styles.header}>
            <Container className='mx-0 mx-md-auto' style={{position: 'relative'}}>
                <Row className='align-items-center'>
                    <Col xs={12} sm={3} md={4}>
                        <a href='/'>
                            <Logo customClass={styles.logo} />
                        </a>
                    </Col>
                    <Col xs={12} sm={9} md={8}>
                        <NavCollapse bp='md'>
                            <Nav customClass='justify-content-end'>
                                {topnav ?
                                topnav.links.map((link, i) => {
                                    return <NavLink customClass={styles.topNavLink} key={i} href={link.href}>{link.name}</NavLink>
                                })
                                : null}
                                <NavLink customClass={styles.topBtn} href="https://www.reallymoving.com/retrieve-your-quotes">
                                    <Button label='Retrieve quotes' color='trans' />
                                </NavLink>
                            </Nav>
                        </NavCollapse>
                    </Col>
                </Row>
            </Container>
            <NavBar theme='purple'>
                <Container>
                    <NavCollapse id='mainNav' bp='md' bg='452765'>
                        <Nav customClass={styles.mainNav}>
                            {nav ?
                            nav.links.map((link, i) => {
                                if(link.type === 'link') {
                                    return <NavLink key={i} href={link.href}>{link.name}</NavLink>
                                }

                                if(link.type === 'dropdown') {
                                    return genLinks(link)
                                }
                            })
                            : null}
                            <form className={styles.searchForm} action='https://www.reallymoving.com/search'>
                                <InputGroup>
                                    <FormControl type='text' name='searchtext' required />
                                    <ButtonBs type='submit'>
                                        <i></i>
                                    </ButtonBs>
                                </InputGroup>
                            </form>
                        </Nav>
                    </NavCollapse>
                </Container>
            </NavBar>
            <BottomBar />
        </header>
     );
}
 
export default RmHeader;