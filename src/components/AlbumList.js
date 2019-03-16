import React, { Component } from "react";
import { Text, View } from "react-native";
import AlbumDetail from "./AlbumDetail";
import axios from "axios";

export default class AlbumList extends Component {
  state = {
    album: []
  };
  componentWillMount = () => {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => {
        this.setState({ album: response.data });
      });
  };

  renderAlbums = () => {
    return this.state.album.map((item, index) => {
      return <AlbumDetail key={index} album={item} />;
    });
  };

  render() {
    return (
      <View>
        {this.renderAlbums()}
        <Text> textInComponent </Text>
      </View>
    );
  }
}
