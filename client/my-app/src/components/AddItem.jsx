import React from "react";

function AddItem(){

    function addItem(){

    }
    const [data, setData] = useState({
        name:"",
        description:"",
        url:"",
        price:0
    })

    function handleForm(input){
        const newData = {...data};
        newData[input.target.name] = input.target.value;
        setData(newData);
    }

    function submit(e){
        e.preventDefault();
        addItem(); 
    }

  return <div className="inputBox">
        <form onSubmit={(e)=>submit(e)}>
            <input onChange={(input)=>handleForm(input)} type="text" placeholder="Name" name="name"></input>
            <input onChange={(input)=>handleForm(input)} type="text" placeholder="Description" name="description"></input>
            <input onChange={(input)=>handleForm(input)} type="text" placeholder="Img url" name="url"></input>
            <input onChange={(input)=>handleForm(input)} type="number" placeholder="Price" name="price"></input>
            <input type="submit" placeholder="Submit"></input>
        </form>
    </div>
}
export default AddItem