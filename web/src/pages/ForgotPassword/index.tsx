import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../hooks/Toast';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      formRef.current?.setErrors({});
      setLoading(true);

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insira um e-mail válido')
            .required('Campo obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/password/forgot', { email: data.email })

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description: 'Enviamos um e-mail para confirmar a recuperação de sua senha. Cheque sua caixa de entrada.',
        });

        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description: 'Ocorreu um erro ao tentar recuperar sua senha. Tente novamente.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Gobarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recupere sua senha</h1>

          <Input
            name="email"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            autoFocus
          />

          <Button loading={loading} type="submit">Recuperar</Button>

        </Form>

        <Link to="/">
          <FiLogIn />
          Voltar ao Login
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
