import styled from 'styled-components'

export default function PdSection(){
    return (
        <PdComponent>
            <div> 
            <h3> PD의 선택</h3>
            
            <div className="pd_section">
                <img src="https://www.bgmfactory.com/storage/albumcover/4158.jpg"  alt="이미지 입니당" width="100px" />
                <div className="pd_wrap">
                <p> 타이틀</p>
                <p> 설명</p>
                <span> 길이 : "", PGM: "" </span> |
                </div>
            </div>
            <div className="pd_section">
                <img src="https://www.bgmfactory.com/storage/albumcover/4158.jpg"  alt="이미지 입니당" width="100px" />
                <div className="pd_wrap">
                <p> 타이틀</p>
                <p> 설명</p>
                <span> 길이 : "", PGM: "" </span> |
                </div>
            </div>
            <div className="pd_section">
                <img src="https://www.bgmfactory.com/storage/albumcover/4158.jpg"  alt="이미지 입니당" width="100px" />
                <div className="pd_wrap">
                <p> 타이틀</p>
                <p> 설명</p>
                <span> 길이 : "", PGM: "" </span> |
                </div>
            </div>
            <div className="pd_section">
                <br />
                <img src="https://www.bgmfactory.com/storage/albumcover/4158.jpg"  alt="이미지 입니당" width="100px" />
                <div className="pd_wrap">
                <p> 타이틀</p>
                <p> 설명</p>
                <span> 길이 : "", PGM: "" </span> |
                </div>
            </div>

            </div>
        </PdComponent>
    )
    
}

const PdComponent = styled.div `
    width: 960px;
    height: 1020px;
    color: white;
    display: flex;
    margin: 0 auto;
    justify-cotnent: center;
    
    .pd_section {
        min-width: 440px;
        margin: 50px 20px;
        float: left;
        left: 0;
        display: flex;
        flex-wrap:wrap;
        border-top: 1px solid rgba(255,255,255, 0.6);;
        padding-top:20px;
    }
    .pd_wrap {
        float: left;
        left: 0;

    }
    .pd_sectino > 

    
    img {
        width: 100px;
        height: 100px;
        float: right;
    }


`
