import Main from "../components/Main";
import Admin from "../pages/Admin";

export const routesList = [
  {
    id: 1,
    route: '/',
    element: <Main />,
  },
  {
    id: 2,
    route: '/admin',
    element: <Admin />,
  },
]