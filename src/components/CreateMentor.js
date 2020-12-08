import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateMentor extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeMentorName = this.onChangeMentorName.bind(this);
        this.onChangeMentorEmail = this.onChangeMentorEmail.bind(this);
        this.onChangeMentorId = this.onChangeMentorId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          mid: ''
        }
      }
      onChangeMentorName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeMentorEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeMentorId(e) {
        this.setState({mid: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`Student successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Roll no: ${this.state.mid}`);
    
        this.setState({name: '', email: '', mid: ''})
      }
    
    render() {
        return (
        <div class="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeMentorName}/>
                </Form.Group>

                <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.onChangeMentorEmail}/>
                </Form.Group>

                <Form.Group controlId="Name">
                <Form.Label>Mentor ID</Form.Label>
                <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeMentorId}/>
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                Create Mentor
                </Button>
            </Form>
        </div>
        )
    }
}
