import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMYName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {

  const name = 'Bruno'

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <Condicional />
      <Evento numero="1" />
      <Form />
     <h1>Olá React!</h1>
     <p>Meu primeiro App!</p>
     <h2>Alterando JSX</h2>
     <p>Olá, {name}!</p>
     <p>Idade: {sum(10,20)}</p>
     <img src={url} alt='Minha imagem' />
     <HelloWorld /> {/* componente */}
     <SayMYName name='Bruno Feijó' />
     <SayMYName name={name} />
     <Pessoa 
        nome="Thais" 
        idade="27"
        profissao="Massoterapeuta"
        foto="https://via.placeholder.com/150"
      /> {/* usando props */}
      <List /> {/* fragments */}
    </div>
  );
}

export default App;
