const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();


class App extends React.Component {
  render() {
    console.log(ref);
    return (
      <FancyButton ref={ref}>Click me!</FancyButton>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);