import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getLink } from '../../../../actions/LinkActions';
import { updateLink } from '../../../../actions/LinkActions';

import Layout from '../../../Layouts/Manage';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';
import { getFormData } from '../../../../helpers/form';

const Edit = ({link, getLink, updateLink}) => {

    const { id } = useParams();

    useEffect( () => {
        getLink(id);
    }, [id, getLink]);

    const submitHandler = (e)=> {
        e.preventDefault();
        const data = getFormData(e);
        updateLink(id, data);
    };


    return (
        <Layout>
            <h1>Edit Link</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup type="input" name="label" label="Label" data={link} />
                    <FormGroup type="input" name="url" label="Url" data={link} />
                    <FormCheck label="Is Social" name="isSocial" data={link} />
                    <div>
                        <button className="btn btn-primary" >Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return { link: state.link.link };
};

export default connect( mapStateToProps, {getLink, updateLink})(Edit);