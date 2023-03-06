import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Wrap from './components/Wrap'
function App() {
  return (
    <div>
      <Header />
      <Wrap>
        <Main />
      </Wrap>
      <Footer />
    </div>
  );
}

export default App;
