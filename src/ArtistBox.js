import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';

const ArtisBox = props => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: props.artist.headerImage }} />
        <Body>
          <Text>{props.artist.name}</Text>
          <Text note>{props.artist.artist}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image
        source={{ uri: props.artist.bodyImage }}
        style={{ height: 200, width: null, flex: 1 }}
      />
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent>
          <Icon active name="thumbs-up" />
          <Text>{props.artist.likes} Likes</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon active name="chatbubbles" />
          <Text>{props.artist.comments} Comments</Text>
        </Button>
      </Body>
    </CardItem>
  </Card>
);

ArtisBox.propTypes = {
  artist: PropTypes.shape({
    headerImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    bodyImage: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtisBox;
