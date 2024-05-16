import filter from "../assets/filter.png";
import search from "../assets/search.png";
import aws from "../assets/systems/5.png";
const Alert = () => {
  return (
    <>
      <div className="w-[40%] h-[70%] rounded-full absolute top-50 blur-3xl bg-purple-950 -z-10 bg-opacity-50"></div>
      <div className="flex-row w-[100%] h-auto rounded-2xl bg-slate-500 bg-opacity-25 p-6 backdrop-blur-lg justify-start space-y-6 mb-20">
        <div className="flex items-center justify-center space-x-24">
          <div className="flex space-x-4 items-center">
            <p className="text-white text-xl font-bold text-left">Alert Logs</p>
            <img
              src={filter}
              className="w-6 h-6 ml-2 cursor-pointer hover:w-7 hover:h-7"
            />
          </div>

          <div className="flex items-center border-">
            <input
              className="p-2 bg-transparent outline-none  border-2 border-gray-500 rounded-3xl px-6"
              type="search"
              name="serachbar"
              placeholder="Search"
            />
            <img src={search} className="w-6 h-6 relative right-10" />
          </div>
          <div className="flex space-x-6">
            <button className="bg-purple-600 text-white p-2 px-4 rounded-3xl hover:bg-purple-500">
              Acknowledge
            </button>
            <button className="bg-purple-600 text-white p-2 px-4 rounded-3xl hover:bg-purple-500">
              Resolve
            </button>
          </div>

          <button className="bg-sky-500 text-white p-2 px-4 rounded-3xl ml-36 hover:bg-sky-400 ">
            View all
          </button>
        </div>
        <div className="w-full bg-slate-400 bg-opacity-15 p-2 py-4 flex space-x-14 justify-center rounded-lg">
          <p className="text-white">Alert name</p>
          <p className="text-white">Source</p>
          <p className="text-white">Application</p>
          <p className="text-white">Resources</p>
          <p className="text-white">Metric</p>
          <p className="text-white">Status</p>
          <p className="text-white">Assigned to</p>
          <p className="text-white">Opened at</p>
          <p className="text-white">Closed at</p>
          <div className="border-2 border-white h-4 w-4 rounded-md"></div>
        </div>
        <div
          className="overflow-y-auto space-y-10 flex-row h-96 pb-10 items-center"
          style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="text-white flex space-x-14 justify-center  pb-2 items-center"
              style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.08)" }}
            >
              <div className="flex space-x-4">
                <p>prod-bluejay-db..</p>
                <img src={aws} className="w-6 h-6" />
              </div>

              <p>Payments</p>
              <div className="flex space-x-6">
                <p>prod-blueh=jay-db</p>
                <p>DBLoadCPU</p>
                <div className="bg-green-500 w-8 h-6 rounded-md items-center justify-center">
                  <p>Ok</p>
                </div>
              </div>

              <div className="bg-blue-500 w-10 h-10 p-2 rounded-full items-center justify-center">
                <p>HP</p>
              </div>

              <div className="flex-row">
                <p>5/15/24,</p>
                <p>6:47:11 AM</p>
              </div>
              <div className="flex-row">
                <p>5/15/24,</p>
                <p>6:48:11 AM</p>
              </div>
              <input
                className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alert;
