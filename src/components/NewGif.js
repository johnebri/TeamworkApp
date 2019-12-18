import React, { Component } from 'react';
import { gifsUrl } from './routes';
import { getToken } from './auth';

class NewGif extends Component {

    state = {
        GifImage : '',
        title: '',
        buttonText : 'Add Gif',
        outputMessage : ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            buttonText: 'Loading. Please wait'
        })
        const token = getToken();
        const body = new FormData(this.form);

        fetch(gifsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Authorization':  'Bearer ' + token
            },
            body
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.data.message);
            this.setState({
                buttonText: 'Add Gif'
            })
        })
        .catch(err => {
            console.log(err);
            this.setState({
                buttonText: 'Add Gif'
            })
        })

    }

    render() {
        return (
            <div className="row">
                <form className="col s12 xl6" onSubmit={this.handleSubmit}>
                    <h4 className="center">New Gif</h4>

                    <label>Gif Title</label>
                    <input type="text" name="title" onChange={this.handleOnChange}  />

                    <label>Select Gif file</label> <br />
                    <input className="file-path validate" type="file" name="GifImage" onChange={this.handleOnChange} />
                    <br /><br />
                    <button className="btn" type="submit">{this.state.buttonText}</button>
                </form>
            </div>            
        )
    }
}

export default NewGif