import './App.css';

function App() {

  const name = 'Bruno'

  return (
    <div className="App">
     <h1>Olá React!</h1>
     <p>Meu primeiro App!</p>
     <h2>Alterando JSX</h2>
     <p>Olá, {name}!</p>
     <p>Idade: {20 + 10}</p>
    </div>
  );
}

export default App;
