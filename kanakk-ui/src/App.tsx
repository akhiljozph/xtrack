import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes?.map((route) => {
          const Element = route.element;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={<Element />}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
