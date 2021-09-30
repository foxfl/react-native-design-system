import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useThemeContext} from '../util/ThemeProvider';
import {resizeFont} from '../util/resizeFont';

const getTextStyle = ({theme, color, size, scale, fontWeight}) => {
  return {
    color: theme.textColor[color],
    fontSize: scale ? theme.fontSize[size] : resizeFont(theme.fontSize[size]),
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontWeight: fontWeight,
  };
};

const TextElement = ({style, ...props}) => {
  const theme = useThemeContext();
  return (
    <Text
      {...props}
      style={StyleSheet.flatten([getTextStyle({...props, theme}), style])}>
      {props.children}
    </Text>
  );
};

TextElement.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
      'xxlarge',
    ]),
    PropTypes.string,
  ]),
  color: PropTypes.string,
  scale: PropTypes.bool,
  fontWeight: PropTypes.string,
};

TextElement.defaultProps = {
  color: 'default',
  size: 'medium',
  scale: true,
  fontWeight: '500',
};

export default TextElement;
