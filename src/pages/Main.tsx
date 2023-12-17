import axios from "axios";
import CommendComopnent from "../componentns/CommendComponent";
import FileUpload from "../componentns/File_Edit/FileUpload";
import HeaderMain from "../componentns/HeaderMain";
import SwiperComponent from "../componentns/SwiperComponent";
import { useEffect } from "react";
import PdSection from "./PdSection";
import SoundBar from "../componentns/utils/SoundBar";

export default function Main(){
    useEffect(() => {
        // axios.get("http://localhost:3001/users")
        // .then(response => console.log(response.data))
        // .catch();
        const axios_data = async () => {
            const response_data = axios.get("http://101.101.210.112:3001/")
            .then(response => response.data)
            .catch()
        }
        axios_data();
    })

    return (
    <>
        <FileUpload />
        <HeaderMain />
        <SwiperComponent />
        <br /><br /><br /><br />
        {/* <CommendComopnent /> */}
        <PdSection />
        <SoundBar />
    </>
    )
}
