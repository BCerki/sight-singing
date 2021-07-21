import ExercisePage from "./Components/ExercisePage";
import "./App.css";
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <h1>Exercise page below</h1>
        <div className="font-face-mq">'&4=</div>
        <ExercisePage />
      </div>
      <Landing />
    </div>
  )
}

export default App;