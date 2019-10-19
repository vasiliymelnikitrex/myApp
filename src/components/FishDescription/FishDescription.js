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
import { withFetchData } from '../../hocs';
import { TABS, TABBAR_ICONS } from '../../constants';
import { getFishDescriptionSelector } from '../../redux/selectors';
import { clearState } from '../../redux/actions';
import { removeTags, removeBreaks } from '../../helpers';
import mapArea from '../../assets/map_preview.png';
import { ACTIVE_ICON_COLOR } from '../../styles/colors';
import styles from './styles';

const FishDescription = ({ navigate, isFetching }) => {
  const dispatch = useDispatch();
  const fishDescription = useSelector(getFishDescriptionSelector);

  const isDataReady = (Object.keys(fishDescription).length > 1) && mapArea;

  const onPress = screen => () => {
    const stateProps = {
      [TABS.MapInfo]: {},
      [TABS.FoodInfo]: {
        calories: fishDescription.Calories,
        carbohydrate: fishDescription.Carbohydrate,
        cholesterol: fishDescription.Cholesterol,
        color: removeBreaks(removeTags(fishDescription.Color)),
        fat: fishDescription['Fat, Total'],
        fiber: fishDescription['Fiber, Total Dietary'],
        healthBenefits: removeBreaks(removeTags(fishDescription['Health Benefits'])),
        humanHealth: removeBreaks(removeTags(fishDescription['Human Health'])),
        physicalDescription: removeBreaks(
          removeTags(fishDescription['Physical Description']),
        ),
        production: fishDescription.Production,
        protein: fishDescription.Protein,
        saturatedFattyAcids: fishDescription['Saturated Fatty Acids, Total'],
        selenium: fishDescription.Selenium,
        servingWeight: fishDescription['Serving Weight'],
        sodium: fishDescription.Sodium,
        sugars: fishDescription['Sugars, Total'],
        taste: removeBreaks(removeTags(fishDescription.Taste)),
      },
    };
    navigate(screen, stateProps[TABS[screen]]);
  };

  useEffect(() => () => dispatch(clearState('FISH_DESCRIPTION')), []);

  return isFetching ? (
    <Spinner />
  ) : isDataReady && (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PushableWrapper
        onPress={onPress(TABS.MapInfo)}
        style={styles.mainViewContainer}
      >
        <ImageBackground // TODO: Fast Image Bg
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
        {fishDescription && removeBreaks(removeTags(fishDescription.Availability))}
      </Text>
      <Text style={styles.mainViewText}>
        {removeBreaks(removeTags(fishDescription.Biology))}
      </Text>
      <TouchableOpacity onPress={onPress(TABS.FoodInfo)}>
        <Text>Food</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

FishDescription.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default withFetchData(FishDescription);
