import React from "react";
import { TableData, TableRow, TBody } from "./TableBody.Styled";

const TableBody = ({ data, columns, currentPage, pageCount }) => {

    return (
        <TBody>
            {data?.map((item, rowIndex) => (
                <TableRow key={rowIndex}>
                    {columns.map((column, colIndex) => {
                        return (<TableData key={colIndex}>
                            {column?.label === "SNo"
                                ? (currentPage - 1) * pageCount + rowIndex + 1
                                : item[column?.label] ?? ""}
                        </TableData>)
                    })}
                </TableRow>
            ))}
        </TBody>
    )
}

export default React.memo(TableBody);