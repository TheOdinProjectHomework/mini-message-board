import { useState} from 'react'
import { useNavigate, Link } from 'react-router';
import toast from 'react-hot-toast';

const NewMessage = ({ setData, data}) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(username.length < 3 || !content.length) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    const date = Date.now().toLocaleString();
    const newMessage = {
      user: username,
      text: content,
      added: date
    }
    try {
      const req = await fetch(`http://localhost:3000/messages/new`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newMessage)
      });
      if(req.ok) {
        console.log("ok");
        setData((prev) => [newMessage, ...prev]);
        setLoading(false);
        toast.success("New Message created!");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to create message");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn mb-6">
            Back to Messages
          </Link>

          <div className="card bg-base-100">
            <div className="card-body text-center">
              <h2 className="card-title text-2xl mb-4 justify-center">
                Create New Message
              </h2>
              <form onSubmit={handlePost}>
                <div className="form-control mb-4 flex flex-col items-center">
                  <label className="label">
                    <span className="label-text text-lg text-neutral-content font-bold">
                      Author
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Author name..."
                    className="input input-bordered"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4 flex flex-col items-center">
                  <label className="label">
                    <span className="label-text text-neutral-content text-lg font-bold">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Post Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMessage