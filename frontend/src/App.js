import React,{useState} from "react"
import axios from "axios"

function App(){

const [file,setFile] = useState(null)
const [email,setEmail] = useState("")

const upload = async ()=>{

const formData = new FormData()

formData.append("file",file)
formData.append("email",email)

await axios.post("http://localhost:5000/api/analyze",formData)

alert("Summary Sent")
}

return(

<div style={{padding:"40px"}}>

<h2>Sales Insight Automator</h2>

<input type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<input
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={upload}>
Upload
</button>

</div>

)

}

export default App