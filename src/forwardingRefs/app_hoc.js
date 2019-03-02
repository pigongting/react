function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const LogFancyButton = logProps(FancyButton);

class App extends React.Component {
  render() {
    return (
      <LogFancyButton>me</LogFancyButton>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);