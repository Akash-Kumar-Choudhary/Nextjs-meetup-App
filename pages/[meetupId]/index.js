import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <MeetupDetail
        title={props.meetupdata.title}
        image={props.meetupdata.image}
        address={props.meetupdata.address}
        description={props.meetupdata.description}
      />
    </Fragment>
  );
};
export async function getStaticPaths() {
  const response = await fetch("http://localhost:5000/meetup");
  const data = await response.json();
  return {
    fallback: false,
    paths: data.map((item) => ({ params: { meetupId: item._id} })),
  };
}
export async function getStaticProps(context) {
  const meetupid = context.params.meetupId;
  const response = await fetch("http://localhost:5000/meetup");
  const data = await response.json();
  var result={}
  for( var i=0 ; i < data.length ; ++i){
    result[i]=data[i]
  }
  const ans=data.findIndex((item) => item._id===meetupid)
  return {
    props: {
      meetupdata: result[ans]
    },
  };
}
export default MeetupDetails;
