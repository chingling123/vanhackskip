import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeform from 'form-serialize'
import { connect } from 'react-redux'
import { createCustomer } from '../actions/SignInUp'

class CustomerCreate extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeform(e.target, { hash: true })
        this.props.createCustomer(values)
    }

    render(){
        const signinup = this.props.signinup

        console.log(signinup)
        return (
            <section className="section-features">
                <section className="section-form">
                        <div className="row">
                            <h2>Sign Up</h2>
                        </div>
                        <div className="row">
                            <form onSubmit={this.handleSubmit} className="contact-form">
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label htmlFor="title">E-mail</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="email" id="email" placeholder="E-mail" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label htmlFor="title">Name</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="name" id="name" placeholder="Name" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label htmlFor="title">Address</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="address" id="address" placeholder="Address" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label htmlFor="title">Password</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="password" name="password" id="password" placeholder="Password" required />
                                    </div>
                                </div>                        
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>&nbsp;</label>
                                    </div>
                                    <div className="col span-1-of-3">
                                        <input type="submit" value="Sign Up" />
                                    </div>
                                    <div className="col span-1-of-3">
                                        <Link to="/" className="btn btn-full">Cancel</Link>
                                    </div>                            
                                </div>
                                
                            </form>
                        </div>
                    </section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signinup: state.signinup
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createCustomer: (values) => dispatch(createCustomer(values))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerCreate)