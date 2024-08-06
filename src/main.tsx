import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import "./styles/styles.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { theme } from "./styles/themes/theme";
import { ThemeProvider } from '@emotion/react'
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import WelcomePage from './pages/welcome-page/welcome-page.tsx'
import AboutPage from './pages/aboute-page/about-page.tsx'
import PaymentPlanPage from './pages/payment-plan-page/payment-plan-page.tsx'
import TeacherPage from './pages/teacher-page/teacher-page.tsx'
import StudentPage from './pages/student-page/student-page.tsx'
import AdminPage from './pages/admin-page/admin-page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <WelcomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/payment-plan',
        element: <PaymentPlanPage />
      },
      {
        path: '/teacher',
        element: <TeacherPage />
      },
      {
        path: '/student',
        element: <StudentPage />
      },
      {
        path: '/admin',
        element: <AdminPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
