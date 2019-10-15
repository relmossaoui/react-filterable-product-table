import React from 'react';

export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                name="keyword" 
                value={props.keyWord} 
                onChange={props.onChangeSearchBar}
                placeholder="Search by keyword"
                />
            <label>
                <input 
                    type="checkbox" 
                    name="stocked" 
                    value={props.stocked}
                    onChange={props.onChangeSearchBar}
                    />
                Only show products in stock
            </label>
        </div>
    )
}