import ExercisePage from "./Components/ExercisePage";
import "./App.css";
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Landing />
      <div>
        <ExercisePage />
      </div>
    </div>
  )
}

export default App;