import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MentorTable from './MentorTable';

export default class MentorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          mentors: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:8000/mentors/')
          .then(res => {
            this.setState({
              mentors: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      DataTable() {
        return this.state.mentors.map((res, i) => {
          return <MentorTable obj={res} key={i} />;
        });
      }
    render() {
        return (
        <div className="table-wrapper">
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mentor ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.DataTable()}
            </tbody>
            </Table>
        </div>
        )
    }
}
