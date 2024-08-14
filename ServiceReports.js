
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

function ServiceReports() {
    const inputValue = sessionStorage.getItem("inputValue");
    const email = sessionStorage.getItem("email");
    const userName = email || inputValue;
    const name = userName ? userName.match(/^([^@]*)@/)?.[1] : "Guest";

    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3001/lead/get/api", { createdBy: userName })
            .then((res) => {
                setRecords(res.data);
            });
    }, [userName]);

    // Prepare data for the table
    const columns = useMemo(
        () => [
            {
                Header: "service Name",
                accessor: "service",
            },
            {
                Header: "Lead Names",
                accessor: "leadNames",
                Cell: ({ cell: { value } }) => value.join(", "),
            },
        ],
        []
    );

    const data = useMemo(() => {
        const grouped = records.reduce((acc, record) => {
            const { service, leadName } = record;
            if (!acc[service]) {
                acc[service] = [];
            }
            acc[service].push(leadName);
            return acc;
        }, {});

        return Object.entries(grouped).map(([service, leadNames]) => ({
            service,
            leadNames,
        }));
    }, [records]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });
    const navigate=useNavigate();

    const dashboardClick=()=>{
    navigate("/DashBoard")
    }
    
  return (
    <div className="container mt-5" style={{height:"100vh",backgroundColor:"#FEF4EA"}}>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "80px" }}>
  <h1 style={{ color: "black", textAlign: "center", fontFamily: "serif", marginRight: "20px" }}>LEAD NAME BY SERVICE</h1>
  <Button variant="success" onClick={dashboardClick}>Dashboard</Button>
</div>
    <table {...getTableProps()} className="table table-striped table-bordered">
        <thead className="thead-dark">
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            className="text-center"
                        >
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                            <td
                                {...cell.getCellProps()}
                                className="text-center"
                            >
                                {cell.render("Cell")}
                            </td>
                        ))}
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>
  )
}

export default ServiceReports
