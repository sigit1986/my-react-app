const Label = (props) => {
    const {children} = props;
    return(
        <label
            className="block text-slate-700 text-sm font-bold mb-2" 
        > {children}
        </label>
    );
};

export default Label;