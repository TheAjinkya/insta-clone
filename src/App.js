import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoAPP/TodoList';
import { Provider } from "react-redux"
import CompOne from './redux-app/components/CompOne';
import CompTwo from './redux-app/components/CompTwo';
import store  from './redux-app/utils/store';
function App() {
  return (
    <div className="App">
      <TodoList />
      <Provider store={store}>
        <CompOne />
        <hr/>
        <CompTwo />
      </Provider>
    </div>
  );
}

export default App;
