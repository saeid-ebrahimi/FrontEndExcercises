import { getMessages } from "@/lib/messages";

export default async function MessagesLayout({ children }) {

  // invalidate cache when we get data internally instead of fetching
  // we can add cache to the lib/messages to activate request memoization
  // add nextCache to the lib/messages to add data cache (nextCache is async function)
  const messages = await getMessages()
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
