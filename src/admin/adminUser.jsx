import React, { Component } from 'react';

class adminUser extends Component {
    onDelete = ()=>{
        this.props.onDelete(this.props.item)
    }
    render() {
        const {index, item} = this.props
        return (
            <tr>
            <th scope="row" style={{textAlign: 'center'}}>
                <p>{index + 1}</p>
            </th>
            <td style={{width: '200px'}}>
                <p>{item.displayName}</p>
            </td>
            <td className="text-tran" style={{width: '200px'}}>
                <img src={item.photo} alt="" width='100%'/>
            </td>
            <td className="text-tran">
                <p>{item.email}</p>
            </td>
            <td style={{textAlign: 'center'}}>
                <button className="bg-danger text-white" onClick={this.onDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i> Delete
                </button>
            </td>
        </tr>
        );
    }
}

export default adminUser;