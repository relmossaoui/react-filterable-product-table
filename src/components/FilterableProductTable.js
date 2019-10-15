import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

export default class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            keyWord : '',
            stocked : false
        }
    } 
    
    onChangeSearchBar(e) {
        if (e.target.name === 'keyword') {
            this.setState({
                keyWord : e.target.value 
            })
        } else {
            this.setState({
                stocked : e.target.checked
            })
        }
    }

    render() {
        return (
            <Fragment>
                <SearchBar 
                    onChangeSearchBar={ this.onChangeSearchBar.bind(this) }
                    keyWord = { this.state.keyWord }
                    stocked = { this.state.stocked }
                    />
                <table>
                    <thead>
                        <tr className="text-bold">
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <ProductTable 
                        products={products} 
                        keyWord={ this.state.keyWord } 
                        stocked={ this.state.stocked }
                    />
                </table>
            </Fragment>
        )
    }
}


let products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];