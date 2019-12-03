1. What problem does the context API help solve?

It removes the need to pass props down from component to component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: dispatched happenings that are processed that accept previous state and returns next state.

Reducers: functions that take in the current state and action and return the updated state object based on them.

Store: immutable state tree where all state changes are handled by dispatching actions. It's known as the single source of truth because it's not rewritten or reshaped, allowing us to easily grab needed information and keep a clean structure for our app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a state that's used throughout an application, whereas a Component state is local to the component it's in.

Being logged in and account settings would be a good time to use Application state.

Forms and feedback to a user would be a good time to use Component state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A middleware that allows us to handle asynchronous operations inside of our Action Creators. It changes our ACs by intercepting and acting on returned data the AC received.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I don't really think I have a favorite because they all have their uses and quirks.
