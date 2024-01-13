import "./App.css";
import PrimarySearchAppBar from "./components/appBar";
import MediaControlCard from "./components/card";
import RecipeReviewCard from "./components/card2";

function App() {
  const product = [
    {
      id: 1,
      title: "pancake",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto magni laborum quos! Quisquam natus enim distinctio atque provident tempore perferendis.",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "burger",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto.",
      image:
        "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "pate",
      description:
        "Architecto magni laborum quos! Quisquam natus enim distinctio atque provident tempore perferendis.",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <main>
      <PrimarySearchAppBar />
      <section className="card">
        <MediaControlCard description={"live for music"} />
      </section>
      <section className="card2">
        {product.map((e) => {
          return <RecipeReviewCard product={e} />;
        })}
      </section>
    </main>
  );
}

export default App;
