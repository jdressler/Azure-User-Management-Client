import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './Header.css'
class Header extends React.Component {
    render(){
        return(
            <Row className='header-row'>
                <Col md='5'></Col>
                <Col md='2' className='py-2'>
                    <h3>AD User Management</h3>
                </Col>
                <Col md='5'></Col>
            </Row>
        )
    }
}

export default Header;