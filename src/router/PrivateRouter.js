import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import StoreContext from '../store/StoreProvider';


const PrivateRouter = ({ component: Component, ...rest }) => {

    const [{ users }] = useContext(StoreContext);

    return (
        <Route {...rest} >
            {
                (users.player1 && users.player2)
                    ?
                    <Component />
                    :
                    <Redirect to="/login" />
            }
        </Route>
    );
}

export default PrivateRouter;