import NoMsgs from "../components/NoMsgs";

export const HomePage = ({ data }) => {
  return (
    <div className="flex min-h-screen flex-col p-8 text-center bg-primary">
      <p className="text-3xl mb-4 btn btn-active">All Messages</p>
      <span className="divider divider-secondary "></span>
      <div className="h-svh overflow-auto">
        {data.length === 0 && <NoMsgs />}
        {data.map((item, i) => (
          <div
            key={i}
            className="card bg-base-300 hover:shadow-lg rounded-box grid place-items-center mb-4 overflow-auto"
          >
            <div className="card-body">
              <p className="text-2xl">{item.text}</p>
              <p>by: {item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
