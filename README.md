### Assignment

We need a web site for our impacters to administer their posts.

Create a web site, the user should be able to

- see all posts
- update a post
- delete a post
- open a post in a modal by clicking the post
- go to the next and previous post in modal mode
- delete and update a post in modal mode

If you feel you have the time, you can also add support for the user to create a new post by uploading a new image to the API.

**Make sure to write down what you would have done if you had more time, and submit it together with the rest of the assignment.**

## API

We provided a small api for you to use during the development. The api runs on [http://localhost:3001](http://localhost:3001). Below you can find a list of all endpoints. You can find the swagger documentation for the api at [http://localhost:3001/docs](http://localhost:3001/docs)

`GET /impacters` - List all impacters

`GET /impacters/:id` - Get a impacter

`GET /impacters/:id/posts` - Get all posts for an impacter

`GET /posts?limit={}&offset={}` - List posts, if no limit is set it will list all posts

`POST /posts` - Create a new post

`GET /posts/:id` - Get a post

`PUT /posts/:id` - Update a post

`DELETE /posts/:id` - Delete a post

`POST /upload` - Upload a new image and get a url back

If you want the api to generate new data remove the `./mock/data.json` file. Please be aware that this will take some time and will be done by the server on the next start. The server will not start until it's done generating data.

## Images

All images follow this url structure `https://picsum.photos/id/{pictureId}/{width}/{height}` and are given in their original size from the API.

You can change the size of an image by changing the two last values of the path.

Example:

Original: https://picsum.photos/id/1000/5626/3635

Downsize to 308 x 199: https://picsum.photos/id/1000/308/199


## Comments
If I had more time, I would:
* Do this task using Redux to skip passing data and bunch of functions through props.
* Load posts with limit of 100 items with its further loading.
* Make better UI (play with text, buttons, etc), especially of Post Edit and put it in some Form common component with fields validation.
* Write more tests.