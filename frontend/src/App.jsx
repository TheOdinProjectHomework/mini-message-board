import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import NewMessage from './pages/NewMessage'
import { Link } from 'react-router'

function App() {
  const [data, setData] = useState([]);
  const [msgs, setMsgs] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch(`http://localhost:3000/messages/all`);
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
          <Link to={"/"} className="btn btn-ghost text-xl">Mini Message Board</Link>
        </div>
        <div>
          <Link to={"/new"} className='btn'>New Message</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/new" element={<NewMessage />} />
      </Routes>
    </div>
  );
}

export default App
