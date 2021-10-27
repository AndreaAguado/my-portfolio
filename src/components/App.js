import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
// import { Switch, Route, useRouteMatch } from 'react-router-dom';

import projects from '../data/data.json';

function App() {

  const renderProjects = () => {
    return projects.map((project, index) => {
      return (
        <li id={index} key={index}>
          <div className="project_card">
            <a href={project.pageLink} target="_blank" rel="noreferrer" title="Ir a la página">
              <img src={project.preview} alt={project.title_alt} />
              <a href={project.githubRepo} target="_blank" rel="noreferrer" title="Repositorio en Github"><i className="fab fa-github"></i>
              </a>
            </a>
          </div>

        </li>
      )
    })
  }



  return (
    <>
      {/* <Switch> */}
      {/* <Route exact path="/"> */}
      <Landing></Landing>
      {/* </Route> */}
      {/* <Route path="/home"> */}
      <Header></Header>
      <main className="main">
        <section id="about_me" className="about_me">
          <h2>Sobre mi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis ullam officiis dolorum quas, reprehenderit distinctio explicabo labore itaque qui, saepe sequi aperiam. Reiciendis eos repellendus ad dolore vitae omnis.</p>
        </section>
        <section id="projects" className="projects">
          <h2>Proyectos</h2>
          <ul>
            {renderProjects()}
          </ul>
        </section>
      </main>
      <Footer></Footer>
      {/* </Route> */}
      {/* </Switch> */}
    </>
  );
}

export default App;
