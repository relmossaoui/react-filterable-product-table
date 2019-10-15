import React from 'react';
export default function ProductRow(props) {

    return (
            <tr>
                <td className={ `${ !props.row.stocked ? 'danger' : ''}` }> { props.row.name } </td>
                <td> { props.row.price } </td>
            </tr> 
    )
}