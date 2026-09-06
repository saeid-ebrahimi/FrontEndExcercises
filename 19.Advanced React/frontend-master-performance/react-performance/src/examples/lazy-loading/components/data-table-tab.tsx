// This is a "heavy" component that we want to lazy load
// It includes a large data table with 100 rows

interface DataRow {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
}

// Generate 100 rows of mock data
const generateData = (): DataRow[] => {
  const roles = ['Engineer', 'Designer', 'Manager', 'Analyst', 'Consultant'];
  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'];
  const statuses = ['Active', 'Inactive', 'Pending'];

  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    email: `employee${i + 1}@example.com`,
    role: roles[i % roles.length],
    department: departments[i % departments.length],
    status: statuses[i % statuses.length],
  }));
};

const data = generateData();

export function DataTableTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Employee Data
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A large table with 100 rows of data
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 px-3 py-1 dark:bg-blue-900/20">
          <p className="text-xs font-medium text-blue-800 dark:text-blue-200">
            Lazy Loaded
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">ID</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Name</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Email</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Role</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Department</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{row.id}</td>
                <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{row.name}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.email}</td>
                <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{row.role}</td>
                <td className="px-4 py-3 text-slate-900 dark:text-slate-100">{row.department}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      row.status === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                        : row.status === 'Inactive'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        This component was only loaded when you clicked this tab. Check your Network tab to see
        the separate chunk that was downloaded.
      </p>
    </div>
  );
}
