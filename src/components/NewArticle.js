import React, { Component } from 'react';
import { articlesUrl } from './routes';
import { getToken } from './auth';

class NewArticle extends Component {

    state = {
        title: '',
        article: '',
        outputMessage : '',
        buttonText: 'Add Article'
    }

    handleOnChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const token = getToken();

        this.setState({
            buttonText: 'Please Wait . . . '
        })

        fetch(articlesUrl , {
          
            method : 'POST',
            mode: 'cors', 
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                'Authorization' : 'Bearer ' + token
            },
            body: JSON.stringify({
                title: this.state.title,
                article: this.state.article
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                buttonText: 'Add Article'
            })
            if (data.status === 'success') {
                // article created successfully
                this.setState({
                    outputMessage: 'Article Created Successfully',
                    title: '',
                    article: ''
                })
            } else {
                // article creation failed
                this.setState({
                    outputMessage: 'Failed, Please try again'
                })
            }
        })

        
    }

    render() {
        return (
            <div className="row">
                <form className="col s12 xl6" onSubmit={this.handleSubmit}>
                    <h4 className="center">New Article</h4>
                    <p>{this.state.outputMessage}</p>

                    <label>Article Title</label>
                    <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title}/>

                    <label>Article</label>
                    <textarea className="materialize-textarea" name="article" onChange={this.handleOnChange} value={this.state.article} />
                    
                    <button className="btn">{this.state.buttonText}</button>

                </form>
            </div>            
        )
    }
}

export default NewArticle