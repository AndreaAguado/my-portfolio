import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Main from './Main';
import ProjectCard from './ProjectCard';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { data } from '../data/data';


function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  }

  const renderProjects = () => {
    return data.map((project, index) => {
      return (
        <li className="list_item" id={index} key={index}>
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
            <Main renderProjects={renderProjects} handleSearch={handleSearch}></Main>
            <Footer></Footer>
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
