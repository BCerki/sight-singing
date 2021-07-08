import ExercisePage from "./Components/ExercisePage";
import "./App.css";
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <h1>Exercise page below</h1>
        <ExercisePage />
      </div>
      <Landing />
    </div>
  )
}

export default App;