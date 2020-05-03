import fetch from 'cross-fetch'

export async function fetchPostTitle(url: string) {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const json = await response.json()
      return json[0].title
    }
  } catch (error) {
    console.error(error)
  }
}


