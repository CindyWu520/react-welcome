type welcomeProps = {name: string}
// arrow function components
export const Welcome = ({name}: welcomeProps)  => {
    return <h1>{name} hello, world!</h1>
}

// class components
