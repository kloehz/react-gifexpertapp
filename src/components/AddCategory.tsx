import { useState } from "react"

interface IAddCategory {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ( props: IAddCategory) => {

    const [inputValue, setInputValue] = useState('');
    const { setCategories } = props;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories( cat => [ inputValue, ...cat ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ (e) => handleInputChange(e) }
            />
        </form>
    )
}
