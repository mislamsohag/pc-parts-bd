import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './Routes/PublicRouts';
import Navbar from './Componants/Navbar';
import RequireAuth from './Authentication/RequireAuth';
import { privateRoute } from './Routes/privateRoute';



function App() {

  return (
    <>
      <Navbar>
        <div className='max-w-7xl mx-auto px-12'>
          <Routes>
            {
              publicRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
            }

            <Route element={<RequireAuth />}>
              {
                privateRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
              }
            </Route>
          </Routes>
        </div>
      </Navbar>
    </>
  );
}

export default App;
