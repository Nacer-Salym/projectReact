import React from 'react';
import ReactDOM from 'react-dom/client';


import  {Provider} from "react-redux"








import App from "./myFurstRouter/App"
import Store from "./myFurstRouter/Store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
      <App/>
  </Provider>
)


