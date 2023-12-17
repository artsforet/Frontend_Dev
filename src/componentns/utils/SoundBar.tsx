import styled from 'styled-components';

export default function SoundBar(){
    return (
        <>
        <SoundBarComponent>
            <div> Sound Bar</div>
        </SoundBarComponent> 
        </>
    )
}


const SoundBarComponent = styled.div`
    width: 1920px;
    height: 100px;
    position: fixed;
    display: fixed;
    z-index: 999;
    background-color: #202020;
    bottom:0;
    color: white;
    margin: 0 auto;
    text-align: center;
    line-height: 100px;
`