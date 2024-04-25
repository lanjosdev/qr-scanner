// Funcionalidades / Libs:
import { BrowserRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// Components:
import AppRoutes from './routes'; //Config de rotas

// Estilo Global:
import './styles/global.css';


export default function App() {

  return (
    <BrowserRouter>  

      <AppRoutes/>

    </BrowserRouter>
  )
}