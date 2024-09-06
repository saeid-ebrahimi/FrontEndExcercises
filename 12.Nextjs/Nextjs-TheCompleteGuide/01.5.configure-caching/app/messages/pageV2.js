import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';
// another way on adding cache config in next js

// to add revalidation for after 7 seconds ( its only available in next js)
export const revalidate = 7;

// to remove cached data for every fetch request (this approach is file wide cache setting)
// export const dynamic = "force-dynamic";

export default async function MessagesPage()
{
  // to remove cached data for every fetch request (unstable_noStore() approach is for component cache setting)
  // unstable_noStore()
  const response = await fetch('http://localhost:8080/messages');
  const messages = await response.json();

  if (!messages || messages.length === 0)
  {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
