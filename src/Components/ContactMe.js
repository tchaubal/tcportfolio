import React, { Component } from 'react';
import Footer from './Footer';
import * as emailjs from 'emailjs-com';

export default class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            message : "",
            subject : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "tanushree_portfolio",
                "contact_form",
                "user_4MLYUjYrIEotG7Y11v6E7"
            )
            .then()
            .catch();
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
			<article id="contact" className="wrapper style4">
            <div className="container medium">
                <header>
                    <h2>Let's Connect!</h2>
                    <p>Send me an email by entering your details below, and I'll get back to you.</p>
                </header>
                <div className="row">
                    <div className="col-12">
                        <form id="contact_form">
                            <div className="row">
                                <div className="col-6 col-12-small">
                                    <input type="text" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Name" 
                                        value={this.state.name} 
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                                <div className="col-6 col-12-small">
                                    <input type="text" name="email" id="email" placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                                <div className="col-12">
                                    <input type="text" name="subject" id="subject" placeholder="Subject" 
                                    value={this.state.subject} 
                                    onChange={this.handleChange.bind(this)}
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea name="message" id="message" placeholder="Message" value={this.state.message} 
                                        onChange={this.handleChange.bind(this)}></textarea>
                                </div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="button" value="Send Message" onClick={this.handleSubmit.bind(this)}/></li>
                                        <li><input type="reset" value="Clear Form" className="alt" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <hr />
                        <h3>Find me on ...</h3>
                        <ul className="social">
                            <li><a href="https://twitter.com/tanushree24921" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://www.facebook.com/tanushree.chaubal" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="https://www.linkedin.com/in/tanushree-chaubal-67770977" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://www.instagram.com/tan.c_92/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="https://github.com/tchaubal" className="icon brands fa-github"><span className="label">Github</span></a></li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <Footer />
            </div>
        </article>
        )
    }
}