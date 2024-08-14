import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
function StatusGraph() {
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

  const leadstatusCounts = records.reduce((acc, record) => {
    acc[record.status] = (acc[record.status] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(leadstatusCounts).map(status => ({
    name: status,
    value: leadstatusCounts[status]
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const navigate=useNavigate();

  const dashboardClick=()=>{
  navigate("/DashBoard")
  }
  return (
    <div>
   <div style={{overflow:"hidden" ,display: "flex", alignItems: "center", justifyContent: "center", marginTop: "80px" }}>
  <h1 style={{ color: "black", textAlign: "center", fontFamily: "serif", marginRight: "20px" }}>Lead Status Graphs</h1>
  <Button variant="success" onClick={dashboardClick}>Dashboard</Button>
</div>
    <Row>
      <Col xs={12} md={6} xl={1}></Col>
      <Col xs={12} md={6} xl={5}>
        <Card body style={{marginTop:"15px"}}>
          <h2 style={{textAlign:"center",fontFamily:"serif"}}>Pie Chart</h2>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Col>
      <Col xs={12} md={6} xl={5}>
        <Card body style={{marginTop:"15px"}}>
          <h2 style={{textAlign:"center",fontFamily:"serif"}}>Bar Chart</h2>
          <div style={{ width: '75%', height: 350 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Col>
      <Col xs={12} md={6} xl={1}></Col>
    </Row>
  </div>
  )
}

export default StatusGraph
