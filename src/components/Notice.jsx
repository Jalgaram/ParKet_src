import React from 'react'
import "../scss/notice.scss";
import { Container, Tab, Tabs } from 'react-bootstrap';
import Board from './Board';

const Notice = () => {
    return (
        <>
            <Container>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3">
                    <Tab eventKey="home" title="공지사항">
                        <Board></Board>
                    </Tab>
                    <Tab eventKey="profile" title="자주 묻는 질문" disabled>
                        Tab content for Profile
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default Notice