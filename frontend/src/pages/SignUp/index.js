import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // REDUX
import { signUp } from '../../actions/AccountActions';

const SignUp = (props) => {

    const {account, signUp } = props;

    if (account) {
        return <Redirect to='/manage/links' />
    }

    const submitHandler = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        signUp(data);

    };

    return (
        <div className="container h-100 pt-5">
            <h1>Sign Up</h1>
            <div className="d-flex flex-column h-100" >
                <form onSubmit={submitHandler}>
                    <div className="form-grorup">
                        <label htmlFor="">Email</label>
                        <input name="email" type="text" className="form-control"/>
                    </div>
                    <div className="form-grorup">
                        <label htmlFor="">Password</label>
                        <input name="password" type="password" className="form-control"/>
                    </div>
                    <div className="form-grorup">
                        <label htmlFor="">Confirmarion Password</label>
                        <input name="password_confirmation" type="password" className="form-control"/>
                    </div>
                    <div>
                        <button className="btn btn-primary" >Submit</button>
                    </div>
                    </form>
                    <div className="container text-center fixed-botton pb-5">
                        <div className="text-muted">Already have an Account? </div>
                        <Link to="/sign-in">Sign In</Link>
                    </div>
            </div>
        </div>
    )
};

const mapStateToProps= (state) => {
    return { account: state.account.account };
};

export default connect(mapStateToProps, { signUp })(SignUp);