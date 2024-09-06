import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';


export default async function MessagesPage()
{
  // invalidate cache when we get data internally instead of fetching
  // we can add cache to the lib/messages to activate request memoization
  // add nextCache to the lib/messages to add data cache
  const messages = await getMessages()
  
  if (!messages || messages.length === 0)
  {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
