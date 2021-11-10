import React from 'react';
import { MetaTags } from 'react-meta-tags';
import { Col, Row } from 'reactstrap';

function ErrorPage(props) {
    return (
        <>
            <MetaTags>
                <title>StaciaBook - Not Found</title>
            </MetaTags>
            <div className="container">
                <Row>
                    <Col md="12" xl="6" className="d-flex align-items-center justify-content-center">
                        <div className="number">404</div>
                    </Col>
                    <Col md="12" xl="6" className="d-flex align-items-center justify-content-center">
                        <div className="text"><span>Ooops...</span><br></br>Không tìm thấy sách</div>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default ErrorPage;