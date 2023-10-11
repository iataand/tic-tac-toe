import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import StartGamePage from "./components/StartGamePage";
import GamePage from "./components/GamePage";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "loading..." }),
    Component() {
      return <StartGamePage />;
    },
  },
  {
    path: "/new-game",
    loader: () => ({ message: "loading..." }),
    Component() {
      return <GamePage />;
    },
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
