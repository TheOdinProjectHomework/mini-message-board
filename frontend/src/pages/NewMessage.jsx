import { useState} from 'react'
import { useNavigate, Link } from 'react-router';

const NewMessage = () => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
              <form>
                <div className="form-control mb-4 flex flex-col items-center">
                  <label className="label">
                    <span className="label-text text-lg text-neutral-content font-bold">
                      Username
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username..."
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