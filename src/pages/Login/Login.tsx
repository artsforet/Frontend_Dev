import { useEffect, useState } from "react";
import HeaderMain from "../../componentns/HeaderMain";
import axios from "axios";
import styled from 'styled-components'


export default function Login(){
    // const [user, setuser] = useState([{id:0, name: "test@naver.com", password: "test"}]);
    const [currentInput, setCurrentInput] = useState('');


    useEffect(() => {
    });

    const login_email = (e: any) => {
        console.log(e.target.value);
    }
    const login_password = (e: any) => {
        console.log(e.target.value);
    }
    const login = (e: any) => {
      if(e.target.value) {

      }
        console.log("로그인");
    }
    const register = (e: any) => {
        console.log("회원가입")
    }

    const login_ofm = async () => {
        var value = await axios.get("http://118.67.133.133:3001/")
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
    };
    login_ofm();

    useEffect(() => {
        changeColor(currentInput);
        const inputElem = document.querySelectorAll("input[name='email']");

        inputElem.forEach((elem: any, current: any) => {
          if (elem.value === current) {
            elem.style.backgroundColor = '#40a9ff';
            elem.style.color = '#fff';
          } else {
            elem.style.backgroundColor = '#fff';
            elem.style.color = '#000';
          }
        });

      }, [currentInput]);

      const changeColor = (current: any) => {

      };

    return (
       <div>
        <HeaderMain />
        <LignComponent>
          <form className="login_wrap">
              <input name="email" type="email" onChange={login_email} /> <br />
              <input type="password" onChange={login_password} /> <br />
              <button onClick={login}> 로그인 </button>
              <button onClick={register}> 회원가입 </button>
          </form>
        </LignComponent>
      </div>
    )
}


const LignComponent = styled.div`
  .login_wrap {
    width: 100%;
    height: 1020px;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    padding-top: 200px;
  }

  input {
    margin: 20px;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }

  input::before {
    box-shadow: none;
  }

  input {
    box-shadow: none;
    padding: 10px;
    border-radius: 5px;
    color: white;
    border: 1px solid black;
  }



  input:-internal-autofill-selected {
    background-color: black;
  }

  button {
    background-color: none;
    border: None;
    cursor: pointer;
    margin: 0 20px;
  }


  button:active {
    background-color: none;
    border: none;
    cursor: none;
  }


  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
  -webkit-text-fill-color: 글자색;
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  transition: background-color 5000s ease-in-out 0s;
  border: 1px solid black;
  } 
`
