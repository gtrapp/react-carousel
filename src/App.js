import './App.css';
import Carousel from './components/Carousel';
import { SlideContent } from './components/SlideContent';

function App() {
  return <Carousel children={SlideContent} />;
}

export default App;