import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';

import { Container } from '../components';

const News = ({ data }) => (
  <Container>
    <ScrollView>
      {data.map((item, i) => (
        <View>
          <Text>
            {`${i + 1}. ${item.title}`}
          </Text>
        </View>
      ))}
    </ScrollView>
  </Container>
);

News.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.shape({}),
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};

News.defaultProps = {
  data: null,
};

export default News;
