import './App.css';
import Carousel from './Carousel';
import { SlideContent } from './SlideContent';

function App() {
  return <Carousel children={SlideContent} delay={2500} />;
}

export default App;