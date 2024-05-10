import { DotContainer, Dot } from '../styled/PageDots.styled';

function PageDots({ pages, currentPageIndex }) {
    return (
        <DotContainer>
            {pages.map((_, index) => (
                <Dot key={index} $isActive={index === currentPageIndex} />
            ))}
        </DotContainer>
    );
};

export default PageDots;