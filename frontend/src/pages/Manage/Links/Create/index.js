import React from 'react';

import Layout from '../../../Layouts/Manage';

const Create = () => {
    return (
        <Layout>
            <h1>Create Link</h1>
            <div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Label</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Url</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group form-check" >
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

export default Create;