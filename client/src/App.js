import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'  
import ValidationPage from './Components/Pages/ValidationPage';
import CredentialPage from './Components/Pages/CredentialPage/credentialPage';
import Certificate from './Certificate/certificate';
import QrPage from './Components/Pages/qrScanner';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
<Route exact path='/' element={<CredentialPage/>}></Route>
<Route exact path='/verify/scan' element={<QrPage/>}></Route>
<Route exact path='/details' element={<ValidationPage/>}></Route>
<Route exact path='/certificate' element={<Certificate/>}></Route>
</Routes>  
    </Router>
    </div>
  );
}

export default App;
