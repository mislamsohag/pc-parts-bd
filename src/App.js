import { Route, Routes } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import RequireAuth from './Authentication/RequireAuth';
import { privateRoutes } from './Routes/privateRoutes';
import { publicRoutes } from './Routes/PublicRouts';
import RequireAdmin from './Authentication/RequireAdmin';
import { adminRoutes } from './Routes/adminRoutes';
import Dashboard from './Dashboard/Dashboard';



function App() {

  return (
    <>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
          }

          <Route element={<RequireAuth />}>
            {
              privateRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
            }
          </Route>

          <Route element={<RequireAdmin />}>
            <Route path='/dashboard' element={<Dashboard />}>
              {
                adminRoutes.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
              }
            </Route>
          </Route>
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
