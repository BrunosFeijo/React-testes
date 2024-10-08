import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Bruno'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
     <h1>Olá React!</h1>
     <p>Meu primeiro App!</p>
     <h2>Alterando JSX</h2>
     <p>Olá, {name}!</p>
     <p>Idade: {sum(10,20)}</p>
     <img src={url} alt='Minha imagem' />
     <HelloWorld />
    </div>
  );
}

export default App;
