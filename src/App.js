import AppWrapper from './hocs/theme_and_context_wrapper';
import Navbar from './components/navbar';
import Body from './components/body';


function App() {
    return (
        <div className="App">
            <AppWrapper>
                <Navbar />
                <Body />
            </AppWrapper>
        </div>

    );
}


export default App;
