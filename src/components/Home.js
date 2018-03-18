import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import serializeform from 'form-serialize'
import { connect } from 'react-redux'
import { authCustomer, logout } from '../actions/SignInUp'

class Home extends Component{

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeform(e.target, { hash: true })
        this.props.authCustomer(values)
    }

    componentWillReceiveProps(next){
        if(next.signinup.data !== []){
            sessionStorage.setItem('token', next.signinup.data)
            next.history.push("/Stores")
        }
    }
 
    render(){
        return(
            <section className="section-features">
                <section className="section-form">
                        <div className="row">
                            <h2>Login</h2>
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
                                        <input type="submit" value="Sign In" />
                                        <Link to="/CustomerCreate" className="btn btn-full">Sign-up</Link>
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
        authCustomer: (values) => dispatch(authCustomer(values))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)