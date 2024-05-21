import { Button, Container, Table } from "react-bootstrap";

function Cart() {
  return (
    <Container>
      <h1 className="py-5">Cart</h1>
      <Table striped bordered hover className="text-capitalize ">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td><Button className="bg-danger ">Delete</Button></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
