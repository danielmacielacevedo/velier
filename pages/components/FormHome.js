import { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [servicio, setServicio] = useState('');
    const [fechaCita, setFechaCita] = useState('');
    const [paso, setPaso] = useState(1); // Para seguir el progreso del formulario
  
    // Funciones para manejar los cambios en los campos del formulario
    const handleNombreChange = (event) => {
      setNombre(event.target.value);
    };
  
    const handleTelefonoChange = (event) => {
      setTelefono(event.target.value);
    };
  
    const handleServicioChange = (event) => {
      setServicio(event.target.value);
    };
  
    const handleFechaCitaChange = (event) => {
      setFechaCita(event.target.value);
    };
  
    // Función para avanzar al siguiente paso del formulario
    const handleSiguiente = () => {
      setPaso(paso + 1);
    };
  
    // Función para volver al paso anterior del formulario
    const handleAnterior = () => {
      setPaso(paso - 1);
    };
  
    // Función para enviar el formulario
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes hacer el envío del formulario o mostrar una confirmación
      // Puedes acceder a los datos ingresados en las variables: nombre, telefono, servicio, fechaCita
    };
  
    // Renderizado del formulario en función del paso actual
    const renderFormulario = () => {
      switch (paso) {
        case 1:
          return (
            <div>
              <h2>Paso 1: Información personal</h2>
              <form onSubmit={handleSiguiente}>
                <label>
                  Nombre:
                  <input type="text" value={nombre} onChange={handleNombreChange} />
                </label>
                <br />
                <label>
                  Teléfono:
                  <input type="text" value={telefono} onChange={handleTelefonoChange} />
                </label>
                <br />
                <label>
                  Servicio:
                  <select value={servicio} onChange={handleServicioChange}>
                    <option value="">Selecciona un servicio</option>
                    <option value="limpieza">Limpieza dental</option>
                    <option value="carilla">Carilla dental</option>
                    <option value="remover">Remover caries</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>
                <br />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    handleSiguiente();
                    }}>Siguiente</button>

              </form>
            </div>
          );
        case 2:
          return (
            <div>
              <h2>Paso 2: Selecciona la fecha de cita</h2>
              <form onSubmit={handleSiguiente}>
                <label>
                  Fecha de cita:
                  <input type="date" value={fechaCita} onChange={handleFechaCitaChange} />
                </label>
                <br />
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    handleAnterior();
                    }}>Anterior</button>

                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    handleSiguiente();
                    }}>Siguiente</button>
              </form>
            </div>
          );
        case 3:
          return (
            <div>
              <h2>Resumen de la cita</h2>
              <p>Nombre: {nombre}</p>
              <p>Teléfono: {telefono}</p>
              <p>Servicio: {servicio}</p>
              <p>Fecha de cita: {fechaCita}</p>
              <button type="button" onClick={(e) => {
                    e.preventDefault();
                    handleAnterior();
                    }}>Anterior</button>
              <button type="submit" onClick={handleSubmit}>Agendar ahora</button>
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div>
        {renderFormulario()}
      </div>
    );
  };
  
  export default Formulario;
  