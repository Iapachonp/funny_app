import { Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

export const ProjectCard = ({ title, productor, origind, description, imgUrl, price}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="list-group-item"><span> {productor}</span> </ListGroup.Item>
            <ListGroup.Item className="list-group-item">{origind}</ListGroup.Item>
            <ListGroup.Item className="list-group-item">{description}</ListGroup.Item>
            <ListGroup.Item className="list-group-item"><h4>{price}</h4></ListGroup.Item>
          </ListGroup> 
        </div>
      </div>
    </Col>
  )
}
