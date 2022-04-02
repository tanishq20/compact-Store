import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Auth.module.css'
import axios from 'axios'
import { Toast } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context'
import { checkInputs } from '../../formValidation/formValidation'

export const LoginAuth = () => {
  let navigate = useNavigate()

  const defaultLoginForm = {
    email: '',
    password: '',
  }

  const { authDispatch } = useAuth()

  const [loginForm, setLoginForm] = useState(defaultLoginForm)
  const [showPassword, setShowPassword] = useState(false)
  const [formValidation, setFormValidation] = useState(false)
  const [inputValidation, setInputValidation] = useState({
    email: { isValid: true, errorMsg: '' },
    password: { isValid: true, errorMsg: '' },
  })

  useEffect(() => {
    let flag = true
    Object.entries(inputValidation).forEach((item) => {
      if (!item[1].isValid) {
        flag = false
      }
    })
    setFormValidation(flag)
  }, [inputValidation])

  const loginFormChangeHandler = (e) => {
    const { name, value } = e.target
    const validateValue = checkInputs(name, value)
    setInputValidation((prev) => ({ ...prev, [name]: { ...validateValue } }))
    setLoginForm({ ...loginForm, [name]: value })
  }

  const guestLoginHandler = () => {
    setLoginForm({ email: 'guest@gmail.com', password: 'Guest123456' })
  }

  const loginFormSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: loginForm.email,
        password: loginForm.password,
      })
      if (response.status === 200) {
        setLoginForm(defaultLoginForm)
        authDispatch({
          type: 'GET_LOGIN_SUCCESS',
          userDetailsPayload: response.data.foundUser,
          encodedTokenPayload: response.data.encodedToken,
        })
        localStorage.setItem('encodedToken', response.data.encodedToken)
        localStorage.setItem('firstName', response.data.foundUser.firstName)
        navigate('/products', { replace: true })
        Toast('Login Successfull', 'success')
      }
    } catch (error) {
      Toast('Login Failed, try again later', 'error')
    }
  }

  return (
    <main>
      <div className={`${style.auth_wrapper} w-full rounded-5`}>
        <form
          className={`${style.auth_body} d-flex flex-col`}
          onSubmit={(e) => loginFormSubmitHandler(e)}
        >
          <div className={style.auth_head}>Login</div>
          <div className={`${style.form_container} d-flex flex-col`}>
            <div
              className={`input-container ${
                loginForm.email &&
                (inputValidation.email.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='email' className='input-label'>
                Email Address <span className='required-mark'>*</span>
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={loginForm.email}
                onChange={(e) => loginFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              {loginForm.email &&
                (inputValidation.email.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.email.msg}{' '}
                    {inputValidation.email.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.email.msg}{' '}
                    {inputValidation.email.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`input-container ${
                loginForm.password &&
                (inputValidation.password.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='password' className='input-label'>
                Password <span className='required-mark'>*</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                value={loginForm.password}
                onChange={(e) => loginFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              <div onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <i
                    className={`fa-solid fa-eye-slash ${style.password_icon}`}
                  ></i>
                ) : (
                  <i className={`fa-solid fa-eye ${style.password_icon}`}></i>
                )}
              </div>
              {loginForm.password &&
                (inputValidation.password.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.password.msg}{' '}
                    {inputValidation.password.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.password.msg}{' '}
                    {inputValidation.password.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`${style.auth_form_subsection} d-flex align-items-center justify-content-between`}
            >
              <div className='input-selector'>
                <input
                  type='checkbox'
                  name='rememberMe'
                  id='rememberMe'
                  className='input-selector-field'
                />
                <label htmlFor='rememberMe' className='input-selector-label'>
                  Remember me
                </label>
              </div>
              <Link to={'/login'} className={style.auth_form_link}>
                Forgot your password?
              </Link>
            </div>
            <button
              disabled={formValidation ? false : true}
              className={`btn btn-primary w-full ${
                formValidation ? '' : 'pointer-none'
              }`}
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
        <div className={`${style.auth_body} d-flex flex-col`}>
          <button
            disabled={formValidation ? false : true}
            className={`btn btn-default w-full ${style.mt2} ${
              formValidation ? '' : 'pointer-none'
            }`}
            onClick={guestLoginHandler}
          >
            Guest Login
          </button>
          <p className={style.auth_form_ask}>
            Not a user yet?{' '}
            <Link to={'/signup'} className={style.auth_form_ask_link}>
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
