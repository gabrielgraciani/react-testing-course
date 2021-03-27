import Col from 'react-bootstrap/Col';

export default function OptScoopOptionions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        src={`http://loaclhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: '75%' }}
      />
    </Col>
  );
}
