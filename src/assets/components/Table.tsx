//library import
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import { useMemo } from 'react';

//Data import
import mockData from '../../data.json';


const Table = () =>{
    const data = useMemo(()=> mockData,[])

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
    },
]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()}
    )

    return(
<main>
    <h1>Table</h1>
    <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup =>(
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header=>(
                    <th key={header.id}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
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
</main>
    )
}

export default Table;

/*     //Define the row shape
type Data={
    id: number,
    location: string,
    type: string,
    device_health: string,
    last_used: string,
    price: string,
    color: string,
}

const columnHelper = createColumnHelper<Data>()

const defaultColumns = [
    //display column
    columnHelper.accessor('id',{
        header: 'ID',
    }),
    columnHelper.accessor('location',{
        header: 'Location',
    }),
    columnHelper.accessor('type',{
        header: 'Type',
    }),
    columnHelper.accessor('device_health',{
        header: 'Device Health',
    }),
    columnHelper.accessor('last_used',{
        header: 'Last Used',
    }),
    columnHelper.accessor('price',{
        header: 'Price',
    }),
    columnHelper.accessor('color',{
        header: 'Color',
    })
] */

/* type Columns = ColumnDef<Data>[]

const columns:Columns=[] */