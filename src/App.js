import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home/Index'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects/Index'
import NewProject from './components/pages/NewProject/Index'

import Navbar from './components/layout/Navbar/Index'
import Footer from './components/layout/Footer/Index'
import Container from './components/layout/Container/Index'

import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/empresa" element={<Company />}></Route>

          <Route path="/contato" element={<Contact />}></Route>

          <Route path="/novoProjeto" element={<NewProject />}></Route>

          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Container>

      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
