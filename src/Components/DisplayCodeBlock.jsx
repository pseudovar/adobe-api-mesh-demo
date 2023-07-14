import { Prism } from '@mantine/prism'

const DisplayCodeBlock = ({ code }) => {
    return (
        <Prism noCopy colorScheme="dark" language="js">
            {code}
        </Prism>
    )
}

export default DisplayCodeBlock
