import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import { Switch, Route } from 'react-router-dom';

import { data } from '../data/data';
import Main from './Main';
import ProjectCard from './ProjectCard';

function App() {

  const renderProjects = () => {
    return data.map((project, index) => {
      return (
        <li id={index} key={index}>
          <ProjectCard project={project}></ProjectCard>
        </li>
      )
    })
  }



  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing></Landing>
        </Route>
        <Route path="/home">
          <section className="homepage">
            <Header></Header>
            {/* <main className="main">
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
            </main> */}
            <Main renderProjects={renderProjects}></Main>
            <Footer></Footer>
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
