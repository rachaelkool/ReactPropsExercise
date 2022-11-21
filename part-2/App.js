const App = () => (
    <div>
      <Tweet username= "SDoo1" name="Scooy Doo" date="11/21/2022" message="I love bones!" />
      <Tweet username= "RebelIsCool" name="Rebel" date="11/22/2022" message="I am the biggest dog" />
      <Tweet username= "CuteGoldie" name="Goldie" date="11/21/2022" message="I <3 Rebel" />
    </div>
)
  
  
ReactDOM.render(<App />, document.getElementById("root"))