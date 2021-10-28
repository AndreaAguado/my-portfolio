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
            <Main renderProjects={renderProjects}></Main>
            <Footer></Footer>
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
