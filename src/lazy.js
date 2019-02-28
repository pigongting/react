const OtherComponent = React.lazy(() => import('./like_button.js'));

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback="...">
        <OtherComponent />
      </React.Suspense>
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
