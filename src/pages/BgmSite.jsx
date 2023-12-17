import { useState } from "react"
import HeaderMain from "../componentns/HeaderMain"
import "./Bgm_Site.css"
import Payments from "../payments/Payments"
import styled from "styled-components";
export default function BgmSite(){
    const [artist, setAritst] = 
        useState([
            {id: 0, name: "art_01", },
            {id: 1, name: "art_01", },
            {id: 2, name: "art_01", }
        ])
    // const [album, setAlbum]: any = useState([
    //     {id:0, 앨범명: "Hello World", 앨범설명:"GG", 발매일: "", 템포: "", 시간: "", 아티스트: "", 분위기: "", 콘텐츠장르: "", 악기: "", 장르:"", 앨범시리즈: "" },
    //     {id:1, 앨범명: "Hello World", 앨범설명:"GG", 발매일: "", 템포: "", 시간: "", 아티스트: "", 분위기: "", 콘텐츠장르: "", 악기: "", 장르:"", 앨범시리즈: "" }
    // ])
    
    const [album, setAlbum] = useState(["발매일", "템포", "시간", "아티스트", "분위기", "콘텐츠장르", "악기", "장르", "앨범 시리즈"]);
    const album_info = [];
    for (let i=0; i < album.length; i++){
        album_info.push(<div> {album[i]} </div>)
    }
    const arr_push = [];
    return (
        <>
        <HeaderMain />
        <BGM_COMPONENT>
        <div className="container_wrap">
        <img  className="album_cover" src="https://visla.kr/wp/wp-content/uploads/2022/11/210260257_492056461875169_1648387615546901397_n.jpg" alt="이미지" />

                    <div className="bgm_wrap">
                    <span classname="albuM_info"> 
                    <h3> GGGG</h3>
                    <h5> 어떠한 음원을 소개하는 부분 입니다.</h5>
                    {album_info}</span>
            </div>
        </div>
        <hr />
        <Payments />
        </BGM_COMPONENT>
        </>
    )
}

const BGM_COMPONENT = styled.div `
margin: 0 auto;
 background-color: #202020;
 margin: 0 auto;
 justify-content: center;

 h1,h2,h3,h4,h5 {
    color: white;
 }

 .container_wrap {
    width: 960px;
    height: 600px;
    color: white;
    display: flex;
    padding-top: 200px;
    color: #bbb;
    text-align: left;
    margin: 0 auto;
    line-height:30px;
}

.bgm_wrap {
    height: 600px;
    margin-left: 70px;
    color: #bbb;
}

.album_cover {
    border: 1px solid black;
    width: 250px;
    height: 250px;
    background-color: black;
    left: 0;
    float: left;
    color: #bbb;
}


.album_info {
    line-height: 20pv;
    float: left;
    left: 0;
}


hr {
    width: 1020px;
    border: 1px  solid #e2e8f0;
}
`

