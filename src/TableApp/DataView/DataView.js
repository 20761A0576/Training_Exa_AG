import React, { useCallback, useEffect, useMemo, useState, createContext, useContext, lazy, Suspense } from "react";
import users from "../Data/Users"
import { Container, SubContainer, HeaderContainer, Header, SubHeader, SearchBar, NoData, Button, SelectMultiple, Loading } from "./DataView.Styled";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Select from "react-select";

const Pagination = lazy(() => import("./Pagination/Pagination"));
const TableView = lazy(() => import("./TableView/TableView"))

const DataView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [pageCount, setPageCount] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedColumns, setSelectedColumns] = useState([]);
  const columns = [
    {
      label: "SNo",
      value: "SNo",
      visiblity: true,
      sort: false
    },
    {
      label: "ID",
      value: "ID",
      visiblity: true,
      sort: true
    },
    {
      label: "Name",
      value: "Name",
      visiblity: true,
      sort: true
    },
    {
      label: "Username",
      value: "Username",
      visiblity: true,
      sort: true
    },
    {
      label: "Email",
      value: "Email",
      visiblity: true,
      sort: true
    },
    {
      label: "Mobile",
      value: "Mobile",
      visiblity: true,
      sort: true
    },
    {
      label: "Gender",
      value: "Gender",
      visiblity: false,
      sort: true
    },
    {
      label: "Age",
      value: "Age",
      visiblity: false,
      sort: true
    },
    {
      label: "birthDate",
      value: "Birth Date",
      visiblity: true,
      sort: true
    },
    {
      label: "bloodGroup",
      value: "Blood Group",
      visiblity: true,
      sort: true
    },
  ];
  const data = users.map((user) => ({
    SNo: 0,
    ID: user.id,
    Name: `${user.firstName} ${user.maidenName ?? ""} ${user.lastName}`.trim(),
    Username: user.username,
    Email: user.email,
    Mobile: user.phone,
    Gender: user.gender,
    Age: user.age,
    birthDate: user.birthDate,
    bloodGroup: user.bloodGroup
  }));

  const filterData = useMemo(() => {
    const filterUser = data.filter((item) => (
      item.Name.trim().toLowerCase().includes(searchText.trim().toLowerCase()) ||
      item.birthDate.trim().toLowerCase().includes(searchText.trim().toLowerCase()) ||
      item.Gender.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    ))
    if (!sortConfig.key) return filterUser;

    const sorted = [...filterUser].sort((a, b) => {
      const aValue = a[sortConfig.key] ?? "";
      const bValue = b[sortConfig.key] ?? "";

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
      }
      return sortConfig.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

    return sorted;
  }, [searchText, sortConfig])

  const [totalPages, setTotalPages] = useState(Math.ceil(filterData.length / pageCount));
  const [currentData, setCurrentData] = useState(filterData.slice(0, pageCount));

  useEffect(() => {
    setTotalPages(Math.ceil(filterData.length / pageCount));
    setCurrentData(filterData.slice(0, pageCount));
    setCurrentPage(1);
  }, [pageCount, filterData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageCount;
    setCurrentData(filterData.slice(startIndex, (Number(startIndex) + Number(pageCount))));
  }, [currentPage]);

  const exportToExcel = useCallback(() => {
    const flattenedData = filterData.map((item, index) => ({
      SNo: index + 1,
      ID: item.ID,
      Name: item.Name,
      Username: item.Username,
      Email: item.Email,
      Mobile: item.Mobile,
      Gender: item.Gender,
      Age: item.Age,
      "Birth Date": item.birthDate,
      "Blood Group": item.bloodGroup,
    }));
    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob(
      [excelBuffer],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    saveAs(blob, "Users.xlsx");
  }, [filterData])

  const handleChange = useCallback((selected) => {
    setSelectedColumns(selected);
  }, [selectedColumns]);

  const columnData = useMemo(() => {
    const availableColumns = columns.filter(
      col => !selectedColumns.some(sel => sel.value === col.value)
    );
    return availableColumns;
  }, [selectedColumns])

  const contextValue = {
    columns: columnData,
    data: currentData,
    currentPage,
    setCurrentPage,
    pageCount,
    setPageCount,
    sortConfig,
    setSortConfig,
    totalPages
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>Table Data</Header>
        <SubHeader>
          <Select
            isMulti
            options={columns}
            value={selectedColumns}
            onChange={handleChange}
            placeholder="Select columns to hide"
            closeMenuOnSelect={false}
          />
          <SearchBar type="search" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)}></SearchBar>
          <Button onClick={exportToExcel}><i className="fa fa-download"></i>{" "}Export</Button>
        </SubHeader>
      </HeaderContainer>
      {
        (currentData.length !== 0 && columnData.length !== 0) ? (
          <Suspense fallback={(<Loading>Data Loading...</Loading>)}>
            <SubContainer>
              <TableView
                columns={columnData}
                data={currentData}
                currentPage={currentPage}
                pageCount={pageCount}
                sortConfig={sortConfig}
                setSortConfig={setSortConfig}
              />
              <Pagination
                pageCount={pageCount}
                setPageCount={setPageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </SubContainer>
          </Suspense>
        ) : (
          currentData.length === 0 ? <NoData>No Data Available</NoData> : <NoData>No Column Available to Display</NoData>
        )
      }
    </Container>
  );
}
export default DataView;
