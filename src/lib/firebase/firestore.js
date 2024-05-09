import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "./firebase";

/**
 * @typedef {Object} UserData
 * @property {string} username
 */

const db = getFirestore(firebaseApp);

/**
 * @param {string | undefined} userId
 */
export function getUserData(userId) {
    return getDoc(doc(db, `users/${userId}`));
}

/**
 * @param {string} userId
 * @param {UserData} data
 */
export function setUserData(userId, data) {
    return setDoc(doc(db, `users/${userId}`), data, { merge: true });
}