

const page = ({ params }) => {
  console.log(params);
  return (
    <>
      <h1>{params.solution1}</h1>
    </>
  )
}

export default page