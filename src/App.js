import Stars from './components/StarsFunc'
import './css/main.css';

function App() {
  return (
    <div className="main-content">
      <Stars count={Number(3)}/>
    </div>
  );
}

export default App;
