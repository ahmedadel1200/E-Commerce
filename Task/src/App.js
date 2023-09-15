import "./App.css"
import "./css/first-components.css"
import "./css/sec-component.css"
import "./css/third-component.css"
import Card from "./components/first-components";
import Test from "./components/sec-component"
import Best from "./components/third-component"
import girl from "./imags/girl.jpg"
import girl2 from "./imags/girl2.jpg"

function Fourth(){
    return(
      <div className="main-fourth">
        <div className="main-content4th">
            <div className="headee">
                <ul>
                    <li>MON</li>
                    <li>TUE</li>
                    <li>WED</li>
                    <li>THU</li>
                    <li className="ss">FRI</li>
                    <li>SAT</li>
                    <li>SUN</li>
                </ul>
            </div>
            <div className="conten-4th">
                <ul>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li className="color">10</li>
                    <li>11</li>
                    <li>12</li>
                </ul>
            </div>
        </div>
      </div>
    );
}

function Main(){

    return(
        <>
        <Card name="Emily Dougrer" img={girl} alt="girl"/>
        <Test img={girl2} alt="girl" work="Figma Design" pos="Founder" name="Amelia Minderlow"/>
        <Best/>
        <Fourth/>
        </>
    );
}
export default Main;