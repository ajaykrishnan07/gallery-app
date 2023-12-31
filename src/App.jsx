import { useState, useEffect} from "react";
import "./App.css";
import { ImageCard } from "./components/ImageCard";
import { ImageSearch } from "./components/ImageSearch";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_APP_PIXABAY_API_KEY
      }&q=&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  },[])


  const onSearchHandler = (term) => {
    const firestore = getFirestore()
    const dataCollection = collection(firestore,"term")

    addDoc(dataCollection, {
      term
    })
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_APP_PIXABAY_API_KEY
      }&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mx-auto">
      <ImageSearch onSearch={onSearchHandler} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Sorry! No Images Found
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 content-evenly gap-4  md:grid-cols-3">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
