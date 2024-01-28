import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const journalCollectionRef = collection(db, 'journals');

export const addJournalEntry = async (entry) => {
    await addDoc(journalCollectionRef, entry);
};

export const getJournalEntries = async () => {
    const querySnapshot = await getDocs(journalCollectionRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteJournalEntry = async (id) => {
    const journalDoc = doc(db, 'journals', id);
    await deleteDoc(journalDoc);
};
