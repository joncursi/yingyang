/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import EvilIcon from 'react-native-vector-icons/dist/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/dist/FontAwesome5';
import FoundationIcon from 'react-native-vector-icons/dist/Foundation';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import OcticonIcon from 'react-native-vector-icons/dist/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/dist/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/dist/Zocial';

import type { IconFlowType } from '../../types';
import COLORS from '../../constants/colors';
import ICON_TYPES from '../../constants/iconTypes';

const Icon = ({
  color = COLORS.ICON_DEFAULT,
  name,
  size = 22,
  type,
}: IconFlowType = {}): React.Node => {
  let IconImport;
  switch (type) {
    case ICON_TYPES.ENTYPO:
      IconImport = EntypoIcon;
      break;
    case ICON_TYPES.EVIL:
      IconImport = EvilIcon;
      break;
    case ICON_TYPES.FEATHER:
      IconImport = FeatherIcon;
      break;
    case ICON_TYPES.FONT_AWESOME:
      IconImport = FontAwesomeIcon;
      break;
    case ICON_TYPES.FONT_AWESOME_5:
      IconImport = FontAwesome5Icon;
      break;
    case ICON_TYPES.FOUNDATION:
      IconImport = FoundationIcon;
      break;
    case ICON_TYPES.IONIC:
      IconImport = Ionicon;
      break;
    case ICON_TYPES.MATERIAL_COMMUNITY:
      IconImport = MaterialCommunityIcon;
      break;
    case ICON_TYPES.MATERIAL:
      IconImport = MaterialIcon;
      break;
    case ICON_TYPES.OCTICON:
      IconImport = OcticonIcon;
      break;
    case ICON_TYPES.SIMPLE_LINE:
      IconImport = SimpleLineIcon;
      break;
    case ICON_TYPES.ZOCIAL:
      IconImport = ZocialIcon;
      break;
    default:
      IconImport = MaterialIcon;
  }

  return <IconImport color={color} name={name} size={size} />;
};

export default Icon;
