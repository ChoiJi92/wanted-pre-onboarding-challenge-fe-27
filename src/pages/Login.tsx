import useFormValues from '@/hooks/useFormValues'
import Button from '@/components/shared/Button'
import TextField from '@/components/shared/TextField'
import { FormEvent } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import useLogin from '@/hooks/useLogin'

const cx = classNames.bind(styles)

const Login = () => {
  const { formValues, dirty, hasError, handleFormValues, handleBlur } =
    useFormValues()
  const { mutate, isPending } = useLogin()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ email: formValues.email, password: formValues.password })
  }

  const buttonDisabled = hasError.email || hasError.password

  return (
    <form onSubmit={onSubmit} className={cx('container')}>
      <h2>회원가입</h2>
      <TextField
        value={formValues.email}
        name="email"
        onBlur={handleBlur}
        onChange={handleFormValues}
        type="email"
        label="이메일"
        errorMessage="이메일 형식을 확인해주세요"
        hasError={dirty.email && hasError.email}
      />
      <TextField
        value={formValues.password}
        name="password"
        onBlur={handleBlur}
        onChange={handleFormValues}
        type="password"
        label="비밀번호"
        errorMessage="비밀번호는 8글자 이상 입력해주세요"
        hasError={dirty.password && hasError.password}
      />
      <Button
        label="로그인"
        type="submit"
        disabled={buttonDisabled || isPending}
      />
    </form>
  )
}

export default Login
