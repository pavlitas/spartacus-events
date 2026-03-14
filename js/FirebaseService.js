import { getFirestore, collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js"
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-storage.js"
import { Gara } from './Gara.js';

export class FirebaseService {
    constructor(app) {
        this.db = getFirestore(app)
        this.auth = getAuth(app)
        this.storage = getStorage(app)
    }
    
    async getGare() {
        // legge tutta la collezione "gare" da Firestore
        // restituisce un array di oggetti Gara
        const gare = [];

        const querySnapshot = await getDocs(collection(this.db, "gare"))
        querySnapshot.forEach(doc => {
            const gara = new Gara(doc.id, doc.data().nome, doc.data().data, doc.data().descrizione, doc.data().immagine, doc.data().video, doc.data().luogo );
            gare.push(gara);
        })
        
        return gare;
    }

    async addGara(gara) {
        // riceve un oggetto Gara
        // lo salva su Firestore
        const { nome, data, descrizione, immagine, video } = gara;
        await addDoc(collection(this.db, "gare"), { nome, data, descrizione, immagine, video })    
    }
    async getGara(id) {
        const snapShot = await getDoc(doc(this.db, "gare", id));
        const { nome, data, descrizione, immagine, video, luogo } = snapShot.data();
        const gara = new Gara(id, nome, data, descrizione, immagine, video, luogo );
        return gara;
    }

    async deleteGara(id) {
        // cancella il documento con quell'id
        await deleteDoc(doc(this.db, "gare", id));
    }
    
    async updateGara(id, dati) {
        // aggiorna un documento esistente
        const { nome, data, descrizione, immagine, video } = dati;
        await updateDoc(doc(this.db, "gare", id), { nome, data, descrizione, immagine, video } );
    }

    async login(email, password) { 
        try {
            await signInWithEmailAndPassword(this.auth, email, password);
        } catch(error) {
            console.log(error);
        }
    }
    
    async logout() { 
        await signOut(this.auth);
    }
}
