const App = () => (
    <div>
      <Person name="Scooby" age={4} hobbies={["chewing", "sniffing", "hiding bones"]}/>
      <Person name="Rachael" age={28} hobbies={["tv", "walking"]}/>
      <Person name="Jenkins" age={67} hobbies={["farming", "feeding chickens"]}/>
    </div>
)
  
  
ReactDOM.render(<App />, document.getElementById("root"))