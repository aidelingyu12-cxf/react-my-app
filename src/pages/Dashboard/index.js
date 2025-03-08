import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './index.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function OffsetGrid() {
  return (
    <Grid container>
      <Grid container size={{ xs: 5, md: 6 }} direction="column" spacing={1} rowSpacing={1} sx={{ height: '400px' }}>
        <Grid size={{ xs: 4, md: 12 }} offset={{ xs: 3, md: 0 }} sx={{ height: '200px' }}>
          <Item sx={{ height: '140px' }}>1</Item>
        </Grid>
        <Grid size={{ xs: 4, md: 12 }} offset={{ md: 0 }} sx={{ height: '140px' }}>
          <Item sx={{ height: '140px' }}>2</Item>
        </Grid>
      </Grid>
      <Grid container size={{ xs: 5, md: 6 }} direction="row" spacing={1} rowSpacing={1} sx={{ flexGrow: 1}}>
        <Grid container size={{ xs: 5, md: 12 }} spacing={1} rowSpacing={1}>
          <Grid size={{ xs: 5, md: 4 }} offset={{ md: 0 }} sx={{ height: '100px' }}>
            <Item sx={{ height: '100px' }}>3</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} offset={{ md: 0 }} sx={{ height: '100px' }}>
            <Item sx={{ height: '100px' }}>4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} offset={{ md: 0 }} sx={{ height: '100px' }}>
            <Item sx={{ height: '100px' }}>5</Item>
          </Grid>
          <Grid size={{ xs: 7, md: 12 }} offset={{ md: 0 }} sx={{ height: '100px' }}>
            <Item sx={{ height: '180px'}}>6</Item>
          </Grid>
        </Grid>


      </Grid>
      <Grid container size={{ xs: 5, md: 12 }} direction="row" spacing={1} rowSpacing={1} sx={{ flexGrow: 1, height: '140px' }}>
        <Grid size={{ xs: 5, md: 6 }} offset={{ md: 0 }} sx={{ height: '100px' }}>
          <Item sx={{ height: '100px' }}>3</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }} offset={{ md: 0 }} sx={{ height: '100px' }}>
          <Item sx={{ height: '100px' }}>4</Item>
        </Grid>
      </Grid>
    </Grid>
  );
}
