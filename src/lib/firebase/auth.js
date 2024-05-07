import { firebaseApp } from "./firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(firebaseApp);

/**
 * @returns {Promise<import("firebase/auth").UserCredential>}
 */
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

/**
 * @returns {Promise<void>}
 */
function signOut() {
    return auth.signOut();
}

export { auth, signInWithGoogle, signOut };