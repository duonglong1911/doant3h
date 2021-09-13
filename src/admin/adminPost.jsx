import React, { Component } from 'react';

class adminPost extends Component {
    onDelete = ()=>{
        this.props.onDelete(this.props.item.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.item, this.props.index)
    }
    render() {
        const {index, item} = this.props
        return (
            <tr>
            <th scope="row" style={{textAlign: 'center'}}>
                <p>{index + 1}</p>
            </th>
            <td className="text-tran" style={{width: '200px'}}>
                <p>{item.desc}</p>
            </td>
            <td className="text-tran" style={{width: '200px'}}>
                <img src={item.photo} alt="" width='100%'/>
            </td>
            <td className="text-tran" style={{textAlign: 'center'}}>
                <p>{item.date}</p>
            </td>
            <td className="text-tran" style={{textAlign: 'center'}}>
                <p>{item.like}</p>
            </td>
            <td style={{textAlign: 'center'}}>
                <button className="bg-warning text-white" onClick={this.onUpdate}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    Edit
                </button>
                <button className="bg-danger text-white" onClick={this.onDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i> Delete
                </button>
            </td>
        </tr>
        );
    }
}

export default adminPost;