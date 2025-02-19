/* eslint-disable react/prop-types */
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ContributeChart = ({ prediction, userInput }) => {
    const fixedLabels = {
        size: 'Dog Size',
        popularity_ranking: 'Popularity',
        lifetime_cost: 'Lifetime Cost',
        intelligence: 'Intelligence',
        grooming_frequency: 'Grooming',
        suitability_for_children: 'Kids Score'
    };

    const features = [
        "size",
        "popularity_ranking",
        "lifetime_cost",
        "intelligence",
        "grooming_frequency",
        "suitability_for_children"
    ];

    const percentages = features.map(feature => {
        if (userInput[feature] === -1) {
            return 0;
        }
        return (prediction.contributions[feature] / prediction.score) * 100;
    });

    const backgroundColors = [
        'rgba(75, 192, 192, 0.6)',
        'rgba(192, 75, 192, 0.6)',
        'rgba(192, 192, 75, 0.6)',
        'rgba(75, 75, 192, 0.6)',
        'rgba(192, 75, 75, 0.6)',
        'rgba(75, 192, 75, 0.6)',
    ];

    const borderColors = [
        'rgba(75, 192, 192, 1)',
        'rgba(192, 75, 192, 1)',
        'rgba(192, 192, 75, 1)',
        'rgba(75, 75, 192, 1)',
        'rgba(192, 75, 75, 1)',
        'rgba(75, 192, 75, 1)',
    ];

    const data = {
        labels: features.map(feature => fixedLabels[feature]),
        datasets: [
            {
                label: 'Contribution (%)',
                data: percentages,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: `Breed Recommendation Breakdown`,
                font: {
                    size:16,
                },
                color: "#2c1854"
            },
            tooltip: {
                callbacks: {
                    label: context => `${context.label}: ${context.parsed.toFixed(2)}%`
                }
            }
        },
        responsive: true
    };

    return <Pie data={data} options={options} />;
}

export default ContributeChart;