import React from 'react';
import { Container, Table } from './TableView.Styled';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';

const TableView = ({ columns, data, currentPage, pageCount, sortConfig, setSortConfig }) => {

  return (
    <Container>
      <Table>
        <TableHead columns={columns} sortConfig={sortConfig} setSortConfig={setSortConfig} />
        <TableBody data={data} columns={columns} currentPage={currentPage} pageCount={pageCount} />
      </Table>
    </Container>
  );
};

export default TableView;
