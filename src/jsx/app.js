class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}


class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      words: state.words.concat(['marklar'])
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>add</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}


class Items extends React.PureComponent {

  render() {
    return (
      <div>
        <li key="A">First item</li>
        <li key="B">Second item</li>
        <li key="C">Third item</li>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);

    this.state = {
      name: '',
    };
  }

  changeHandle(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" onChange={this.changeHandle}/>
        </div>
        <Items />
      </React.Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));