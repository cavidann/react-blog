import styled from 'styled-components';


const color = {
    yellow: '#ffe915',
    black: '#484848'
};

export const Wrap = styled.div`
    width:75%;
`
export const FilterHead = styled.div`
    background:${color.black};
    display:flex;
    justify-content:center;
    width:100%;
    flex-wrap:wrap;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;

const padding=20;
const height=50+padding*2;
export const ResetedUl = styled.ul`
    margin: 0px;
    list-style: none;
    padding: ${padding}px 0px;
    display: flex;
    flex-wrap:wrap;
    height:calc(100vh - ${height}px);
    overflow-y:scroll;    
`
export const PortfolioItem = styled.li`
    width:25%;
    padding:0px 10px;
    box-sizing:border-box;
`

export const Filter = styled.li`
    padding:15px 10px;
    color:${color.yellow};
    cursor:pointer;
    list-style:none;
    transition:0.3s;
`
