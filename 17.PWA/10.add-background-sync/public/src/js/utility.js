const DB_NAME = "posts-store"
const STORE_NAME = "posts"
const SYNC_STORE_NAME = "sync-posts"
const KEY_PATH = "id"

const dbPromise = idb.open(DB_NAME, 1, function (db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
            keyPath: KEY_PATH
        })
    }
    if (!db.objectStoreNames.contains(SYNC_STORE_NAME)) {
        db.createObjectStore(SYNC_STORE_NAME, {
            keyPath: KEY_PATH
        })
    }
})

function writeData(store, data) {
    return dbPromise.then(function (db) {
        const tx = db.transaction(store, "readwrite")
        const st = tx.objectStore(store)
        st.put(data)
        return tx.complete;
    })
}

// function writeData(storeName, data) {
//     const dataBase = dbPromise;
//     const transaction = dataBase.transaction(storeName, "readwrite");
//     const store = transaction.objectStore(storeName)
//     store.put(data)
//     return transaction.complete
// }

function readAllData(store) {
    return dbPromise
        .then(function (db) {
            const tx = db.transaction(store, 'readonly')
            const st = tx.objectStore(store)
            return st.getAll()
        })
}

// function readAllData(storeName) {
//     const transaction = dbPromise.transaction(storeName, "readonly")
//     const store = transaction.objectStore(storeName)
//     return store.getAll()
// }

function clearAllData(store) {
    return dbPromise
        .then(function (db) {
            const tx = db.transaction(store, "readwrite")
            const st = tx.objectStore(store)
            st.clear()
            return tx.complete
        })
}
// function clearAllData(storeName) {
//     const transaction = dbPromise.transaction(storeName)
//     const store = transaction.objectStore(storeName)
//     store.clear()
//     return transaction.complete

// }

function deleteItemFromData(storeName, id) {
    return dbPromise.then(
        function (db) {
            const tx = db.transaction(st, "readwrite")
            const store = tx.objectStore(st)
            store.delete(id)
            return tx.complete
        }
    )
}