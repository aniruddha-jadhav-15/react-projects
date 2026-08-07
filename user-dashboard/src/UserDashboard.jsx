import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
function UserDashboard() {
  const API_URL = "https://randomuser.me/api/?results=10";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const apiCall = await axios.get(API_URL);

      setUsers(apiCall.data.results);
    } catch (err) {
      setError("Failed to fetch users.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-red-500">{error}</p>

          <button
            onClick={fetchUsers}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white capitalize">
          User Dashboard
        </h1>

        <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-xl">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
