import React, { Component } from 'react';


class NewArticle extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12 xl6">
                    <h4 className="center">New Article</h4>

                    <label>Artile Title</label>
                    <input type="text" />

                    <label>Article</label>
                    <textarea className="materialize-textarea"/>
                    
                    <button className="btn">Add Article</button>
                </form>
            </div>            
        )
    }
}

export default NewArticle