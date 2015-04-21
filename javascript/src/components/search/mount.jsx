'use strict';

var QueryInput = require('./QueryInput');
var SearchBar = require('./SearchBar');
var SearchResult = require('./SearchResult');
var React = require('react');

var queryInputContainer = document.getElementById('universalsearch-query');
if (queryInputContainer) {
  var queryInput = new QueryInput(queryInputContainer);
  queryInput.display();
}

var searchBarElem = document.getElementById('react-search-bar');
if (searchBarElem) {
  React.render(<SearchBar />, searchBarElem);
}

var searchResultElem = document.getElementById('react-search-result');
if (searchResultElem) {
  var query = searchResultElem.getAttribute('data-query');
  var searchResult = searchResultElem.getAttribute('data-search-result');
  if (searchResult) {
    searchResult = JSON.parse(searchResult);
  }
  var histogram = searchResultElem.getAttribute('data-histogram');
  if (histogram) {
    histogram = JSON.parse(histogram);
  }
  var formattedHistogram = searchResultElem.getAttribute('data-formatted-histogram');
  if (formattedHistogram) {
    formattedHistogram = JSON.parse(formattedHistogram);
  }
  var currentPage = searchResultElem.getAttribute('data-current-page');

  React.render(<SearchResult query={query} result={searchResult} histogram={histogram} formattedHistogram={formattedHistogram} currentPage={currentPage}/>, searchResultElem);
}