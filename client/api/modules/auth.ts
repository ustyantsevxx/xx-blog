import axios from 'axios'
import { setCookies } from 'cookies-next'

import { EmailPassword } from '../../types'
import { ApiResponse, User } from '../types'

type SignInData = {
  user: User
  accessToken: string
}

export const signIn = async ({
  email,
  password
}: EmailPassword): Promise<ApiResponse<SignInData>> => {
  try {
    const response = await axios.post<SignInData>(
      'http://localhost:8000/auth/login',
      {
        email,
        password
      }
    )

    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.accessToken}`
    setCookies('token', response.data.accessToken, {
      maxAge: 60 * 60 * 24 * 7
    })

    return {
      data: response.data
    }
  } catch (error: any) {
    return {
      message: error.response.data.message
    }
  }
}
