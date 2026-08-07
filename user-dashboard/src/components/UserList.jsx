function UserList({ users }) {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-700">
        {users.map((person) => (
          <li
            key={person.login.uuid}
            className="flex items-center justify-between px-6 py-5 transition hover:bg-gray-800"
          >
            <div className="flex items-center gap-4">
              <img
                src={person.picture.large}
                alt={`${person.name.first} ${person.name.last}`}
                className="h-14 w-14 rounded-full border-2 border-indigo-500 object-cover"
              />

              <div>
                <h2 className="text-lg font-semibold text-white">
                  {person.name.first} {person.name.last}
                </h2>

                <p className="text-sm text-gray-400">{person.email}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-gray-200">
                {person.location.country}
              </p>

              <p className="text-sm text-gray-400">{person.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
