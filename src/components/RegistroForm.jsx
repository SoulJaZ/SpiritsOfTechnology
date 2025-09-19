import React from 'react'
import '../App.css'

function RegistroForm() {
    return (
        <section>
            <h2>Registro</h2>
            <form className='formularioRegistro'>
                <input type="text" placeholder='Nombre' required />
                <input type="email" placeholder='Correo' required />

                <select required>
                    <option value="">Interés</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="instalacion">Instalación</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default RegistroForm
