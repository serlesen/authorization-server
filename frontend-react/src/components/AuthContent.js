import * as React from 'react';

export default class AuthContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            data: props.data
        }
    }

  render() {
    return (
        <div className="row justify-content-md-center">
            <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Backend response</h5>
                        <h6 className="card-subtitle mb-2 text-muted">From : {this.state.user["profile"]["name"]}</h6>
                        <p className="card-text">Content: "{this.state.data}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
