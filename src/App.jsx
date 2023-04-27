import CountriesExample from './Components/CountriesExample'
import ProductList from './Components/ProductList'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const API_MESH_URL = import.meta.env.VITE_API_MESH_URL

function App() {
    return (
        <>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <p className="text-base font-semibold leading-7 text-indigo-600">
                            Build your first API-Mesh
                        </p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Adobe API-Mesh Demo
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            This is the frontend app that will be connecting to
                            our API Mesh. You'll be able to see how changes to
                            your mesh give you more features and flexibility for
                            the customer experience.
                        </p>
                    </div>
                </div>
            </div>
            {API_MESH_URL ? (
                <>
                    <ProductList />
                    <CountriesExample />
                </>
            ) : (
                <div className="rounded-md bg-yellow-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <ExclamationTriangleIcon
                                className="h-5 w-5 text-yellow-400"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">
                                Attention needed
                            </h3>
                            <div className="mt-2 text-sm text-yellow-700">
                                <p>
                                    You need to complete your .env file before
                                    this demo will work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default App
