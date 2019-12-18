import React, { Component } from 'react';


class NewGif extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12 xl6">
                    <h4 className="center">New Gif</h4>

                    <label>Gif Title</label>
                    <input type="text" />

                    <label>Gif</label>
                    <input className="file-path validate" type="file" />
                    
                       
                    
                    
                    <button className="btn">Add Gif</button>
                </form>
            </div>            
        )
    }
}

export default NewGif