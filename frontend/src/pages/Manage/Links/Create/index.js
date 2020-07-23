import React from 'react';
import { connect } from 'react-redux'; // REDUX
import { createLink } from '../../../../actions/LinkActions';
import Layout from '../../../Layouts/Manage';
import { getFormData } from '../../../../helpers/form';
import { Redirect } from 'react-router-dom';

const Create = (props) => {
    const { link, createLink } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);
        createLink(data);
    };

    if(link) return <Redirect to="/manage/links" />

    return (
        <Layout>
            <h1>Create Link</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="">Label</label>
                        <input name="label" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Url</label>
                        <input name="url" type="text" className="form-control"/>
                    </div>
                    <div className="from-group form-check" >
                        <label className="form-check-label">
                            <input type="checkbox" name="isSocial"/>
                            <span className="form-chekck-sign" ></span>
                            Is Social
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

const mapStateToProps= (state) => {
    return { link: state.link.link };
};

export default connect(mapStateToProps, { createLink })(Create);