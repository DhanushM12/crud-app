import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class MentorTable extends Component {
    constructor(props) {
        super(props);
        this.deleteMentor = this.deleteMentor.bind(this);
    }

    deleteMentor() {
        axios.delete('http://localhost:8000/mentors/delete-mentor/' + this.props.obj._id)
            .then((res) => {
                console.log('Mentor successfully deleted!')
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
                        Update
                    </Link>
                    <Button onClick={this.deleteMentor} size="sm" variant="danger">Delete</Button>
                </td>
            </tr> 
            </div>
        )
    }
}
