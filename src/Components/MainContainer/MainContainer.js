import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ActionMenu from '../ActionMenu/ActionMenu'
import UsersContainer from '../UsersContainer/UsersContainer'
import './MainContainer.css'
class MainContainer extends React.Component {
    render(){
        return(
            <Row className='main-container-row'>
                <Col md='1'></Col>
                <Col md='10'>
                    <ActionMenu/>
                    <UsersContainer/>
                </Col>
                <Col md='1'></Col>
            </Row>
        )
    }
}

export default MainContainer;