// Funcionalidades / Libs:
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// Components:
// import { Cookie } from '../../components/Cookie/cookie';
import { QrScan } from "../../components/QrScan";

// Assets:


// Estilo:
// import './home.scss';


export default function Home() {


    const constraints = {
        width: { min: 1440, ideal: 1920, max: 1920 },
        height: { min: 960, ideal: 1080, max: 1080 },
        aspectRatio: 16 / 9,
        facingMode: "environment"
    };
    

    return (
        <main className='Home'>
            <h1>Teste QR Code Reader</h1>

            <QrScan constraints={constraints}/>
        </main>
    )
}