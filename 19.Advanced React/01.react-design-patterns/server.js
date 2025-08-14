import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options('*', cors());

app.use(express.json());

let users = [
  {
    id: "1",
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    id: "2",
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
  {
    id: "3",
    name: "Chimamanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of a Yellow Sun", "Americanah"],
  },
];

let books = [
  {
    id: "1",
    name: "To Kill a Mockingbird",
    pages: 281,
    title: "Harper Lee",
    price: 12.99,
  },
  {
    id: "2",
    name: "The Catcher in the Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
    id: "3",
    name: "The Little Prince",
    pages: 85,
    title: "Antoine de Saint-Exupéry",
    price: 7.99,
  },
];
app.get("/current-user", (req, res) => res.json(users[0]))
app.get("/users", (req, res) => res.json(users));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log("Requested ID:", id);
  const user = users.find(user => String(user.id) === String(id));
  console.log("Requested ID:", id, "Found user:", user);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;
  users = users.map((user) => (user.id === id ? { id, ...editedUser } : user));
  const updatedUser = users.find((user) => user.id === id);
  if (!updatedUser) return res.status(404).json({ error: "User not found" });
  res.json(updatedUser);
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
