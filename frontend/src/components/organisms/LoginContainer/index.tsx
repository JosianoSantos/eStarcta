import React, { useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { useRouter } from 'next/router';

import LinearGradientButton from '@/components/atoms/LinearGradientButton';

import {
  Container,
  Content,
  LoginFormContainer,
  LoginFormContent,
} from './styles';
import api from '@/api/api';

const LoginContainer = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      api.users.login({
        email,
        password
      }).then((res) => {
        if (res?.status === 200) {
          localStorage.setItem('access', res.data.access)
          localStorage.setItem('refresh', res.data.refresh)
          router.push('/');
        } else {
          message.error('Erro ao realizar o login, revise os dados');
        }
      }).catch(() =>{
        message.error('Erro ao realizar o login, revise os dados');
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('access')) {
      router.push('/');
    }
  }, [router]);

  return (
    <Container>
      <Content>
        <LoginFormContainer>
          <LoginFormContent>
            <h1>Login</h1>

            <Form>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="Email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Senha</label>
              <input
                required={true}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <LinearGradientButton onClick={() => handleLogin()} text="ACESSAR" />

            </Form>
          </LoginFormContent>
        </LoginFormContainer>
      </Content>
    </Container>
  );
};

export default LoginContainer;
