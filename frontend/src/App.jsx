import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import NewMessage from './pages/NewMessage'
import { Link } from 'react-router'

function App() {
  const [data, setData] = useState([]);
  const [msgs, setMsgs] = useState([]);

  const API_URL =
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:3000/messages"
      : "/messages";

  const getData = async () => {
    try {
      const req = await fetch(`${API_URL}/all`);
      const res = await req.json();
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex flex-wrap">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Mini Message Board
          </Link>
        </div>
        <div>
          <Link to={"/new"} className="btn">
            New Message
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route
          path="/new"
          element={<NewMessage setData={setData} data={data} />}
        />
      </Routes>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Cris
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default App
