export type ApiResponse<T = any> = {
  data?: T
  message?: string
  errors?: Record<string, string>[]
}

export type User = {
  id: number
  email: string
  name: string
}
