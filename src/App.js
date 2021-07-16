import logo from './logo.svg';
import './App.css';
import './a.css';
import Header from './Header.js';

function App() {

  function FireEvent() {
    alert("Do you really want to continue class?")
  }

  function PrintMe() {
    console.log('Haha')
  }

  return (
    <div className="App">
      <Header name="Fahim Hossain" id="17303004" />
      <Header name="Zulkar Nayin" id="16303045" />
      <Header name="Hossain" id="11303004" />



      <button onClick={FireEvent}>Click me</button>
      <input type="text" onChange={PrintMe} />
    </div>
  );
}

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Everything is temporary..
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
