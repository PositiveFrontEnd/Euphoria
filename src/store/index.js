// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers.js";
// import logger from "redux-logger";

// export default configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// });
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers.js";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
