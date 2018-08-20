import styled from 'styled-components';


const color = {
  yellow: '#ffe915',
  black:'#484848'
};


export const LeftMenu = styled.header`
  width:25%;
  background:${color.yellow};
`;

export const MenuHeader = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
  list-style:none;
  justify-content: space-between;
`

export const MenuItem=styled.li`
  width: 100%;
  text-align: center;
`

export const ImgOuter=styled.div`
  position:relative;
`

export const CvMore=styled.div`
  background:${color.black};
  position:absolute;
  bottom:4px;
  width:100%;
`

export const Mail=styled.div`
  position:absolute;
  top:0px;
  right:0px;
`