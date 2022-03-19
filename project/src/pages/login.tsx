import {ChangeEvent, FormEvent, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';

import {AppRoutes, AuthorizationStatus} from '../const';
import {useAppDispatch, useAppSelector} from '../hooks/store';
import {login} from '../store/api-actions';

function Login(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {city} = useAppSelector(({MAIN}) => MAIN);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoutes.Main} />;
  }

  function onChangeEmail(evt: ChangeEvent<HTMLInputElement>) {
    setEmail(evt.target.value);
  }

  function onChangePassword(evt: ChangeEvent<HTMLInputElement>) {
    setPassword(evt.target.value);
  }

  function authenticate(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(login({email, password}));
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action='#' method="post" onSubmit={authenticate}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoutes.Main}>
              <span>{city.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
