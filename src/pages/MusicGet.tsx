import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function MusicGet() {
  const [audioSrc, setAudioSrc] = useState<string>('');
  const audioRef = React.createRef<HTMLAudioElement>();

  useEffect(() => {
    // const streaming_music = async () => {
    //   axios.get('music/song.mp3', {
    //     method: 'GET',
    //     responseType: 'stream'
    //   })
    //   .then(response => {
    //     const blobData = new Blob([response.data], { type: 'audio/mpeg'})
    // })
    // }
    // 서버에서 음악 파일을 받아오는 함수
    const download_music = async () => {
        // const data = await axios.get<any>('http://localhost:3001/music', { headers, responseType: blob});
        // data.data(console.log(data));
        // console.log();
        axios.get('/music/song.mp3', {     
          method: 'GET',
          responseType: 'blob' 
         })
        .then(response => {
          // 이미지 파일 다운로드s
          const blobData = new Blob([response.data], { type: 'audio/mpeg' });
          console.log(blobData);
          const url = window.URL.createObjectURL(blobData);
          // var audioSrc = url;
          const link = document.createElement('a');
          link.download = 'mp3';
          link.href = url;
          link.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error(error);
        });
      }
  
        //     if (response.data) {
    //       console.log(response.data);
    //       const blob = await response.data.blob();
    //       const objectURL = URL.createObjectURL(blob);
    //       console.log(objectURL);
    //     } else {
    //       throw new Error('Network response was not ok.');
    //     }
    // };

  download_music();
}, []);

  return (
    <MusicList>
    <div className="App">
        <h1>MUSIC PLAYER</h1>
        <audio controls ref={audioRef}>
          <source src={audioSrc} type="audio/song.mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </MusicList>
  );
}

export default MusicGet;


const MusicList = styled.div`
  color: white;
`
