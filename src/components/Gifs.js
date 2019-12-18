import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { gifsUrl } from './routes';
import { getToken } from './auth';
import Loader from './elements/Loader';

class Gifs extends Component {

    state = {
        gifs: [],
        errorMessage: '',
        loaded: false
    }

    componentDidMount() {

        const token = getToken();
        fetch(gifsUrl, {
            method: 'GET',
            headers: {
                'Accept' : "application/json",
                'Authorization' : 'Bearer ' + token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.status === 200) {
                this.setState({
                    gifs : data.result,
                    loaded: true
                })
            } else { 
                this.setState({
                    errorMessage : 'No Gif found',
                    loaded: true
                })
            }
        })
        .catch(err => {
            if(err) {
                this.setState({
                    errorMessage: 'Something went wrong. ' + err,
                    loaded: true
                })
            }
        })

    }

    render() {
        let gifs;

        if(this.state.loaded === true) {
            gifs = this.state.gifs.map(gif => {
                return (
                    <div className="post card darken-1">
                        <h5>{gif.title}</h5>
                        <p><img src={gif.image_url} alt="gif" /></p>
                        <button className="btn"> + Comment</button>
                    </div>
                )
            })
        } else {
            gifs = <Loader />
        }

        return (
            <div>
                <h4 className="center">Gifs</h4>

                <NavLink to="/new_gif"> 
                    <button className="btn"> + Add a new Gif</button>
                </NavLink>
                <p> {this.state.errorMessage}</p>
                {gifs}                
            </div>            
        )
    }
}

export default Gifs