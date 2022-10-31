import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

function DefaultLayout ({children}) {
    return(
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout