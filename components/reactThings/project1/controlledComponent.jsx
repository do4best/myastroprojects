import React, {useState} from 'react';

function ControlledComponent(props) {
    const [velue,setValue] = useState("")
    const handelChange=(e)=>{
        setValue(e.target.value)
    };
    const handelSubmit=(e)=>{
        e.preventDefault()
        alert('A name was submitted '+velue);
    };

    return (
        <>
            <form onSubmit={handelSubmit}>
                <label htmlFor="name">Name:
                <input type="text" value={velue} onChange={handelChange}/>
                </label>
                <button type={"submit"}>Submit</button>
            </form>

        </>
    );
}

export default ControlledComponent;