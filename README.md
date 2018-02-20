# Basic Network/API Requests Practice

### Step One:

Clone down [this repo](https://github.com/turingschool-examples/ajax-lesson-FE)
* `npm install`
* `npm start`

Visit **`http://localhost:8080/public/`**

### Step Two:

Working in the `Main.jsx` file, see if you can _`GET`_ data from this endpoint displaying in your console and then set it to the `triviaArray` in state.

```
https://opentdb.com/api.php?amount=10&category=27&type=multiple
```

_HINT_: You'll probably want to ensure your component is fully rendered (*cough* Mounted *cough*) before grabbing the data.

### Step Three:

Once you successfully have the trivia set in state, see if you can add some code to the `TriviaList.js` file that will append the data to the DOM.

_HINT:_ Look how the `triviaArray` in state of the `Main` component is being passed down to the child components.

### Step Four:

You should now have 10 trivia displaying to the page on load. Now can you add some code so that when a user enters a new quantity in the input and presses `Get Trivia`, a new set of trivia matching that quantity appears?

_HINT(S):_

* Take a look at the `Controls` component, some actions are already passed up for you
* You may have to move your `GET` request out of your `componentDidMount` method
* What could that `qty` property in state possibly be for?...

##### Further Reading:

* [The Evolution of Asyncronous Javascript](https://blog.risingstack.com/asynchronous-javascript/)
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
