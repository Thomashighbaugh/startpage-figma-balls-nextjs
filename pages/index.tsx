import Container from "../components/Container";
import ThemeSwitch from "../components/ThemeSwitch";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

const Startpage = () => {


  return (
    <body
      className="flex flex-col h-full min-h-100 w-full pr-3 pb-0 mb-0"
    >
      <div className="flex flew-row items-end content-end justify-end">
<ThemeSwitch/></div>
<div className="flex flex-col h-full w-full  p-12 pt-6">
<h1 className="text-purple-500 dark:text-white justify-center text-center pb-24">Good Day!</h1>
<div className="lg:space-x-8 flex flex-col lg:flex-row">
        <div className=" w-full justify-center items-center content-center ">
<Searchbar/>
</div>



      </div>

      <Container />
      </div>
<Footer/>
    </body>
  );
};

export default Startpage;
