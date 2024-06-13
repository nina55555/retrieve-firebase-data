import React, { useRef, useEffect, useState } from "react";
//import {firestore} from "../firebase";
import { addDoc, onSnapshot, collection } from "@firebase/firestore";
import { ref } from "firebase/storage";
import db from "../firebase";


const Home = () => {
  const [users, setUsers] = useState([]);

  //const nameRef = useRef();
  const bidRef = useRef();

  const ref = collection(db, "users");

  const handleSave = async (e) => {
    e.preventDefault();
    //console.log(nameRef.current.value);
    console.log(bidRef.current.value);

    let data = {
      //nom : nameRef.current.value,
      bid: bidRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "users"), (snapshot) =>
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  console.log(users);

  return (
    <div className="bigBox">
      <div className="lilBox">
        <form onSubmit={handleSave}>
          <label>Enter your bid</label>

          <input placeholder="5555" type="number" ref={bidRef}></input>
          <button>$</button>
          <button type="submit">Save</button>
        </form>
      </div>

      <br />
      <div className="listBox">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                {user.name} a encheri: {user.bid} ${" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
