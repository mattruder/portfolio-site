import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react'

const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });

export default function ContactForm() {

    const [formData, updateFormData] = useState(initialFormData);

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = 'template_czrlb1i';
        const serviceID = "service_w8tlljd";
        sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message: formData.query, email: formData.email })

        console.log(formData);
      };

  return (
    <div>
        <h3>For all inquiries, please send me a message via the form below.</h3>
    <Form>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control onChange= {handleChange} name="mobile" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control onChange= {handleChange} name="query" as="textarea" rows={3} />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
                </Button>
        </Form >
        </div>
  );
}
