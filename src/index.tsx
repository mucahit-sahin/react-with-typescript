import ReactDOM from "react-dom";
import "./index.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./store";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
