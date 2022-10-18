import {createGlobalStyle} from 'styled-components';



const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before{
    box-sizing: border-box;
}
body{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    background: ${ ({theme})=> theme.background } ;
    color: ${ ({theme})=> theme.title } ;
    padding:0;
    margin:0;
    transition: all 0.25s linear;
}
.canvas{
    align-items:center;
    display:grid;
    gap:0.5rem;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    min-height: 100vh;
    padding:1rem;
    width:100vw;
}
.type-box{
    display:block;
    max-width:1000px;
    height:140px;
    overflow:hidden;
    margin-left:auto;
    margin-right:auto;
    position:relative;
}
.words{
    font-size: 28px;
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    width:100%;
    color: ${ ({theme})=> theme.typeBoxText}
}
.word{
    margin:5px 5px;
    padding-right:2px;
    scroll-margin:4px;
}
.hidden-input{
    opacity:0
}
.char.correct{
    color: ${ ({theme})=> theme.title };
}
.char.incorrect{
    color:red;
}
.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    @keyframes blinking{
        0% {border-left-color:${ ({theme})=> theme.title };}
        25% {border-left-color:${ ({theme})=> theme.background };}
        50% {border-left-color:${ ({theme})=> theme.title };}
        75% {border-left-color:${ ({theme})=> theme.background };}
        100% {border-left-color:${ ({theme})=> theme.title };}
    }
}
.right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    @keyframes blinkingRight{
        0% {border-right-color:${ ({theme})=> theme.title };}
        25% {border-right-color:${ ({theme})=> theme.background };}
        50% {border-right-color:${ ({theme})=> theme.title };}
        75% {border-right-color:${ ({theme})=> theme.background };}
        100% {border-right-color:${ ({theme})=> theme.title };}
    }
}

.upper-menu{
    display: flex;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    // padding-left:0.5rem;
    justify-content: space-between;
    padding:1rem;
    color: ${ ({theme})=> theme.typeBoxText}
}

.time-mode{
    display: flex;
}

.time{
    font-size: 20px;
    margin-right: 15px;
}

.time:hover{
    color:${ ({theme})=> theme.title };
    cursor:pointer;
}

.counter{
    font-size: 20px;
}

.stats-box{
    display:flex;
    max-width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
    position:relative;
}

.left-stats{
    // padding-left:30px;
    // padding-right:30px;
    // padding-top:30px;
    padding:30px;
    width:30%;
}

.stats{
    height:80%;
    padding-bottom:1rem;
    color:#fff;
}

.title{
    font-size: 20px;
    color: ${ ({theme})=> theme.typeBoxText };
}

.subtitle{
    font-size: 30px;
    color: ${ ({theme})=> theme.title };
}

.right-stats{
    width:70%;
}


.graph{
    height:80%;
}

.header{
    display: flex;
    width: 1000px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between
}

.footer{
    display: flex;
    width: 1000px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between
}

.theme-options{
    background:transparent;
    min-width: 200px;
    align-items: "center"
}
.select{
    color: black,
    min-width: 90px
}

.reset-btn{
    display:block;
    margin:auto;
    transform: scale(1.5);
}
.reset-btn:hover{
    background: ${ ({theme})=> theme.typeBoxText };

}



`;

export default GlobalStyles;