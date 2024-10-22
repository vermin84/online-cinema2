export async function fetchData() {
  try {
    const response = await fetch(
      "https://api.service-kp.com/oauth2/token?grant_type=refresh_token&client_id=myclient&client_secret=mysecret&refresh_token='asdfghjkl123456789'"
    )
    if (!response.ok) {
      throw new Error('Ошибка при получении данных:', response.status)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка:', error)
    return null
  }
}
