import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // REDUX
import { signIn } from '../../actions/AccountActions';
import { getFormData } from '../../helpers/form';

const SignIn = (props)=> {                  // REDUX
    const { account, signIn } = props;       // REDUX

    if (account) {
        return <Redirect to='/manage/links' />
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        signIn(data);
    };

    return (
        <div className="container h-100 pt-5">
            <h1>Sign In</h1>
            <div className="d-flex flex-column h-100" >
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" className="form-control"/>
                    </div>
                    <div>
                        <button className="btn btn-primary" >Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-botton pb-5">
                    <div className="text-muted" >Don't have an Account?</div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps= (state) => {
    return { account: state.account.account };
};

export default connect(mapStateToProps, { signIn })(SignIn);