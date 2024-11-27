import React, {useState} from 'react';

function HelloReact(props) {
    const [name,setName] = useState("Hello")
    const [visitor,setVisitor] = useState("")
    const [submitted,hasSubmitted] = useState(false)
    return (
        <>
            <div>
                <input type="text" className="input input-bordered w-full max-w-xs" onChange={(e) => setName(e.target.value)}/>

                <h1>{name}</h1>
                <label htmlFor="name">Please Input Your Name</label>
                <input type="text" className="input input-bordered w-full max-w-xs" onChange={e => setVisitor(e.target.value)}/>
                <button className={"btn btn-primary"} onClick={()=>setVisitor(true)}>Submit</button>
                {hasSubmitted &&
                <h1 className={"text-4xl text-red-300"}>Hello There {visitor}, how are you?</h1>}
            </div>

        </>
    );
}

export default HelloReact;