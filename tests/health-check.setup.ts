import { test } from '../utils/test'

test('home page check', async ({ constants }) => {
  try {
    const response = await fetch(constants.webClientURL)

    if (response.status === 200) {
      console.log('Health check home page completed')
    } else {
      console.error(`API call failed with status code: ${response.status}`)
    }
  } catch (error) {
    console.error('An error occurred during the API call:', error)
  }
})
test('sign in page check', async ({ constants }) => {
  try {
    const response = await fetch(`${constants.webClientURL}/users/sign_in`)

    if (response.status === 200) {
      console.log('Health check for sign in page completed')
    } else {
      console.error(`API call failed with status code: ${response.status}`)
    }
  } catch (error) {
    console.error('An error occurred during the API call:', error)
  }
})

test('sign up page check', async ({ constants }) => {
  try {
    const response = await fetch(`${constants.webClientURL}/users/sign_up`)

    if (response.status === 200) {
      console.log('Health check for sign up page completed')
    } else {
      console.error(`API call failed with status code: ${response.status}`)
    }
  } catch (error) {
    console.error('An error occurred during the API call:', error)
  }
})
