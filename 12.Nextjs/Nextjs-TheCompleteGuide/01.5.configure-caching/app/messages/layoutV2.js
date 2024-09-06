export default async function MessagesLayout({ children }) {
  // next js have request memoization when you use fetch functions with same header
  // const response = await fetch('http://localhost:8080/messages');

  // to remove data cache for every fetch request
  // const response = await fetch('http://localhost:8080/messages', {
  //   cache:"no-store"
  // });

  // to add revalidation for after 7 seconds ( its only available in next js)
  const response = await fetch('http://localhost:8080/messages', {
    next: {
      revalidate: 7
    }
  });
  const messages = await response.json();
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
