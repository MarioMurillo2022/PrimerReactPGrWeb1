import './App.css';
import '../src/style-sheets/Testimonio.css'
import Testimonio from './components/Testimonio';

function App() {
  return (
    <>
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen los estudiantes de CEUTEC</h1>
          <Testimonio
            imagen='Emma.png'
            nombre='Emma Bostian'
            pais='Suecia'
            cargo='Ingeneria de Software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero la clase de programación web I fue donde aprendí. Estudiar JavaScript, así como estructuras de datos y algoritmos en la clase me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
          />
        </div>
        <div className='contenedor-principal'>
          <Testimonio
            imagen='Sarah.png'
            nombre='Sarah Brooks'
            pais='Estados Unidos'
            cargo='Desarrolladora de Software'
            empresa='Microsoft'
            testimonio='Sarah, una desarrolladora de software innovadora, transforma ideas en código con creatividad y precisión. Con experiencia en múltiples lenguajes de programación, contribuye al desarrollo de aplicaciones web y móviles. Su pasión por la tecnología y el aprendizaje continuo la impulsa a enfrentar desafíos con determinación y excelencia.'
          />
        </div>
        <div className='contenedor-principal'>
          <Testimonio
            imagen='Shawn.png'
            nombre='Shawn Spencer'
            pais='Inglaterra'
            cargo='Desarrollador backend'
            empresa='Facebook'
            testimonio=', un desarrollador de backend con experiencia en la construcción de sistemas robustos y escalables. Especializado en tecnologías como Python y Node.js, diseña y desarrolla la lógica detrás de las aplicaciones web. Su enfoque meticuloso y su capacidad para resolver problemas hacen de él un activo invaluable en el equipo de desarrollo.'
          />
        </div>
        <div className='contenedor-principal'>
          <Testimonio
            imagen='Jhon.jpg'
            nombre='Jhon Dutton'
            pais='Países Bajos'
            cargo='Líder Técnico Python'
            empresa='Tech Innovations'
            testimonio='Un apasionado especialista en Python, tiene una amplia experiencia en el desarrollo de aplicaciones y proyectos utilizando este versátil lenguaje de programación. Con profundos conocimientos en frameworks como Django y Flask, lidera equipos con creatividad y eficiencia, ofreciendo soluciones innovadoras a desafíos tecnológicos complejos.'
          />
        </div>
        <div className='contenedor-principal'>
          <Testimonio
            imagen='Alice.jpg'
            nombre='Alice Kramer'
            pais='Alemania'
            cargo='Líder Scrum Master'
            empresa='Velocity Solutions'
            testimonio='Alice, una Scrum Master con experiencia, lidera equipos ágiles con pasión y empatía. Con habilidades en facilitación y resolución de conflictos, guía a su equipo hacia el éxito en proyectos de desarrollo de software. Su enfoque colaborativo y orientado a resultados la convierte en un pilar esencial para la entrega eficiente de productos.'
          />
        </div>
        <div className='contenedor-principal'>
          <Testimonio
            imagen='Joe.jpg'
            nombre='Joe Doe'
            pais='Suecia'
            cargo='Ingenerio de Software'
            empresa='JavaTech Solutions'
            testimonio='Joe es un ingeniero de software con más de una década de experiencia en el desarrollo de aplicaciones Java. Ha trabajado en una variedad de proyectos, desde sistemas empresariales hasta aplicaciones web y móviles. Su profundo conocimiento de Java y su pasión por la resolución de problemas lo convierten en un recurso valioso para cualquier equipo de desarrollo.'
          />
        </div>

      </div>
    </>

  );
}

export default App;
