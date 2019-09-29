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

import { TABS, TABBAR_ICONS } from '../../constants';
import { getFishInfoSelector } from '../../redux/selectors';
import { getFishInfo } from '../../redux/actions';
import { removeTags, removeBreaks } from '../../helpers';
import mapArea from '../../assets/map_preview.png';

const FishDescription = ({ path, navigate }) => {
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
        rotein: fishInfo.Protein,
        saturatedFattyAcids: fishInfo['Saturated Fatty Acids, Total'],
        selenium: fishInfo.Selenium,
        servingWeight: fishInfo['Serving Weight'],
        sodium: fishInfo.Sodium,
        sugars: fishInfo['Sugars, Total'],
        taste: fishInfo.Taste,
      },
    };
    navigate(screen, stateProps[TABS[screen]]);
  };

  useEffect(() => {
    dispatch(getFishInfo('REQUEST', path));
  }, []);

  return fishInfo ? (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 300 }}>
        <ImageBackground
          source={mapArea}
          resizeMode="stretch"
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <IconFish
            style={{
              position: 'absolute',
              left: 30,
              top: 30,
            }}
            name={TABBAR_ICONS[TABS.FishInfo]}
            size={20}
            color="black" // TODO: theme
          />
          <TouchableOpacity
            onPress={onPress(TABS.MapInfo)}
            style={{ position: 'absolute', left: 10, bottom: 10 }}
          >
            <Text>Open map</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {fishInfo && removeBreaks(removeTags(fishInfo.Availability))}
      </Text>
      <Text
        style={{
          justifyContent: 'flex-end',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {removeBreaks(removeTags(fishInfo.Biology))}
      </Text>
      <TouchableOpacity
        onPress={onPress(TABS.FoodInfo)}
      >
        <Text>Food</Text>
      </TouchableOpacity>
    </ScrollView>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

FishDescription.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FishDescription;
