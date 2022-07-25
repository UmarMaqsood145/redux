import React, { useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserAction, updateUserAction } from "../../Redux/Actions";
import { Modal, Form, Button } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const signUpData = useSelector((state) => state.signUpReducer.userData);

  const removeUser = (id) => {
    const afterRemove = signUpData.filter((user) => user.id !== id);
    dispatch(deleteUserAction(afterRemove));
  };

  const [update, setUpdate] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let Name2, Value2;
  const handleInputs = (e) => {
    Name2 = e.target.name;
    Value2 = e.target.value;
    setUpdate({ ...update, [Name2]: Value2 });
  };

  const handleUpdate = (data) => {
    setUpdateModal(true);
    setUpdate(data);
  };

  const handleUpdateSubmit = () => {
    // dispatch(updateUserAction());
  };

  return (
    <>
      <div id="home">
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {signUpData.map((list) => {
                const { name, email, password, confirmPassword } = list.data;
                return (
                  <tr key={list.id}>
                    <td>{list.id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{confirmPassword}</td>
                    <td>
                      <button onClick={() => handleUpdate(list.data)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => removeUser(list.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Modal */}

      <Modal show={updateModal} onHide={() => setUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={update.name}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputForMargin">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={update.email}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputForMargin">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={update.password}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group className="mb-3 inputForMargin">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="text"
                name="confirmPassword"
                value={update.confirmPassword}
                onChange={handleInputs}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setUpdateModal(false)}>
            Cancel
          </Button>
          <button className="updateBtn" onClick={() => handleUpdateSubmit()}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
