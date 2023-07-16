import AppWrapper from './hocs/theme_and_context_wrapper';
import Navbar from './components/navbar';
import Body from './components/body';
import ErrorBoundary from './components/error_boundary';
import FallbackComponent from './components/fallback_component';


function App() {
    return (
        <div className="App">
            <AppWrapper>
                <Navbar />
                <ErrorBoundary fallback={<FallbackComponent message='An error occured while loading. Please reload the page.' />}>
                    <Body />
                </ErrorBoundary>
            </AppWrapper>
        </div>

    );
}


export default App;
