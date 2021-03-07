import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './ActionMenu.css'

class ActionMenu extends React.Component {
    render(){
        return(
            <Row className='action-menu-row'>
                <Col md='4'></Col>
                <Col md='4'>

                </Col>
                <Col md='4'></Col>
            </Row>
        )
    }
}

export default ActionMenu;