import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import toast from 'react-hot-toast';
import { FormRegister, LabelRegister, SpanRegister, FormRegisretBtn, InputRegisterForm } from './RegisterForm.styled';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.password.value.length < 7) {
      toast('Something went wrong. Try to change the data');
    
      // alert('Something went wrong. Try to change the data');
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

     if (isLogged) {
      form.reset();
    }
      
      
    

      // return alert('Something went wrong. Try to change the data');


   
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

