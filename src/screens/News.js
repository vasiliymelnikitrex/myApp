import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { Container, ScreenHeader, NewsItem } from '../components';

const News = ({ data, navigation, alertWithType }) => {
  // const removeDuplicateData = news => news; // TODO
  const getKey = ({ title }) => title;

  return (
    <Container>
      <ScreenHeader title={navigation.state.routeName} />
      {Boolean(data.length > 10) && ( // TODO
        <FlatList
          keyExtractor={getKey}
          data={data}
          renderItem={({ item }) => (
            item.url && <NewsItem alertWithType={alertWithType} news={item} />
          )}
        />
      )}
    </Container>
  );
};

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
  navigation: PropTypes.object.isRequired,
};

News.defaultProps = {
  data: [],
};

export default News;
