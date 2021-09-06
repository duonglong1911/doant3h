import { createGlobalStyle } from "styled-components"


export const lightTheme = {
    body:'#F0F2F5',
    fontColor:'#000'
}
export const darkTheme = {
    body:'#18191A',
    fontColor:'#e4e6eb',
    backgroundColor:'#242526',
    colorInput:'#242526',
    colorIconHeader:'#b0b3b8',
    colorHover:'#4E4F50'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${(props) => props.theme.body};
    }
    .share {
        background-color:${(props) => props.theme.backgroundColor};
    }
    .shareInput {
        background-color:${(props) => props.theme.colorInput};
    }
    .post {
        background-color:${(props) => props.theme.backgroundColor};
    }
    .sidebarButton {
        background-color:${(props) => props.theme.colorInput};
        color:${(props) => props.theme.fontColor};
    }
    .topbarContainer {
        background-color:${(props) => props.theme.backgroundColor};
    }
    
    .searchbar {
        background-color:${(props) => props.theme.colorInput};
    }
    .searchInput {
        background-color:${(props) => props.theme.colorInput};
    }
    ::placeholder {
        color:${(props) => props.theme.fontColor};
    }
    .topbarUsername {
        color:${(props) => props.theme.fontColor};
    }
    .topbarIconItem {
        background-color:${(props) => props.theme.colorInput};
    }
    .MuiTabs-root {
        background-color:${(props) => props.theme.backgroundColor};
    }
    .topbarIconIcon {
        color:${(props) => props.theme.colorIconHeader};
    }
    .galleryCardContent, .galleryCenter {
        background-color:${(props) => props.theme.colorInput};
    }
    .menuChildDrop {
        background-color: ${(props) => props.theme.body};
    }
    .menuChildDrop:hover {
        color:${(props) => props.theme.body};
    }
    .peopleCardBody {
        background-color:${(props) => props.theme.colorInput};
    }
    .topbarCenterIconItem:hover {
        background-color:${(props) => props.theme.colorHover};
    }
    .topbarCenterIconItem svg path {
        fill:${(props) => props.theme.colorIconHeader};
    }
    .searchName {
        background-color:${(props) => props.theme.colorHover};
    }
    .searchbar input {
        color:${(props) => props.theme.fontColor};
    }
    #search::-webkit-search-cancel-button{
        color:${(props) => props.theme.fontColor};
    }
    
`;