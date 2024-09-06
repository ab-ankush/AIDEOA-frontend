import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
const Tabletemp = () => {
    const arr = [
        {
            name: "python",
            students: 6,
            fees: 4,
        },
        {
            name: "c++",
            students: 10,
            fees: 6,
        },
        {
            name: "java",
            students: 18,
            fees: 10,
        },
        {
            name: "javascript",
            students: 15,
            fees: 9,
        },
        {
            name: "php",
            students: 10,
            fees: 17,
        },
        {
            name: "ruby",
            students: 19,
            fees: 12,
        },
        {
            name: "kotlin",
            students: 18,
            fees: 15,
        },
        {
            name: "rust",
            students: 22,
            fees: 14,
        },
    ]
    return (
        <ResponsiveContainer width={`100%`} height={`100%`}>
            <LineChart data={arr} width={100}>
                <XAxis dataKey={`name`} />
                <YAxis />
                <Tooltip />
                <Line type={`monotone`} dataKey={`students`} stroke='purple' activeDot={{ r: 8 }} />
                <Line type={`monotone`} dataKey={`fees`} stroke='green' activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Tabletemp