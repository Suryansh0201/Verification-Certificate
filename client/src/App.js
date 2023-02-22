import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'  
import ValidationPage from './Components/Pages/ValidationPage';
import CredentialPage from './Components/Pages/CredentialPage/credentialPage';
import QrPage from './Components/Pages/qrScanner';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
<Route exact path='/' element={<CredentialPage/>}></Route>
<Route exact path='/verify' element={<ValidationPage/>}></Route>
<Route exact path='/verify/scan' element={<QrPage/>}></Route>
</Routes>  
    </Router>
    </div>
  );
}

export default App;
