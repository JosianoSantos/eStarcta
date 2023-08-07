import React from 'react';
import HomeHeader from '@/components/molecules/HomeHeader';
import { Container } from '@mui/material';
import EmpresaContainer from '@/components/organisms/EmpresaContainer';

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
