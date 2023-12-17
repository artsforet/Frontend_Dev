import { Link } from "react-router-dom";
import "./HeaderMain.css";

export default function HeaderMain(){
    const search_infomation = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <nav>
            <ul style={{display: "flex"}}>
               <li className="logo_wrap"><Link to="/">Arts</Link></li>
               <li>
                <input 
                    className="underline" 
                    type="text" 
                    onChange={search_infomation} 
                    placeholder="어떤 음악을 찾고 계세요?"
                    /> </li>
            </ul>
            <ul className="header_sub">
                <li><Link to="/bgm">BGM </Link></li>
                <li><Link to="/login">로그인 </Link></li>
                <li><Link to="/">Test </Link></li>
            </ul>
        </nav>
    )
}