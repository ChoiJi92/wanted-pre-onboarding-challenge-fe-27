import { FormErrors, FormValues } from '@/types/formValues'
import { validateEmail, validatePassword } from '@/utils/validator'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

function validate(formValues: FormValues) {
  const errors: Partial<FormErrors> = {}

  if (!validateEmail(formValues.email)) {
    errors.email = true
  }

  if (!validatePassword(formValues.password)) {
    errors.password = true
  }

  if (
    !validatePassword(formValues.rePassword) ||
    formValues.password !== formValues.rePassword
  ) {
    errors.rePassword = true
  }

  return errors
}

const useFormValues = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
  })

  const [dirty, setDirty] = useState<FormErrors>({
    email: false,
    password: false,
    rePassword: false,
  })

  const hasError = useMemo(() => validate(formValues), [formValues])

  const handleFormValues = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    },
    [formValues],
  )

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setDirty({
      ...dirty,
      [e.target.name]: true,
    })
  }
  return { formValues, hasError, dirty, handleFormValues, handleBlur }
}

export default useFormValues
