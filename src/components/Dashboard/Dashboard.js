import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 120000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 200000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 180000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 300000,
            sell: 670,
            revenue: 61000
        }
    ]
    return (
        <section className='chart'>
            <div>
                <LineChart width={500} height={400} data={data}>
                    <Line dataKey={'revenue'}></Line>
                    <Line dataKey={'investment'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 1, bottom: 5, left: 100 }}>
                    <Line type="revenue" dataKey="revenue" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <YAxis />
                </LineChart>
            </div>

        </section>


    );
};

export default Dashboard;