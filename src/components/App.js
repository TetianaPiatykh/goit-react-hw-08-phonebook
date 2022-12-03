import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
// import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from 'hooks';


const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {

const dispatch = useDispatch();
const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    // dispatch(fetchContacts());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        width: '100%',
          color: '#010101'}}>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
      </Route>
    </Routes>
  );
};

//   return (
     
//     <AppForm
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 36,
//           color: '#010101'
        
//       }}
//     >
//       {/* <RegisterForm />
//       <LoginForm/> */}
//       <FirstTitle>Phonebook</FirstTitle>     
//       <Form />
//       <SecondTitle>Contacts</SecondTitle>    
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//        {contacts && !isLoading && <ContactList />}
//       {/* <ContactList /> */}
//     </AppForm>
//   );
  
 
// };

