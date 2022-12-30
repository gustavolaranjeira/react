import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/react" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
