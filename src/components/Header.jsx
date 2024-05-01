import { HeaderContainer, Title } from '../styled/Header.styled';

function Header({ title, children }) {
    return (
        <HeaderContainer>
            <Title>{title}</Title>
            {children}
        </HeaderContainer>
    );
}

export default Header;