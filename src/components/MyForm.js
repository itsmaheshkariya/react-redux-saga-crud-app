import Input from "@mui/material/Input"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { setUserSlice } from "../redux/slice/user"
import { addUserSlice, editUserSlice } from "../redux/slice/users"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types"
import Divider from "@mui/material/Divider"
const MyForm = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({ ...user, [prop]: event.target.value }))
    }
    const handleSubmit = () => {
        user.id === 0 ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } }) : dispatch({ type: UPDATE_USER_BY_ID, user })

        dispatch(setUserSlice({
            id: 0,
            name: '',
            email: '',
            password: ''
        }))
    }
    return <>
        <>
            <Input style={{ margin: '10px' }} margin="normal" value={user.id} fullWidth disabled />

            <Input style={{ margin: '10px' }} onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth />
            <Input style={{ margin: '10px' }} onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth />
            <Input style={{ margin: '10px' }} onChange={handleChange('password')} placeholder="Enter Password" value={user.password} fullWidth />
            <Button style={{ margin: '10px' }} onClick={() => handleSubmit()} fullWidth variant="contained">Submit</Button>
        </>
    </>
}
export default MyForm