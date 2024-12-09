import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { question } from '../data';

const FormInput = ({ onAdd }) => {
  const [qu, setQue] = useState('');
  const [an, setAnswer] = useState('');

  const setNewItem = () => {
    if (qu.trim() && an.trim()) {
      question.push({ id: Math.random(), q: qu, a: an });
      setQue('');
      setAnswer('');
      onAdd(); // Trigger the callback after adding a new item
    } else {
      alert('Both question and answer are required!');
    }
  };

  return (
    <Row className="mt-3">
      <Col md={6} className="mb-3">
        <Form.Control
          value={qu}
          onChange={(e) => setQue(e.target.value)}
          type="text"
          placeholder="ادخل السؤال"
        />
      </Col>
      <Col md={6} className="mb-3">
        <Form.Control
          value={an}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          placeholder="ادخل الاجابة"
        />
      </Col>
      <Col>
        <Button onClick={setNewItem} className="btn-color w-100" type="button">
          Add Question
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
