

function Nav() {
  return (
    <>
      {/* Navbar Start */}
    <div class="flex content-center  h-17 font-sans to-transparent ">
      <div class="flex flex-initial w-32 h-14 ml-5 mt-5">
        <p className="text-xl font-semibold">Kam.</p>
      </div>
      <div class="flex flex-initial w-25 justify-end mt-5">
        <ul className="flex gap-5">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Location</a></li>
        </ul>
      </div>
      <div class="flex flex-initial w-[1120px] justify-end mt-5">
        <ul className="flex gap-5 ml-5">
          <li>
            <input type="search" className="" />
            🔍
          </li>
          <li>
            <button className="bg-sky-500 h-8 w-20 rounded-lg hover:bg-sky-700">Sign In</button>
          </li>
        </ul>
      </div>
    </div>
    {/* Navbar End */}
    </>
  )
}
   

export default Nav;
