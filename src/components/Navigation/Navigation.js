
import { useAuth } from 'hooks';
import { NavigationLink } from './Navigation.styled';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && (
        <NavigationLink to="/contacts">
          Contacts
        </NavigationLink>
      )}
    </nav>
  );
};
