import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/Form';
import { useState } from 'react';

function Dashboard() {

    const [id, setId] = useState();
    const [name,setName] = useState();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name })
    };

    function UploadData() {
        console.log("Uploading Data")
        fetch('/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
        
  return (
    <Card style={{ width: '80%', marginLeft: '10%' }}>
    <Card.Header>API DESIGN</Card.Header>
    <Card.Body>
      <Card.Title>USER DATA INPUT</Card.Title>
        <Form>
            <FloatingLabel
                controlId="id"
                label="ID"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="ID" onChange={e => setId(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="name" label="Name">
                <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
            </FloatingLabel>
        </Form>
        <br/>
      <Button variant="primary" onClick={UploadData}>UPLOAD</Button>
    </Card.Body>
  </Card>
  );
}

export default Dashboard;