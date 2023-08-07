import React from 'react';
import HomeHeader from '@/components/molecules/HomeHeader';
import EmpresaContainer from '@/components/organisms/EmpresaContainer';
import { Container } from './styles';

const HomeTemplate = () => {
  return (
    <>
      <HomeHeader />
      <Container>
        <EmpresaContainer />
      </Container>
    </>
  );
};

export default HomeTemplate;
