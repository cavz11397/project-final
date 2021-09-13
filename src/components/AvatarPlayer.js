import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function AvatarPlayer({ image }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp"
                src={image}
                className={classes.large} />
        </div>
    )
}

export default AvatarPlayer
