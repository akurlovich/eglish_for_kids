import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionType } from '../redux/mainReducer';

const LoginPage: FC = () => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameDirty, setuserNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [userNameError, setuserNameError] = useState('Insert user name "admin"');
  const [passwordError, setPasswordError] = useState('Insert password "admin"');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (userNameError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [userNameError, passwordError])

  const history = useHistory();
  const dispatch = useDispatch();

  const handlerCanselBtn = () => {
    history.push('/');
  }
  const handlerLoginBtn = () => {
    dispatch({
      type: actionType.showLogin,
    });
    history.push('/category');
  }
  const blurHandler = (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if ((event.target.name) === 'userName') {
      setuserNameDirty(true);
    }
    if ((event.target.name) === 'password') {
      setPasswordDirty(true);
    }
  }
  const userNameHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setuserName(event.target.value);
    if (event.target.value !== 'admin') {
      setuserNameError('insert "admin"');
    } else {
      setuserNameError('')
    }
  }
  const passwordHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== 'admin') {
      setPasswordError('insert "admin"');
    } else {
      setPasswordError('')
    }
  }
  return (
    <div className='login_wrapper'>
      <div className="login_container">
        <h1 style={{fontSize: "30px", fontWeight: 800}} className='login_title'>Login</h1>
          {(userNameDirty && userNameError) && <div style={{color:'red'}}>{userNameError}</div>}
          <TextField
          onBlur={blurHandler}
          onChange={userNameHandler}
          value={userName}
          name='userName'
          style={{maxWidth: '400px', width: '100%'}}
          label={'User name'}
          helperText="Incorrect entry."
          />
          {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
          <TextField
          value={password}
          onChange={passwordHandler}
          onBlur={blurHandler}
          name='password'
          style={{maxWidth: '400px', width: '100%'}}
          label={'Password'}
          />
          <div className="login_btns">
            <Button
              onClick={handlerCanselBtn}
              style={{width: '120px'}}
              variant="contained" color="secondary">
              Cansel
            </Button>
            <Button
              disabled={!formValid}
              onClick={handlerLoginBtn}
              style={{width: '120px'}}
              variant="contained" color="primary">
              Login
            </Button>
          </div>

      </div>
    </div>
  );
};

export default LoginPage;