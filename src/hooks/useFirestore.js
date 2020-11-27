import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unnsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    console.log(doc.data());
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents)
            });

        return () => unnsub()
    }, [collection])

    return { docs }
}

export default useFirestore

