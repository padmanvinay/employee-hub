/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-[2rem] flex items-center justify-between p-6">
        <div className="flex flex-row gap-2">
          <img src="/image.png" height={20} width={25} />
          <h1 className="font-semibold">MyWageBook</h1>
        </div>
        <DarkModeToggle />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
