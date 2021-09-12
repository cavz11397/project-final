import { StoreProvider } from "./store/StoreProvider";
import AppRouter from "./router/AppRouter";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
