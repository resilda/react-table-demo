import React, { useState } from 'react';
import { 
        useTable, 
        useFilters, 
        useSortBy,
        useGroupBy,
        useExpanded,
        usePagination      
    } from 'react-table';
import ColumnCheckbox from './HideShowColumns';
import Pagination from './Pagination';

const UsersTable = ({ 
    columns, data, 
}) => {

	const { getTableProps, // table props from react-table
			getTableBodyProps, // table body props from react-table
			headerGroups, // headerGroups, if your table has groupings
			rows, // rows for the table based on the data passed
			prepareRow, // prepare the row (this function needs to be called for each row before getting the row props)
            setFilter,
            allColumns,
            getToggleHideAllColumnsProps,
            //pagination
            page,
            canPreviousPage,
            canNextPage,
            pageOptions,
            nextPage,
            previousPage,
            state: { groupBy, expanded, pageIndex, pageSize }
        } = useTable({ 
            columns, 
            data,
            initialState: { pageIndex: 0, pageSize: 5 } // dipslay 5 pages starting from index 0
        }, 
            useFilters, 
            useGroupBy,
            useSortBy,
            useExpanded,
            usePagination // here we pass usePagination hook to useTable hook as props 
            );

        /* Filter, only in the name column */

        const [filterInput, setFilterInput] = useState("");

        // Update the state when input changes
        const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name", value); //Based on name search, show only the rows which match the value name
        setFilterInput(value);
        };
        
	return (
		<> 
            <div style={{color: 'orchid', fontSize: '15px', fontWeight: 'bold'}}>
                <ColumnCheckbox {...getToggleHideAllColumnsProps()}/>
                Hide All Columns
                <div>
                    {allColumns.map(column => (
                        <div key={column.id}>
                            <label>
                                <input type="checkbox" {...column.getToggleHiddenProps()}/>
                                {column.id}
                            </label>
                        </div>
                    ))}
                    <br />
                </div>
            </div>
            <div className="search">
                <input
                    className="input"
                    value={filterInput || ''}
                    onChange={handleFilterChange}
                    placeholder={"Search name"}
                    style={{
                        width: '500px',
                        height: '30px',
                        marginBottom: '10px'                    
                    }}
                />
            </div>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {/* Gouping */}
                                    {column.canGroupBy ? (
                                        <span {...column.getGroupByToggleProps()} style={{color: 'green'}}>
                                            {column.isGrouped ? 'Gr  '  : '!Gr  '}
                                        </span>
                                        ) : null}
                                    {/* Sort */}
                                    {column.isSorted ?
                                    column.isSortedDesc 
                                    ? '🔽  '
                                    : '🔼  ' 
                                    : ""
                                    }
									{column.render('Header')}
								</th>
							))
							}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						//Prepare the row for display
						prepareRow(row);
						return (
							//Apply the row props 
							<tr {...row.getRowProps()}>
								{ //loop over the row cells
									row.cells.map(cell => {
										//Apply the cell props
										return (
											<td 
                                                {...cell.getCellProps()}
                                                style={{
                                                    background: cell.isGrouped
                                                    ? '#0aff0082'
                                                    : cell.isPlaceholder
                                                    ? '#ff000042'
                                                    : 'white',
                                                }}
                                            >
                                                {cell.isGrouped ? (
                                                    //If it's a grouped cell, add an expander and row count
                                                    <>
                                                        <span {...row.getToggleRowExpandedProps()} style={{color: 'orange'}}>
                                                            {row.isExpanded ? 'Exp  ' : '!Exp  ' }
                                                        </span>
                                                        {cell.render('Cell')} 
                                                        {row.subRows.length}
                                                    </>
                                                )
                                                : (
                                                    cell.isPlaceholder ? null : (
                                                        //For cells with repeated values
                                                        cell.render('Cell') 
                                                    )
                                                )
                                                }
												{/* {//Render the cell contents
													cell.render('Cell')
												} */}
											</td>
										)
									}) 
								}
							</tr>         
						)
					})}
				</tbody>
			</table>
            <div style={{display: 'flex', flexDirection: 'row', margin: '10px'}}>
                <Pagination
                    page={page}
                    pageSize={pageSize}
                    pageIndex={pageIndex}
                    pageOptions={pageOptions}
                    previousPage={previousPage}
                    canPreviousPage={canPreviousPage}
                    nextPage={nextPage}
                    canNextPage={canNextPage}
                />
                {/* Code to see how the 'groupBy' and 'expanded' work in the current table */}
                <pre style={{border: '4px solid orange', marginLeft: '10px'}}>
                    <h4 style={{color: 'orange' }}>Group by and Exapanded</h4>
                    <code>{JSON.stringify({ groupBy, expanded }, null, 2)}</code>
                </pre>
            </div>
		</>
	)

}

export default UsersTable;