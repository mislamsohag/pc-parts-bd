import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './Routes/PublicRouts';
import Navbar from './Componants/Navbar';



function App() {

  return (
    <>
      <Navbar>
        <div className='max-w-7xl mx-auto px-12'>
          <Routes>
            {
              publicRoute.map(({ path, Component }, index) => (<Route key={index} path={path} element={<Component />} />))
            }
          </Routes>
        </div>
      </Navbar>
    </>
  );
}

export default App;
