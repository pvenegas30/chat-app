import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async() => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };

  const alertUse = (e) => {

    alert("Hola, para utilizar esta Chat App es necesario buscar a un usuario con el que puedas hablar, busca una persona que se haya registrado previamente o busca alguno de los siguientes usuarios: ElBicho7, John Cena, Victoria, Nicole, Pedro Venegas o Maiguel.\n \nEnglish: Hello, to use this Chat App it is necessary to search for a user with whom you can talk, search for a person who has previously registered or search for one of the following users: ElBicho7, John Cena, Victoria, Nicole, Pedro Venegas or Maiguel");

  }


  return (
    <div className='search'>
      <div className='searchForm'>

        <input type="text" title="Find a user: ElBicho7, John Cena, Victoria, Nicole, Pedro Venegas o Maiguel" placeholder='Find a user...' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} onClick={alertUse}/>
      </div>

      {err && <span className='errsearch'>User not found!</span>}
      
      {user && <div className="userChat" onClick={handleSelect}>

        <img src={user.photoURL} alt=''/>

        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>

      </div>}

    </div>
  )
}

export default Search