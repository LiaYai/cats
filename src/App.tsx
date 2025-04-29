import './App.scss';
import { CatProvider } from './context/cat-context';
import CatImage from './components/cat-image/cat-image';
import Controls from './components/controls/controls';

function App() {
  return (
    <CatProvider>
      <div className="wrapper">
        <Controls />
        <CatImage />
      </div>
    </CatProvider>
  );
}

export default App;
