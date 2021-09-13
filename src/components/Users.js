import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import StoreContext from '../store/StoreProvider';
import { types } from '../store/StoreReducer';
import getIdGame from '../helpers/getIdGame';
import getCard from '../helpers/getCard';
import User from './User';
import Cards from './Cards';
import ExplanationIcons from './ExplanationIcons';
import AvatarPlayer from './AvatarPlayer';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ReplayIcon from '@material-ui/icons/Replay';

import Swal from 'sweetalert2';

import Batman from '../images/batman.png';
import StarWars from '../images/starwars.png';

const pinta = {
    'HEARTS': 4,
    'SPADES': 3,
    'DIAMONDS': 2,
    'CLUBS': 1
}

const Users = () => {

    const [{ users, cardsPlayer1, cardsPlayer2 }, dispatch] = useContext(StoreContext);

    const [idNewGame, setIdNewGame] = useState();

    const [cardsp1, setCardsp1] = useState();
    const [cardsp2, setCardsp2] = useState();

    const [winner1, setWinner1] = useState([0])
    const [winner2, setWinner2] = useState([0])

    const [show, setShow] = useState(true)

    useEffect(() => {
        dispatch({ type: types.newGame, payload: { idNewGame } });
    }, [idNewGame]);

    useEffect(() => {
        setWinner1(winner(cardsPlayer1));
        setWinner2(winner(cardsPlayer2));
    }, [cardsPlayer1, cardsPlayer2]);

    useEffect(() => {
        if (winner1.length >= 2 || winner2.length >= 2) {
            setShow(false);
            if (winner1.length === winner2.length) {
                winnerPlayer(draw());
            } else if (winner1.length > winner2.length) {
                winnerPlayer(users.player1);
            } else {
                winnerPlayer(users.player2);
            }

        }
    }, [winner1, winner2]);

    useEffect(() => {
        if (cardsp1 !== undefined && cardsp2 !== undefined && cardsp1.length === cardsp2.length) {
            dispatch({
                type: types.newCards, payload: { cardsPlayer1: cardsp1, cardsPlayer2: cardsp2 }
            });
        }
    }, [cardsp1, cardsp2]);

    const draw = () => {
        let count1 = 0;
        let count2 = 0;
        winner1.map(item => count1 += pinta[item.suit]);
        winner2.map(item => count2 += pinta[item.suit]);
        if (count1 === count2) {
            return 'DRAW'
        } else if (count1 > count2) {
            return users.player1;
        }
        return users.player2;
    }

    const winnerPlayer = (Player) => {
        return Swal.fire({
            title: '¡Congratulations!',
            text: `The winner is: ${Player}`,
            icon: 'success',
            confirmButtonText: 'Continue'
        });
    }

    const winner = (list) => {
        let aux = [];
        list.map(item => {
            let auxiliar = [];
            auxiliar = list.filter(item2 => item.value === item2.value);
            if (auxiliar.length >= 2 && aux.length === 0) {
                aux = JSON.parse(JSON.stringify(auxiliar));
            }
        });
        return aux;
    }

    const handlerIdGame = () => {
        getIdGame().then(id => setIdNewGame(id));
    }

    const handlerResetGame = () => {
        setWinner1([0]);
        setWinner2([0]);
        handlerIdGame();
        dispatch({ type: types.newCards, payload: { cardsPlayer1: [], cardsPlayer2: [] } });
        setShow(!show);
    }

    const handlerGetCard = () => {
        getCard(idNewGame.deck_id).then(newCards => {
            let aux1 = JSON.parse(JSON.stringify(cardsPlayer1));
            aux1.push(newCards.cards[0]);
            let aux2 = JSON.parse(JSON.stringify(cardsPlayer2));
            aux2.push(newCards.cards[1]);
            setCardsp1(aux1);
            setCardsp2(aux2);
        });
    }

    const handlerLogout = () => {
        setIdNewGame(undefined);
        dispatch({
            type: types.authLogout, payload: {
                users: { player1: '', player2: '' },
                cardsPlayer1: [],
                cardsPlayer2: [],
                idGame: undefined
            }
        });
    }

    const imageQuestion = (player) => {
        return (
            <Col md={6}>
                <h1>Keep trying {player}</h1>
            </Col>
        );
    }

    const upperPart = () => {
        return (
            <React.Fragment>
                <Col md={2}>
                    <Row>
                        <Col><User player={users.player1} image={Batman} /></Col>
                    </Row>
                    <Row>
                        <Col><User player={users.player2} image={StarWars} /><h1>{show}</h1></Col>
                    </Row>
                    <Row>
                        <Col >
                            {
                                idNewGame
                                    ? show
                                        ?
                                        <Fragment>
                                            <PlayCircleFilledIcon style={{ fontSize: 40, cursor: 'pointer' }}
                                                onClick={handlerGetCard} />
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <ReplayIcon style={{ fontSize: 40, cursor: 'pointer' }}
                                                onClick={handlerResetGame} />
                                        </Fragment>
                                    :
                                    <Fragment>
                                        <PowerSettingsNewIcon style={{ fontSize: 40, cursor: 'pointer' }}
                                            onClick={handlerIdGame} />
                                    </Fragment>
                            }
                        </Col>
                        <Col >
                            <Link to="/login">
                                <ExitToAppSharpIcon style={{ fontSize: 40, cursor: 'pointer' }}
                                    onClick={handlerLogout} />
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ margin: '10px' }}>
                        <ExplanationIcons />
                    </Row>
                </Col>
            </React.Fragment>
        );
    }

    const middlePart = () => {
        return (
            <React.Fragment>
                <Col md={10}>
                    <Row>
                        {
                            winner1.length >= 2
                                ?
                                winner1.map(item =>
                                    <Col md={3}>
                                        <Cards image={item.image} />
                                    </Col>)
                                :
                                imageQuestion(users.player1)
                        }
                        {
                            winner2.length >= 2
                                ?
                                winner2.map(item =>
                                    <Col md={3}>
                                        <Cards image={item.image} />
                                    </Col>)
                                :
                                imageQuestion(users.player2)
                        }
                    </Row>
                </Col>
            </React.Fragment>
        );
    }

    const lowPart = () => {
        return (
            <React.Fragment>
                <Col md={6}>
                    <AvatarPlayer image={Batman} />
                    <Row style={{ backgroundImage: 'url(https://i.pinimg.com/originals/3b/ee/9d/3bee9dc05a93109271b7f82f151e7d32.png)' }}>
                        {
                            cardsPlayer1 !== undefined
                                ?
                                cardsPlayer1.map((item, index) =>
                                    <Col md={4} key={index}>
                                        <Cards image={item.image} />
                                    </Col>
                                )
                                :
                                <h1>Obtenga cartas</h1>
                        }
                    </Row>
                </Col>
                <Col md={6}>
                    <AvatarPlayer image={StarWars} />
                    <Row style={{ backgroundImage: 'url(https://cdn.icon-icons.com/icons2/318/PNG/128/Lightsaber-Red-icon_34497.png)' }}>
                        {
                            cardsPlayer2 !== undefined
                                ?
                                cardsPlayer2.map((item, index) =>
                                    <Col md={4} key={index}>
                                        <Cards image={item.image} />
                                    </Col>
                                )
                                :
                                <h1>Obtenga cartas2</h1>
                        }
                    </Row>
                </Col>
            </React.Fragment>
        );
    }

    return (
        <div>
            <Container>
                <Row>
                    {upperPart()}
                    {middlePart()}
                </Row>
                <Row>
                    {lowPart()}
                </Row>
            </Container>
        </div>
    )
}

export default Users
