import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { articlesUrl } from './routes';
import { getToken } from './auth';
import Loader from './elements/Loader';

class Articles extends Component {

    state = {
        articles : [ ],
        errorMessage: '',
        loaded: false
    }

    componentDidMount() {

        const token = getToken();
        fetch(articlesUrl, {
            method: 'GET',
            headers: {
                'Accept' : "application/json",
                'Authorization' : 'Bearer ' + token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 200) {
                this.setState({
                    articles: data.result, 
                    loaded: true
                })
            } else {
                this.setState({
                    errorMessage : 'No Article Found',
                    loaded: true
                })
            }
            
        })
        .catch(err => {
            if(err) {
                this.setState({
                    errorMessage: 'An error has occurred. ' + err
                })
            }
        })

    }

    render() {
        let articles;

        if(this.state.loaded === true) {
            if(this.state.articles) {
                articles = this.state.articles.map(article => {
                    return (
                    <div key={article.article_id}>
                        <div className="post card darken-1" >
                            <h5>{article.title}</h5>
                            <p>{article.article}</p>
                            <button className="btn"> + Comment</button>
                        </div>
                    </div>
                    )
                })
            }
           
        } else {
            articles = <Loader />;
        }       

        return (
            <div>
                <h4 className="center">Articles</h4>
                <button className="btn"> + New Article</button>
                <p> {this.state.errorMessage} </p>
                {articles}
            </div>            
        )
    }
}

export default Articles