var someone = 'Typescript'

class RestApiClient {
  getPost(): string {
    const result = "POST result"
    console.log('RestApiClient.getPost(): result = ' + result)
    return result
  }
}

const restApiClient = new RestApiClient()

restApiClient.getPost()
