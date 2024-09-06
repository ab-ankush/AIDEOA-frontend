import React, { useMemo } from 'react';
import { useTable, } from 'react-table';

const Table = () => {
    const data = useMemo(() => [
        { id: 1, name: 'John Doe', age: 25, city: 'New York' },
        { id: 2, name: 'Jane Doe', age: 30, city: 'Los Angeles' },
        { id: 3, name: 'Bob Smith', age: 35, city: 'Chicago' },
    ], []);

    const columns = useMemo(() => [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age' },
        { Header: 'City', accessor: 'city' },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data },);

    return (
        <table {...getTableProps()} className="w-full border border-purple-500">
            <thead className="bg-purple-600 text-white">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} style={{ background: 'lightgray' }}>
                        {headerGroup.headers.map((column) => (
                            <th
                                className="bg-purple-600"
                                {...column.getHeaderProps()}
                            >
                                {column.render('Header')}
                                {/* <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                </span> */}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="w-full text-center" {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} style={{ borderBottom: 'solid 1px gray' }}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;