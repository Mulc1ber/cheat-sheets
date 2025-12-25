# Пример реализации сохранения списка продуктов в хранилище (store) с помощью React-Redux:

Описание

1.  Создайте экшены (actions) для работы с продуктами:

```javascript
// actions.js

export const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
```

2.  Создайте редюсер для обработки действий с продуктами:

```javascript
// reducers.js

import { SET_PRODUCTS } from "./actions";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
```

3.  Создайте хранилище и объедините редюсеры:

```javascript
// store.js

import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
```

4.  Используйте хранилище в вашем приложении:

```javascript
// App.js

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./actions";
import store from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Здесь вы делаете запрос к базе данных для получения списка продуктов
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];
    dispatch(setProducts(products));
  }, [dispatch]);

  return <div>Ваше приложение здесь</div>;
};

export default App;
```
