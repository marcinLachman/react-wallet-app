import { useContext } from 'react';
import { AppContext } from '../store/AppContext';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Summary = () => {
  const { income, outcome, summary, } = useContext(AppContext);

  return (
  <Grid container spacing={2}>

    <Grid item xs={12} sm={4}>
      <Box sx={{
        border: '2px solid black',
        padding: '0.5rem'
      }}>
      <CardContent>
        <Typography variant="h5" component="div" align='center' sx={{
          backgroundColor: '#7DD879'
        }}>
          Income
        </Typography>

        <Typography variant="h4" align='center' sx={{
          marginTop: '2rem',
        }}>
          {income.toFixed(2)}
        </Typography>
      </CardContent>
      </Box>
    </Grid>    

    <Grid item xs={12} sm={4}>  
      <Box sx={{
        border: '2px solid black',
        padding: '0.5rem'
      }}>
      <CardContent>
        <Typography variant="h5" component="div" align='center'>
          Summary
        </Typography>

        <Typography variant="h4" align='center' sx={{
          marginTop: '2rem',
        }}>
          {summary.toFixed(2)}
        </Typography>
      </CardContent>
      </Box>
    </Grid>

    <Grid item xs={12} sm={4}>
      
      <Box sx={{
        border: '2px solid black',
        padding: '0.5rem'
      }}>
      <CardContent>
        <Typography variant="h5" component="div" align='center' sx={{
          backgroundColor: '#FFB4B4'
        }}>
          Outcome
        </Typography>

        <Typography variant="h4" align='center' sx={{
          marginTop: '2rem',
        }}>
          {outcome.toFixed(2)}
        </Typography>
      </CardContent>
      </Box>

    </Grid>
  </Grid>
  )
}

export default Summary