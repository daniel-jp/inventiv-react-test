import './styles.css'

import {ReactComponent as MainImg } from'./img/deliver1.svg'

function Home() {
  return (
    <>
  
<div className="container">





<div className="panels-container">
  <div className="panel left-panel">
    <div className="content">
      <h3>Votre de Shynlei c'est...</h3>
      <p>
      
      Faire votre Shynlei, jouer avec, c'est l'occasion d'ecouter vos reves, de les partager et de prendre confience dans votre richesse.
      </p>
   
    </div>
  </div>
 
</div>

<div className="forms-container">
  <div className="signin-signup">


    <form action="#" className="sign-in-form">
      <h2 className="title">Pour commencer ...</h2>
      <p>Faire votre Shynlei, jouer avec, c'est l'occasion
        d'ecouter vos reves, de les partager et de prendre
        confience dans votre richesse.</p>

        <h3>Nom et prenom :</h3>
      <div className="input-field">
        <input type="text" placeholder="Nom et prenom" />
      </div>
      <h3>Mon intention :</h3>
      <div className="input-field">
        <input type="text" placeholder="L'intention l'objectif de ce Shynlei" />
      </div>
      <input type="submit" value="Login" className="btn solid"/>

    </form>

  </div>
</div>
</div>

    </>
  )
}

export default Home
