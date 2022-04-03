import { db } from '../firebase';

async function fetchData() {
    let carData = [];
    const cars = await db
        .collection('cars')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                let item = {
                    id: documentSnapshot.id,
                    brand: documentSnapshot.data().brand,
                    model: documentSnapshot.data().model,
                    year: documentSnapshot.data().year,
                    image: documentSnapshot.data().image,
                }
                carData.push(item);
            });
        });
    return carData;
}

export { fetchData };