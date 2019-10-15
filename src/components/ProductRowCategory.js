import React from 'react';

export default function ProductRowCategory(props) {
    return (
        <tr className="text-bold category-row">
            <td colSpan="2">{props.category}</td>
        </tr>
    )
}