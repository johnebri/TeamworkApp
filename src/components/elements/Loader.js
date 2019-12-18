import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="row">
                    <br /><br /><br />
                  <h6 className="center">Please wait . . .</h6>
                  <div className="progress">
                    <div className="indeterminate"></div>
                </div>
          </div>
        )
    }
}

export default Loader;