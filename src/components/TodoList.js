import { useState } from "react";

const TodoList = () => {
  // State Hook - `useState`
  const [nuevaTarea, setnuevaTarea] = useState("");
  const [Tareas, setTareas] = useState([]);

  // Funciones

  /* Agrego una nueva tarea*/
  function agregarTarea() {
    if (!nuevaTarea) {
      alert("Press enter an Tarea.");
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
      <input
        type="text"
        placeholder="Ingrese una tarea"
        value={nuevaTarea}
        onChange={(e) => setnuevaTarea(e.target.value)}
      />

      {/* boton para agregar */}
      <button className="agregar" onClick={() => agregarTarea()}>Agregar</button>

      {/* 3. Lista de tareas  */}
      <ul>
        {Tareas.map((Tarea) => {
          return (
            <div>
              <li key={Tarea.id} >
                {Tarea.value}
                <button 
                  className="borrar"
                  onClick={() => deleteTarea(Tarea.id)}
                >
                  Borrar
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
    
}
export default TodoList