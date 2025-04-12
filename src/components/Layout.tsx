import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-primary-600">
                OCR Further Maths Coach
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-primary-600 px-3 py-2">
                Dashboard
              </Link>
              <Link to="/modules" className="text-gray-900 hover:text-primary-600 px-3 py-2">
                Modules
              </Link>
              <Link to="/practice" className="text-gray-900 hover:text-primary-600 px-3 py-2">
                Practice
              </Link>
              <Link to="/progress" className="text-gray-900 hover:text-primary-600 px-3 py-2">
                Progress
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
} 