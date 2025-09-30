# React State Management

## React State Quirks

- [Render and Commit](https://react.dev/learn/render-and-commit)
- [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
- [Queing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)

### State is immutable

Recall that state in React is immutable and should never be changed directly. An example of attempting to mutate state directly might look something like this:

```jsx
// ! Don't do this!!
const handleDarkMode = () => {
  console.log("Dark Mode!");
  isDarkMode = true;
};
```

React only knows to re-render after a setter function is called. When state is directly changed, React is left in the dark, which causes state to de-sync from the UI.

## For Level Up Notes

[Complex State Management](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management/updating-complex-state/)
