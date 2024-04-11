
import './App.css';
import Input from './components/Input';
import TodoListe from './components/TodoList';
import Main from './components/Main'; 
import Footer from './components/Footer';
import Notes from './components/Notes';
import { Route, Routes } from 'react-router-dom';
import TodayTodoItem from './components/TodayTodoItem';





function App() {
  return (
  
    <div className="App">
      <Routes>
        <Route path='/home' element={<Main />} /> 
        <Route path = '/notes' element={<Notes />} />
        <Route path='/todoliste' element={<TodoListe />} />
        <Route path='/input' element={<Input />} />
        <Route path='/todaytodoitems' element={<TodayTodoItem />}/>
      </Routes>
     <Footer />
    </div>
   
  );
}

export default App;
