import React from 'react';

const data = [
    { name: 'Pratik', count: 2 },
    { name: 'Sanjay', count: 5 },
    { name: 'Sampath', count: 12 },
    { name: 'Prathmesh', count: 8 },
    { name: 'Aniket', count: 18 },
];

const Table = () => {
    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            style={{
                                backgroundColor:
                                    row.count < 3
                                        ? 'green'
                                        : row.count >= 3 && row.count < 10
                                            ? 'yellow'
                                            : 'red',
                            }}
                        >
                            <td>{row.name}</td>
                            <td>{row.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
