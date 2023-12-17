export default function FileUpload(){
  return (
    <></>
  )
}

// import { useEffect, useState } from 'react';
// import axios from "axios";
// import { Link } from 'react-router-dom';

// function FileUpload() {

//   const [file, changeFile] : any = useState();
//   const [fileName, changeFileName] = useState("");

//   // const audio = new Audio("/song/Kendrick_Lamar-Count_Me_Out.mp3")

//   return (
//     <div className="App">
//       <input type="file" onChange={ (e: any )=>{
//         changeFile(e.target.files[0])
//         changeFileName(e.target.files[0].name);
//       } } />
//       <button onClick={ ()=>{
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           axios.post("http://localhost:3001/fileUpload", formData).then(
//             (response)=>{
//               console.log(response);
//             }
//           )

//         } catch (exception) {
//           console.log(exception);
//         }

//       } }>업로드!!</button>
//       <ul>
//         <li><Link to="/login"> 로그인 </Link></li>
//         <li><Link to="/logoutogin"> 로그아웃 </Link></li>
//       </ul>
//     </div>
//   );
// }
// export default FileUpload;