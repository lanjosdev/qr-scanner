// Funcionalidades / Libs:
import { Routes, Route } from "react-router-dom";

// Pages:
import Home from "./pages/Home";


// Components:
// import PrivateRoute from "./utils/PrivateRoute";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home/> } />


            {/* <Route path="/termos" element={ 
                <PrivateRoute> <Termos/> </PrivateRoute>  
            }/> */}
        </Routes>
    )
}