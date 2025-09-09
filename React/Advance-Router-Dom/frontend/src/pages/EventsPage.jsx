import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'First Event',
    description: 'This is the first event',
    date: '2023-10-01',
  },
  {
    id: 'e2',
    title: 'Second Event',
    description: 'This is the second event',
    date: '2023-10-02',
  },
];

export default function EventsPage() {
  return (
    <section>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <Link to={event.id}>View Details</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
