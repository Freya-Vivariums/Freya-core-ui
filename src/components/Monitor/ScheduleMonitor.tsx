import { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VivariumData.css';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const ScheduleMonitor = ( props:{} ) => {

  return (
          <>
              <div className="liveDataCardContainer col-sm-12 col-12 col-lg-6">
                <Card className="liveData">
                  <Card.Header className="liveData">Circadian Schedule</Card.Header>
                  <Card.Body className="liveData">
                    <Row>
                      <Col xs={3}>
                        <Card.Title className="liveData"><FontAwesomeIcon icon={faCalendar} /></Card.Title>
                        <Card.Text className="liveData">Day</Card.Text>
                      </Col>
                      <Col xs={9}>

                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="liveData">
                    Some status
                  </Card.Footer>
                </Card>
              </div>
          </>
        );
  }

export default ScheduleMonitor;