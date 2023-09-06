export default function Read(props) {
    console.log(123123, 'read');
    return (
        <>
            <h2>Read</h2>
            parameter: {props.params.id}
        </>
    )
}