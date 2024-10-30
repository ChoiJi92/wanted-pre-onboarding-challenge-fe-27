import { FocusEventHandler, forwardRef, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames/bind'
import styles from './TextField.module.scss'

const cx = classNames.bind(styles)

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode
  hasError?: boolean
  errorMessage?: React.ReactNode
  textarea?: boolean
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, hasError, errorMessage, onBlur, ...props }, ref) => {
    const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      onBlur?.(event)
    }
    return (
      <div className={cx('container')}>
        {label && <span className={cx('label')}>{label}</span>}
        <textarea
          className={cx('textarea')}
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

export default TextareaField
