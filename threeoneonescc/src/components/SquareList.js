// AlbumList.js
 
// Disables eslint error messages about line endings.
/*eslint linebreak-style: ["error", "windows"]*/
 
// Imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class component
class SquareList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('http://169.233.207.180:8080/returnTable')
    // take the resppnse from the fetch request and convert it to a JSON response
    .then((response) => response.json())
    // set State -> albums = loop for each of the array, convert the data they give us from a string to a JSON
    .then((responseData) => this.setState({ albums: responseData.map((value) => JSON.parse(value)) }));
    //map acts as a "for" loo[s]
  }
 
 // Render all the albums that was fetched from the API.
  renderAlbums() {
    console.log(this.state.albums);
    return this.state.albums.map(album =>
      <AlbumDetail key={album.date} album={album} />
    );
  }
  
// Render the component
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
 
// Make compomnent available to other parts of the application
export default SquareList;