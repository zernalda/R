// example 1
// import React from 'react';

// to declare reactComponent
import React, { Component } from 'react';

// example 1
// just UI input
// const SearchBar = () => {
//     return <input />
// };

// class javascript
// you can put method
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    // syntax for finding method on a class
    render() {
        // use metheod on change
       return <input onChange = { this.onInputChange }/>;
    }

    // create event handler
    onInputChange(event) {
        // get value
        console.log(event.target.value)
    }
}

export default SearchBar;