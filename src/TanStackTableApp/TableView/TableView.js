import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { data, columns } from "../Data/Columns";
import {
  Wrapper,
  TableContainer,
  SearchInput,
  Table,
  Thead,
  Th,
  Td,
  Tr,
  Pagination,
  Button,
  DropDown,
  HeaderContainer,
  Header,
  SubHeader,
  ExportButton,
  NoData
} from "./TableView.Styled";
import Select from "react-select";
import * as XLSX from "xlsx";

export default function DataTable() {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, columnVisibility },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleChange = (selected) => {
    setSelectedColumns(selected || []);

    const hiddenColumns = selected?.map((col) => col.value) || [];
    table.setColumnVisibility(
      columns.reduce((acc, col) => {
        acc[col.accessorKey] = !hiddenColumns.includes(col.accessorKey);
        return acc;
      }, {})
    );
  };

  const columnOptions = columns.map((col) => ({
    label: typeof col.header === "string" ? col.header : col.accessorKey,
    value: col.accessorKey,
  }));

  const exportToExcel = () => {
    const rows = table.getFilteredRowModel().rows;

    const excelData = rows.map((row) => {
      const rowData = {};
      row.getVisibleCells().forEach((cell) => {
        rowData[cell.column.columnDef.header] = cell.getValue();
      });
      return rowData;
    });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");

    XLSX.writeFile(workbook, "table-data.xlsx");
  };


  return (
    <Wrapper>
      <HeaderContainer>
        <Header>Table Data</Header>
        <SubHeader>
          <Select
            isMulti
            options={columnOptions}
            value={selectedColumns}
            onChange={handleChange}
            placeholder="Select columns to hide"
            closeMenuOnSelect={false}
          />
          <SearchInput
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
          <ExportButton onClick={exportToExcel}><i className="fa fa-download"></i>{" "}Export</ExportButton>
        </SubHeader>
      </HeaderContainer>
      {
        (table.getVisibleLeafColumns().length === 0 || table.getRowModel().rows.length === 0) ? (table.getRowModel().rows.length === 0) ? (
          <NoData>No Data Available</NoData>
        ) : (
          <NoData>No columns to display</NoData>
        ) : (
          <>
            <TableContainer>
              <Table>
                <Thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <Th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          style={{
                            width: header.getSize(),
                            minWidth: header.getSize(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted()] ?? ""}
                        </Th>
                      ))}
                    </Tr>
                  ))}
                </Thead>

                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <Tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <Td key={cell.id} style={{
                          width: cell.column.getSize(),
                          minWidth: cell.column.getSize(),
                        }}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      ))}
                    </Tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
            <Pagination>
              <Button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>

              <span>
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </span>

              <Button
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
              <DropDown
                value={table.getState().pagination.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
              >
                {[5, 10, 15, 20].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </DropDown>
            </Pagination>
          </>
        )
      }
    </Wrapper>
  );
}
