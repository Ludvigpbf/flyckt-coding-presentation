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
    /*  children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/work",
        element: <Work></Work>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/for-developers",
        element: <Devs></Devs>,
      },
    ], */
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
