import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SimpleAccordion = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <PowerSettingsNewIcon style={{ fontSize: 40 }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Start the game, receive a new deck
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <PlayCircleFilledIcon style={{ fontSize: 40 }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Receive a new card for each player
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <ReplayIcon style={{ fontSize: 40 }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Start a new game with the same players
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <ExitToAppSharpIcon style={{ fontSize: 40 }} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            exit the game, towards the start of the application
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
