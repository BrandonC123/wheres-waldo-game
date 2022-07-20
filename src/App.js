import "./App.css";
import db from ".";
import { doc, getDoc } from "firebase/firestore";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";

function App() {
    const test = doc(db, "image-position", "object-1");
    async function tester() {
        const pos = await getDoc(test);
        console.log(pos.data());
    }
    tester();
    return (
        <div className="App">
            <GameBoard />
            <Footer />
        </div>
    );
}

export default App;
