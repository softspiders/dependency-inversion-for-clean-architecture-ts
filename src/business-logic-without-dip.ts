import {fetchPostTitle} from "./rest-api-client-without-dip";

export interface PostUseCaseIn {
  getPostTitle(url: string): Promise<string>
}

export class PostInteractor implements PostUseCaseIn {
  async getPostTitle(url: string): Promise<string> {
    const result: string = await fetchPostTitle(url)
    return result
  }
}
