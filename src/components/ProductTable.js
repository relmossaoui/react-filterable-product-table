import React from 'react';

import ProductRowCategory from './ProductRowCategory';
import ProductRow from './ProductRow' 

export default function ProductTtable(props) {
    let products = props.products.reduce((a, c) => {
        if ((!props.stocked || c.stocked) && c.name.toLowerCase().includes(props.keyWord.toLowerCase())) {
            a[c.category] = a[c.category] || [];
            a[c.category].push(c);
        }
        return a;
    }, {})

    return (
            Object.keys(products).map(category => {
                return (
                    <tbody key={category}>
                      <ProductRowCategory  category={category} />
                        { products[category].map(row => {
                            return (
                                <ProductRow 
                                    key={row.name}
                                    row={row} 
                                    />
                            )
                        })}  
                    </tbody>   
                )
            })   
    )
}