import { FocusEventHandler, forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import styles from './TextField.module.scss'

const cx = classNames.bind(styles)

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  errorMessage?: React.ReactNode
  textarea?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hasError, errorMessage, onBlur, ...props }, ref) => {
    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      onBlur?.(event)
    }
    return (
      <div className={cx('container')}>
        {label && <span className={cx('label')}>{label}</span>}
        <input
          className={cx('input')}
          ref={ref}
          aria-invalid={hasError}
          onBlur={handleBlur}
          {...props}
        />
        {hasError && errorMessage && (
          <span className={cx('error')}>{errorMessage}</span>
        )}
      </div>
    )
  },
)

export default TextField
