# React Native useEffect Hook Incorrectly Updates Nested State Object

This repository demonstrates a bug in React Native where the `useEffect` hook fails to correctly update a state object when modifying deeply nested properties within a functional update. The UI does not reflect the changes, even though the state appears to be updated.  The issue is caused by React's shallow comparison of state objects.  Solutions to correct this problem are provided in `bugSolution.js`.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app on an Android or iOS emulator/device. Observe that incrementing the nested property does not update the UI correctly. 

## Bug Solution

Refer to `bugSolution.js` for two corrected approaches that address this issue: using `immer` for immutable updates and creating a new state object.