import { Prism } from '@mantine/prism'

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`

const DisplayCodeBlock = ({ code }) => {
    return (
        <Prism noCopy colorScheme="dark" language="js">
            {code}
        </Prism>
    )
}

export default DisplayCodeBlock
