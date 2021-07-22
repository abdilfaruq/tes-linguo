import { Box, Grid, Container, Typography } from '@material-ui/core';
import Page from '../components/Page';
import {
  AppTeachers,
  AppStaff,
  AppKelas,
  AppMyCourses,
  AppCurrentActivity,
  AppStudents,
  AppOrderTimeline
} from '../components/_dashboard/app';

export default function DashboardApp() {
  return (
    <Page title="Home | Linguo ID">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Hello, Abdil
            <span role="img" aria-label="arrow">
              👋
            </span>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppStudents />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTeachers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppKelas />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppStaff />
          </Grid>

          <Grid item xs={6} md={3} lg={4}>
            <AppMyCourses />
          </Grid>

          <Grid item xs={3} md={1.5} lg={4}>
            <AppCurrentActivity />
          </Grid>

          <Grid item xs={3} md={1.5} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
