import { Link, useLocation } from "react-router-dom";

function PlayGame() {

    // const [searchParams] = useSearchParams();
    // console.log(searchParams);

    // const {text} = useParams();

    const {state} = useLocation();
    

    return (
        <>
            <h1>Play Game {state.wordSelected} </h1>
            <Link to='/start' className="text-blue-500">Start Game Link</Link>       

        </>
    );
}

export default PlayGame;