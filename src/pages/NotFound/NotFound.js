import { Container,Title,LinkToBack } from "./NotFound.styled";

const NotFound = () => {
    return (
        <Container>
            <Title>We're sorry, but this page doesn't exist.</Title>
            <LinkToBack to="/">To the website</LinkToBack>

        </Container>
    )
}

export default NotFound;