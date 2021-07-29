import ExercisePage from "./ExercisePage";


function Sing() {
  return (
    <section>
    <h1>
      Vocal interval training
    </h1>

    <p>Given a base note and the interval, practice singing both, and our tuner will tell you if you were close or not.</p>

    <div>
      <ExercisePage />
    </div>
    </section>
  )
}


export default Sing;