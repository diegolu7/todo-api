import { useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = () => {
  // State Hook - `useState`
  const [nuevaTarea, setnuevaTarea] = useState("");
  const [Tareas, setTareas] = useState([]);

  // Funciones

  /* Agrego una nueva tarea*/
  function agregarTarea() {
    if (!nuevaTarea) {
      alert("Ingrese una tarea");
      return;
    }

    const Tarea = {
      id: Math.floor(Math.random() * 1000),
      value: nuevaTarea,
    };

    // pusheo tarea nueva en array
    setTareas((listaAnterior) => [...listaAnterior, Tarea]);

    // Reseteo nuevaTarea , vuelvo al estado anterior
    setnuevaTarea("");
  }

  /* eliminar tarea por `Tarea.id` key */
  function deleteTarea(id) {
    const newArray = Tareas.filter((Tarea) => Tarea.id !== id);
    setTareas(newArray);
  }
    return(
    <div className="app">
      {/* 1. Titulo  */}
      <h1>Lista de tareas</h1>

      {/* 2. Agregar tarea */}
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
      <Form>
      <Form.Group className="mb-3 m-4" controlId="formBasicEmail">
        <Form.Label>Tarea:</Form.Label>
        <Form.Control value={nuevaTarea} onChange={(e) => setnuevaTarea(e.target.value)}  type="text" placeholder="Ingrese Tarea" />
      </Form.Group>

      {/* boton para agregar */}
      <Button className="agregar" onClick={(e) => { e.preventDefault(); agregarTarea(); }} variant="primary" type="submit">
        ADD
      </Button>
    </Form>
</ThemeProvider>
<hr></hr>

      {/* <button className="agregar" onClick={() => agregarTarea()}>Agregar</button> */}

      {/* 3. Lista de tareas  */}
      <ul>
        {Tareas.map((Tarea) => {
          return (
            // <div>
            //   <li key={Tarea.id} >
            //     {Tarea.value}
            //     <button 
            //       className="borrar"
            //       onClick={() => deleteTarea(Tarea.id)}
            //     >
            //       Borrar
            //     </button>
            //   </li>
            // </div>

        <ListGroup>
        <ListGroup.Item key={Tarea.id} >
            { Tarea.value }
            <Button variant="danger" onClick={() => deleteTarea(Tarea.id)} >X</Button>{' '}
            </ListGroup.Item>
        </ListGroup>

          );
        })}
      </ul>
    </div>
  );
    
}
export default TodoList