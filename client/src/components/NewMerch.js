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

    fetch(`/merches`, {
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
      <div className="new-merch">
        <form onSubmit={onSubmit}>
          
            <p>Product Name:</p>
            
            
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <p></p>Image Link:
            <br></br>
            
            
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
            <p></p>
            Item Price:
            <br></br>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          <br></br>
          <input type="submit" value="Add New Merch"/>
        </form>
        {errors?errors.map(e => <div>{e}</div>):null}
      </div>
    );
  }
  
  export default NewMerch;