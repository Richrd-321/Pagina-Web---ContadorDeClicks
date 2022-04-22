import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
        <div className="freecodecamp-logo-contenedor">
            <img 
                className='freecodecamp-logo'
                src={freeCodeCampLogo}
                alt='Logo de freeCodeCamp'
                />

        </div>


        <div className='contenedor-principal'>
            <Boton 
                texto='click'
                esBotonDeClick={true}
               
                
                />

            <Boton />
        </div>
      
    </div>
  );
}

export default App;
