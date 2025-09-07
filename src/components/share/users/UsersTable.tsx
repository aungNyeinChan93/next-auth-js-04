import { User } from "@/app/users/page";
import React from "react";

interface Props {
  users?: User[] | null;
}

export default function UsersTable({ users }: Props) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 p-6 overflow-scroll sm:overflow-hidden">
      <div className="mx-auto bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">User List</h1>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow">
            Add User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left text-sm font-semibold text-slate-700">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                {/* <th className="p-3">Status</th> */}
                <th className="p-3">Joined</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {(users as Array<User>).slice(0, 10).map((user) => (
                <tr key={user.id} className="hover:bg-slate-50">
                  <td className="p-3 font-medium text-slate-900">
                    {user.name ?? "undefined"}
                  </td>
                  <td className="p-3 text-slate-600">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  {/* <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "Inactive"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td> */}
                  <td className="p-3 text-slate-500">
                    {user?.created_at?.toLocaleTimeString()}
                  </td>
                  <td className="p-3  text-center">
                    <button className="text-indigo-600 hover:underline text-sm mr-3">
                      Edit
                    </button>
                    <button className="text-rose-600 hover:underline text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
