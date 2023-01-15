import { useContext, useState } from 'react';
import { AppContext } from '../store/AppContext';

import Errorpage from './Errorpage';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AddValue = () => {
  const [ outcomeNumber, setOutcomeNumber ] = useState(0);
  const [ outcomeText, setOutcomeTex ] = useState('');
  const [ error, setError ] = useState(false);
  const { addOutcome, dataOutcome, deleteOutcome } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (outcomeNumber !== '' && outcomeNumber !== 0 && outcomeText !== '') {
      addOutcome(outcomeNumber, outcomeText);
      setError(false);
    } else {
      setError(true);
    };
  };

  const handleDelete = (id) => {
    deleteOutcome(id);
  };

  const displayOutcomes = dataOutcome.map( outcome => {
      return (
        (outcome.outcomeText === '' && outcome.outcomeNumber === 0) ? '' : (
        <Box key={outcome.id} sx={{
            margin: '1rem',
          }}>
            <Grid container sx={{
              border: '2px solid black',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
            }}>

              <Grid item xs={12} sm={8}>
                <Typography variant="h5">
                  {outcome.outcomeText}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography variant="h5">
                  {outcome.outcomeNumber}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography variant="h5" align='center'>
                  <IconButton aria-label="delete" color="error" onClick={() => handleDelete(outcome.id)}>
                    <DeleteForeverIcon fontSize="large" sx={{
                      border: '2px solid black',
                      margin: '0.5rem'
                    }} />
                  </IconButton>
                </Typography>
              </Grid>

            </Grid>
          </Box>)
        );
    });

  return (
    <Box  sx={{
      width: '100%',
      padding: '0.5rem',
      marginTop: '0.5rem'
    }}>

      <Box sx={{
        backgroundColor: '#FFB4B4'
      }}>
        <Typography variant="h4" component="div"  sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0.8rem',
            padding: '0.5rem'
          }} >
          Add Outcome
        </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          justifyContent: 'center'
        }}>
          <TextField id="input-with-sx" type="text" variant="standard"  sx={{
            padding: '0.8rem',
            width: '80%'
          }} onChange={(event) => setOutcomeTex(event.target.value)} />
          <TextField id="input-with-sx" type="number" inputProps={{step: "0.01"}} variant="standard"  sx={{
            padding: '0.8rem',
            width: '20%'
          }} onChange={(event) => setOutcomeNumber(event.target.value)} />
          <IconButton aria-label="add" color="error" type='submit'>
            <AddBoxIcon fontSize="large" />
          </IconButton>
        </Box>
        {!error ? '' : <Errorpage />}
      </form>

      </Box>

      { displayOutcomes }

    </Box>
  )
}

export default AddValue