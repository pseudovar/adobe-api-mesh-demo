import { useEffect, useState } from 'react'
import DisplayCodeBlock from './DisplayCodeBlock'

const API_MESH_URL = import.meta.env.VITE_API_MESH_URL
const COUNTRY_CODE = import.meta.env.VITE_COUNTRY_CODE

const query1 = {
    query: `{
        country(id: "${COUNTRY_CODE}") {
            id
            two_letter_abbreviation
            three_letter_abbreviation
            full_name_locale
            full_name_english
            available_regions {
                id
                code
                name
            }
        }
  }`,
}

const query2 = {
    query: `{
      regioncountry(code: "${COUNTRY_CODE}") {
        awsRegion
        capital
        code
        continent {
          code
          name
        }
        currencies
        currency
        emoji
        emojiU
        languages {
          code
          name
        }
        name
        native
        phone
        phones
        states {
          code
          name
        }
      }
    }`,
}

const options = {
    method: 'post',
    headers: {
        'content-type': 'application/json',
    },
}

const CountriesAdobe = ({ countryQuery }) => {
    const [country, setCountry] = useState('')

    useEffect(() => {
        let chosenQuery =
            countryQuery == 'Adobe'
                ? JSON.stringify(query1)
                : JSON.stringify(query2)
        fetch(API_MESH_URL, { ...options, body: chosenQuery })
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                if (res.errors) {
                    setCountry(res.errors)
                } else if (res.data.country) {
                    setCountry(res.data.country)
                } else {
                    setCountry(res.data.regioncountry)
                }
            })
    }, [])
    return <DisplayCodeBlock code={JSON.stringify(country, null, '\t')} />
}

export default CountriesAdobe
