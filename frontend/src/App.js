import { BrowserRouter as Router, Link, Route, Routes, useLocation } from "react-router-dom";
import TodoList from "./components/TodoList";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import styles from "./App.css";

function App() {
  return (
    <div className={styles}>
      <Router>
        <div className="navbar">
          <ul className="left-nav">
            <li>
              <Link to="/">Головна</Link>
            </li>
          </ul>
          <RightNav />
        </div>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<TodoList />} />
            <Route path="/auth/register" element={<RegistrationForm />} />
            <Route path="/auth/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function RightNav() {
  const location = useLocation();

  if (
    location.pathname === "/auth/register"
  ) {
    return (
      <ul className="right-nav">
        <li>
          <Link to="/auth/login">Логін</Link>
        </li>
      </ul>
    ); 
  }
  else if (location.pathname === "/auth/login") {
     return (
       <ul className="right-nav">
         <li>
           <Link to="/auth/register">Реєстрація</Link>
         </li>
       </ul>
     ); 
  }

  return (
    <ul className="right-nav">
      <li>
        <Link to="/auth/register">Реєстрація</Link>
      </li>
      <li>
        <Link to="/auth/login">Логін</Link>
      </li>
    </ul>
  );
}

export default App;