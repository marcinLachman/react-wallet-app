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
  const [ incomeNumber, setIncomeNumber ] = useState(0);
  const [ incomeText, setIncomeTex ] = useState('');
  const [ error, setError ] = useState(false);
  const { addIncome, dataIncome, deleteIncome } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (incomeNumber !== '' && incomeNumber !== 0 && incomeText !== '') {
      addIncome(incomeNumber, incomeText);
      setError(false);
    } else {
      setError(true);
    };
  };

  const handleDelete = (id) => {
    deleteIncome(id);
  };

  const displayIncomes = dataIncome.map( income => {
      return (
        (income.incomeText === '' && income.incomeNumber === 0) ? '' : (
        <Box key={income.id} sx={{
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
                  {income.incomeText}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography variant="h5">
                  {income.incomeNumber}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <Typography variant="h5" align='center'>
                  <IconButton aria-label="delete" color="error" onClick={() => handleDelete(income.id)}>
                    <DeleteForeverIcon fontSize="large" sx={{
                      border: '2px solid black',
                      margin: '0.5rem'
                    }} />
                  </IconButton>
                </Typography>
              </Grid>

            </Grid>
          </Box> )
        );
    });

  return (
    <Box  sx={{
      width: '100%',
      padding: '0.5rem',
      marginTop: '0.5rem'
    }}>

      <Box sx={{
        backgroundColor: '#7DD879'
      }}>
        <Typography variant="h4" component="div"  sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0.8rem',
            padding: '0.5rem'
          }} >
          Add Income
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
          }} onChange={(event) => setIncomeTex(event.target.value)} />
          <TextField id="input text" type="number" inputProps={{step: "0.01"}} variant="standard"  sx={{
            padding: '0.8rem',
            width: '20%'
          }} onChange={(event) => setIncomeNumber(event.target.value)} />
          <IconButton aria-label="add" color="success" type='submit'>
            <AddBoxIcon fontSize="large" />
          </IconButton>
        </Box>
        {!error ? '' : <Errorpage />}
      </form>

      </Box>

      { displayIncomes }

    </Box>
  )
}

export default AddValue