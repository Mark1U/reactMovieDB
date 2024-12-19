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
        <Route path="/date-asc" element={<Home sort={0} />} />
        <Route path="date-desc" element={<Home sort={1} />} />
        <Route path="/" element={<Home sort={2} />} />
        <Route path="a-z" element={<Home sort={3} />} />
        <Route path="z-a" element={<Home sort={4} />} />
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
