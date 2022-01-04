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
  const [search, setSearch] = useState({
    html: false,
    sass: false,
    javascript: false,
    react: false,
    nodejs: false,
    sqlite: false
  });

  const handleSearch = (id, checked) => {
    if (id === "html") {
      setSearch({ ...search, html: checked });
    }
    else if (id === "sass") {
      setSearch({ ...search, sass: checked });
    }
    else if (id === "javascript") {
      setSearch({ ...search, javascript: checked });
    }
    else if (id === "react") {
      setSearch({ ...search, react: checked });
    }
    else if (id === "nodejs") {
      setSearch({ ...search, nodejs: checked });
    }
    else if (id === "sqlite") {
      setSearch({ ...search, sqlite: checked });
    }
  }

  // let filteredData2 = data.map(project => {
  //   console.log(project);
  //   return project.tags.filter((tag) => {
  //     console.log(tag.toLocaleLowerCase() === search);
  //     return tag.toLocaleLowerCase() === search;
  //   })
  // })

  // console.log(filteredData2);

  // let filteredData = data.filter((project) => {
  //   return project.tags.filter(tag => {
  //     return tag.toLocaleLowerCase() === search.toLocaleLowerCase();
  //   })
  // })
  // console.log(filteredData);

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
