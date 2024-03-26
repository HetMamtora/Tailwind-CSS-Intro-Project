import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Body from "./Components/Body"

function App() {

  return (
    <>
      <div className="bg-amber-100 min-h-screen px-6 py-3 flex flex-col gap-16">
        <Header />
        <Body />
        <Footer />
        
      </div>
    </>
  )
}

export default App
