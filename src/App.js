import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddNote from "./Pages/AddNote/AddNote";
import NoteDetails from "./Pages/NoteDetails/NoteDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddNote />,
  },
  {
    path: "/note/:id",
    element: <NoteDetails />,
  },
  
  // { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
