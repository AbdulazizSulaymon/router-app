import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import MobileApps from './pages/About';
import Home from './pages/Home';
import Category from './pages/Category';
import Page404 from './containers/Page404';

//REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

//ROUTES
let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/page404", component: <Page404 /> },
  { path: "/mobileapps", component: <MobileApps /> },
  { path: "/:category", exact: true, component: <Category /> },
  // { path: "/:category/:subcategory", component: <Category /> },
  { component: <Redirect to="/" /> }
]

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          {pages.map((page, index) => {
            return <Route path={page.path} exact={page.exact} key={page.path}>
              {page.component}
            </Route>
          })}
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
