import React, {useState} from "react"
import { useParams } from "react-router"

function NewMerch({merches, setMerches}) {
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState([])


  // useEffect(() => {
  //   const addedMerch = merches.find(merch => merch.id == prams.id)
  //   setName(merch.name)
  //   setImageURL(merch.imageURL)
  //   setPrice(merch.price)
  // }, []);

  function onSubmit(e) {
    e.preventDefault()
    const addedMerch = {
      name: name,
      image_url: imageURL,
      price: price,
    }

    fetch(`http://localhost:3000/merches`, {
      method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(addedMerch)
    })
    .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error) setErrors(json.error)
            setMerches(dataMerches => [...dataMerches, json])
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