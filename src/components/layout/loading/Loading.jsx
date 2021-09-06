import React, { Component } from 'react'
import { Spinner } from 'reactstrap';

export default class Loading extends Component {
    render() {
        return (
            <div className="d-flex align-items-center mt-10" style={{marginTop:'300px', flexDirection:'column'}}>
                <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                <p className="mt-3">Loading ... !</p>
            </div>
        )
    }
}
