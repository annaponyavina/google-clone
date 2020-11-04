import {useState, useEffect} from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = '08a6489b0bf56a72e'

// a custom hook
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
          .then(response => response.json())
          .then(result => {
            setData(result)
          })
    }

    fetchData()
  }, [term])
  return {data}
}

// api key AIzaSyAnJHX8m2Jkk7Kdj1QxqrD-QPlmqJhDXyg
// 08a6489b0bf56a72e
export default useGoogleSearch
