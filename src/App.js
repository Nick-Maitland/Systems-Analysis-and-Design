import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tesla</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href='#'>Contact Me</a></li>
          <li><a href='#'>Inventory</a></li>
        </ul>
      </nav>
      <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;