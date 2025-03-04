import {useState} from "react";

function MudaCor(){
    const [cor, setCor] = useState("White");

    return (
        <div style={{ backgroundColor: cor, padding: "20px" }}>
            <button onClick={() => setCor("yellow")}>Amarelo</button>
            <button onClick={() => setCor("blue")}>Azul</button>
        </div>

    )
}

export default MudaCor;