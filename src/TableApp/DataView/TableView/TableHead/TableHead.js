import React, { useCallback } from "react";
import { TableHeader, TableRow, ArrowButton, HeaderData } from './TableHead.Styled';

const TableHead = ({ columns, sortConfig, setSortConfig }) => {

    const handleSort = useCallback((column) => {
        if (column === "SNo") return;
        let direction = "asc";
        if (sortConfig?.key === column && sortConfig?.direction === "asc") {
            direction = "desc";
        } else if (sortConfig?.key === column && sortConfig?.direction === "desc") {
            direction = "none";
        } else {
            direction = "asc"
        }
        setSortConfig({ key: direction === "none" ? null : column, direction });
    }, [sortConfig]);

    return (
        <thead>
            <TableRow>
                {columns?.map((column, index) => {
                    const arrowIcon = sortConfig?.key === column?.label ?
                        sortConfig?.direction === "asc" ? "fas fa-arrow-up" : sortConfig?.direction === "desc" ? "fas fa-arrow-down" : "" : "";
                    return (<TableHeader key={index}>
                        <ArrowButton onClick={() => handleSort(column?.label)}>
                            <HeaderData>
                                {column?.value}{" "}
                                {
                                    column?.sort && <i className={arrowIcon}></i>
                                }
                            </HeaderData>
                        </ArrowButton>
                    </TableHeader>)
                })}
            </TableRow>
        </thead>
    )
}

export default React.memo(TableHead);