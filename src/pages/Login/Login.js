import React from 'react';
import {ReactComponent as Edit} from '../../assets/images/edit.svg';
import logo from '../../assets/images/logo.png';
import cx from 'classnames'
import st from './Login.module.scss'
import PropTypes from 'prop-types';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const [toggle, setToggle] = React.useState(false)
  const handleToggle = () => setToggle(true)
  const handleClose = () => setToggle(false)

  return (
    <div className={st.root}>
      <div className={st.headerLogo}>
        <img src={logo} alt="Triple triad"/>
      </div>
      <div className={cx(st.container, toggle && st.active)}>
        <div className={st.card}/>
        <div className={st.card}>
          <h1 className={st.title}>Login</h1>
          <form autoComplete="off">
            <div className={st.inputContainer}>
              <Input
                id="#email"
                type="email"
                required={true}
                label="Email"
              />
              <div className={st.bar}/>
            </div>
            <div className={st.inputContainer}>
              <Input
                id="#password"
                type="password"
                required={true}
                label="Password"
              />
              <div className={st.bar}/>
            </div>
            <div className={st.buttonContainer}>
              <button><span>Go</span></button>
            </div>
          </form>
        </div>

        <div className={cx(st.card, st.alt)}>
          <div className={cx(st.toggle, toggle && st.active)} onClick={handleToggle}>
            <Edit/>
          </div>
          <h1 className={st.title}>
            Register
            <div className={st.close} onClick={handleClose}/>
          </h1>
          <form>
            <div className={st.inputContainer}>
              <Input
                id="#signup-email"
                type="email"
                required={true}
                label="Email"
              />
              <div className={st.bar}/>
            </div>
            <div className={st.inputContainer}>
              <Input
                id="#signup-password"
                type="password"
                required={true}
                label="Password"
              />
              <div className={st.bar}/>
            </div>
            <div className={st.inputContainer}>
              <Input
                id="#signup-repeat-password"
                type="password"
                required={true}
                label="Repeat Password"
              />
              <div className={st.bar}/>
            </div>
            <div className={st.buttonContainer}>
              <Button>

              </Button>
              <button><span>Register</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;