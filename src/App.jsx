function App(){
  const[task, setTask] = useState([
    {
      id: 1,
      title:"Estudar programação",
      description:"Estudar programação paras se tornar um desenvolvedor full stack",
      isCompleted:false
    }
    {
      id:2,
      title:"Estudar inglês",
      description:"Estudar inglês para se tornar fluente",
      isCompleted:false
    }
    {
      id:3,
      title:"Estudar matématica",
      description:"Estudar matématica para desenvolver minh Lógica",
      isCompleted:false
    }
  ]);

  return(
    <h1>Gerenciando tarefas</h1>
  );
}
export default App;














/*import { useState } from "react";
function App(){
  const[message, setMessage] = useState('Olá, mundo');
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={
        ()=>{setMessage('olá fui clicado');}}></button>
    </div>
  )
}
export default App