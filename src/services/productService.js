import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const getProducts = async () => {

        try {
            const db = getFirestore()
            const productsCollection = collection(db, "productos")

            let q = productsCollection

            const querySnapshot = await getDocs(q)

            const products = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            return products
        } catch (error) {
            console.error("Error al cargar los productos:", error)
            throw error
        }
}