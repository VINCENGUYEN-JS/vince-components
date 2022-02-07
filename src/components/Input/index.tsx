import InternalInput, { InputProps } from "./Input";
import Search from "./Search";

type InputComposition = React.FC<InputProps> & { Search: typeof Search };

const Input = InternalInput as InputComposition;
Input.Search = Search;

export default Input;
