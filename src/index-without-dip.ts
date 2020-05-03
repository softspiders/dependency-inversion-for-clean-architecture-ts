import {PostInteractor} from "./business-logic-without-dip";

new PostInteractor().getPostTitle('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(title => {
    console.log(`title = ${title}` )
  })
