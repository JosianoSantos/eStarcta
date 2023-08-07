import React from 'react';

import { ButtonContainer, Container } from './styles';
import { useRouter } from 'next/router';
import LinearGradientButton from '@/components/atoms/LinearGradientButton';

const HomeHeader = () => {

  const router = useRouter()

  const handleLogout =() =>{
    localStorage.removeItem('access');
    localStorage.removeItem('refresh')
    router.push('/login')
  }

  return (
    <header style={{ height: '100px', width: '100%' }}>
      <Container>
        <h1><b>eStracta Frontend</b></h1>
        <ButtonContainer>
          <LinearGradientButton text="SAIR" onClick={() =>handleLogout()} />
        </ButtonContainer>
      </Container>
    </header>
  );
};

export default HomeHeader;
