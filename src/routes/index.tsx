import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Importe seus componentes de página

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Adicione mais rotas aqui */}
                {/*<Route path="/sobre" element={<Sobre />} />*/}
                {/*<Route path="/contato" element={<Contato />} />*/}
                {/*<Route path="*" element={<NotFound />} /> /!* Rota para página não encontrada *!/*/}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
