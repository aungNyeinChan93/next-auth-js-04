import { Prisma } from "@/generated/prisma";
import React from "react";

export type User = Prisma.UserGetPayload<{
  include: {
    comments?: true;
    posts?: true;
  };
}>;

interface Props {
  users?: any[] | User[];
}
const DashboardTableLists = ({ users }: Props) => {
  console.log({ users });

  return (
    <React.Fragment>
      <section>
        <section className="mt-6 bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Users</h3>
            <div className="text-sm text-slate-500">
              Showing 6 of {(users as User[]) && users?.length}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-slate-500 border-b">
                  <th className="py-3">Enail</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Role</th>
                  <th className="py-3">Progress</th>
                  <th className="py-3">Due</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {users &&
                  Array.isArray(users) &&
                  users.slice(0, 6)?.map((user: User) => {
                    return (
                      <tr key={user.id} className="border-b hover:bg-slate-50">
                        <td className="py-3">{user?.email}</td>
                        <td className="py-3">{user?.name || "unknow"}</td>
                        <td className="py-3">{user?.role}</td>
                        <td className="py-3">45%</td>
                        <td className="py-3">
                          {user?.created_at.toLocaleDateString()}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default DashboardTableLists;
