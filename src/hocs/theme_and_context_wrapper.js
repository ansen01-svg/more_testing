import ContextProvider from "../context";
import MuiProvider from '../app_providers/mui_provider';
import Footer from '../components/footer';


function AppWrapper({children}) {
    return (
        <MuiProvider>
            <ContextProvider>
                {children}
            </ContextProvider>
            <Footer />
        </MuiProvider>
    );
}


export default AppWrapper;