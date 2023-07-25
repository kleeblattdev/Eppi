//library import
import { 
    flexRender,
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
 } from '@tanstack/react-table';

//hook import
import { useMemo, useState } from 'react';

//Data import
import mockData from '../../data.json';

/**
 * A table that displays data and provides sorting and pagination functionality.
 **/ 
 
const Table = () =>{

    //define the type for data
    type TData={
        id: number,
        location: string,
        type: string,
        device_health: string,
        last_used: string,
        price: string,
        color: string,
    }

    // state to manage the sorting configuration of the table
    const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([]);

    // Memoized data to improve performance when data doesn't change
    const data:TData[] = useMemo(()=> mockData,[])

    //column configuration
    const columns = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Location',
        accessorKey: 'location',
    },
    {
        header: 'Type',
        accessorKey: 'type',
    },
    {
        header: 'Device Health',
        accessorKey: 'device_health',
    },
    {
        header: 'Last used',
        accessorKey: 'last_used',
    },
    {
        header: 'Price',
        accessorKey: 'price',
    },
    {
        header: 'Color',
        accessorKey: 'color',
        //custom cell rendering
        cell: (info: { getValue: () => any; }) => <div className='colorBlock' style={{backgroundColor:info.getValue()}}></div>
    },
]

    //create the table with useReactTable hook
    const table = useReactTable<TData>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting: sorting,
        },
        onSortingChange: setSorting,
    });

    return(
<main>
    <h1>Table</h1>
    <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup =>(
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header=>(
                    <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                        {header.isPlaceholder ? null :
                        flexRender(header.column.columnDef.header, header.getContext())}
                        {{asc: '⬆️', desc:'⬇️'}[[header.column.getIsSorted() as string]?? null]}
                    </th>
                ))}
            </tr>
        ))}
        </thead>
        <tbody>
            {table.getRowModel().rows.map(row =>(
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell =>(
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
    {/* Pagination buttons */}
    <div>
        <button onClick={()=> table.setPageIndex(0)}>First Page</button>
        <button disabled={!table.getCanPreviousPage()} onClick={()=> table.previousPage()}>Previous Page</button>
        <button disabled={!table.getCanNextPage()} onClick={()=> table.nextPage()}>Next Page</button>
        <button onClick={()=>table.setPageIndex(table.getPageCount()-1)}>Last Page</button>
    </div>
</main>
    )
}

export default Table;