import React from 'react';
import st from './Login.module.scss';
import logo from '../../assets/images/logo.png';
import cx from 'classnames';
import Input from '../../components/Input';
import Text from '../../components/Text';
import {ReactComponent as Edit} from '../../assets/images/edit.svg';

const Login = () => {
  const [toggle, setToggle] = React.useState(false)
  const handleToggle = () => {
    setToggle(true)
    setFormData(defaultState)
  }
  const handleClose = () => {
    setToggle(false)
    setFormData(defaultState)
  }

  const defaultState = {
    email: '',
    password: '',
    repeat: '',
  }
  const [formData, setFormData] = React.useState(defaultState)

  const handleInputChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  const [isEqual, setIsEqual] = React.useState(undefined)
  const passwordRef = React.useRef(null)
  const repeatRef = React.useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (passwordRef.current.value !== repeatRef.current.value) {
      setIsEqual(true)
      return
    }
    console.log('!!! formData:', formData)
    setFormData(defaultState)
  }

  return (
    <div className={st.root}>
      <div className={st.headerLogo}>
        <img src={logo} alt="Triple triad"/>
      </div>
      <div className={cx(st.container, toggle && st.active)}>
        <div className={st.card}/>
        <div className={st.card}>
          <h1 className={st.title}>Login</h1>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className={st.inputContainer}>
              <Input
                id="#email"
                type="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className={st.bar}/>
            </div>
            <div className={st.inputContainer}>
              <Input
                id="#password"
                type="password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleInputChange}
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
          <form onSubmit={handleSubmit}>
            <div className={st.inputContainer}>
              <Input
                id="#signup-email"
                type="email"
                name="email"
                value={formData.email}
                required={true}
                label="Email"
                onChange={handleInputChange}
              />
              <div className={st.bar}/>
            </div>
            <div className={st.inputContainer}>
              <Input
                id="#signup-password"
                type="password"
                name="password"
                required={true}
                reference={passwordRef}
                value={formData.password}
                label="Password"
                onChange={handleInputChange}
              />
              <div className={st.bar}/>
            </div>
            <div className={st.inputContainer}>
              <Input
                id="#signup-repeat-password"
                type="password"
                name="repeat"
                required={true}
                reference={repeatRef}
                value={formData.repeat}
                label="Repeat Password"
                onChange={handleInputChange}
              />
              <div className={st.bar}/>
              {isEqual && <Text>Repeat password correct</Text>}
            </div>
            <div className={st.buttonContainer}>
              <button><span>Register</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;