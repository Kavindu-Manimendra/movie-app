import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {MovieProvider} from "./context/movie-context.tsx";

const App = () => {
    return (
        <MovieProvider>
            <RouterProvider router={router} />
        </MovieProvider>
    );
};

export default App;