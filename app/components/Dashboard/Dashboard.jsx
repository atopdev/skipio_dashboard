import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col } from 'react-bootstrap';

class Dashboard extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    Dashboard
                </div>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-thin">Dashboard</h2>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default Dashboard;
