import axios from 'axios'
import { useRouter } from 'next/router'
import { useQuery, useQueryClient } from 'react-query'

import { getCurrentUser } from './users.service'

export const USER_QUERY_KEY = 'user'

export const useAuth = () => {
  const { data } = useQuery(USER_QUERY_KEY, getCurrentUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })

  const queryClient = useQueryClient()
  const router = useRouter()

  const logout = async () => {
    queryClient.removeQueries(USER_QUERY_KEY)
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem('token')
    await router.push('/')
  }

  return {
    user: data,
    logout
  }
}
