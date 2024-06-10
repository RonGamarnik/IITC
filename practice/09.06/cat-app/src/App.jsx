import react from 'react'
const initialCats = [];
function App() {
    const [cats, setCats] = useState(initialCats);
    return (
        <>
            <h1>Cat App</h1>
            <ul>
                {cats.map((cat) => {
                    return (

                        <li><img src={cat.image} alt='cat'></img>
                            <p>{cat.nickname}</p>
                            <button>Remove from gallery</button>
                        </li>

                    )
                })}
            </ul> </>)
};
export default App