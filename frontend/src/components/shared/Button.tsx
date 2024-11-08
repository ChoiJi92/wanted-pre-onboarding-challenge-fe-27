import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react'
import LoadingIndicator from './LoadingIndicator'

const cx = classNames.bind(styles)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  isLoading?: string
}

const Button = ({ label, isLoading, ...props }: ButtonProps) => {
  return (
    <button className={cx('container')} {...props}>
      {isLoading ? <LoadingIndicator /> : label}
    </button>
  )
}

export default Button
