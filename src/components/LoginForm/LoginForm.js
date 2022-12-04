import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import toast from 'react-hot-toast';
import { FormLogin, LabelLoginForm, SpanLoginForm, FormLoginFormBtn, InputLoginForm  } from './LoginForm.styled';
// import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const isLogged = useSelector(selectIsLoggedIn);
  //  const error = useSelector(selectError);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const { error } = await dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );


    if (!error) {
      form.reset();
      return;
    }
    toast('Something went wrong. Check the correctness of the data');
    // alert('Something went wrong. Check the correctness of the data');
  };
     

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="on">
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
