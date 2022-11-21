const App = () => (
    <div>
      <FirstComponent />
      <NamedComponent name="Scooby"/>
    </div>
)
  
  
ReactDOM.render(<App />, document.getElementById("root"))