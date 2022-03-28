import axios from 'axios'

import { User } from '../../types'

export const getCurrentUser = async (): Promise<User> => {
  const response = await axios.get('http://localhost:8000/users/me')
  return response.data
}
