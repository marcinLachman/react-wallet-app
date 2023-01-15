
import Summary from "./components/Summary";
import ValueOperation from "./components/ValueOperation";


import Container from '@mui/material/Container';

const App = () => {

    return (
        <Container sx={{
          marginTop: '2rem'
        }}>
          <Summary />
          <ValueOperation />
        </Container>
    );
  }

export default App;
