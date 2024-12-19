import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import NoMatch from "./pages/NoMatch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {/* Index = Startseite */}
        <Route index element={<Home />} />
        <Route path="images/:imgId/:slug" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
