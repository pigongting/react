const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

const Suspense = React.Suspense;

const Home = React.lazy(() => import('./home.js'));
const About = React.lazy(() => import('./about.js'));

function MyComponent() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
