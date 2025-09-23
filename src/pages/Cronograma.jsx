import React, { useState } from 'react';

const Cronograma = () => {

  // Estado inicial con algunas tareas de ejemplo
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: "Limpieza de equipos",
      frecuencia: "Semanal",
      responsable: "Juan Pérez",
      fecha: "2025-09-25",
      tipo: "Preventivo",
      estado: "Pendiente",
    },
    {
      id: 2,
      nombre: "Revisión de ventiladores",
      frecuencia: "Mensual",
      responsable: "María López",
      fecha: "2025-10-05",
      tipo: "Preventivo",
      estado: "En proceso",
    },
    {
      id: 3,
      nombre: "Reparación de fuente dañada",
      frecuencia: "Eventual",
      responsable: "Carlos Díaz",
      fecha: "2025-09-21",
      tipo: "Correctivo",
      estado: "Completado",
    },
  ]);
  return (
    <section className='cronograma'>
      <h2>Cronograma de mantenimiento</h2>
      <p>
        Planifica las actividades de mantenimiento: Define qué tareas se realizarán (limpieza, lubricación, ajustes, reparaciones, etc.) y con qué frecuencia.

        Asigna responsabilidades: Indica quiénes son los encargados de llevar a cabo cada tarea.

        Establece plazos y fechas: Define cuándo se realizarán las tareas para asegurar la continuidad operativa.

        Gestiona recursos: Permite organizar los materiales, herramientas y personal necesario.

        Facilita el seguimiento: Permite monitorear el cumplimiento de las tareas y detectar problemas a tiempo.

        Incluye mantenimiento preventivo y correctivo: Se ocupa tanto de las tareas programadas para prevenir fallos, como de las reparaciones necesarias ante averías.
      </p>
      <table className="tabla-cronograma">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Frecuencia</th>
            <th>Responsable</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td data-label="Tarea">{tarea.nombre}</td>
              <td data-label="Frecuencia">{tarea.frecuencia}</td>
              <td data-label="Responsable">{tarea.responsable}</td>
              <td data-label="Fecha">{tarea.fecha}</td>
              <td data-label="Tipo">{tarea.tipo}</td>
              <td
                data-label="Estado"
                className={`estado ${tarea.estado.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tarea.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Cronograma;
