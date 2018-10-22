import styled from 'styled-components';


const color = {
  yellow: '#ffe915',
  black: '#484848'
};


export const LeftMenu = styled.header`
  width:25%;
  background:${color.yellow};
  height:100vh;
  overflow-y:scroll
`;

export const MenuHeader = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
  list-style:none;
  justify-content: space-between;
  margin:0px;
`

export const MenuItem = styled.li`
  width: 100%;
  box-shadow: 0px 2px 25px;
  transition: 0.3s;
  padding: 6px 0px;
  color:${color.black};
  cursor:pointer;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover{
    box-shadow: 0px 0.1px 6px;
  }
`

export const ImgOuter = styled.div`
  position:relative;
`

export const CvMore = styled.div`
  background:${color.black};
  position:absolute;
  bottom:0px;
  width:100%;
  a{
    color:white;
    font-weight: bold;
    font-size: 17px;
    line-height: 43px;
    padding-left: 20px;
    text-decoration: none !important;
  }
`

export const Mail = styled.div`
  position:absolute;
  top:0px;
  right:0px;
  width:20%;
  padding: 6px 0px;
  text-align: center;
  background: #484848;
  color: #ffe915;
  box-shadow: 0px 2px 25px;
  transition: 0.5s;
  cursor: pointer;
`