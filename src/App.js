import logo from './logo.svg';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';

function App() {

  const {
    transcript,
    resetTranscript
  } = useSpeechRecognition();

  // useEffect(() => {
  //   SpeechRecognition.startListening({ continuous: true })
  // },[])
  const start = () => {
    SpeechRecognition.startListening({ continuous: true })
  }

  return (
   <>
    <button onClick={start}>Start</button>
    <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
    <textarea className ="txt"  value={transcript}></textarea>
    </>
  );
}

export default App;
