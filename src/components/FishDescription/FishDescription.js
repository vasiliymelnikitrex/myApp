import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import IconFish from 'react-native-vector-icons/MaterialCommunityIcons';

import { PushableWrapper, Spinner } from '..';
import { TABS, TABBAR_ICONS } from '../../constants';
import { getFishInfoSelector } from '../../redux/selectors';
import { getFishInfo, clearState } from '../../redux/actions';
import { removeTags, removeBreaks } from '../../helpers';
import mapArea from '../../assets/map_preview.png';
import { ACTIVE_ICON_COLOR } from '../../styles/colors';
import styles from './styles';

const FishDescription = ({ path, navigate, alertWithType }) => {
  const dispatch = useDispatch();
  const fishInfo = useSelector(getFishInfoSelector);

  const onPress = screen => () => {
    const stateProps = fishInfo && {
      [TABS.MapInfo]: {},
      [TABS.FoodInfo]: {
        calories: fishInfo.Calories,
        carbohydrate: fishInfo.Carbohydrate,
        cholesterol: fishInfo.Cholesterol,
        color: removeBreaks(removeTags(fishInfo.Color)),
        fat: fishInfo['Fat, Total'],
        fiber: fishInfo['Fiber, Total Dietary'],
        healthBenefits: removeBreaks(removeTags(fishInfo['Health Benefits'])),
        humanHealth: removeBreaks(removeTags(fishInfo['Human Health'])),
        physicalDescription: removeBreaks(
          removeTags(fishInfo['Physical Description']),
        ),
        production: fishInfo.Production,
        protein: fishInfo.Protein,
        saturatedFattyAcids: fishInfo['Saturated Fatty Acids, Total'],
        selenium: fishInfo.Selenium,
        servingWeight: fishInfo['Serving Weight'],
        sodium: fishInfo.Sodium,
        sugars: fishInfo['Sugars, Total'],
        taste: removeBreaks(removeTags(fishInfo.Taste)),
      },
    };
    navigate(screen, stateProps[TABS[screen]]);
  };

  useEffect(() => {
    dispatch(getFishInfo('REQUEST', { path, alertWithType }));
    return () => dispatch(clearState('FISH_INFO'));
  }, []);

  return fishInfo.isFetching ? (
    <Spinner />
  ) : (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PushableWrapper
        onPress={onPress(TABS.MapInfo)}
        style={styles.mainViewContainer}
      >
        <ImageBackground
          source={mapArea}
          resizeMode="stretch"
          style={styles.mainViewImage}
        >
          <IconFish
            style={styles.mainViewIcon}
            name={TABBAR_ICONS[TABS.FishList]}
            size={20}
            color={ACTIVE_ICON_COLOR}
          />
          <View style={styles.mainViewLabel}>
            <Text>Open map</Text>
          </View>
        </ImageBackground>
      </PushableWrapper>
      <Text style={styles.mainViewText}>
        {fishInfo && removeBreaks(removeTags(fishInfo.Availability))}
      </Text>
      <Text style={styles.mainViewText}>
        {removeBreaks(removeTags(fishInfo.Biology))}
      </Text>
      <TouchableOpacity onPress={onPress(TABS.FoodInfo)}>
        <Text>Food</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

FishDescription.propTypes = {
  path: PropTypes.string.isRequired,
  alertWithType: PropTypes.func.isRequired,
};

export default FishDescription;
