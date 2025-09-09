import { useParams } from 'react-router-dom';

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.eventId;
  return <h1>Event Detail Page of {eventId}</h1>;
}
