import React, {ChangeEvent, useState} from "react";


export const AddItemForm: React.FC<AddItemFormPropsType> = ({addUser}) => {
    const [name, setName] = useState("")
    const [error, setError] = useState<null | string>(null)

    const addTitle = () => {
        let trimTitle = name.trim()
        if (trimTitle) {
            addUser(trimTitle)
            setName("")
        } else {setError("Name is required!")}
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (error !== null) setError(null);
        setName(e.currentTarget.value)
    }
    return (
        <div>
            <input value={name}
                   placeholder={"Enter name"}
                   onChange={onChangeInputHandler}
                   onKeyPress={e => {if(e.key === "Enter") {addTitle()}}}
            />
            <button onClick={addTitle}>add</button>
            <div style={{height: 20, margin: 5, color: "red"}}>{error}</div>
        </div>
    )
}

type AddItemFormPropsType = {
    addUser: (name: string) => void
}