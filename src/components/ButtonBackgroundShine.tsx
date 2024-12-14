const ButtonBackgroundShine = ({path = "",text="", className=""}) => {
    return (
      <a href={path} className='inline-flex animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#500606,45%,#8b5050,55%,#500606)] bg-[length:200%_100%] px-12 font-text font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
        {text}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
      </a>
    );
  };
  
  export default ButtonBackgroundShine;