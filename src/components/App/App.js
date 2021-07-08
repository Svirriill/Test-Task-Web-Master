import './App.css';
import FirstTask from '../FirstTask/FirstTask';
import SecondTask from '../SecondTask/SecondTask';

function App() {
  return (
    <div className="app">
      {/* <h2 className="app__title">Задание 1</h2> */}
      <FirstTask />
      {/* <h2 className="app__title">Задание 2</h2> */}
      <SecondTask />
    </div>
  );
}

export default App;
