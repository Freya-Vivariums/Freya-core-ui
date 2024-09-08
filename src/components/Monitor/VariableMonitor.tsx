import { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VivariumData.css';
import VivariumDataChart from './VivariumDataChart';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const VariableMonitor = ( props:{ variable:string, unit:string, icon?:IconProp, data:any[], status?:string } ) => {

  return (
          <>
              <div className="liveDataCardContainer col-sm-12 col-12 col-lg-6">
                <Card className="liveData">
                  <Card.Header className="liveData">{props.variable}</Card.Header>
                  <Card.Body className="liveData">
                    <Row>
                      <Col xs={3}>
                        <Card.Title className="liveData"><FontAwesomeIcon icon={props.icon?props.icon:faQuestionCircle} /></Card.Title>
                        <Card.Text className="liveData">{props.data.length>0?props.data[props.data.length-1].value:'XX.X'}{props.unit}</Card.Text>
                      </Col>
                      <Col xs={9}>
                        <VivariumDataChart data={props.data}/>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="liveData">
                  {props.status}
                  </Card.Footer>
                </Card>
              </div>
          </>
        );
  }

export default VariableMonitor;