import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "id": 1,
      "name": "Ayaan Rahman",
      "physics": 85,
      "chemistry": 78,
      "math": 90
    },
    {
      "id": 2,
      "name": "Zara Ahmed",
      "physics": 92,
      "chemistry": 88,
      "math": 95
    },
    {
      "id": 3,
      "name": "Rayan Islam",
      "physics": 76,
      "chemistry": 69,
      "math": 82
    },
    {
      "id": 4,
      "name": "Meher Fatima",
      "physics": 88,
      "chemistry": 91,
      "math": 87
    },
    {
      "id": 5,
      "name": "Tanveer Hossain",
      "physics": 67,
      "chemistry": 60,
      "math": 72
    },
    {
      "id": 6,
      "name": "Nadia Chowdhury",
      "physics": 91,
      "chemistry": 93,
      "math": 89
    },
    {
      "id": 7,
      "name": "Fahim Kabir",
      "physics": 73,
      "chemistry": 70,
      "math": 75
    },
    {
      "id": 8,
      "name": "Lamia Nahar",
      "physics": 95,
      "chemistry": 89,
      "math": 96
    },
    {
      "id": 9,
      "name": "Arif Huda",
      "physics": 80,
      "chemistry": 76,
      "math": 84
    },
    {
      "id": 10,
      "name": "Samira Tasnim",
      "physics": 78,
      "chemistry": 85,
      "math": 88
    }
  ]
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey="chemistry" stroke='red'></Line>

            </LineChart>
            
        </div>
    );
};

export default ResultsChart;