export class IDBManager {
  private __db: IDBDatabase | null = null;
  private __dbName: string;
  private __version: number;
  private __storeName: string;

  constructor(
    dbName: string,
    version: number,
    storeName: string
  ) {
    this.__dbName = dbName;
    this.__version = version;
    this.__storeName = storeName;
  }
  // Method to initialize and open the database
  async openDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(
        this.__dbName,
        this.__version
      );
      request.onupgradeneeded = (
        event: IDBVersionChangeEvent
      ) => {
        const db = (event.target as IDBRequest)
          .result as IDBDatabase;
        if (
          !db.objectStoreNames.contains(
            this.__storeName
          )
        ) {
          db.createObjectStore(this.__storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      };

      request.onsuccess = (event: Event) => {
        this.__db = (event.target as IDBRequest)
          .result as IDBDatabase;
        resolve();
      };

      request.onerror = (event: Event) => {
        const error = (event.target as IDBRequest)
          .error;
        reject(error);
      };
    });
  }

  // Method to get all items
  async getAllItems<T>(): Promise<T[]> {
    if (!this.__db) {
      throw new Error(
        "Database not opened yet. Call openDB() first."
      );
    }

    return new Promise((resolve, reject) => {
      const transaction = this.__db!.transaction(
        this.__storeName,
        "readonly"
      );
      const store = transaction.objectStore(
        this.__storeName
      );

      const request = store.getAll();

      request.onsuccess = (event: Event) => {
        resolve(
          (event.target as IDBRequest)
            .result as T[]
        );
      };
      request.onerror = (event: Event) => {
        reject(
          `Error fetching all items from ${
            this.__storeName
          }: ${
            (event.target as IDBRequest).error
          }`
        );
      };
    });
  }

  // Method to get item by id
  async getItemById<T>(
    id: number
  ): Promise<T | void> {
    if (!this.__db) {
      throw new Error(
        "Database not opened yet. Call openDB() first."
      );
    }
    return new Promise((resolve, reject) => {
      const transaction = this.__db!.transaction(
        this.__storeName,
        "readonly"
      );
      const store = transaction.objectStore(
        this.__storeName
      );
      const request = store.get(id);
      request.onsuccess = (event: Event) => {
        resolve(
          (event.target as IDBRequest).result as
            | T
            | undefined
        );
      };
      request.onerror = (event: Event) => {
        reject(
          `Error fetching item with ID ${id} from ${
            this.__storeName
          }: ${
            (event.target as IDBRequest).error
          }`
        );
      };
    });
  }
  /**
   * Adds a new item to the object store.
   * @param item - The item to add. The 'id' property should ideally be omitted if auto-increment is used.
   * @returns A promise that resolves with the ID of the newly added item.
   */
  async addItem<T>(
    item: T
  ): Promise<IDBValidKey> {
    if (!this.__db) {
      throw new Error(
        "Database not opened yet. Call openDB() first."
      );
    }
    const transaction = this.__db!.transaction(
      this.__storeName,
      "readwrite"
    );
    const store = transaction.objectStore(
      this.__storeName
    );
    return new Promise((resolve, reject) => {
      const request = store.add(item);
      request.onsuccess = (event: Event) => {
        // The result of a successful 'add' is the key of the new item
        const newItemId = (
          event.target as IDBRequest
        ).result;
        console.log(
          `Item added successfully with ID: ${newItemId}`
        );
        resolve(newItemId);
      };

      request.onerror = (event: Event) => {
        const error = (event.target as IDBRequest)
          .error;
        console.error(
          `Error adding item to ${this.__storeName}:`,
          error
        );
        reject(error);
      };
      transaction.oncomplete = () => {
        // console.log('Transaction completed for addItem.');
      };
      transaction.onerror = (event) => {
        reject(
          `Transaction error during addItem: ${
            (event.target as IDBTransaction).error
          }`
        );
      };
    });
  }

  // Method to close db
  closeDB(): void {
    if (this.__db) {
      this.__db.close();
      this.__db = null;
      console.log("Database closed");
    }
  }
}
