
export function SummaryCard({summary,messageType}) {
  return (
    <div className={`block max-w-sm p-6 ${messageType==='spam' ? 'bg-red-100' : 'bg-blue-100'}  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {summary}
      </h5>
    </div>
  );
}
