import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="row">
                    <br /><br /><br />
                  <div class="progress">
                    <div class="indeterminate"></div>
                </div>
          </div>
        )
    }
}

export default Loader;