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
      <Title>Resumen del dia</Title>
      <Typography component="p" variant="h4">
       vendido en el dia en $$$
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       Fecha
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
         Resumen completo
        </Link>
      </div>
    </React.Fragment>
  );
}
