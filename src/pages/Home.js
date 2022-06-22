import Notes from '../components/Notes';
import Form from "../components/Form";
const Home = () => {
    const notes = new Array(3).fill('').map((_, i) => ({id: i, title: `Note${i + 1}`}))
    return(
        <>
            <Form/>
            <hr/>
            <Notes notes={notes}/>
        </>        
    )
}

export default Home;