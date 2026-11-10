
import { useState } from "react";

const arr = ["Play Cricket", "Play Video", "Read Book"];

const Home = () => {
  const [list, setList] = useState(arr);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckbox = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleDelete = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));

    setCheckedItems((prev) =>
      prev
        .filter((i) => i !== index)
        .map((i) => (i > index ? i - 1 : i))
    );
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 sm:p-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-indigo-600 mb-2">
            MY DAILY TASKS
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Todo List
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your daily activities.
          </p>
        </div>

        {/* Task Counter */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-slate-700">
            Your Tasks
          </h2>

          <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
            {checkedItems.length}/{list.length} Completed
          </span>
        </div>

        {/* Task List */}
        <ul className="flex flex-col gap-3">

          {list.map((item, index) => {
            const isChecked = checkedItems.includes(index);

            return (
              <li
                key={item}
                className={`flex items-center justify-between gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                  isChecked
                    ? "bg-indigo-50 border-indigo-200"
                    : "bg-slate-50 border-slate-100 hover:border-indigo-200"
                }`}
              >
                <label className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer">

                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckbox(index)}
                    className="w-5 h-5 accent-indigo-600 cursor-pointer shrink-0"
                  />

                  <span
                    className={`text-base sm:text-lg font-medium transition-all duration-200 ${
                      isChecked
                        ? "line-through text-slate-400"
                        : "text-slate-700"
                    }`}
                  >
                    {item}
                  </span>

                </label>

                {isChecked && (
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-600 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shrink-0"
                  >
                    Delete
                  </button>
                )}
              </li>
            );
          })}

        </ul>

        {/* Empty State */}
        {list.length === 0 && (
          <div className="text-center py-10">
            <p className="text-4xl mb-3">🎉</p>
            <h3 className="text-lg font-semibold text-slate-700">
              All tasks completed!
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Your task list is empty.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-center text-sm text-slate-400">
            Keep going! One task at a time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
