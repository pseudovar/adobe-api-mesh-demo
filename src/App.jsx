import { useState } from 'react'
import CountriesExample from './Components/CountriesExample'
import ProductList from './Components/ProductList'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

const API_MESH_URL = import.meta.env.VITE_API_MESH_URL

function App() {
    const [demoVersion, setDemoVersion] = useState(0)
    return (
        <>
            <div
                className="flex items-center justify-end p-4 mb-4 text-sm text-blue-800  bg-blue-100/90 fixed w-full z-10 backdrop-blur-sm"
                role="alert"
            >
                <div className="flex-grow">
                    <a
                        href="https://github.com/jasonfordAdobe/adobe-api-mesh-demo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex">
                            <svg
                                aria-hidden="true"
                                height="24"
                                version="1.1"
                                viewBox="0 0 16 16"
                                width="24"
                                className="mr-2"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                ></path>
                            </svg>
                            jasonfordAdobe/adobe-api-mesh-demo
                        </div>
                    </a>
                </div>
                <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>Currently using Demo Mesh {demoVersion}</div>
            </div>
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
                            our API Mesh. You will be able to see how changes to
                            your mesh give you more features and flexibility for
                            the customer experience.
                        </p>
                    </div>
                </div>
            </div>
            {API_MESH_URL ? (
                <>
                    <CountriesExample demoVersion={demoVersion} />
                    <ProductList
                        setDemoVersion={setDemoVersion}
                        demoVersion={demoVersion}
                    />
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
