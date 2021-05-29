var motorupper = false;
var motorlower = true;
var tankupper = "40px";
var tanklower = "0px";

var css = `
@keyframes fillActionUpper {
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY($$upper$$);
  }
}
@keyframes fillActionLower {
  0% {
    transform: translateY(150px);
  }
  100% {
    transform: translateY($$lower$$);
  }
}
`;

var style = document.createElement('style');
css = css.replace("$$upper$$", tankupper);
css = css.replace("$$lower$$", tanklower);
if(!motorupper){
  css+="#tankupper .pour{display:none;}"
}
if(!motorlower){
  css+="#tanklower .pour{display:none;}"
}
document.head.appendChild(style);
style.innerHTML = css;