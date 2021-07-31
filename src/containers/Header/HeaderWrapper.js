import styled from "styled-components";

const colors = {
    dark: "rgb(23, 16, 65)",
    light: "rgb(236, 234, 255)"
}

const HeaderWrapper = styled.header`
    transition: 0.5s;
    
    &.light{
        background-color: ${colors.light};
        a{
            color: ${colors.dark} !important;
        }
    }
    &.dark{
        background-color: ${colors.dark};
        a{
            color: ${colors.light} !important;
        }
    }
`;

export default HeaderWrapper;