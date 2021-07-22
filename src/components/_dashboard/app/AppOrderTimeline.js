import faker from 'faker';
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@material-ui/lab';
import { fDateTime } from '../../../utils/formatTime';

const TIMELINES = [
  {
    title: 'Meeting 1.1 - Wie geht’s dir?',
    time: faker.date.past(),
    type: 'order1'
  },
  {
    title: 'Meeting 1.2 - Wie geht’s dir?',
    time: faker.date.past(),
    type: 'order2'
  },
  {
    title: 'Meeting 1.1 - Wie geht’s dir?',
    time: faker.date.past(),
    type: 'order3'
  },
  {
    title: 'Meeting 1.1 - Wie geht’s dir?',
    time: faker.date.past(),
    type: 'order4'
  },
  {
    title: 'Meeting 1.3 - Wie geht’s dir?',
    time: faker.date.past(),
    type: 'order5'
  }
];

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'primary.main') ||
              (type === 'order2' && 'success.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Schedule 📅" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
