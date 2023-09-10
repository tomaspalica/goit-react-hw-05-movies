import { useState, useEffect } from "react"
export const MoviesPage = () => {
    const [isSubmited, setIsSubmited] = useState(false)
const [search, setSearch] = useState("")

    useEffect(() => {},[])
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmited(true);
    }
    return(
        <main>
        <form onSubmit={handleSubmit}>
        <input></input>
        <button>search</button>
        {isSubmited && (
            <ul>tu będzie lista</ul>
        )}
        </form>

        </main>
    )
}