import React from 'react'
import CountriesAdobe from './CountriesAdobe'
import DisplayCodeBlock from './DisplayCodeBlock'

const CountriesExample = () => {
    return (
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 mb-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                More data = 🤩📈💯
            </h2>
            <div className="-mx-px grid grid-cols-2 gap-8 sm:mx-0 md:grid-cols-2">
                <div>
                    <div className="flex w-full my-4">
                        <h3 className="text-l font-bold flex-grow">
                            Adobe Commerce Countries API
                        </h3>
                        <a
                            href="https://developer.adobe.com/commerce/webapi/graphql/schema/store/queries/country/"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            target="_blank"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <CountriesAdobe countryQuery="Adobe" />
                </div>
                <div>
                    <div className="flex w-full my-4">
                        <h3 className="text-l font-bold flex-grow">
                            Additional Countries API
                        </h3>
                        <a
                            href="https://github.com/trevorblades/countries"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            target="_blank"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <CountriesAdobe countryQuery="API" />
                </div>
            </div>
        </div>
    )
}

export default CountriesExample
