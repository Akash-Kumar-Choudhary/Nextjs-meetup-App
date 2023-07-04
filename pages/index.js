import { Fragment } from 'react'
import MeetupList from '../components/meetups/MeetupList'
const HomePage=(props) => {
    return <Fragment>
        <MeetupList  meetups={props.meetups}/>
    </Fragment>
}
export async function getStaticProps(){
    const response=await fetch('http://localhost:8000/api/v1/meetup')
    const data=await response.json()
    return {
        props:{
            meetups: data
        },
        revalidate:1
    }
}
export default HomePage