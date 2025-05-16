import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const getProducts = async () => {
  const productsRef = collection(db, "productos")
  const snapshot = await getDocs(productsRef)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductById = async (id) => {
  const docRef = doc(db, "productos", id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  } else {
    throw new Error("Producto no encontrado")
  }
}

export const getProductsByCategory = async (category) => {
  const productsRef = collection(db, "productos")
  const q = query(productsRef, where("category", "==", category))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
