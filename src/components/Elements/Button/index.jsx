
const Button = (props) => {
    const{classname = "bg-blue-700", children = "....."} = props;
    return (
      <button 
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} 
        type="button" 
        onClick={() => {console.log("clicked")}}  
      >
        {children}
      </button>
    )
}

export default Button