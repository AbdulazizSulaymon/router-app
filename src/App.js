import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MobileApps from './pages/About';
import Home from './pages/Home';
import Category from './pages/Category';
import Page404 from './containers/Page404';

let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/mobileapps", component: <MobileApps /> },
  { path: "/:category", exact: true, component: <Category /> },
  // { path: "/:category/:subcategory", component: <Category /> },
  { component: <Page404 /> }
]

function App() {
  return (
    <div className="App">
      <Switch>
        {pages.map((page, index) => {
          return <Route path={page.path} exact={page.exact} key={page.path}>
            {page.component}
          </Route>
        })}
      </Switch>
    </div>
  );
}

export default App;
