import useAuthStore from '@/zustand/auth'
import React from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactElement
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { token } = useAuthStore()

  // token이 없으면 로그인 페이지로 리디렉트
  return token ? children : <Navigate to="/login" replace />
}

export default PrivateRoute
