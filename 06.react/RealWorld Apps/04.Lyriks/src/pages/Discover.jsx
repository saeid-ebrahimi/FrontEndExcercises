import {Error, Loader, SongCard} from  "../components"
import {genres} from "../assets/constants";
import {useGetTopChartsQuery} from "../redux/services/shazamCore";

const Discover = () => {
    const {data, isFetching, error} = useGetTopChartsQuery();
    const genreTitle = "Pop";
    if (isFetching) return <Loader title={"Loading songs ..."}/>
    if (error) return Error
    console.log(genres)
    return (
        <div className={"flex flex-col"}>
            <div className={"w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10"}>
                <h2 className={"font-bold text-3xl text-white text-left"}>Discover {genreTitle}</h2>
                <select
                    onChange={()=>{}}
                    value={""}
                    className={"bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"}
                    name=""
                    id=""
                >
                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className={"flex flex-wrap sm:justify-start justify-center gap-8"}>
                {data?.map((song,index)=> (
                    <SongCard key={song.key} song={song} i={index}/>
                ))}
            </div>
        </div>

    )
};

export default Discover;
