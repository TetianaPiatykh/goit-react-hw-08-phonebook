import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLogin, LabelLoginForm, SpanLoginForm, FormLoginFormBtn, InputLoginForm  } from './LoginForm.styled';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <LabelLoginForm >
        <SpanLoginForm>Email</SpanLoginForm>
        <InputLoginForm type="email" name="email" />
      </LabelLoginForm>
      <LabelLoginForm >
        <SpanLoginForm>Password</SpanLoginForm>
        <InputLoginForm type="password" name="password" />
      </LabelLoginForm>
      <FormLoginFormBtn type="submit">Log In</FormLoginFormBtn>
    </FormLogin>
  );
};
