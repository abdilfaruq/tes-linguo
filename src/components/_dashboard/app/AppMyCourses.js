import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Stack, Link, Card, Typography, CardHeader } from '@material-ui/core';
import { mockImgCover } from '../../../utils/mockImages2';
import Scrollbar from '../../Scrollbar';

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: ['English Convo'],
    description: ['Basic 1.0'],
    image: mockImgCover(setIndex)
  };
});

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, description } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 58, height: 58, borderRadius: 1.5 }}
      />
      <Box sx={{ maxWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
    </Stack>
  );
}

export default function AppMyCourses() {
  return (
    <Card>
      <CardHeader title="My Courses 🎓" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}
