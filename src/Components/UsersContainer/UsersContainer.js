import React from 'react'
import {Row, Col, Table} from 'react-bootstrap'
import './UsersContainer.css'
import Config from '../../config.json'
import axios from 'axios';

class UsersContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {data: []}
    }
  
    render(){
        return(
            <Row className='users-table-container'>
                <Col md='12' className='col-fix'>
                <Table striped bordered hover className='users-table'>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((user,i) =>(
                            <tr key={i}>                                
                                <td>{user.givenName}</td>
                                <td>{user.surname}</td>
                                <td>{user.mail}</td>                                                        
                            </tr>
                        ))
                     }
                    </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }

    componentDidMount(){
        axios
        .get(Config.RestApiUrl + "Users/All")
        .then(res => {
          this.setState({
            data : res.data.value
        })
        });
       
    }
}

export default UsersContainer;