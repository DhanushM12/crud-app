import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class UpdateMentor extends Component {
    constructor(props) {
        super(props)
    
        this.onChangeMentorName = this.onChangeMentorName.bind(this);
        this.onChangeMentorEmail = this.onChangeMentorEmail.bind(this);
        this.onChangeMentorId = this.onChangeMentorId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // State
        this.state = {
          name: '',
          email: '',
          mid: ''
        }
      }
    
      componentDidMount() {
        axios.get('http://localhost:8000/mentors/edit-mentor/' + this.props.match.params.id)
          .then(res => {
            this.setState({
              name: res.data.name,
              email: res.data.email,
              mid: res.data.mid
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      onChangeMentorName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangeMentorEmail(e) {
        this.setState({ email: e.target.value })
      }
    
      onChangeMentorId(e) {
        this.setState({ mid: e.target.value })
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const studentObject = {
          name: this.state.name,
          email: this.state.email,
          mid: this.state.mid
        };
    
        axios.put('http://localhost:8000/mentors/update-mentor/' + this.props.match.params.id, studentObject)
          .then((res) => {
            console.log(res.data)
            console.log('Mentor successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Mentor List 
        this.props.history.push('/mentor-list')
      }
    
    render() {
        return (
            <div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeMentorName} />
              </Form.Group>
      
              <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={this.onChangeMentorEmail} />
              </Form.Group>
      
              <Form.Group controlId="Name">
                <Form.Label>Roll No</Form.Label>
                <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeMentorId} />
              </Form.Group>
      
              <Button variant="danger" size="lg" block="block" type="submit">
                Update Student
              </Button>
            </Form>
          </div>
        )
    }
}
