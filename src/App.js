import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';

function App() {
  return (
    <div style={{ background: 'linear-gradient(to right, #e66465, #9198e5)' }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
