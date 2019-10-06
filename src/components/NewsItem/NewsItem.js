import React from 'react';
import PropTypes from 'prop-types';
import { Linking, ImageBackground, View, Text } from 'react-native';

import PushableWrapper from '../PushableWrapper';

import { DEFAULT_NEWS_URL_IMAGE, MAX_STRING_LIMIT } from '../../constants';

import styles from './styles';

const NewsItem = ({
  news: { title, url, urlToImage, description, publishedAt },
  alertWithType,
}) => {
  const onPress = () =>
    Linking.openURL(url).catch(
      () => alertWithType('error', 'Sorry!', 'Can not find url'), // TODO: messages
    );

  const parseDate = date =>
    date &&
    date
      .split('T')
      .join(' ')
      .slice(0, -4);

  const getTruncatedDescription = text =>
    text &&
    (text.length > MAX_STRING_LIMIT
      ? `${text.substring(0, MAX_STRING_LIMIT - 3)}...`
      : text);

  return (
    <PushableWrapper style={styles.container} onPress={onPress}>
      <ImageBackground
        source={{ uri: urlToImage || DEFAULT_NEWS_URL_IMAGE }}
        resizeMode="stretch"
        style={styles.mainViewImage}
      >
        <View style={styles.textContainer}>
          <Text style={{ ...styles.text, ...styles.headText }}>{title}</Text>
          <Text style={styles.text}>{parseDate(publishedAt)}</Text>
          <Text style={styles.text}>
            {getTruncatedDescription(description)}
          </Text>
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
  alertWithType: PropTypes.func,
};

NewsItem.defaultProps = {
  news: null,
  alertWithType: () => {},
};
export default NewsItem;
