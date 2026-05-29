import React from 'react'
import './About.css'

const About = () => {
    return (
    <div className="about-container">
        <h1>Acerca de nosotros</h1>
        <div id="info">
            Somos el equipo nº 23
        </div>
        
        <div className="aportaciones">
            <h3>Aportaciones de cada miembro:</h3>
            <ul>
                <li><strong>Javier García:</strong> Configuración inicial de la base de datos MySQL.</li>
                <li><strong>Javier López:</strong> Desarrollo del backend en Node.js.</li>
                <li><strong>Javier Martínez:</strong> Diseño de la interfaz y estilos CSS.</li>
                <li><strong>Javier Pérez:</strong> Integración del mapa y geolocalización.</li>
                <li><strong>Javier Rodríguez:</strong> Implementación de pruebas con Cypress.</li>
            </ul>
        </div>
    </div>
    )
}

export default About