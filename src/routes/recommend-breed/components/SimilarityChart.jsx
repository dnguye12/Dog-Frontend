/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const convertGrooming = (grooming_frequency) => {
    if (grooming_frequency === "Daily") {
        return 0
    }
    else if (grooming_frequency === "Once a week") {
        return 1
    } else if (grooming_frequency === "Once in a few weeks") {
        return 2
    }
    else {
        return 1
    }
}

const SimilarityChart = ({ breed, stats, userInput }) => {
    // Fixed display names for each feature
    const fixedLabels = {
        size: 'Dog Size',
        popularity_ranking: 'Popularity',
        lifetime_cost: 'Lifetime Cost',
        intelligence: 'Intelligence',
        grooming_frequency: 'Grooming',
        suitability_for_children: 'Kids Score'
    };

    const features = [
        'size',
        'popularity_ranking',
        'lifetime_cost',
        'intelligence',
        'grooming_frequency',
        'suitability_for_children'
    ];

    const normalizedData = features.map(feature => {
        if (userInput[feature] === -1) {
            return { label: fixedLabels[feature], user: 0, breed: 0 };
        }

        let userVal = 0;
        let breedVal = 0;

        switch (feature) {
            case 'size':
                userVal = 100;
                breedVal = breed.size === userInput.size ? 100 : 0;
                break;
            case 'popularity_ranking':
                userVal = 100 - (((userInput.popularity_ranking - stats.lowest_popularity) /
                    (stats.highest_popularity - stats.lowest_popularity)) * 100);
                breedVal = 100 - (((breed.popularity_ranking - stats.lowest_popularity) /
                    (stats.highest_popularity - stats.lowest_popularity)) * 100);
                break;
            case 'lifetime_cost':
                userVal = ((userInput.lifetime_cost - stats.lowest_lifetime_cost) /
                    (stats.highest_lifetime_cost - stats.lowest_lifetime_cost)) * 100;
                breedVal = ((breed.lifetime_cost - stats.lowest_lifetime_cost) /
                    (stats.highest_lifetime_cost - stats.lowest_lifetime_cost)) * 100;
                break;
            case 'intelligence':
                userVal = ((userInput.intelligence - stats.lowest_intelligence) /
                    (stats.highest_intelligence - stats.lowest_intelligence)) * 100;
                breedVal = ((breed.intelligence - stats.lowest_intelligence) /
                    (stats.highest_intelligence - stats.lowest_intelligence)) * 100;
                break;
            case 'grooming_frequency':
                userVal = (userInput.grooming_frequency / 2) * 100;
                breedVal = (convertGrooming(breed.grooming_frequency) / 2) * 100;
                break;
            case 'suitability_for_children':
                userVal = userInput.suitability_for_children ? 100 : 0;
                breedVal = breed.suitability_for_children ? 100 : 0;
                break;
            default:
                break;
        }

        return { label: fixedLabels[feature], user: userVal, breed: breedVal };
    });

    const labels = normalizedData.map(item => item.label);
    const userValues = normalizedData.map(item => item.user);
    const breedValues = normalizedData.map(item => item.breed);

    const data = {
        labels,
        datasets: [
            {
                label: 'User Input',
                data: userValues,
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            },
            {
                label: 'Breed Prediction',
                data: breedValues,
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Similarity between User Input and Breed Prediction',
                font: {
                    size:16,
                },
                color: "#2c1854"
            },
            tooltip: {
                callbacks: {
                    label: context => `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`
                }
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: value => `${value}%`
                }
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default SimilarityChart;