import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';
import Notice from './pages/Notice';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="course" element={<Course />} />
        <Route path="about" element={<About />} />
        <Route path="notice" element={<Notice />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
