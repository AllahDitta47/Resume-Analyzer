import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Auth/Home/Home';
import User from './Pages/User';
import FileUploadPage from './Pages/FileUpload';
import JobDescriptionInput from './Component/JobDescriptionInput';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import LearnMore from './Pages/Details';                                                



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Root route */}
        <Route path='/home' element={<Home />} />
        <Route path='/job' element={<JobDescriptionInput />} />
        <Route path='/file' element={<FileUploadPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
       
<Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
