import { Fragment } from 'react'
import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
const Newmeetup=() => {
    const router=useRouter()
    const AddMeetupHandler=async(enteredMeetup) => {
        const response =await fetch('http://localhost:8000/api/v1/meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetup),
            headers:{
                'Content-Type':'application/json'
            }
        })
        router.push('/')
    }

    return <Fragment>
        <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
    </Fragment>
}
export default Newmeetup