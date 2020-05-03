import {fetchPostTitle} from "./rest-api-client-without-dip";
import {PostUseCaseOut} from "./business-logic-dip";

export class RestApiGateway implements PostUseCaseOut {
  constructor(private readonly endpoint: string) {}

  async getPostTitle(): Promise<string> {
    return await fetchPostTitle(this.endpoint)
  }
}
