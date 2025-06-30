import React,{useState} from "react";
function GreetInput() {
    const [name,setName] = useState("");
    const [greeting, setGreeting] = useState("");
    const handleClick = () => {
        setGreeting(`Chào bạn ${name}`);
        }
    return(
        <div>
            <input type="text" 
                className="px-4 py-2 text-white rounded bg-blue-500"
                placeholder="Nhập tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button
            className="px-4 py-2 text-white rounded bg-red-500"
            onClick={handleClick}
            >Chao ban
            </button>
            <div className="mt-2">{greeting}</div>
        </div>
    );
}
export default GreetInput;

