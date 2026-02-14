import React, { useEffect, useState } from "react";
import { getFirestore, doc, setDoc, collection, getDocs } from "firebase/firestore";
import { app } from "../Firebase";

const db = getFirestore(app);

export default function FireStore() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const snapshot = await getDocs(collection(db, "users"));

            const list = snapshot.docs.map((d) => ({
                id: d.id,
                ...d.data(),
            }));

            setUsers(list);
        } catch (error) {
            console.error("Error fetching documents:", error);
        }
    };
    const sendData = async () => {
        try {
            await setDoc(doc(db, "users", "3"), {
                user: "Krunal Makwana",
                email: "makwanakrunal99@gmail.com",
            });

            alert("User Added ");cd 
            fetchUsers();
        } catch (error) {
            console.error("Error adding document:", error);
            alert("Error while adding user ");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Firestore</h1>

            <button onClick={sendData}>Send Data</button>

            <h2 style={{ marginTop: "20px" }}>Users</h2>

            {users.map((u) => (
                <p key={u.id}>
                    <b>ID:</b> {u.id} | <b>Name:</b> {u.user} | <b>Email:</b> {u.email}
                </p>
            ))}
        </div>
    );
}