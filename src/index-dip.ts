import {PostInteractor} from "./business-logic-dip";
import {RestApiGateway} from "./RestApiGateway";

new PostInteractor(new RestApiGateway('https://my-json-server.typicode.com/typicode/demo/posts')).getPostTitle()
  .then(title => {
    console.log(`title = ${title}` )
  })
