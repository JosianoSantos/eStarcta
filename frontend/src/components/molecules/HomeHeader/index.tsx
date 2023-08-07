import React from 'react';

import Image from 'next/image';
import { ButtonContainer, Container } from './styles';
import { useRouter } from 'next/router';
import LinearGradientButton from '@/components/atoms/LinearGradientButton';

const HomeHeader = () => {
  const router = useRouter();

  return (
    <header style={{ height: '100px', width: '100%' }}>
      <Container>
        <ButtonContainer>
          <LinearGradientButton text="SAIR" onClick={() => router.push('/logout')} />
        </ButtonContainer>
      </Container>
    </header>
  );
};

export default HomeHeader;
