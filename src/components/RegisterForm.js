import React, { useContext, useState } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import StoreContext from '../store/StoreProvider';
import { types } from '../store/StoreReducer';

function RegisterForm() {

    const [{ users }, dispatch] = useContext(StoreContext);

    const [p1, setPlayer1] = useState(users.player1);
    const [p2, setPlayer2] = useState(users.player2);

    const handlerLogin = () => {
        dispatch({ type: types.authLogin, payload: {player1: p1, player2: p2 } });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>PLAYER 1</Form.Label>
                            <Form.Control type="input"
                                placeholder="Enter Player 1"
                                value={p1}
                                onChange={(e) => setPlayer1(e.target.value)} />
                            <Form.Text className="text-muted">
                                This field is required *
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>PLAYER 2</Form.Label>
                            <Form.Control type="input"
                                placeholder="Enter Player 2"
                                value={p2}
                                onChange={(e) => setPlayer2(e.target.value)} />
                            <Form.Text className="text-muted">
                                This field is required *
                            </Form.Text>
                        </Form.Group>
                        <Link variant="primary" type="submit" onClick={handlerLogin} to="/dashboard">
                            Login
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterForm
