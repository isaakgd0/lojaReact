import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PagLogin from './pages/PagLogin';
import Sobre from './pages/Sobre';


function RouterApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PagLogin" element={<PagLogin />} />
                <Route path="/Sobre" element={<Sobre />} />
                
            </Routes>
        </BrowserRouter>
    )
} export default RouterApp;
