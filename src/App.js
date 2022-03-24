import './App.css';
import Carousel from './Carousel';
import { SlideContent } from './SlideContent';

function App() {
  return <Carousel children={SlideContent} />;
}

export default App;