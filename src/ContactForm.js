import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react'
import './ExtraStyles.css'

const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });

export default function ContactForm({setPage}) {

    const [formData, updateFormData] = useState(initialFormData);

    const formStyles = {
        padding: '10px'
    }

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
        
        const templateId = 'template_czrlb1i';
        const serviceID = "service_w8tlljd";
        if (formData.name && formData.mobile && formData.email && formData.query) {
            sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message: formData.query, email: formData.email })
            alert(`Thank you for your message. Your query has been forwarded.`);
            setPage('home')
        } else {
            alert(`Please complete all fields`);
        }
        

        console.log(formData);
      };

  return (
    <div className='transparentBG cardPaddingBtm'>
        <div style={formStyles} className="d-flex align-items-center justify-content-center">
        <h3>For all inquiries, please send me a message via the form below.</h3>
        </div>
    <Form style={formStyles}>
            <Form.Group hasValidation as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control required onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control required onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control required onChange= {handleChange} name="mobile" placeholder="Phone" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control required onChange= {handleChange} name="query" as="textarea" rows={8} />
            </Form.Group>
    <div style={formStyles} className="d-flex align-items-center justify-content-center">
            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
                </Button>
                </div>
        </Form >
        </div>
  );
}
