import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GroupDetails from './components/GroupDetails.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:  <GroupDetails/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
