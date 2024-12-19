import movies from "../data/movies";

interface Props {
  sort: number;
}

const Home = ({ sort }: Props) => {
  // let location = useLocation();
  console.log(location);
  // img = images.find((img) => img.id === imgId);

  const _movies = [...movies];

  switch (sort) {
    case 0:
      _movies.sort((a, b) => Number(a.year) - Number(b.year));
      break;
    case 1:
      _movies.sort((a, b) => Number(b.year) - Number(a.year));
      break;
    case 2:
      _movies.sort((a, b) => Number(b.rate) - Number(a.rate));
      break;
    case 3:
      _movies.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
      );
      break;
    case 4:
      _movies.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
      break;
  }

  return (
    <section className="px-8 py-2 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-4">
      {_movies.map((mov) => (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-gray-50">
          <h3 className="font-bold text-xl">{mov.title}</h3>
          <p>{mov.year}</p>
          <p>{mov.director}</p>
          <p>{mov.duration}</p>
          <p>{mov.rate}</p>
          <div>
            {mov.genre.map((genre) => (
              <p className="text-sm text-gray-400">{genre}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
