import React from 'react';
import './SearchBar.css';


let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

getSortByClass(sortByOption){
  if (this.state.sort === sortByOption){
    return 'active';
  } else {
    return '';
  }
};

handleSortByChange(sortByOption){
  this.setState({sort: sortByOption});
};

handleTermChange(event){
  this.setState({term: event.target.value})
};

handleLocationChange(event){
  this.setState({location: event.target.value})
};

handleSearch(event){
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  event.preventDefault();
};


class SearchBar extends
React.Component {
  constructor(props){
    super(props)
    this.state = {term: '', location: '', sort: 'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li onClick={handleSortByChange.bind(this, sortByOptionValue)} className={getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    })
  }

  render(){
    return (
    searchYelp = this.searchYelp();
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={handleTermChange()} placeholder="Search Businesses" />
          <input onChange={handleLocationChange()} placeholder="Where?" />
        </div>
        <div onClick = {this.handleSearch()} className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )};
}


export default SearchBar;
