import React from 'react'

function Herramientas() {
    return (
        <section id='herramientas'>
            <h2>Herramientas</h2>
            <p>
                Utilizaremos 3 herramientas clave para realizar su debido procedimiento
                <ul>
                    <li><h5>Rufus:</h5> Se bootea la USB para instalar Windows 7 con MBR- Legacy</li>
                    <li><h5>CMD:</h5> Se bootea con GPT Para instalar Windows 10 con UEFI</li>
                    <li><h5>VENTOY:</h5> Se bootea con MBR y se puede utilizar con Legacy & UEFI</li>
                </ul>
            </p>
        </section>
    )
}

export default Herramientas