import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import { FormLogin, LabelLoginForm, SpanLoginForm, FormLoginFormBtn, InputLoginForm  } from './LoginForm.styled';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!error) {
       dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    }

    return alert('Something went wrong. Check the correctness of the data');
   
   
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
