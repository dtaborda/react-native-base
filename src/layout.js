import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';

const Layout = props => (
  <Container>
    <Content>
      {props.children}
    </Content>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
