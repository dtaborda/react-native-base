/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';

import ArtistBox from './ArtistBox';

const ArtistDetailView = props => <ArtistBox artist={props.artist} />;

ArtistDetailView.propTypes = {
  artist: PropTypes.shape({
    headerImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    bodyImage: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistDetailView;
