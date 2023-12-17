import { Link } from "react-router-dom";
import "./Payment.css";

export default function Payments(){
    return (
        <div className='payment_wrap'>
            <div className='payment'> 정기 결제를 통하여 자유롭게 다운로드 하세욥?
            <br /> 
                <div className='payment_router'><Link to='/'> 이용권 살펴보기</Link></div>
            </div>
        </div>
    )       
}