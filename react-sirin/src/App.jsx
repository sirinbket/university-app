import "./App.css";
import photo from "./assets/photo.png";
const e = {
  nom : "Sirine" ,
  prenom : "baraket" ,
  Email : "sirinbaraket94@gmail.com" ,
  telephone : "98754321" ,
  Filiere : "GLSI",
  Annee_d_etude : "2eme annee" ,
  Groupe : " groupe 1 ",
  vile : "Mahdia",
}

function App() {


  return (
    <div className="fiche">
      
      <img src={photo} alt="photo de l`etudiant"></img>  
      <h1>Fiche Étudiant</h1>                            
      <p>Nom : {e.nom} </p>
      <p>Prénom : {e.prenom}</p>
      <p>Email : {e.Email}</p>
      <p>Téléphone : {e.telephone}</p>
      <p>Filière : {e.Filiere}</p>
      <p>Année d'étude : {e.Annee_d_etude} </p>
      <p>Groupe : {e.Groupe}</p>
      <p>Ville : {e.vile}</p>
      
      <a className="contact" href="mailto:sirinbaraket94@gmail.com" target="_blank" rel="noreferrer" >contact</a>

    </div>
  );
}

export default App;