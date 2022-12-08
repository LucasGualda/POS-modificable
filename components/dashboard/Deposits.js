import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Venta total del dia</Title>
      <Typography component="p" variant="h4">
       $5000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       08/12/2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
         Resumen completo
        </Link>
      </div>
    </React.Fragment>
  );
}
