import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class MentorTable extends Component {
    constructor(props) {
        super(props);
        this.deleteMentor = this.deleteMentor.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8000/students/delete-mentor/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
               <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.mid}</td>
                <td>
                    <Link className="edit-link" to={"/edit-mentor/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr> 
            </div>
        )
    }
}