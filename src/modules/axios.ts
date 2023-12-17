import axios from "axios";

export const axios_modules =  () => {
    const data = ""
    const event = () => { 
        axios.get('localhost:30001')
        .then((response :any) => {
           var value =  response  
        })
        .catch((error: any) => {
            console.log("Hello World")
        })
    }
}

export default axios;