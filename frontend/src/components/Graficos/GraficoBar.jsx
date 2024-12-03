
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Registre os componentes do Chart.js que você vai usar
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  

  
// export default function GraficoBar(){
//     // Dados do gráfico
//   const data = {
//     labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'],
//     datasets: [
//       {
//         label: 'Livros Lidos',
//         data: [12, 19, 3, 5, 2, 3, 5, 8, 1],
//         backgroundColor: '#007090',
//         borderWidth: 1,
//       },
//       {
//         label: 'Livros Não Finalizados',
//         data: [12, 19, 3, 5, 2, 3, 1, 1, 6],
//         backgroundColor: '#70a288',
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Opções do gráfico
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Gráfico de todos os livros',
//       },
//     },
//   };
//     return(
//         <>
    
//         <Bar data={data} options={options} />
       
//         </>
//     )
// }