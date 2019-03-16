class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlerCopy = this.handlerCopy.bind(this);
    this.handlerPaste = this.handlerPaste.bind(this);
  }

  handlerCopy(event) {
    console.log(event);
  }

  handlerPaste(event) {
    console.log(event.clipboardData);
  }

  render() {
    return (
      <div>
        <div onCopy={this.handlerCopy}>sdfjk</div>
        <input type="text" onPaste={this.handlerPaste} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
