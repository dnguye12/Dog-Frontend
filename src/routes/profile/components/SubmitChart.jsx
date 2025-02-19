/* eslint-disable react/prop-types */
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const SubmitChart = ({ createdDogs, totalDogs }) => {
    const remainingDogs = totalDogs - createdDogs;

    const data = {
        labels: ["Your submissions", "Other Breeds"],
        datasets: [
            {
                label: 'Proportion of Created Dogs',
                data: [createdDogs, remainingDogs],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(192, 75, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(192, 75, 192, 1)'
                ],
                borderWidth: 1,
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: `Database Breakdown`,
                font: {
                    size: 16,
                },
                color: "#2c1854"
            },
            tooltip: {
                callbacks: {
                    label: context => `${context.label}: ${context.parsed.toFixed(2)}`
                }
            }
        },
        responsive: true
    };

    return <Pie data={data} options={options} />;
}

export default SubmitChart
