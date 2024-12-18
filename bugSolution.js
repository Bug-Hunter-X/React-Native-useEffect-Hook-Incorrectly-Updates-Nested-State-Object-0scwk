The solution is to ensure that React Native correctly detects changes in the object. The two most effective methods are:

**Method 1: Create a new object using spread syntax**
```javascript
useEffect(() => {
  setMyState({ ...myState, nested: { ...myState.nested, count: myState.nested.count + 1 } });
}, [myState.nested.count]);
```
This explicitly creates a new object, which React can reliably detect.

**Method 2: Use Immer library**
Immer simplifies the process of creating immutable updates. Install it using: `npm install immer`
```javascript
import produce from 'immer';

useEffect(() => {
  setMyState(produce(draft => {
    draft.nested.count += 1;
  }));
}, [myState.nested.count]);
```
Immer handles the creation of a new object internally, greatly improving the code clarity and reducing the chance of errors. This is often preferred for more complex state updates.