import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormRegister, LabelRegister, SpanRegister, FormRegisretBtn, InputRegisterForm } from './RegisterForm.styled';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
          <LabelRegister>
              <SpanRegister>Username</SpanRegister>
        <InputRegisterForm type="text" name="name" />
      </LabelRegister>
          <LabelRegister>
              <SpanRegister>Email</SpanRegister>
        <InputRegisterForm type="email" name="email" />
      </LabelRegister>
          <LabelRegister>
              <SpanRegister>Password</SpanRegister>
        <InputRegisterForm type="password" name="password" />
      </LabelRegister>
      <FormRegisretBtn type="submit">Register</FormRegisretBtn>
    </FormRegister>
  );
};

