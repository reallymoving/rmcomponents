import React from "react"
import Card from '../../components/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faAtom, faCube } from '@fortawesome/free-solid-svg-icons'
import CardTitle from "../../components/CardTitle/CardTitle"
import CardBody from "../../components/CardBody/CardBody"
import CardFooter from "../../components/CardFooter/CardFooter"


const Welcome = () => {
    return ( 
        <Row>
            <Col md={4}>
                <Card>
                    <CardTitle><FontAwesomeIcon icon={faRocket} /> Getting started</CardTitle>
                    <CardBody>
                        <p>Instructions on installing component library</p>
                    </CardBody>
                    <CardFooter>
                        <a href='https://github.com/simonjduckett/rmcomponents/pkgs/npm/rmcomponents'>Read more</a>
                    </CardFooter>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <CardTitle><FontAwesomeIcon icon={faAtom} /> Foundations</CardTitle>
                    <CardBody>
                        <p>Fundamental principles of design system</p>
                    </CardBody>
                    <CardFooter>
                        <a href='/?path=/docs/foundations-colors--page'>Read more</a>
                    </CardFooter>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <CardTitle><FontAwesomeIcon icon={faCube} /> Components</CardTitle>
                    <CardBody>
                        <p>View documentation on each component.</p>
                    </CardBody>
                    <CardFooter>
                        <a href='/?path=/docs/components-button--overview'>Read more</a>
                    </CardFooter>
                </Card>
            </Col>
            
        </Row>
     );
}
 
export default Welcome;