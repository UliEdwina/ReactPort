import React, { Component } from 'react';
import axios from 'axios';


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePronouns = this.onChangePronouns.bind(this)
        this.onChangeMessage = this.onChangeMessage.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pronouns: '',
            message:''
        }
    }
onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

onChangePronouns(e) {
        this.setState({
            pronouns: e.target.value
        });
    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }
onSubmit(e) {
        e.preventDefault();
        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            pronouns: this.state.pronouns,
            message: this.state.message


        }
axios.post(`http://localhost:8000/add`, contact
        )
            .then(res => console.log(res.data))
            .catch(err => { console.log("error occured", err) })

                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    pronouns: '',
                    message:''
                });
                
    }

    render() {
        return (
            <div className='form-group'>
                <h3>I would love to hear from You!</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Pronouns: </label>
                        <input type="text" className="form-control" value={this.state.pronouns} onChange={this.onChangePronouns} />
                    </div>
                    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
                    <div className="form-group"> 
                        <input type="submit" className="btn btn-primary" value={this.state.submit} onChange={this.OnSubmit}  />
                    </div>
                </form>
            </div>
        )
    }
}