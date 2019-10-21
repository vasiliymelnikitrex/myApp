import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Spinner, MapPreview } from '..';
import { withFetchData } from '../../hocs';
import { TABS } from '../../constants';
import { getFishDescriptionSelector } from '../../redux/selectors';
import { clearState } from '../../redux/actions';
import { removeTags, removeBreaks } from '../../helpers';
import mapArea from '../../assets/map_preview.png';

import styles from './styles';

const FishDescription = ({ navigate, isFetching, location }) => {
  const dispatch = useDispatch();
  const fishDescription = useSelector(getFishDescriptionSelector);

  const isDataReady = (Object.keys(fishDescription).length > 1) && mapArea;

  const onPress = screen => () => {
    const stateProps = {
      [TABS.MapInfo]: {
        location
      },
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
    }; // TODO: Mapping from the server

    navigate(screen, stateProps[TABS[screen]]);
  };

  useEffect(() => () => dispatch(clearState('FISH_DESCRIPTION')), []);

  return isFetching ? (
    <Spinner />
  ) : isDataReady && (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MapPreview onPress={onPress} location={location} />
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
