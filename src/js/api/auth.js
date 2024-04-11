import db from "../db/firestore";
import firebase from 'firebase/app';
import 'firebase/auth';

const createUserProfile = async profileData =>
  db
    .collection("profiles")
    .doc(profileData.uid)
    .set(profileData)


export const register = async (
  {email,
    password,
    username,
    avatar

  }) => {
  try {
    const { user } =
      await firebase.auth().createUserWithEmailAndPassword(email, password);

    await createUserProfile({uuid: user.uid, username, email, avatar, joinedChats: []});
    return user;
  } catch (err) {
    return Promise.reject(err.message);
  }

}

export const onAuthStateChanges = (onAuth) =>
  firebase.auth().onAuthStateChanged(onAuth)