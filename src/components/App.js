import '../styles/App.css';
import Landing from './Landing';
// import { Switch, Route, useRouteMatch } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Switch> */}
      {/* <Route exact path="/"> */}
      <Landing></Landing>
      {/* </Route> */}
      {/* <Route path="/home"> */}
      <header className="header">
        <nav>
          <a href="#main">Sobre mi</a>
          <a href="#about_me">Proyectos</a>
        </nav>
      </header>
      <main className="main">
        <section id="about_me" className="about_me">
          <h2>Sobre mi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis ullam officiis dolorum quas, reprehenderit distinctio explicabo labore itaque qui, saepe sequi aperiam. Reiciendis eos repellendus ad dolore vitae omnis.</p>
        </section>
        <section id="projects" className="projects">
          <h2>Proyectos</h2>
          <ul>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <nav>
          <ul>
            <li><a href="." target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="." target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="." target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></li>
          </ul>
        </nav>
      </footer>
      {/* </Route> */}
      {/* </Switch> */}
    </>
  );
}

export default App;
