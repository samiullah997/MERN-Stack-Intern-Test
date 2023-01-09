import { Outlet, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './components/sidebar.css';

const SidebarLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="body-style">
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route index path="/user/home" element={<Home />} />
          <Route index path="/user/home1" element={"Home1"} />
          <Route index path="/user/home2" element={"Home2"} />
          <Route index path="/user/home3" element={"Home3"} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;