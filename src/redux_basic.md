# Exsample Redux
### 78. The Basics of Redux & 79. More on Redux

```javascript
//เซ็ตการทำงานของ reducer
const reducer = (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_char') {//เพิ่ม
    //state.push(action.payload);
    //return state;
    return [ ...state, action.payload ];
  }
  
  return state;
};

//สร้าง store
const store = Redux.createStore(reducer);
store.getState();

//เช็ตการกระทำตาม type และส่งค่าลงไปใน payload
const action = { 
  type: 'split_string',
  payload: 'asdf'
};
store.dispatch(action);
store.getState();

//เซ็ตการทำใหม่
const action2 = { 
  type: 'add_char',
  payload: 'qwer'
};
store.dispatch(action2);
store.getState();
```