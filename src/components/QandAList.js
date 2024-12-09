import React from "react";
import { Row, Accordion, Button } from "react-bootstrap";

const QandAList = ({ data, deleteOneItem }) => {
  const onDeleteItem = (id) => {
    if (data.length >= 1) {
      // Filter the array instead of mutating it directly
      const updatedData = data.filter((item) => item.id !== id);
      // Pass the updated data to deleteOneItem
      deleteOneItem(updatedData);
    }
  };

  return (
    <Row>
      <Accordion>
        {data && data.length >= 1 ? (
          data.map((item) => {
            // Check if item and item.id exist
            if (!item || !item.id) return null;

            return (
              <Accordion.Item key={item.id} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto-inline">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  {item.a}
                  <Button onClick={() => onDeleteItem(item.id)}>
                    مسح السؤال
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2>لا توجد بيانات</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QandAList;
