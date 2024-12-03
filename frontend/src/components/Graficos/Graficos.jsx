import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const Grafico = ({ type, data, options }) => {
 
    
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        // Destruir o gráfico existente, se houver
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Criar um novo gráfico
        const ctx = chartRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
            type: type, // ou outro tipo de gráfico
            data: data,
            options: options,
        });

        // Limpar o gráfico ao desmontar o componente
        return () => {
            chartInstanceRef.current.destroy();
        };
    }, [type, data, options]); // Atualiza o gráfico quando os dados ou opções mudam

    return <canvas ref={chartRef} />;
   
}
export default Grafico;