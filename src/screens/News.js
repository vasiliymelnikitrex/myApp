import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { Container, ScreenHeader, NewsItem, Spinner } from '../components';

import { removeDuplicateData } from '../helpers';

const News = ({ data, navigation, isFetching, alertWithType }) => {
  const filteredNews = removeDuplicateData(data);

  const getKey = ({ publishedAt }) => publishedAt;

  return (
    <Container>
      <ScreenHeader title={navigation.state.routeName} />
      {isFetching ? (
        <Spinner />
      ) : (
        <FlatList
          keyExtractor={getKey}
          data={filteredNews}
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
      source: PropTypes.shape({
        id: PropTypes.any,
        name: PropTypes.string,
      }),
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
  isFetching: PropTypes.bool.isRequired,
};

News.defaultProps = {
  data: [],
};

export default News;
