import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // ✅ Memoize fetchBlogPosts
    const fetchBlogPosts = useCallback(async (page = 1) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("Error occur in data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }, []);

    // No need to memoize this unless performance becomes an issue
    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchBlogPosts,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
