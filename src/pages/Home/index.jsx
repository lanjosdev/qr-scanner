// Funcionalidades / Libs:

// Components:
// import { Cookie } from '../../components/Cookie/cookie';
import { QrScan } from "../../components/QrScan";

// Assets:


// Estilo:
// import './home.scss';


export default function Home() {
    

    return (
        <main className='Home'>
            <h1>Teste QR Code Reader</h1>

            <QrScan />
        </main>
    )
}