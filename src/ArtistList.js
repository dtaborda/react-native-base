import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ArtistBox from './ArtistBox';

export default class ArtistList extends Component {
  static get propTypes() {
    return {
      artists: PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
  }

  componentWillMount() {
    this.updateDataSource(this.props.artists);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.artists !== this.props.artists) {
      this.updateDataSource(nextProps.artists);
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
    });
  }

  handlePress = artist => Actions.artistDetail({ artist });

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={artist => (
          <TouchableOpacity onPress={() => this.handlePress(artist)}>
            <ArtistBox artist={artist} />
          </TouchableOpacity>
        )}
      />
    );
  }
}
