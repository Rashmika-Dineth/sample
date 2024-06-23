import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/Form';

function Dashboard() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
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
                <Form.Control type="text" placeholder="ID" />
            </FloatingLabel>
            <FloatingLabel controlId="name" label="Name">
                <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
        </Form>
        <br/>
      <Button variant="primary" onClick={UploadData}>UPLOAD</Button>
    </Card.Body>
  </Card>
  );
}

export default Dashboard;