import React from 'react';
import {Image as RNImage} from 'react-native';

const Image = ({source, resizeMode = 'contain', style}) => {
  return <RNImage source={source} resizeMode={resizeMode} style={style} />;
};

export default Image;
