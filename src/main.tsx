import { RouterProvider, createBrowserRouter } from "react-router-dom";
/* import { Provider } from "react-redux"; */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      /*     <>
        <Provider store={store}> */
      <App></App>
      /*    </Provider>
      </> */
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
