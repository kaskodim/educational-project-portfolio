import './App.css';
import {Header} from "./assets/layout/header/Heder";
import {Main} from "./assets/layout/sections/main/Main";
import {Skills} from "./assets/layout/sections/skills/Skills";
import {Projects} from "./assets/layout/sections/projects/Projects";
import {Contacts} from "./assets/layout/sections/contacts/Contacts";
import {Footer} from "./assets/layout/footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;

