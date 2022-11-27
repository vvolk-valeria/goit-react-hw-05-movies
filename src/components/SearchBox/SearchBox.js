import { Container,Form,Btn,Span,Input } from "./SearchBox.styled";

export const SearchBox = ({onSubmit,onChange}) => {
    
    return (  
      <Container>
        <Form
          onSubmit={onSubmit}
        >
                <Input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={onChange}
                //value={searchQuery}
                            />
                            
                <Btn type="submit">
                <Span>Search</Span>
                </Btn>           
            </Form>
        </Container>
    )
};