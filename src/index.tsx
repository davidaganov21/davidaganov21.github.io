import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createHashRouter } from "react-router-dom"

import Main from "./pages/Main"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"

import "./services/i18n"
import "./assets/styles/main.sass"

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  }
])

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
