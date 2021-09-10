import React, {useState} from "react"

function NewMerch({merches}) {
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    const newMerch = {
      name: name,
      image_url: imageURL,
      price: price,
    }
    fetch("http://localhost:3000/merches", {
      method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(newMerch)
    })
    .then(res => res.json())
        .then(json => {
            console.log(json.error)
            if(json.error) setErrors(json.error)
  })
}
    return (
      <div className="App">
        <form onSubmit={onSubmit}>
          <label>
            Product Name:
            <br></br>
            </label>
            <label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            Image Link:
            <br></br>
            </label>
            <label>
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
            Item Price:
            <br></br>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Add New Merch"/>
        </form>
        {errors?errors.map(e => <div>{e}</div>):null}
      </div>
    );
  }
  
  export default NewMerch;