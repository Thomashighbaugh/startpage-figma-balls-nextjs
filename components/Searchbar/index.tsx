import { useState, useEffect } from 'react'
import useKeyPress from "../../hooks/useKeyPress.hook";
import Search from '../SVG/Search';


function Searchbar() {

  const [term, setTerm] = useState('')

  function search() {
    const url = 'https://www.duckduckgo.com/search?q='
    window.location.href = url + term
  }

  const enterPress = useKeyPress('Enter')
  useEffect(() => {
    if (term !== '') search()
  }, [enterPress])

  return <div className=" flex flex-row align-middle justify-center  h-20  lg:mr-48 lg:ml-48  content-center dark:bg-white  bg-purple-500   pb-5 p-1 rounded-lg ">

    <input type="text"
      className="align-middle bg-white dark:bg-purple-500 placeholder-gray-200 w-full  max-h-16 h-14 border-0 rounded-l-md text-2xl
         outline-none     "
      style={{textIndent: '0.1rem'}}
      placeholder="Search DuckDuckGo..."
      onChange={(e) => setTerm(e.target.value.split(' ').join('+'))}
      onSubmit={search}
      />

    <a className=" mx-0 justify-center items-center justify-self-center p-4  text-center align-middle rounded-r-md
     bg-white dark:bg-purple-500 font-medium "
      onClick={search}><Search /></a>
  </div>
}

export default Searchbar
