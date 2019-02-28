class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.textInput);
    this.textInput.current.focus();
  }

  render() {
  // Use the `ref` callback to store a reference to the text input DOM
  // element in an instance field (for example, this.textInput).
    return (
      <input
        type="text"
        ref={this.textInput}
      />
    );
  }
}

ReactDOM.render(<CustomTextInput />, document.getElementById('root'));
