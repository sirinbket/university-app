import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import photo from "./assets/photo.png";

const etudiants = [
  {
  nom : "Sirine" ,
  prenom : "baraket" ,
  Email : "sirinbaraket94@gmail.com" ,
  telephone : "98754321" ,
  filiere : "GLSI",
  anneeEetude : "2eme annee" ,
  groupe : " groupe 1 ",
  vile : "Mahdia",
  image : photo ,
 },
 {
    prenom: "Aziz",
    nom : "Trabelsi",
    email : "aziz.trabelsi@gmail.com",
    telephone : "+216 22 345 678",
    filiere : "Génie Logiciel et Systèmes d'Information",
    anneeEtude : "2ème année",
    groupe : "GLSI 1",
    ville : "Sousse",
    
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Génie Logiciel et systeme d informatique",
    anneeEtude : "2ème année",
    groupe : "GLSI 1",
    ville : "Sousse",
  
  }
]
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiants.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
