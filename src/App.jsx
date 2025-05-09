import "./App.css";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="contacts">
      <Contacts
        img="images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contacts
       img="images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contacts
        img="images/felix.png"
        name="Felix"
        phone="(212) 555-3456"
        email="thecat@hotmail.com"
      />
      <Contacts
        img="images/pumpkin.png"
        name="Pumpkin"
        phone="(212) 555-4567"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
