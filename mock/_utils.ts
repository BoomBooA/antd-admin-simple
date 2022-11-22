export function errorResponse(message: string) {
  return {
    code: 0,
    message
  }
}

export function successResponse(data?: any) {
  return {
    code: 1,
    message: 'ok',
    data
  }
}
