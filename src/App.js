import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Category />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
