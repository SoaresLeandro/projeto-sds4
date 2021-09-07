import BarChart from 'components/BarChart';
import DataTable from 'components/DataTable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="App container">
                <h1 className="text-primary py-3">Dashboard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                        <BarChart></BarChart>
                    </div>
                    <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Todas Vendas</h5>
                        <DonutChart></DonutChart>
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>
                <DataTable></DataTable>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
