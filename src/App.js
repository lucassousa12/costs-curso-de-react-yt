import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container/Index'

import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/novoProjeto">Novo Projeto</Link>
        </li>
      </ul>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/empresa" element={<Company />}></Route>

          <Route path="/contato" element={<Contact />}></Route>

          <Route path="/novoProjeto" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <p>Footer</p>
      <GlobalStyle />
    </Router>
  );
}

export default App;
