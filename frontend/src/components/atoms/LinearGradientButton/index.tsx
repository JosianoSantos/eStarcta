import React from 'react';

import { Container } from './styles';
import { RegistrationLoginButtonProps } from './types';

const LinearGradientButton = ({ text, ...rest }: RegistrationLoginButtonProps) => {
  return <Container {...rest}>{text}</Container>;
};

export default LinearGradientButton;
