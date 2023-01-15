import Alert from '@mui/material/Alert';
import { Box } from '@mui/system';

const Errorpage = () => {
  return (
    <Box sx={{
      margin: '0.8rem',
    }}> 
      <Alert severity="error">Please complete all fields</Alert>;
    </Box>
  )
}

export default Errorpage;