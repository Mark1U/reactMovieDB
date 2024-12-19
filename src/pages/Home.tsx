import { NavLink, useParams } from "react-router";
import { images } from "../data/images";
import { ImageItem } from "../interfaces/ImageItem";
import ImgModal from "../components/ImgModal";

const Home = () => {
  let { imgId } = useParams();
  let img: ImageItem | undefined = undefined;
  if (imgId) {
    console.log(imgId);
    img = images.find((img) => img.id === imgId);
  }

  return (
    //grid-rows-[masonry] auto-rows-[10px]
    <section className="px-8 py-2 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-4">
      {<ImgModal img={img} open={img != undefined} />}

      {images.map((img) => (
        <NavLink to={"/images/" + img.id + "/" + img.slug}>
          <img
            className="rounded-md  block"
            src={img.urls.small_s3}
            alt={img.id}
          />
        </NavLink>
      ))}
    </section>
  );
};

export default Home;
