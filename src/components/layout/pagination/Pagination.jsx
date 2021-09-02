import React, { Component } from 'react'
import './pagination.css'

export default class Pagination extends Component {


    render() {

        // console.log(this.props.imagesPerPage, this.props.totalImages );
        const pageNumbers = [];
        for(let i =1; i<= Math.ceil(this.props.totalImages /this.props.imagesPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="paginationPage">
                <nav className="paginationWrapp">
                    <ul className="pagination">
                        {pageNumbers.map(number =>(
                            <li key={number} className="page-item">
                                <button onClick={() => this.props.paginate(number)} className="page-link">
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        )
    }
}
