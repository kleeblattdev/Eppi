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

//UI component import
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

/**
 * A table that displays data and provides sorting and pagination functionality.
 **/ 
 
const TablePage = () =>{

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
    <Table>
        <TableHeader>
        {table.getHeaderGroups().map(headerGroup =>(
            <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header=>(
                    <TableHead key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                    </TableHead>
                ))}
            </TableRow>
        ))}
        </TableHeader>
        <TableBody>
            {table.getRowModel().rows.map(row =>(
                <TableRow key={row.id}>
                    {row.getVisibleCells().map(cell =>(
                        <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    </Table>
    {/* Pagination buttons */}
    <div className='flex justify-between m-4'>
        <Button onClick={()=> table.setPageIndex(0)}>First Page</Button>
        <Button disabled={!table.getCanPreviousPage()} onClick={()=> table.previousPage()}>Previous Page</Button>
        <Button disabled={!table.getCanNextPage()} onClick={()=> table.nextPage()}>Next Page</Button>
        <Button onClick={()=>table.setPageIndex(table.getPageCount()-1)}>Last Page</Button>
    </div>
</main>
    )
}

export default TablePage;