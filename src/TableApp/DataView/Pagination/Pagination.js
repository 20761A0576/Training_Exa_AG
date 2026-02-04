import React from 'react'
import { Container, SelectDiv, DropDown, SubContainer, Button, Span } from "./Pagination.Styled";

const Pagination = ({ pageCount, setPageCount, currentPage, setCurrentPage, totalPages }) => {

  return (
    <Container>
      <SubContainer>
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)} >Previous</Button>
        <Span> Page {currentPage} of {totalPages} </Span>
        <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)} >Next</Button>
      </SubContainer>
      <SelectDiv>
        <DropDown value={pageCount} onChange={(e) => setPageCount(e.target.value)}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </DropDown>
      </SelectDiv>
    </Container>
  )
}

export default Pagination
