import React, { Component } from 'react';
import { feedsUrl } from './routes';
import { getToken } from './auth';
import Loader from './elements/Loader';

class Dashboard extends Component {
    
    state = {
        feeds : [

        ], 
        errorMessage: '',
        loaded : false
    }

    componentDidMount() {
        
        const token = getToken();
        fetch(feedsUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                feeds: data.result,
                loaded: true
            })
        })
        .catch(err => {
            if(err) {
                // console.log(err);
                this.setState({
                    errorMessage: 'An error occurred. ' + err
                })
            }
        })
    }

    render() {

        let feedList;

        if(this.state.loaded === true ) {

            feedList = 
            this.state.feeds.map(feed => {
            
                if(feed.type === 'article') {
                    return (
                        <div className="post card darken-1" key={Math.random() * 9}>
                            <h5>{feed.title}</h5>
                            <p>{feed.articleurl}</p>
                            <p>Posted By {feed.authorid}</p>
                            <small>{feed.createdon}</small>
                            <br />
                            <button className="btn"> + Comment</button>
                        </div>
                    )
                } else if (feed.type === 'gif') {
                    return (
                        <div className="post card darken-1" key={Math.random() * 9}>
                            <h5>{feed.title}</h5>
                            <img src={feed.articleurl} alt="Feed" />
                            <p>Posted By {feed.authorid}</p>
                            <small>{feed.createdon}</small>
                            <br />
                            <button className="btn"> + Comment</button>
                        </div>
                    )
                }
            })

        } else {
            feedList = <Loader />;
        }
        

        return (
            <div>
                <h3>Feed</h3>
                <p>{this.state.errorMessage}</p>
                {feedList}  

            </div>            
        )
    }
}

export default Dashboard