function Parent() {
    const getDataFromChildren = (value) => {
        console.log("Data that comes from children: ", value)
    }
    return <Child onSend={getDataFromChildren} />
}

function Child() {
    return 
    <button onClick={() => onSend("hello parent")}>send data to parent</button>
}