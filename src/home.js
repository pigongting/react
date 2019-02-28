'use strict';

const Link = ReactRouterDOM.Link;

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home</div>
        <Link to="/about">about</Link>
      </div>
    );
  }
}
