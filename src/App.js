import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* <Route path="header" element={<Header/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
