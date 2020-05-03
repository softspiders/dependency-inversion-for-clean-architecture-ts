export interface PostUseCaseIn {
  getPostTitle(url: string): Promise<string>
}

export interface PostUseCaseOut {
  getPostTitle(): Promise<string>
}

export class PostInteractor implements PostUseCaseIn {
  constructor(private postUseCaseOut: PostUseCaseOut) {}

  async getPostTitle(): Promise<string> {
    return await this.postUseCaseOut.getPostTitle()
  }

}
