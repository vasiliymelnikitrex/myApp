import React from 'react';
import PropTypes from 'prop-types';
import { Linking, ImageBackground, View, Text } from 'react-native';

import PushableWrapper from '../PushableWrapper';
import { DEFAULT_NEWS_URL_IMAGE } from '../../constants';

import styles from './styles';

const NewsItem = ({ news }) => {
  const onPress = () => {
    Linking.openURL(news.url).catch(() => null); // TODO
    // alertWithType('Error', 'Sorry!', 'Fixer.io can not be opened'),
  };
  const parseDate = date => date.split('T').join(' ').slice(0, -4);

  return (
    <PushableWrapper onPress={onPress}>
      <ImageBackground
        source={{ uri: news.urlToImage || DEFAULT_NEWS_URL_IMAGE }}
        resizeMode="stretch"
        style={styles.mainViewImage}
      >
        <View style={styles.textContainer}>
          <Text style={{ ...styles.text, ...styles.headText }}>
            {news.title}
          </Text>
          <Text style={styles.text}>{parseDate(news.publishedAt)}</Text>
          <Text style={styles.text}>{news.description}</Text>
        </View>
      </ImageBackground>
    </PushableWrapper>
  );
};

NewsItem.propTypes = {
  news: PropTypes.shape({
    source: PropTypes.shape({}),
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    content: PropTypes.string,
  }),
};

NewsItem.defaultProps = {
  news: null,
};

export default NewsItem;
