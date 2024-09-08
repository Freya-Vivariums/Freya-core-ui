import { Alert, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VivariumData.css';
import { faGlobeAmericas, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ScheduleMonitor = ( ) => {

  return (
          <>
              <div className="liveDataCardContainer col-sm-12 col-12 col-lg-6">
                <Card className="liveData">
                  <Card.Header className="liveData">Circadian Schedule</Card.Header>
                  <Card.Body className="liveData" style={{height:'192px'}}>
                    <Row>
                      <Col xs={3}>
                        <Card.Title className="liveData"><FontAwesomeIcon icon={faGlobeAmericas} /></Card.Title>
                        <Card.Text className="liveData">Day</Card.Text>
                      </Col>
                      <Col xs={9}>
                        <Alert><FontAwesomeIcon icon={faInfoCircle}/> We're still working on this component</Alert>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="liveData">
                    &nbsp;
                  </Card.Footer>
                </Card>
              </div>
          </>
        );
  }

export default ScheduleMonitor;