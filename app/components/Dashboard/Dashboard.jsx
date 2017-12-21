import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col } from 'react-bootstrap';
import DashboardRun from './Dashboard.run';

class Dashboard extends React.Component {

    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
    }

    componentWillUnmount() {
        $(this.refs.chartSpline).data('plot').shutdown();
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    Dashboard
                </div>
                <Row>
                    <Col xs={12} md={3}>
                        <div className="panel widget">
                            <div className="panel-heading text-uppercase text-center">
                                Welcome back, Ryan
                            </div>
                            <div className="panel-body">
                                <h4 className="text-center">What would you like to do today?</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-user-plus fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Create a Contact</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-users fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Create a group</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-commenting-o fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Send Message</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-bullhorn fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Create a Campaign</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-calendar fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Schedule Message</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-sitemap fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Begin a Flow</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li className="list-group-item">
                                        <Row className="row-table">
                                            <Col xs={ 4 } className="text-center">
                                                <em className="fa fa-calendar-o fa-3x"></em>
                                            </Col>
                                            <Col xs={ 8 }>
                                                <strong>Create an Event</strong>
                                                <p className="m0">
                                                    <small>Add contacts manually, or import them from your mobile phone or a CSV.</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="panel widget">
                                    <div className="panel-body">
                                        <Row>
                                            <Col xs={3}>
                                                <Row>
                                                    <Col xs={6} sm={12}>
                                                        <div className="text-center">
                                                            <div className="text-info h1">
                                                                1131
                                                            </div>
                                                            <div className="text-uppercase">
                                                                <small>Engaged Contacts</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6} sm={12}>
                                                        <div className="text-center">
                                                            <div className="text-info h1">
                                                                81
                                                            </div>
                                                            <div className="text-uppercase">
                                                                <small>Contacts in Campaign</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={6}>
                                                <Row>
                                                    <Col xs={7}>
                                                        <div className="text-center">
                                                            <div
                                                                data-easypiechart
                                                                data-percent="70"
                                                                data-animate='{"duration": "800", "enabled": "true"}'
                                                                data-bar-color="#23b7e5"
                                                                data-track-Color="rgba(200,200,200,0.4)"
                                                                data-scale-Color="false"
                                                                data-line-width="20"
                                                                data-line-cap="round"
                                                                data-size="145"
                                                                className="easypie-chart easypie-chart-lg"
                                                            >
                                                                <span>201</span>
                                                           </div>
                                                           <h4>Skipio Contacts</h4>
                                                        </div>
                                                    </Col>
                                                    <Col xs={5}>
                                                        <div className="text-center">
                                                            <div
                                                                data-easypiechart
                                                                data-percent="24"
                                                                data-animate='{"duration": "800", "enabled": "true"}'
                                                                data-bar-color="#79e8c8"
                                                                data-track-Color="rgba(200,200,200,0.4)"
                                                                data-scale-Color="false"
                                                                data-line-width="10"
                                                                data-line-cap="round"
                                                                data-size="100"
                                                                className="easypie-chart easypie-chart-md"
                                                            >
                                                                <span>24%</span>
                                                           </div>
                                                           <div className="text-bold">Valid Mobile #s</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div
                                                                data-easypiechart
                                                                data-percent="12"
                                                                data-animate='{"duration": "800", "enabled": "true"}'
                                                                data-bar-color="#ec8aaa"
                                                                data-track-Color="rgba(200,200,200,0.4)"
                                                                data-scale-Color="false"
                                                                data-line-width="10"
                                                                data-line-cap="round"
                                                                data-size="100"
                                                                className="easypie-chart easypie-chart-sm"
                                                            >
                                                                <span>12%</span>
                                                           </div>
                                                           <div className="text-bold">Do not contact</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={3}>
                                                <Row>
                                                    <Col xs={6} sm={12}>
                                                        <div className="text-center">
                                                            <div className="text-info h1">
                                                                156
                                                            </div>
                                                            <div className="text-uppercase">
                                                                <small>New contacts</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6} sm={12}>
                                                        <div className="text-center">
                                                            <div className="text-info h1">
                                                                56
                                                            </div>
                                                            <div className="text-uppercase">
                                                                <small>Groups</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <Row>
                                    <Col xs={9}>
                                        <div className="panel widget">
                                            <div className="panel-heading">
                                                Messages
                                            </div>
                                            <div className="panel-body">
                                                <div ref="chartSpline" className="chart-splinev2 flot-chart"></div>
                                            </div>
                                            <div className="panel-body">
                                                <Row>
                                                    <Col xs={ 6 } className="text-center">
                                                        <p className="text-uppercase">This Year</p>
                                                        <div className="h1 text-info">241092</div>
                                                    </Col>
                                                    <Col xs={ 6 } className="text-center">
                                                        <p className="text-uppercase">Total</p>
                                                        <div className="h1 text-info">612102</div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                        <div className="panel widget">
                                            <div className="panel-body">
                                                <Row>
                                                    <Col xs={6} sm={12}>
                                                        <div className="text-center">
                                                            <div className="text-info h1">
                                                                1131
                                                            </div>
                                                            <div className="text-uppercase">
                                                                <small>Engaged Contacts</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={6} sm={12}>
                                                        <div className="text-center">
                                                            <div className="text-info h1">
                                                                81
                                                            </div>
                                                            <div className="text-uppercase">
                                                                <small>Contacts in Campaign</small>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="panel widget">
                                    <div className="panel-body">
                                        Iframe
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="panel widget">
                                    <div className="panel-heading">
                                        Awards
                                    </div>
                                    <div className="panel-body">
                                        <div className="media">
                                            <div className="media-left">
                                                <em className="fa fa-trophy fa-3x"></em>
                                            </div>
                                            <div className="media-body">
                                                <div className="text-bold">Teenaged Girl Award</div>
                                                <div className="text-sm text-muted">
                                                    Teenaged girls send 4050 messages in one month. Do better than a teenaged girl by sending over 4,050 SMS messages.
                                                </div>
                                                <div className="progress progress-striped progress-lg mv-sm">
                                                    <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-success progress-75">
                                                        <span className="sr-only">75%</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pull-left">3,050 sent</div>
                                                    <div className="pull-right">4,050</div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <em className="fa fa-star fa-3x"></em>
                                            </div>
                                            <div className="media-body">
                                                <div className="text-bold">Engagement Party</div>
                                                <div className="text-sm text-muted">
                                                    Sales is about building connections, which is built through conversation. Receive a 40% response rate this month.
                                                </div>
                                                <div className="progress progress-striped progress-lg mv-sm">
                                                    <div role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="40" className="progress-bar progress-bar-success progress-30">
                                                        <span className="sr-only">12%</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="pull-left">12%</div>
                                                    <div className="pull-right">40%</div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="panel widget">
                                    <div className="panel-body">
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <div className="panel panel-default">
                                                    <div className="panel-body text-center">
                                                        <em className="fa fa-lightbulb-o fa-2x"></em>
                                                        <p className="text-sm">Tip of the Week:</p>
                                                        <h3 className="text-info">Sending Birthday Messages</h3>
                                                        <p className="text-sm text-muted">
                                                            Sending birthday messages is a great way to engage with your contacts and make them feel special.
                                                        </p>
                                                        <p className="text-info pv-md">
                                                            Learn More >
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <div className="media bb p">
                                                    <div className="media-body">
                                                        <a href="#" className="text-info">Mastering Skipio as a Mary Kay Sales Director</a>
                                                        <small className="text-muted dfn">January 8th, 2017 by Joe Parry</small>
                                                        <p>
                                                            Master communication with your team and customers with these 3 steps.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media bb p">
                                                    <div className="media-body">
                                                        <a href="#" className="text-info">Increase Bookings by 40% Using Referral Flows</a>
                                                        <small className="text-muted dfn">January 8th, 2017 by Joe Parry</small>
                                                        <p>
                                                            How can you use referral flows to increase your bookings by 40%? Learn how in this post.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="media p">
                                                    <div className="media-body">
                                                        <a href="#" className="text-info">Following Up with Existing Customers</a>
                                                        <small className="text-muted dfn">January 8th, 2017 by Joe Parry</small>
                                                        <p>
                                                            Repeat business is often the most lucrative option for growing your business. Learn how Skipio can help.
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default Dashboard;
