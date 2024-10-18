// src/components/FormComponent.js
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Formcomponent.css"; // For custom styling

const FullFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    qualification: "",
    height: "",
    religion: "",
    caste: "",
    profession: "",
    address: "",
    city: "",
    state: "",
    country: "",
    income: "",
    maritalStatus: "",
    familyType: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Register Free & Get Your Matched Partner</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <Button variant="link" className="verify-mobile">
            Click here to verify mobile number
          </Button>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="qualification">
          <Form.Label>Qualification</Form.Label>
          <Form.Control
            as="select"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option>Select Qualification</option>
            <option>Graduate</option>
            <option>Post Graduate</option>
            <option>PhD</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="height">
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="religion">
          <Form.Label>Religion</Form.Label>
          <Form.Control
            as="select"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
          >
            <option>Select Religion</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Christian</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="caste">
          <Form.Label>Caste</Form.Label>
          <Form.Control
            as="select"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
          >
            <option>Select Caste</option>
            <option>Brahmin</option>
            <option>Kshatriya</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="profession">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            as="select"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option>Select Profession</option>
            <option>Engineer</option>
            <option>Doctor</option>
            <option>Lawyer</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="income">
          <Form.Label>Annual Income</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your annual income"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="maritalStatus">
          <Form.Label>Marital Status</Form.Label>
          <Form.Control
            as="select"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option>Select Marital Status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="familyType">
          <Form.Label>Family Type</Form.Label>
          <Form.Control
            as="select"
            name="familyType"
            value={formData.familyType}
            onChange={handleChange}
          >
            <option>Select Family Type</option>
            <option>Nuclear</option>
            <option>Joint</option>
          </Form.Control>
        </Form.Group>

        <div className="captcha-display">OZH8M2</div>
        <Form.Group controlId="captcha">
          <Form.Label>Enter Captcha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the text displayed above"
            name="captcha"
            value={formData.captcha}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="form-actions">
          <Button variant="primary" type="submit">
            Register
          </Button>
          <span className="mandatory-verification">
            *Verify mobile is mandatory for registration
          </span>
        </div>
      </Form>
    </div>
  );
};

export default FullFormComponent;