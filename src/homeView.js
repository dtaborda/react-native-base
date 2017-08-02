/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Layout from './layout';
import ArtistList from './ArtistList';
import api from './api-client';

class HomeView extends Component {
  state = {
    artists: [],
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const artists = await api.getArtists();
    this.setState({ artists });
  }

  render() {
    const { artists } = this.state;
    return (
      <Layout>
        <ArtistList artists={artists} />
      </Layout>
    );
  }
}

export default HomeView;
