import FormInput from './components/FormInput';
import{Container,Row,Col, Button} from 'react-bootstrap'
import QandAList from './components/QandAList';
import { question } from './data';
import { useState } from 'react';
function App() {
  const [data,setData] = useState(question)
  const addItem = () =>{
    setData([...question])
  }
  const deleteAllItems = () =>{
    question.splice(0,question.length) // to change in the original Array of Data
    setData([])
  }
  const deleteOneItem = (updatedData) => {
    setData(updatedData); // Assuming `setData` updates the state in the parent component
  };
  
  return (
    <div className="font text-center color-body">
       <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
          <div className="fs-3 text-center"> اسيله و اجوبه</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem}/>
            <QandAList data={data}  deleteOneItem={deleteOneItem}/>
            {
              data.length >=1 ? (<Button onClick={deleteAllItems} className='btn-color w-100 mx-3'> مسح كل الاسله</Button> ):null
            }
          </Col>
        </Row>  
        
       </Container>
    </div>
  );
}

export default App;
