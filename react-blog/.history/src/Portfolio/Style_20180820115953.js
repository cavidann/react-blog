import styled from 'styled-components';


const color = {
    yellow: '#ffe915',
    black: '#484848'
};


export const FilterHead = styled.div`
    background:${color.black};
    display:flex;
    justify-content:center;
    width:100%;
    flex-wrap:wrap
`;

export const ResetedUl = styled.ul`
    list-style: none;
    padding: 0px;
    display: flex;
    flex-wrap:wrap;
    margin: 0px;
`
export const PortfolioItem = styled.li`
    width:25%;
    padding:0px 10px;
    box-sizing:border-box;
`

export const Filter = styled.li`
    padding:15px 10px;
`

export const Wrap = styled.div`
    width:75%;
`