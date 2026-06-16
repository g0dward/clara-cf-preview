import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as _,R as Ro}from"./index.Ba4_ASc-.js";import{r as qn}from"./index.BQQn0-vX.js";import"./index.9vRt5RYM.js";var Ao=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}`,Yo={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",e.textContent=Ao,document.head.appendChild(e))}var z=Yo,Oo=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),zo=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Wo=({size:e=24,style:n={}})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[t.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[t.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_list_sparkle",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Ze=({size:e=20})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[t.jsx("circle",{cx:"10",cy:"10.5",r:"5.25",stroke:"currentColor",strokeWidth:"1.25"}),t.jsx("path",{d:"M8.5 8.75C8.5 7.92 9.17 7.25 10 7.25C10.83 7.25 11.5 7.92 11.5 8.75C11.5 9.58 10.83 10.25 10 10.25V11",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("circle",{cx:"10",cy:"13",r:"0.75",fill:"currentColor"})]}),eo=({size:e=14})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 14 14",fill:"none",children:[t.jsx("style",{children:`
      @keyframes checkDraw {
        0% {
          stroke-dashoffset: 12;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes checkBounce {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
        75% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .check-path-animated {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: checkDraw 0.18s ease-out, checkBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `}),t.jsx("path",{className:"check-path-animated",d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Do=({size:e=24,copied:n=!1})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("style",{children:`
      .copy-icon, .check-icon {
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
    `}),t.jsxs("g",{className:"copy-icon",style:{opacity:n?0:1,transform:n?"scale(0.8)":"scale(1)",transformOrigin:"center"},children:[t.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),t.jsxs("g",{className:"check-icon",style:{opacity:n?1:0,transform:n?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Ho=({size:e=24,state:n="idle"})=>{const r=n==="idle",i=n==="sent",a=n==="failed",u=n==="sending";return t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("style",{children:`
        .send-arrow-icon, .send-check-icon, .send-error-icon {
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
      `}),t.jsx("g",{className:"send-arrow-icon",style:{opacity:r?1:u?.5:0,transform:r?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:t.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsxs("g",{className:"send-check-icon",style:{opacity:i?1:0,transform:i?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsxs("g",{className:"send-error-icon",style:{opacity:a?1:0,transform:a?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[t.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#ef4444",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 8V12",stroke:"#ef4444",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"#ef4444",stroke:"#ef4444",strokeWidth:"1"})]})]})},Fo=({size:e=24,isOpen:n=!0})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("style",{children:`
      .eye-open, .eye-closed {
        transition: opacity 0.2s ease;
      }
    `}),t.jsxs("g",{className:"eye-open",style:{opacity:n?1:0},children:[t.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsxs("g",{className:"eye-closed",style:{opacity:n?0:1},children:[t.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),t.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Xo=({size:e=24,isPaused:n=!1})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("style",{children:`
      .pause-bar, .play-triangle {
        transition: opacity 0.15s ease;
      }
    `}),t.jsx("path",{className:"pause-bar",d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:n?0:1}}),t.jsx("path",{className:"pause-bar",d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:n?0:1}}),t.jsx("path",{className:"play-triangle",d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5",style:{opacity:n?1:0}})]}),Uo=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Qo=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:t.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),en=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[t.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[t.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_2_53",children:t.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Vo=({size:e=24})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:t.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Zo=({size:e=16})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[t.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Jo=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:t.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),to=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Go=({size:e=24})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ko=({size:e=16})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),uo=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],tn=uo.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),cn="feedback-freeze-styles",nn="__agentation_freeze";function qo(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const e=window;return e[nn]||(e[nn]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[nn]}var B=qo();typeof window<"u"&&!B.installed&&(B.origSetTimeout=window.setTimeout.bind(window),B.origSetInterval=window.setInterval.bind(window),B.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...r)=>typeof e=="string"?B.origSetTimeout(e,n):B.origSetTimeout((...i)=>{B.frozen?B.frozenTimeoutQueue.push(()=>e(...i)):e(...i)},n,...r),window.setInterval=(e,n,...r)=>typeof e=="string"?B.origSetInterval(e,n):B.origSetInterval((...i)=>{B.frozen||e(...i)},n,...r),window.requestAnimationFrame=e=>B.origRAF(n=>{B.frozen?B.frozenRAFQueue.push(e):e(n)}),B.installed=!0);var A=B.origSetTimeout,es=B.origSetInterval;function ts(e){return e?uo.some(n=>!!e.closest?.(`[${n}]`)):!1}function ns(){if(typeof document>"u"||B.frozen)return;B.frozen=!0,B.frozenTimeoutQueue=[],B.frozenRAFQueue=[];let e=document.getElementById(cn);e||(e=document.createElement("style"),e.id=cn),e.textContent=`
    *${tn},
    *${tn}::before,
    *${tn}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),B.pausedAnimations=[];try{document.getAnimations().forEach(n=>{if(n.playState!=="running")return;const r=n.effect?.target;ts(r)||(n.pause(),B.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function no(){if(typeof document>"u"||!B.frozen)return;B.frozen=!1;const e=B.frozenTimeoutQueue;B.frozenTimeoutQueue=[];for(const r of e)B.origSetTimeout(()=>{if(B.frozen){B.frozenTimeoutQueue.push(r);return}try{r()}catch(i){console.warn("[agentation] Error replaying queued timeout:",i)}},0);const n=B.frozenRAFQueue;B.frozenRAFQueue=[];for(const r of n)B.origRAF(i=>{if(B.frozen){B.frozenRAFQueue.push(r);return}r(i)});for(const r of B.pausedAnimations)try{r.play()}catch(i){console.warn("[agentation] Error resuming animation:",i)}B.pausedAnimations=[],document.getElementById(cn)?.remove(),document.querySelectorAll("video").forEach(r=>{r.dataset.wasPaused==="false"&&(r.play().catch(()=>{}),delete r.dataset.wasPaused)})}var oo=_.forwardRef(function({element:n,timestamp:r,selectedText:i,placeholder:a="What should change?",initialValue:u="",submitLabel:m="Add",onSubmit:y,onCancel:T,onDelete:K,style:k,accentColor:Z="#3c82f7",isExiting:he=!1,lightMode:ee=!1,computedStyles:te},$){const[re,P]=_.useState(u),[ne,Ne]=_.useState(!1),[Se,Oe]=_.useState("initial"),[Rt,ze]=_.useState(!1),[Ee,pt]=_.useState(!1),de=_.useRef(null),gt=_.useRef(null),Q=_.useRef(null),ye=_.useRef(null);_.useEffect(()=>{he&&Se!=="exit"&&Oe("exit")},[he,Se]),_.useEffect(()=>{A(()=>{Oe("enter")},0);const W=A(()=>{Oe("entered")},200),Te=A(()=>{const ue=de.current;ue&&(ue.focus(),ue.selectionStart=ue.selectionEnd=ue.value.length,ue.scrollTop=ue.scrollHeight)},50);return()=>{clearTimeout(W),clearTimeout(Te),Q.current&&clearTimeout(Q.current),ye.current&&clearTimeout(ye.current)}},[]);const ie=_.useCallback(()=>{ye.current&&clearTimeout(ye.current),Ne(!0),ye.current=A(()=>{Ne(!1),de.current?.focus()},250)},[]);_.useImperativeHandle($,()=>({shake:ie}),[ie]);const _e=_.useCallback(()=>{Oe("exit"),Q.current=A(()=>{T()},150)},[T]),We=_.useCallback(()=>{re.trim()&&y(re.trim())},[re,y]),At=_.useCallback(W=>{W.nativeEvent.isComposing||(W.key==="Enter"&&!W.shiftKey&&(W.preventDefault(),We()),W.key==="Escape"&&_e())},[We,_e]),h=[z.popup,ee?z.light:"",Se==="enter"?z.enter:"",Se==="entered"?z.entered:"",Se==="exit"?z.exit:"",ne?z.shake:""].filter(Boolean).join(" ");return t.jsxs("div",{ref:gt,className:h,"data-annotation-popup":!0,style:k,onClick:W=>W.stopPropagation(),children:[t.jsxs("div",{className:z.header,children:[te&&Object.keys(te).length>0?t.jsxs("button",{className:z.headerToggle,onClick:()=>{const W=Ee;pt(!Ee),W&&A(()=>de.current?.focus(),0)},type:"button",children:[t.jsx("svg",{className:`${z.chevron} ${Ee?z.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t.jsx("span",{className:z.element,children:n})]}):t.jsx("span",{className:z.element,children:n}),r&&t.jsx("span",{className:z.timestamp,children:r})]}),te&&Object.keys(te).length>0&&t.jsx("div",{className:`${z.stylesWrapper} ${Ee?z.expanded:""}`,children:t.jsx("div",{className:z.stylesInner,children:t.jsx("div",{className:z.stylesBlock,children:Object.entries(te).map(([W,Te])=>t.jsxs("div",{className:z.styleLine,children:[t.jsx("span",{className:z.styleProperty,children:W.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",t.jsx("span",{className:z.styleValue,children:Te}),";"]},W))})})}),i&&t.jsxs("div",{className:z.quote,children:["“",i.slice(0,80),i.length>80?"...":"","”"]}),t.jsx("textarea",{ref:de,className:z.textarea,style:{borderColor:Rt?Z:void 0},placeholder:a,value:re,onChange:W=>P(W.target.value),onFocus:()=>ze(!0),onBlur:()=>ze(!1),rows:2,onKeyDown:At}),t.jsxs("div",{className:z.actions,children:[K&&t.jsx("div",{className:z.deleteWrapper,children:t.jsx("button",{className:z.deleteButton,onClick:K,type:"button",children:t.jsx(Go,{size:22})})}),t.jsx("button",{className:z.cancel,onClick:_e,children:"Cancel"}),t.jsx("button",{className:z.submit,style:{backgroundColor:Z,opacity:re.trim()?1:.4},onClick:We,disabled:!re.trim(),children:m})]})]})});function Ke(e){if(e.parentElement)return e.parentElement;const n=e.getRootNode();return n instanceof ShadowRoot?n.host:null}function le(e,n){let r=e;for(;r;){if(r.matches(n))return r;r=Ke(r)}return null}function os(e,n=4){const r=[];let i=e,a=0;for(;i&&a<n;){const u=i.tagName.toLowerCase();if(u==="html"||u==="body")break;let m=u;if(i.id)m=`#${i.id}`;else if(i.className&&typeof i.className=="string"){const T=i.className.split(/\s+/).find(K=>K.length>2&&!K.match(/^[a-z]{1,2}$/)&&!K.match(/[A-Z0-9]{5,}/));T&&(m=`.${T.split("_")[0]}`)}const y=Ke(i);!i.parentElement&&y&&(m=`⟨shadow⟩ ${m}`),r.unshift(m),i=y,a++}return r.join(" > ")}function Mt(e){const n=os(e);if(e.dataset.element)return{name:e.dataset.element,path:n};const r=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(r)){const i=le(e,"svg");if(i){const a=Ke(i);if(a instanceof HTMLElement)return{name:`graphic in ${Mt(a).name}`,path:n}}return{name:"graphic element",path:n}}if(r==="svg"){const i=Ke(e);if(i?.tagName.toLowerCase()==="button"){const a=i.textContent?.trim();return{name:a?`icon in "${a}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(r==="button"){const i=e.textContent?.trim(),a=e.getAttribute("aria-label");return a?{name:`button [${a}]`,path:n}:{name:i?`button "${i.slice(0,25)}"`:"button",path:n}}if(r==="a"){const i=e.textContent?.trim(),a=e.getAttribute("href");return i?{name:`link "${i.slice(0,25)}"`,path:n}:a?{name:`link to ${a.slice(0,30)}`,path:n}:{name:"link",path:n}}if(r==="input"){const i=e.getAttribute("type")||"text",a=e.getAttribute("placeholder"),u=e.getAttribute("name");return a?{name:`input "${a}"`,path:n}:u?{name:`input [${u}]`,path:n}:{name:`${i} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(r)){const i=e.textContent?.trim();return{name:i?`${r} "${i.slice(0,35)}"`:r,path:n}}if(r==="p"){const i=e.textContent?.trim();return i?{name:`paragraph: "${i.slice(0,40)}${i.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(r==="span"||r==="label"){const i=e.textContent?.trim();return i&&i.length<40?{name:`"${i}"`,path:n}:{name:r,path:n}}if(r==="li"){const i=e.textContent?.trim();return i&&i.length<40?{name:`list item: "${i.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(r==="blockquote")return{name:"blockquote",path:n};if(r==="code"){const i=e.textContent?.trim();return i&&i.length<30?{name:`code: \`${i}\``,path:n}:{name:"code",path:n}}if(r==="pre")return{name:"code block",path:n};if(r==="img"){const i=e.getAttribute("alt");return{name:i?`image "${i.slice(0,30)}"`:"image",path:n}}if(r==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(r)){const i=e.className,a=e.getAttribute("role"),u=e.getAttribute("aria-label");if(u)return{name:`${r} [${u}]`,path:n};if(a)return{name:`${a}`,path:n};if(typeof i=="string"&&i){const m=i.split(/[\s_-]+/).map(y=>y.replace(/[A-Z0-9]{5,}.*$/,"")).filter(y=>y.length>2&&!/^[a-z]{1,2}$/.test(y)).slice(0,2);if(m.length>0)return{name:m.join(" "),path:n}}return{name:r==="div"?"container":r,path:n}}return{name:r,path:n}}function it(e){const n=[],r=e.textContent?.trim();r&&r.length<100&&n.push(r);const i=e.previousElementSibling;if(i){const u=i.textContent?.trim();u&&u.length<50&&n.unshift(`[before: "${u.slice(0,40)}"]`)}const a=e.nextElementSibling;if(a){const u=a.textContent?.trim();u&&u.length<50&&n.push(`[after: "${u.slice(0,40)}"]`)}return n.join(" ")}function jt(e){const n=Ke(e);if(!n)return"";const a=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter(k=>k!==e&&k instanceof HTMLElement);if(a.length===0)return"";const u=a.slice(0,4).map(k=>{const Z=k.tagName.toLowerCase(),he=k.className;let ee="";if(typeof he=="string"&&he){const te=he.split(/\s+/).map($=>$.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find($=>$.length>2&&!/^[a-z]{1,2}$/.test($));te&&(ee=`.${te}`)}if(Z==="button"||Z==="a"){const te=k.textContent?.trim().slice(0,15);if(te)return`${Z}${ee} "${te}"`}return`${Z}${ee}`});let y=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const k=n.className.split(/\s+/).map(Z=>Z.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(Z=>Z.length>2&&!/^[a-z]{1,2}$/.test(Z));k&&(y=`.${k}`)}const T=n.children.length,K=T>u.length+1?` (${T} total in ${y})`:"";return u.join(", ")+K}function at(e){const n=e.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(i=>i.length>0).map(i=>{const a=i.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return a?a[1]:i}).filter((i,a,u)=>u.indexOf(i)===a).join(", ")}var mo=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),ss=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),ls=new Set(["input","textarea","select"]),rs=new Set(["img","video","canvas","svg"]),is=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Lt(e){if(typeof window>"u")return{};const n=window.getComputedStyle(e),r={},i=e.tagName.toLowerCase();let a;ss.has(i)?a=["color","fontSize","fontWeight","fontFamily","lineHeight"]:i==="button"||i==="a"&&e.getAttribute("role")==="button"?a=["backgroundColor","color","padding","borderRadius","fontSize"]:ls.has(i)?a=["backgroundColor","color","padding","borderRadius","fontSize"]:rs.has(i)?a=["width","height","objectFit","borderRadius"]:is.has(i)?a=["display","padding","margin","gap","backgroundColor"]:a=["color","fontSize","margin","padding","backgroundColor"];for(const u of a){const m=u.replace(/([A-Z])/g,"-$1").toLowerCase(),y=n.getPropertyValue(m);y&&!mo.has(y)&&(r[u]=y)}return r}var as=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function It(e){if(typeof window>"u")return"";const n=window.getComputedStyle(e),r=[];for(const i of as){const a=i.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(a);u&&!mo.has(u)&&r.push(`${a}: ${u}`)}return r.join("; ")}function _s(e){if(!e)return;const n={},r=e.split(";").map(i=>i.trim()).filter(Boolean);for(const i of r){const a=i.indexOf(":");if(a>0){const u=i.slice(0,a).trim(),m=i.slice(a+1).trim();u&&m&&(n[u]=m)}}return Object.keys(n).length>0?n:void 0}function $t(e){const n=[],r=e.getAttribute("role"),i=e.getAttribute("aria-label"),a=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),m=e.getAttribute("aria-hidden");return r&&n.push(`role="${r}"`),i&&n.push(`aria-label="${i}"`),a&&n.push(`aria-describedby="${a}"`),u&&n.push(`tabindex=${u}`),m==="true"&&n.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Nt(e){const n=[];let r=e;for(;r&&r.tagName.toLowerCase()!=="html";){const i=r.tagName.toLowerCase();let a=i;if(r.id)a=`${i}#${r.id}`;else if(r.className&&typeof r.className=="string"){const m=r.className.split(/\s+/).map(y=>y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(y=>y.length>2);m&&(a=`${i}.${m}`)}const u=Ke(r);!r.parentElement&&u&&(a=`⟨shadow⟩ ${a}`),n.unshift(a),r=u}return n.join(" > ")}var dn="feedback-annotations-",po=7;function Bt(e){return`${dn}${e}`}function on(e){if(typeof window>"u")return[];try{const n=localStorage.getItem(Bt(e));if(!n)return[];const r=JSON.parse(n),i=Date.now()-po*24*60*60*1e3;return r.filter(a=>!a.timestamp||a.timestamp>i)}catch{return[]}}function go(e,n){if(!(typeof window>"u"))try{localStorage.setItem(Bt(e),JSON.stringify(n))}catch{}}function cs(){const e=new Map;if(typeof window>"u")return e;try{const n=Date.now()-po*24*60*60*1e3;for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);if(i?.startsWith(dn)){const a=i.slice(dn.length),u=localStorage.getItem(i);if(u){const y=JSON.parse(u).filter(T=>!T.timestamp||T.timestamp>n);y.length>0&&e.set(a,y)}}}}catch{}return e}function _t(e,n,r){const i=n.map(a=>({...a,_syncedTo:r}));go(e,i)}var fo="agentation-session-";function mn(e){return`${fo}${e}`}function ds(e){if(typeof window>"u")return null;try{return localStorage.getItem(mn(e))}catch{return null}}function sn(e,n){if(!(typeof window>"u"))try{localStorage.setItem(mn(e),n)}catch{}}function us(e){if(!(typeof window>"u"))try{localStorage.removeItem(mn(e))}catch{}}var ho=`${fo}toolbar-hidden`;function ms(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(ho)==="1"}catch{return!1}}function ps(e){if(!(typeof window>"u"))try{e&&sessionStorage.setItem(ho,"1")}catch{}}async function ln(e,n){const r=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!r.ok)throw new Error(`Failed to create session: ${r.status}`);return r.json()}async function so(e,n){const r=await fetch(`${e}/sessions/${n}`);if(!r.ok)throw new Error(`Failed to get session: ${r.status}`);return r.json()}async function Et(e,n,r){const i=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!i.ok)throw new Error(`Failed to sync annotation: ${i.status}`);return i.json()}async function gs(e,n,r){const i=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!i.ok)throw new Error(`Failed to update annotation: ${i.status}`);return i.json()}async function lo(e,n){const r=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete annotation: ${r.status}`)}var Y={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},ro=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),io=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],fs=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function hs(e){const n=e?.mode??"filtered";let r=ro;if(e?.skipExact){const i=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);r=new Set([...ro,...i])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:n,skipExact:r,skipPatterns:e?.skipPatterns?[...io,...e.skipPatterns]:io,userPatterns:e?.userPatterns??fs,filter:e?.filter}}function ys(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function bs(e,n=10){const r=new Set;let i=e,a=0;for(;i&&a<n;)i.className&&typeof i.className=="string"&&i.className.split(/\s+/).forEach(u=>{if(u.length>1){const m=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();m.length>1&&r.add(m)}}),i=i.parentElement,a++;return r}function xs(e,n){const r=ys(e);for(const i of n){if(i===r)return!0;const a=r.split("-").filter(m=>m.length>2),u=i.split("-").filter(m=>m.length>2);for(const m of a)for(const y of u)if(m===y||m.includes(y)||y.includes(m))return!0}return!1}function ws(e,n,r,i){if(r.filter)return r.filter(e,n);switch(r.mode){case"all":return!0;case"filtered":return!(r.skipExact.has(e)||r.skipPatterns.some(a=>a.test(e)));case"smart":return r.skipExact.has(e)||r.skipPatterns.some(a=>a.test(e))?!1:!!(i&&xs(e,i)||r.userPatterns.some(a=>a.test(e)));default:return!0}}var Je=null,ks=new WeakMap;function rn(e){return Object.keys(e).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Cs(){if(Je!==null)return Je;if(typeof document>"u")return!1;if(document.body&&rn(document.body))return Je=!0,!0;const e=["#root","#app","#__next","[data-reactroot]"];for(const n of e){const r=document.querySelector(n);if(r&&rn(r))return Je=!0,!0}if(document.body){for(const n of document.body.children)if(rn(n))return Je=!0,!0}return Je=!1,!1}var ct={map:ks};function vs(e){return Object.keys(e).find(r=>r.startsWith("__reactFiber$")||r.startsWith("__reactInternalInstance$"))||null}function Ss(e){const n=vs(e);return n?e[n]:null}function Ye(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function js(e){const{tag:n,type:r,elementType:i}=e;if(n===Y.HostComponent||n===Y.HostText||n===Y.HostHoistable||n===Y.HostSingleton||n===Y.Fragment||n===Y.Mode||n===Y.Profiler||n===Y.DehydratedFragment||n===Y.HostRoot||n===Y.HostPortal||n===Y.ScopeComponent||n===Y.OffscreenComponent||n===Y.LegacyHiddenComponent||n===Y.CacheComponent||n===Y.TracingMarkerComponent||n===Y.Throw||n===Y.ViewTransitionComponent||n===Y.ActivityComponent)return null;if(n===Y.ForwardRef){const a=i;if(a?.render){const u=Ye(a.render);if(u)return u}return a?.displayName?a.displayName:Ye(r)}if(n===Y.MemoComponent||n===Y.SimpleMemoComponent){const a=i;if(a?.type){const u=Ye(a.type);if(u)return u}return a?.displayName?a.displayName:Ye(r)}if(n===Y.ContextProvider){const a=r;return a?._context?.displayName?`${a._context.displayName}.Provider`:null}if(n===Y.ContextConsumer){const a=r;return a?.displayName?`${a.displayName}.Consumer`:null}if(n===Y.LazyComponent){const a=i;return a?._status===1&&a._result?Ye(a._result):null}return n===Y.SuspenseComponent||n===Y.SuspenseListComponent?null:n===Y.IncompleteClassComponent||n===Y.IncompleteFunctionComponent||n===Y.FunctionComponent||n===Y.ClassComponent||n===Y.IndeterminateComponent?Ye(r):null}function Ls(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function Is(e,n){const r=hs(n),i=r.mode==="all";if(i){const T=ct.map.get(e);if(T!==void 0)return T}if(!Cs()){const T={path:null,components:[]};return i&&ct.map.set(e,T),T}const a=r.mode==="smart"?bs(e):void 0,u=[];try{let T=Ss(e),K=0;for(;T&&K<r.maxDepth&&u.length<r.maxComponents;){const k=js(T);k&&!Ls(k)&&ws(k,K,r,a)&&u.push(k),T=T.return,K++}}catch{const T={path:null,components:[]};return i&&ct.map.set(e,T),T}if(u.length===0){const T={path:null,components:[]};return i&&ct.map.set(e,T),T}const y={path:u.slice().reverse().map(T=>`<${T}>`).join(" "),components:u};return i&&ct.map.set(e,y),y}var dt={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function $s(e){if(!e||typeof e!="object")return null;const n=Object.keys(e),r=n.find(u=>u.startsWith("__reactFiber$"));if(r)return e[r]||null;const i=n.find(u=>u.startsWith("__reactInternalInstance$"));if(i)return e[i]||null;const a=n.find(u=>{if(!u.startsWith("__react"))return!1;const m=e[u];return m&&typeof m=="object"&&"_debugSource"in m});return a&&e[a]||null}function mt(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){const n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Ns(e,n=50){let r=e,i=0;for(;r&&i<n;){if(r._debugSource)return{source:r._debugSource,componentName:mt(r)};if(r._debugOwner?._debugSource)return{source:r._debugOwner._debugSource,componentName:mt(r._debugOwner)};r=r.return,i++}return null}function Es(e){let n=e,r=0;const i=50;for(;n&&r<i;){const a=n,u=["_debugSource","__source","_source","debugSource"];for(const m of u){const y=a[m];if(y&&typeof y=="object"&&"fileName"in y)return{source:y,componentName:mt(n)}}if(n.memoizedProps){const m=n.memoizedProps;if(m.__source&&typeof m.__source=="object"){const y=m.__source;if(y.fileName&&y.lineNumber)return{source:{fileName:y.fileName,lineNumber:y.lineNumber,columnNumber:y.columnNumber},componentName:mt(n)}}}n=n.return,r++}return null}var Tt=new Map;function Ts(e){const n=e.tag,r=e.type,i=e.elementType;if(typeof r=="string"||r==null||typeof r=="function"&&r.prototype?.isReactComponent)return null;if((n===dt.FunctionComponent||n===dt.IndeterminateComponent)&&typeof r=="function")return r;if(n===dt.ForwardRef&&i){const a=i.render;if(typeof a=="function")return a}if((n===dt.MemoComponent||n===dt.SimpleMemoComponent)&&i){const a=i.type;if(typeof a=="function")return a}return typeof r=="function"?r:null}function Ps(){const e=Ro,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:i=>{n.H=i}};const r=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(r){const i=r.ReactCurrentDispatcher;if(i&&"current"in i)return{get:()=>i.current,set:a=>{i.current=a}}}return null}function Ms(e){const n=e.split(`
`),r=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],i=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,a=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const m=u.trim();if(!m||r.some(T=>T.test(m)))continue;const y=i.exec(m)||a.exec(m);if(y)return{fileName:y[1],line:parseInt(y[2],10),column:parseInt(y[3],10)}}return null}function Bs(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Rs(e){const n=Ts(e);if(!n)return null;if(Tt.has(n))return Tt.get(n);const r=Ps();if(!r)return Tt.set(n,null),null;const i=r.get();let a=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});r.set(u);try{n({})}catch(m){if(m instanceof Error&&m.message==="probe"&&m.stack){const y=Ms(m.stack);y&&(a={fileName:Bs(y.fileName),lineNumber:y.line,columnNumber:y.column,componentName:mt(e)||void 0})}}}finally{r.set(i)}return Tt.set(n,a),a}function As(e,n=15){let r=e,i=0;for(;r&&i<n;){const a=Rs(r);if(a)return a;r=r.return,i++}return null}function un(e){const n=$s(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let r=Ns(n);if(r||(r=Es(n)),r?.source)return{found:!0,source:{fileName:r.source.fileName,lineNumber:r.source.lineNumber,columnNumber:r.source.columnNumber,componentName:r.componentName||void 0},isReactApp:!0,isProduction:!1};const i=As(n);return i?{found:!0,source:i,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Ys(e,n="path"){const{fileName:r,lineNumber:i,columnNumber:a}=e;let u=`${r}:${i}`;return a!==void 0&&(u+=`:${a}`),n==="vscode"?`vscode://file${r.startsWith("/")?"":"/"}${u}`:u}function Os(e,n=10){let r=e,i=0;for(;r&&i<n;){const a=un(r);if(a.found)return a;r=r.parentElement,i++}return un(e)}var zs=`svg[fill=none] {
  fill: none !important;
}

.styles-module__toolbar___wNsdK :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.styles-module__buttonBadge___NeFWb.styles-module__light___r6n4Y {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(245, 166, 35, 0);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background: #34c759;
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background: #ff3b30;
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background: #f59e0b;
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}
.styles-module__settingsPanelContainer___Xksv8.styles-module__transitioning___qxzCk {
  overflow-x: clip;
  overflow-y: visible;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.2s ease-out;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-100%);
  opacity: 0;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease-out 0.1s;
  opacity: 0;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-100%);
  opacity: 1;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y svg {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
.styles-module__automationHeader___InP0r .styles-module__helpIcon___xQg56 svg {
  transform: none;
}
.styles-module__automationHeader___InP0r.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__automationDescription___NKlmo.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  color: #3c82f7;
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background: #3c82f7;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
.styles-module__light___r6n4Y .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(52, 199, 89, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(255, 59, 48, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background: #ff3b30;
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudgeDown___0cqpM svg {
  transform: translateY(1px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNoNudge___abogC svg {
  transform: translateY(0.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge1-5___DM2TQ svg {
  transform: translateY(1.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge2___TfWgC svg {
  transform: translateY(2px);
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`,Ws={toolbar:"styles-module__toolbar___wNsdK",toolbarContainer:"styles-module__toolbarContainer___dIhma",dragging:"styles-module__dragging___xrolZ",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",controlsContent:"styles-module__controlsContent___9GJWU",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",light:"styles-module__light___r6n4Y",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",helpIcon:"styles-module__helpIcon___xQg56",themeToggle:"styles-module__themeToggle___2rUjA",dark:"styles-module__dark___ILIQf",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",transitioning:"styles-module__transitioning___qxzCk",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",helpIconNudgeDown:"styles-module__helpIconNudgeDown___0cqpM",helpIconNoNudge:"styles-module__helpIconNoNudge___abogC","helpIconNudge1-5":"styles-module__helpIconNudge1-5___DM2TQ",helpIconNudge2:"styles-module__helpIconNudge2___TfWgC",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",themeIconWrapper:"styles-module__themeIconWrapper___LsJIM",themeIcon:"styles-module__themeIcon___lCCmo",themeIconIn:"styles-module__themeIconIn___TU6ML",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje",settingsPanelIn:"styles-module__settingsPanelIn___MGfO8",settingsPanelOut:"styles-module__settingsPanelOut___Zfymi"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",e.textContent=zs,document.head.appendChild(e))}var s=Ws;function an(e,n="filtered"){const{name:r,path:i}=Mt(e);if(n==="off")return{name:r,elementName:r,path:i,reactComponents:null};const a=Is(e,{mode:n});return{name:a.path?`${a.path} ${r}`:r,elementName:r,path:i,reactComponents:a.path}}var ao=!1,_o={outputDetail:"standard",autoClearAfterCopy:!1,annotationColor:"#3c82f7",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},fe=e=>{if(!e||!e.trim())return!1;try{const n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},ut=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}],Ds=[{value:"#AF52DE",label:"Purple"},{value:"#3c82f7",label:"Blue"},{value:"#5AC8FA",label:"Cyan"},{value:"#34C759",label:"Green"},{value:"#FFD60A",label:"Yellow"},{value:"#FF9500",label:"Orange"},{value:"#FF3B30",label:"Red"}];function Ge(e,n){let r=document.elementFromPoint(e,n);if(!r)return null;for(;r?.shadowRoot;){const i=r.shadowRoot.elementFromPoint(e,n);if(!i||i===r)break;r=i}return r}function _n(e){let n=e;for(;n&&n!==document.body;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function $e(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Pt(e){const n=un(e),r=n.found?n:Os(e);if(r.found&&r.source)return Ys(r.source,"path")}function co(e,n,r="standard",i="filtered"){if(e.length===0)return"";const a=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let u=`## Page Feedback: ${n}
`;return r==="forensic"?(u+=`
**Environment:**
`,u+=`- Viewport: ${a}
`,typeof window<"u"&&(u+=`- URL: ${window.location.href}
`,u+=`- User Agent: ${navigator.userAgent}
`,u+=`- Timestamp: ${new Date().toISOString()}
`,u+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),u+=`
---
`):r!=="compact"&&(u+=`**Viewport:** ${a}
`),u+=`
`,e.forEach((m,y)=>{r==="compact"?(u+=`${y+1}. **${m.element}**${m.sourceFile?` (${m.sourceFile})`:""}: ${m.comment}`,m.selectedText&&(u+=` (re: "${m.selectedText.slice(0,30)}${m.selectedText.length>30?"...":""}")`),u+=`
`):r==="forensic"?(u+=`### ${y+1}. ${m.element}
`,m.isMultiSelect&&m.fullPath&&(u+=`*Forensic data shown for first element of selection*
`),m.fullPath&&(u+=`**Full DOM Path:** ${m.fullPath}
`),m.cssClasses&&(u+=`**CSS Classes:** ${m.cssClasses}
`),m.boundingBox&&(u+=`**Position:** x:${Math.round(m.boundingBox.x)}, y:${Math.round(m.boundingBox.y)} (${Math.round(m.boundingBox.width)}×${Math.round(m.boundingBox.height)}px)
`),u+=`**Annotation at:** ${m.x.toFixed(1)}% from left, ${Math.round(m.y)}px from top
`,m.selectedText&&(u+=`**Selected text:** "${m.selectedText}"
`),m.nearbyText&&!m.selectedText&&(u+=`**Context:** ${m.nearbyText.slice(0,100)}
`),m.computedStyles&&(u+=`**Computed Styles:** ${m.computedStyles}
`),m.accessibility&&(u+=`**Accessibility:** ${m.accessibility}
`),m.nearbyElements&&(u+=`**Nearby Elements:** ${m.nearbyElements}
`),m.sourceFile&&(u+=`**Source:** ${m.sourceFile}
`),m.reactComponents&&(u+=`**React:** ${m.reactComponents}
`),u+=`**Feedback:** ${m.comment}

`):(u+=`### ${y+1}. ${m.element}
`,u+=`**Location:** ${m.elementPath}
`,m.sourceFile&&(u+=`**Source:** ${m.sourceFile}
`),m.reactComponents&&(u+=`**React:** ${m.reactComponents}
`),r==="detailed"&&(m.cssClasses&&(u+=`**Classes:** ${m.cssClasses}
`),m.boundingBox&&(u+=`**Position:** ${Math.round(m.boundingBox.x)}px, ${Math.round(m.boundingBox.y)}px (${Math.round(m.boundingBox.width)}×${Math.round(m.boundingBox.height)}px)
`)),m.selectedText&&(u+=`**Selected text:** "${m.selectedText}"
`),r==="detailed"&&m.nearbyText&&!m.selectedText&&(u+=`**Context:** ${m.nearbyText.slice(0,100)}
`),u+=`**Feedback:** ${m.comment}

`)}),u.trim()}function Hs({demoAnnotations:e,demoDelay:n=1e3,enableDemoMode:r=!1,onAnnotationAdd:i,onAnnotationDelete:a,onAnnotationUpdate:u,onAnnotationsClear:m,onCopy:y,onSubmit:T,copyToClipboard:K=!0,endpoint:k,sessionId:Z,onSessionCreated:he,webhookUrl:ee,className:te}={}){const[$,re]=_.useState(!1),[P,ne]=_.useState([]),[Ne,Se]=_.useState(!0),[Oe,Rt]=_.useState(()=>ms()),[ze,Ee]=_.useState(!1),pt=_.useRef(null);_.useEffect(()=>{const o=d=>{const p=pt.current;p&&p.contains(d.target)&&d.stopPropagation()},l=["mousedown","click","pointerdown"];return l.forEach(d=>document.body.addEventListener(d,o)),()=>{l.forEach(d=>document.body.removeEventListener(d,o))}},[]);const[de,gt]=_.useState(!1),[Q,ye]=_.useState(!1),[ie,_e]=_.useState(null),[We,At]=_.useState({x:0,y:0}),[h,W]=_.useState(null),[Te,ue]=_.useState(!1),[be,Yt]=_.useState("idle"),[Fs,pn]=_.useState(!1),[gn,fn]=_.useState(!1),[ft,Ot]=_.useState(null),[zt,Pe]=_.useState(null),[hn,qe]=_.useState([]),[yn,bn]=_.useState(null),[ht,xn]=_.useState(null),[M,et]=_.useState(null),[Wt,xe]=_.useState(null),[wn,Me]=_.useState([]),[Be,kn]=_.useState(0),[Cn,vn]=_.useState(!1),[F,yo]=_.useState(!1),[ce,Sn]=_.useState(!1),[tt,Dt]=_.useState(!1),[bo,jn]=_.useState(!1),[Ht,Ft]=_.useState("main"),[Ln,In]=_.useState(!1),[xo,Xt]=_.useState(!1),[$n,Nn]=_.useState(!1),De=_.useRef(null),[X,He]=_.useState([]),me=_.useRef({cmd:!1,shift:!1}),oe=()=>{Xt(!0)},wo=()=>{Xt(!1)},ko=()=>{$n||(De.current=setTimeout(()=>Nn(!0),850))},Co=()=>{De.current&&(clearTimeout(De.current),De.current=null),Nn(!1),wo()};_.useEffect(()=>()=>{De.current&&clearTimeout(De.current)},[]);const Fe=({content:o,children:l})=>{const[d,p]=_.useState(!1),[c,g]=_.useState(!1),[b,w]=_.useState(!1),[L,S]=_.useState({top:0,right:0}),C=_.useRef(null),v=_.useRef(null),I=_.useRef(null),j=()=>{if(C.current){const H=C.current.getBoundingClientRect();S({top:H.top+H.height/2,right:window.innerWidth-H.left+8})}},x=()=>{p(!0),w(!0),I.current&&(clearTimeout(I.current),I.current=null),j(),v.current=A(()=>{g(!0)},500)},se=()=>{p(!1),v.current&&(clearTimeout(v.current),v.current=null),g(!1),I.current=A(()=>{w(!1)},150)};return _.useEffect(()=>()=>{v.current&&clearTimeout(v.current),I.current&&clearTimeout(I.current)},[]),t.jsxs(t.Fragment,{children:[t.jsx("span",{ref:C,onMouseEnter:x,onMouseLeave:se,children:l}),b&&qn.createPortal(t.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:L.top,right:L.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:c&&!Ln?1:0,transition:"opacity 0.15s ease"},children:o}),document.body)]})},[f,je]=_.useState(_o),[N,En]=_.useState(!0),[Tn,Pn]=_.useState(!1),Mn=!1,we="off",[ae,Ut]=_.useState(Z??null),Bn=_.useRef(!1),[q,Re]=_.useState(k?"connecting":"disconnected"),[D,Qt]=_.useState(null),[ke,Rn]=_.useState(!1),[Xe,An]=_.useState(null),[vo,So]=_.useState(0),Vt=_.useRef(!1),[Yn,nt]=_.useState(new Set),[On,yt]=_.useState(new Set),[ot,bt]=_.useState(!1),[jo,Ue]=_.useState(!1),[Ce,zn]=_.useState(!1),Qe=_.useRef(null),pe=_.useRef(null),st=_.useRef(null),lt=_.useRef(null),xt=_.useRef(!1),Wn=_.useRef(0),wt=_.useRef(null),Dn=_.useRef(null),Zt=8,Lo=50,Hn=_.useRef(null),Fn=_.useRef(null),rt=_.useRef(null),O=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(tt)jn(!0);else{Xt(!1),Ft("main");const o=A(()=>jn(!1),0);return()=>clearTimeout(o)}},[tt]),_.useEffect(()=>{In(!0);const o=A(()=>In(!1),350);return()=>clearTimeout(o)},[Ht]);const Xn=$&&Ne;_.useEffect(()=>{if(Xn){ye(!1),gt(!0),nt(new Set);const o=A(()=>{nt(l=>{const d=new Set(l);return P.forEach(p=>d.add(p.id)),d})},350);return()=>clearTimeout(o)}else if(de){ye(!0);const o=A(()=>{gt(!1),ye(!1)},250);return()=>clearTimeout(o)}},[Xn]),_.useEffect(()=>{yo(!0),kn(window.scrollY);const o=on(O);ne(o.filter($e)),ao||(Pn(!0),ao=!0,A(()=>Pn(!1),750));try{const l=localStorage.getItem("feedback-toolbar-settings");l&&je({..._o,...JSON.parse(l)})}catch{}try{const l=localStorage.getItem("feedback-toolbar-theme");l!==null&&En(l==="dark")}catch{}try{const l=localStorage.getItem("feedback-toolbar-position");if(l){const d=JSON.parse(l);typeof d.x=="number"&&typeof d.y=="number"&&Qt(d)}}catch{}},[O]),_.useEffect(()=>{F&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(f))},[f,F]),_.useEffect(()=>{F&&localStorage.setItem("feedback-toolbar-theme",N?"dark":"light")},[N,F]);const Un=_.useRef(!1);_.useEffect(()=>{const o=Un.current;Un.current=ke,o&&!ke&&D&&F&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(D))},[ke,D,F]),_.useEffect(()=>{if(!k||!F||Bn.current)return;Bn.current=!0,Re("connecting"),(async()=>{try{const l=ds(O),d=Z||l;let p=!1;if(d)try{const c=await so(k,d);Ut(c.id),Re("connected"),sn(O,c.id),p=!0;const g=on(O),b=new Set(c.annotations.map(L=>L.id)),w=g.filter(L=>!b.has(L.id));if(w.length>0){const S=`${typeof window<"u"?window.location.origin:""}${O}`,v=(await Promise.allSettled(w.map(j=>Et(k,c.id,{...j,sessionId:c.id,url:S})))).map((j,x)=>j.status==="fulfilled"?j.value:(console.warn("[Agentation] Failed to sync annotation:",j.reason),w[x])),I=[...c.annotations,...v];ne(I.filter($e)),_t(O,I.filter($e),c.id)}else ne(c.annotations.filter($e)),_t(O,c.annotations.filter($e),c.id)}catch(c){console.warn("[Agentation] Could not join session, creating new:",c),us(O)}if(!p){const c=typeof window<"u"?window.location.href:"/",g=await ln(k,c);Ut(g.id),Re("connected"),sn(O,g.id),he?.(g.id);const b=cs(),w=typeof window<"u"?window.location.origin:"",L=[];for(const[S,C]of b){const v=C.filter(x=>!x._syncedTo);if(v.length===0)continue;const I=`${w}${S}`,j=S===O;L.push((async()=>{try{const x=j?g:await ln(k,I),Le=(await Promise.allSettled(v.map(J=>Et(k,x.id,{...J,sessionId:x.id,url:I})))).map((J,G)=>J.status==="fulfilled"?J.value:(console.warn("[Agentation] Failed to sync annotation:",J.reason),v[G])).filter($e);if(_t(S,Le,x.id),j){const J=new Set(v.map(G=>G.id));ne(G=>{const R=G.filter(E=>!J.has(E.id));return[...Le,...R]})}}catch(x){console.warn(`[Agentation] Failed to sync annotations for ${S}:`,x)}})())}await Promise.allSettled(L)}}catch(l){Re("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",l)}})()},[k,Z,F,he,O]),_.useEffect(()=>{if(!k||!F)return;const o=async()=>{try{(await fetch(`${k}/health`)).ok?Re("connected"):Re("disconnected")}catch{Re("disconnected")}};o();const l=es(o,1e4);return()=>clearInterval(l)},[k,F]),_.useEffect(()=>{if(!k||!F||!ae)return;const o=new EventSource(`${k}/sessions/${ae}/events`),l=["resolved","dismissed"],d=p=>{try{const c=JSON.parse(p.data);if(l.includes(c.payload?.status)){const g=c.payload.id;yt(b=>new Set(b).add(g)),A(()=>{ne(b=>b.filter(w=>w.id!==g)),yt(b=>{const w=new Set(b);return w.delete(g),w})},150)}}catch{}};return o.addEventListener("annotation.updated",d),()=>{o.removeEventListener("annotation.updated",d),o.close()}},[k,F,ae]),_.useEffect(()=>{if(!k||!F)return;const o=Dn.current==="disconnected",l=q==="connected";Dn.current=q,o&&l&&(async()=>{try{const p=on(O);if(p.length===0)return;const g=`${typeof window<"u"?window.location.origin:""}${O}`;let b=ae,w=[];if(b)try{w=(await so(k,b)).annotations}catch{b=null}b||(b=(await ln(k,g)).id,Ut(b),sn(O,b));const L=new Set(w.map(C=>C.id)),S=p.filter(C=>!L.has(C.id));if(S.length>0){const v=(await Promise.allSettled(S.map(x=>Et(k,b,{...x,sessionId:b,url:g})))).map((x,se)=>x.status==="fulfilled"?x.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",x.reason),S[se])),j=[...w,...v].filter($e);ne(j),_t(O,j,b)}}catch(p){console.warn("[Agentation] Failed to sync on reconnect:",p)}})()},[q,k,F,ae,O]);const Io=_.useCallback(()=>{ze||(Ee(!0),Dt(!1),re(!1),A(()=>{ps(!0),Rt(!0),Ee(!1)},400))},[ze]);_.useEffect(()=>{if(!r||!F||!e||e.length===0||P.length>0)return;const o=[];return o.push(A(()=>{re(!0)},n-200)),e.forEach((l,d)=>{const p=n+d*300;o.push(A(()=>{const c=document.querySelector(l.selector);if(!c)return;const g=c.getBoundingClientRect(),{name:b,path:w}=Mt(c),L={id:`demo-${Date.now()}-${d}`,x:(g.left+g.width/2)/window.innerWidth*100,y:g.top+g.height/2+window.scrollY,comment:l.comment,element:b,elementPath:w,timestamp:Date.now(),selectedText:l.selectedText,boundingBox:{x:g.left,y:g.top+window.scrollY,width:g.width,height:g.height},nearbyText:it(c),cssClasses:at(c)};ne(S=>[...S,L])},p))}),()=>{o.forEach(clearTimeout)}},[r,F,e,n]),_.useEffect(()=>{const o=()=>{kn(window.scrollY),vn(!0),rt.current&&clearTimeout(rt.current),rt.current=A(()=>{vn(!1)},150)};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o),rt.current&&clearTimeout(rt.current)}},[]),_.useEffect(()=>{F&&P.length>0?ae?_t(O,P,ae):go(O,P):F&&P.length===0&&localStorage.removeItem(Bt(O))},[P,O,F,ae]);const Qn=_.useCallback(()=>{ce||(ns(),Sn(!0))},[ce]),kt=_.useCallback(()=>{ce&&(no(),Sn(!1))},[ce]),Jt=_.useCallback(()=>{ce?kt():Qn()},[ce,Qn,kt]),Vn=_.useCallback(()=>{if(X.length===0)return;const o=X[0],l=o.element,d=X.length>1,p=X.map(c=>c.element.getBoundingClientRect());if(d){const c={left:Math.min(...p.map(x=>x.left)),top:Math.min(...p.map(x=>x.top)),right:Math.max(...p.map(x=>x.right)),bottom:Math.max(...p.map(x=>x.bottom))},g=X.slice(0,5).map(x=>x.name).join(", "),b=X.length>5?` +${X.length-5} more`:"",w=p.map(x=>({x:x.left,y:x.top+window.scrollY,width:x.width,height:x.height})),S=X[X.length-1].element,C=p[p.length-1],v=C.left+C.width/2,I=C.top+C.height/2,j=_n(S);W({x:v/window.innerWidth*100,y:j?I:I+window.scrollY,clientY:I,element:`${X.length} elements: ${g}${b}`,elementPath:"multi-select",boundingBox:{x:c.left,y:c.top+window.scrollY,width:c.right-c.left,height:c.bottom-c.top},isMultiSelect:!0,isFixed:j,elementBoundingBoxes:w,multiSelectElements:X.map(x=>x.element),targetElement:S,fullPath:Nt(l),accessibility:$t(l),computedStyles:It(l),computedStylesObj:Lt(l),nearbyElements:jt(l),cssClasses:at(l),nearbyText:it(l),sourceFile:Pt(l)})}else{const c=p[0],g=_n(l);W({x:c.left/window.innerWidth*100,y:g?c.top:c.top+window.scrollY,clientY:c.top,element:o.name,elementPath:o.path,boundingBox:{x:c.left,y:g?c.top:c.top+window.scrollY,width:c.width,height:c.height},isFixed:g,fullPath:Nt(l),accessibility:$t(l),computedStyles:It(l),computedStylesObj:Lt(l),nearbyElements:jt(l),cssClasses:at(l),nearbyText:it(l),reactComponents:o.reactComponents,sourceFile:Pt(l)})}He([]),_e(null)},[X]);_.useEffect(()=>{$||(W(null),et(null),xe(null),Me([]),_e(null),Dt(!1),He([]),me.current={cmd:!1,shift:!1},ce&&kt())},[$,ce,kt]),_.useEffect(()=>()=>{no()},[]),_.useEffect(()=>{if(!$)return;const o=document.createElement("style");return o.id="feedback-cursor-styles",o.textContent=`
      body * {
        cursor: crosshair !important;
      }
      body p, body span, body h1, body h2, body h3, body h4, body h5, body h6,
      body li, body td, body th, body label, body blockquote, body figcaption,
      body caption, body legend, body dt, body dd, body pre, body code,
      body em, body strong, body b, body i, body u, body s, body a,
      body time, body address, body cite, body q, body abbr, body dfn,
      body mark, body small, body sub, body sup, body [contenteditable],
      body p *, body span *, body h1 *, body h2 *, body h3 *, body h4 *,
      body h5 *, body h6 *, body li *, body a *, body label *, body pre *,
      body code *, body blockquote *, body [contenteditable] * {
        cursor: text !important;
      }
      [data-feedback-toolbar], [data-feedback-toolbar] * {
        cursor: default !important;
      }
      [data-feedback-toolbar] textarea,
      [data-feedback-toolbar] input[type="text"],
      [data-feedback-toolbar] input[type="url"] {
        cursor: text !important;
      }
      [data-feedback-toolbar] button,
      [data-feedback-toolbar] button *,
      [data-feedback-toolbar] label,
      [data-feedback-toolbar] label *,
      [data-feedback-toolbar] a,
      [data-feedback-toolbar] a *,
      [data-feedback-toolbar] [role="button"],
      [data-feedback-toolbar] [role="button"] * {
        cursor: pointer !important;
      }
      [data-annotation-marker], [data-annotation-marker] * {
        cursor: pointer !important;
      }
    `,document.head.appendChild(o),()=>{const l=document.getElementById("feedback-cursor-styles");l&&l.remove()}},[$]),_.useEffect(()=>{if(!$||h)return;const o=l=>{const d=l.composedPath()[0]||l.target;if(le(d,"[data-feedback-toolbar]")){_e(null);return}const p=Ge(l.clientX,l.clientY);if(!p||le(p,"[data-feedback-toolbar]")){_e(null);return}const{name:c,elementName:g,path:b,reactComponents:w}=an(p,we),L=p.getBoundingClientRect();_e({element:c,elementName:g,elementPath:b,rect:L,reactComponents:w}),At({x:l.clientX,y:l.clientY})};return document.addEventListener("mousemove",o),()=>document.removeEventListener("mousemove",o)},[$,h,we]),_.useEffect(()=>{if(!$)return;const o=l=>{if(xt.current){xt.current=!1;return}const d=l.composedPath()[0]||l.target;if(le(d,"[data-feedback-toolbar]")||le(d,"[data-annotation-popup]")||le(d,"[data-annotation-marker]"))return;if(l.metaKey&&l.shiftKey&&!h&&!M){l.preventDefault(),l.stopPropagation();const H=Ge(l.clientX,l.clientY);if(!H)return;const Le=H.getBoundingClientRect(),{name:J,path:G,reactComponents:R}=an(H,we),E=X.findIndex(V=>V.element===H);E>=0?He(V=>V.filter((U,Ie)=>Ie!==E)):He(V=>[...V,{element:H,rect:Le,name:J,path:G,reactComponents:R??void 0}]);return}const p=le(d,"button, a, input, select, textarea, [role='button'], [onclick]");if(f.blockInteractions&&p&&(l.preventDefault(),l.stopPropagation()),h){if(p&&!f.blockInteractions)return;l.preventDefault(),Hn.current?.shake();return}if(M){if(p&&!f.blockInteractions)return;l.preventDefault(),Fn.current?.shake();return}l.preventDefault();const c=Ge(l.clientX,l.clientY);if(!c)return;const{name:g,path:b,reactComponents:w}=an(c,we),L=c.getBoundingClientRect(),S=l.clientX/window.innerWidth*100,C=_n(c),v=C?l.clientY:l.clientY+window.scrollY,I=window.getSelection();let j;I&&I.toString().trim().length>0&&(j=I.toString().trim().slice(0,500));const x=Lt(c),se=It(c);W({x:S,y:v,clientY:l.clientY,element:g,elementPath:b,selectedText:j,boundingBox:{x:L.left,y:C?L.top:L.top+window.scrollY,width:L.width,height:L.height},nearbyText:it(c),cssClasses:at(c),isFixed:C,fullPath:Nt(c),accessibility:$t(c),computedStyles:se,computedStylesObj:x,nearbyElements:jt(c),reactComponents:w??void 0,sourceFile:Pt(c),targetElement:c}),_e(null)};return document.addEventListener("click",o,!0),()=>document.removeEventListener("click",o,!0)},[$,h,M,f.blockInteractions,we,X]),_.useEffect(()=>{if(!$)return;const o=p=>{p.key==="Meta"&&(me.current.cmd=!0),p.key==="Shift"&&(me.current.shift=!0)},l=p=>{const c=me.current.cmd&&me.current.shift;p.key==="Meta"&&(me.current.cmd=!1),p.key==="Shift"&&(me.current.shift=!1);const g=me.current.cmd&&me.current.shift;c&&!g&&X.length>0&&Vn()},d=()=>{me.current={cmd:!1,shift:!1},He([])};return document.addEventListener("keydown",o),document.addEventListener("keyup",l),window.addEventListener("blur",d),()=>{document.removeEventListener("keydown",o),document.removeEventListener("keyup",l),window.removeEventListener("blur",d)}},[$,X,Vn]),_.useEffect(()=>{if(!$||h)return;const o=l=>{const d=l.composedPath()[0]||l.target;le(d,"[data-feedback-toolbar]")||le(d,"[data-annotation-marker]")||le(d,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(d.tagName)||d.isContentEditable||(Qe.current={x:l.clientX,y:l.clientY})};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[$,h]),_.useEffect(()=>{if(!$||h)return;const o=l=>{if(!Qe.current)return;const d=l.clientX-Qe.current.x,p=l.clientY-Qe.current.y,c=d*d+p*p,g=Zt*Zt;if(!Ce&&c>=g&&(pe.current=Qe.current,zn(!0)),(Ce||c>=g)&&pe.current){if(st.current){const R=Math.min(pe.current.x,l.clientX),E=Math.min(pe.current.y,l.clientY),V=Math.abs(l.clientX-pe.current.x),U=Math.abs(l.clientY-pe.current.y);st.current.style.transform=`translate(${R}px, ${E}px)`,st.current.style.width=`${V}px`,st.current.style.height=`${U}px`}const b=Date.now();if(b-Wn.current<Lo)return;Wn.current=b;const w=pe.current.x,L=pe.current.y,S=Math.min(w,l.clientX),C=Math.min(L,l.clientY),v=Math.max(w,l.clientX),I=Math.max(L,l.clientY),j=(S+v)/2,x=(C+I)/2,se=new Set,H=[[S,C],[v,C],[S,I],[v,I],[j,x],[j,C],[j,I],[S,x],[v,x]];for(const[R,E]of H){const V=document.elementsFromPoint(R,E);for(const U of V)U instanceof HTMLElement&&se.add(U)}const Le=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const R of Le)if(R instanceof HTMLElement){const E=R.getBoundingClientRect(),V=E.left+E.width/2,U=E.top+E.height/2,Ie=V>=S&&V<=v&&U>=C&&U<=I,ve=Math.min(E.right,v)-Math.max(E.left,S),Gn=Math.min(E.bottom,I)-Math.max(E.top,C),Mo=ve>0&&Gn>0?ve*Gn:0,Kn=E.width*E.height,Bo=Kn>0?Mo/Kn:0;(Ie||Bo>.5)&&se.add(R)}const J=[],G=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const R of se){if(le(R,"[data-feedback-toolbar]")||le(R,"[data-annotation-marker]"))continue;const E=R.getBoundingClientRect();if(!(E.width>window.innerWidth*.8&&E.height>window.innerHeight*.5)&&!(E.width<10||E.height<10)&&E.left<v&&E.right>S&&E.top<I&&E.bottom>C){const V=R.tagName;let U=G.has(V);if(!U&&(V==="DIV"||V==="SPAN")){const Ie=R.textContent&&R.textContent.trim().length>0,ve=R.onclick!==null||R.getAttribute("role")==="button"||R.getAttribute("role")==="link"||R.classList.contains("clickable")||R.hasAttribute("data-clickable");(Ie||ve)&&!R.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(U=!0)}if(U){let Ie=!1;for(const ve of J)if(ve.left<=E.left&&ve.right>=E.right&&ve.top<=E.top&&ve.bottom>=E.bottom){Ie=!0;break}Ie||J.push(E)}}}if(lt.current){const R=lt.current;for(;R.children.length>J.length;)R.removeChild(R.lastChild);J.forEach((E,V)=>{let U=R.children[V];U||(U=document.createElement("div"),U.className=s.selectedElementHighlight,R.appendChild(U)),U.style.transform=`translate(${E.left}px, ${E.top}px)`,U.style.width=`${E.width}px`,U.style.height=`${E.height}px`})}}};return document.addEventListener("mousemove",o,{passive:!0}),()=>document.removeEventListener("mousemove",o)},[$,h,Ce,Zt]),_.useEffect(()=>{if(!$)return;const o=l=>{const d=Ce,p=pe.current;if(Ce&&p){xt.current=!0;const c=Math.min(p.x,l.clientX),g=Math.min(p.y,l.clientY),b=Math.max(p.x,l.clientX),w=Math.max(p.y,l.clientY),L=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(j=>{if(!(j instanceof HTMLElement)||le(j,"[data-feedback-toolbar]")||le(j,"[data-annotation-marker]"))return;const x=j.getBoundingClientRect();x.width>window.innerWidth*.8&&x.height>window.innerHeight*.5||x.width<10||x.height<10||x.left<b&&x.right>c&&x.top<w&&x.bottom>g&&L.push({element:j,rect:x})});const C=L.filter(({element:j})=>!L.some(({element:x})=>x!==j&&j.contains(x))),v=l.clientX/window.innerWidth*100,I=l.clientY+window.scrollY;if(C.length>0){const j=C.reduce((G,{rect:R})=>({left:Math.min(G.left,R.left),top:Math.min(G.top,R.top),right:Math.max(G.right,R.right),bottom:Math.max(G.bottom,R.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),x=C.slice(0,5).map(({element:G})=>Mt(G).name).join(", "),se=C.length>5?` +${C.length-5} more`:"",H=C[0].element,Le=Lt(H),J=It(H);W({x:v,y:I,clientY:l.clientY,element:`${C.length} elements: ${x}${se}`,elementPath:"multi-select",boundingBox:{x:j.left,y:j.top+window.scrollY,width:j.right-j.left,height:j.bottom-j.top},isMultiSelect:!0,fullPath:Nt(H),accessibility:$t(H),computedStyles:J,computedStylesObj:Le,nearbyElements:jt(H),cssClasses:at(H),nearbyText:it(H),sourceFile:Pt(H)})}else{const j=Math.abs(b-c),x=Math.abs(w-g);j>20&&x>20&&W({x:v,y:I,clientY:l.clientY,element:"Area selection",elementPath:`region at (${Math.round(c)}, ${Math.round(g)})`,boundingBox:{x:c,y:g+window.scrollY,width:j,height:x},isMultiSelect:!0})}_e(null)}else d&&(xt.current=!0);Qe.current=null,pe.current=null,zn(!1),lt.current&&(lt.current.innerHTML="")};return document.addEventListener("mouseup",o),()=>document.removeEventListener("mouseup",o)},[$,Ce]);const ge=_.useCallback(async(o,l,d)=>{const p=f.webhookUrl||ee;if(!p||!f.webhooksEnabled&&!d)return!1;try{return(await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:o,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...l})})).ok}catch(c){return console.warn("[Agentation] Webhook failed:",c),!1}},[ee,f.webhookUrl,f.webhooksEnabled]),$o=_.useCallback(o=>{if(!h)return;const l={id:Date.now().toString(),x:h.x,y:h.y,comment:o,element:h.element,elementPath:h.elementPath,timestamp:Date.now(),selectedText:h.selectedText,boundingBox:h.boundingBox,nearbyText:h.nearbyText,cssClasses:h.cssClasses,isMultiSelect:h.isMultiSelect,isFixed:h.isFixed,fullPath:h.fullPath,accessibility:h.accessibility,computedStyles:h.computedStyles,nearbyElements:h.nearbyElements,reactComponents:h.reactComponents,sourceFile:h.sourceFile,elementBoundingBoxes:h.elementBoundingBoxes,...k&&ae?{sessionId:ae,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};ne(d=>[...d,l]),wt.current=l.id,A(()=>{wt.current=null},300),A(()=>{nt(d=>new Set(d).add(l.id))},250),i?.(l),ge("annotation.add",{annotation:l}),bt(!0),A(()=>{W(null),bt(!1)},150),window.getSelection()?.removeAllRanges(),k&&ae&&Et(k,ae,l).then(d=>{d.id!==l.id&&(ne(p=>p.map(c=>c.id===l.id?{...c,id:d.id}:c)),nt(p=>{const c=new Set(p);return c.delete(l.id),c.add(d.id),c}))}).catch(d=>{console.warn("[Agentation] Failed to sync annotation:",d)})},[h,i,ge,k,ae]),No=_.useCallback(()=>{bt(!0),A(()=>{W(null),bt(!1)},150)},[]),Gt=_.useCallback(o=>{const l=P.findIndex(p=>p.id===o),d=P[l];M?.id===o&&(Ue(!0),A(()=>{et(null),xe(null),Me([]),Ue(!1)},150)),bn(o),yt(p=>new Set(p).add(o)),d&&(a?.(d),ge("annotation.delete",{annotation:d})),k&&lo(k,o).catch(p=>{console.warn("[Agentation] Failed to delete annotation from server:",p)}),A(()=>{ne(p=>p.filter(c=>c.id!==o)),yt(p=>{const c=new Set(p);return c.delete(o),c}),bn(null),l<P.length-1&&(xn(l),A(()=>xn(null),200))},150)},[P,M,a,ge,k]),Ct=_.useCallback(o=>{if(et(o),Ot(null),Pe(null),qe([]),o.elementBoundingBoxes?.length){const l=[];for(const d of o.elementBoundingBoxes){const p=d.x+d.width/2,c=d.y+d.height/2-window.scrollY,g=Ge(p,c);g&&l.push(g)}Me(l),xe(null)}else if(o.boundingBox){const l=o.boundingBox,d=l.x+l.width/2,p=o.isFixed?l.y+l.height/2:l.y+l.height/2-window.scrollY,c=Ge(d,p);if(c){const g=c.getBoundingClientRect(),b=g.width/l.width,w=g.height/l.height;b<.5||w<.5?xe(null):xe(c)}else xe(null);Me([])}else xe(null),Me([])},[]),vt=_.useCallback(o=>{if(!o){Ot(null),Pe(null),qe([]);return}if(Ot(o.id),o.elementBoundingBoxes?.length){const l=[];for(const d of o.elementBoundingBoxes){const p=d.x+d.width/2,c=d.y+d.height/2-window.scrollY,b=document.elementsFromPoint(p,c).find(w=>!w.closest("[data-annotation-marker]")&&!w.closest("[data-agentation-root]"));b&&l.push(b)}qe(l),Pe(null)}else if(o.boundingBox){const l=o.boundingBox,d=l.x+l.width/2,p=o.isFixed?l.y+l.height/2:l.y+l.height/2-window.scrollY,c=Ge(d,p);if(c){const g=c.getBoundingClientRect(),b=g.width/l.width,w=g.height/l.height;b<.5||w<.5?Pe(null):Pe(c)}else Pe(null);qe([])}else Pe(null),qe([])},[]),Eo=_.useCallback(o=>{if(!M)return;const l={...M,comment:o};ne(d=>d.map(p=>p.id===M.id?l:p)),u?.(l),ge("annotation.update",{annotation:l}),k&&gs(k,M.id,{comment:o}).catch(d=>{console.warn("[Agentation] Failed to update annotation on server:",d)}),Ue(!0),A(()=>{et(null),xe(null),Me([]),Ue(!1)},150)},[M,u,ge,k]),To=_.useCallback(()=>{Ue(!0),A(()=>{et(null),xe(null),Me([]),Ue(!1)},150)},[]),Ae=_.useCallback(()=>{const o=P.length;if(o===0)return;m?.(P),ge("annotations.clear",{annotations:P}),k&&Promise.all(P.map(d=>lo(k,d.id).catch(p=>{console.warn("[Agentation] Failed to delete annotation from server:",p)}))),fn(!0),pn(!0);const l=o*30+200;A(()=>{ne([]),nt(new Set),localStorage.removeItem(Bt(O)),fn(!1)},l),A(()=>pn(!1),1500)},[O,P,m,ge,k]),Kt=_.useCallback(async()=>{const o=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:O,l=co(P,o,f.outputDetail,we);if(l){if(K)try{await navigator.clipboard.writeText(l)}catch{}y?.(l),ue(!0),A(()=>ue(!1),2e3),f.autoClearAfterCopy&&A(()=>Ae(),500)}},[P,O,f.outputDetail,we,f.autoClearAfterCopy,Ae,K,y]),qt=_.useCallback(async()=>{const o=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:O,l=co(P,o,f.outputDetail,we);if(!l)return;T&&T(l,P),Yt("sending"),await new Promise(p=>A(p,150));const d=await ge("submit",{output:l,annotations:P},!0);Yt(d?"sent":"failed"),A(()=>Yt("idle"),2500),d&&f.autoClearAfterCopy&&A(()=>Ae(),500)},[T,ge,P,O,f.outputDetail,we,f.autoClearAfterCopy,Ae]);_.useEffect(()=>{if(!Xe)return;const o=10,l=p=>{const c=p.clientX-Xe.x,g=p.clientY-Xe.y,b=Math.sqrt(c*c+g*g);if(!ke&&b>o&&Rn(!0),ke||b>o){let w=Xe.toolbarX+c,L=Xe.toolbarY+g;const S=20,C=297,v=44,j=C-($?q==="connected"?297:257:44),x=S-j,se=window.innerWidth-S-C;w=Math.max(x,Math.min(se,w)),L=Math.max(S,Math.min(window.innerHeight-v-S,L)),Qt({x:w,y:L})}},d=()=>{ke&&(Vt.current=!0),Rn(!1),An(null)};return document.addEventListener("mousemove",l),document.addEventListener("mouseup",d),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",d)}},[Xe,ke,$,q]);const Po=_.useCallback(o=>{if(o.target.closest("button")||o.target.closest(`.${s.settingsPanel}`))return;const l=o.currentTarget.parentElement;if(!l)return;const d=l.getBoundingClientRect(),p=D?.x??d.left,c=D?.y??d.top,g=(Math.random()-.5)*10;So(g),An({x:o.clientX,y:o.clientY,toolbarX:p,toolbarY:c})},[D]);if(_.useEffect(()=>{if(!D)return;const o=()=>{let c=D.x,g=D.y;const L=20-(297-($?q==="connected"?297:257:44)),S=window.innerWidth-20-297;c=Math.max(L,Math.min(S,c)),g=Math.max(20,Math.min(window.innerHeight-44-20,g)),(c!==D.x||g!==D.y)&&Qt({x:c,y:g})};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[D,$,q]),_.useEffect(()=>{const o=l=>{const d=l.target,p=d.tagName==="INPUT"||d.tagName==="TEXTAREA"||d.isContentEditable;if(l.key==="Escape"){if(X.length>0){He([]);return}h||$&&(oe(),re(!1))}if((l.metaKey||l.ctrlKey)&&l.shiftKey&&(l.key==="f"||l.key==="F")){l.preventDefault(),oe(),re(c=>!c);return}if(!(p||l.metaKey||l.ctrlKey)&&((l.key==="p"||l.key==="P")&&(l.preventDefault(),oe(),Jt()),(l.key==="h"||l.key==="H")&&P.length>0&&(l.preventDefault(),oe(),Se(c=>!c)),(l.key==="c"||l.key==="C")&&P.length>0&&(l.preventDefault(),oe(),Kt()),(l.key==="x"||l.key==="X")&&P.length>0&&(l.preventDefault(),oe(),Ae()),l.key==="s"||l.key==="S")){const c=fe(f.webhookUrl)||fe(ee||"");P.length>0&&c&&be==="idle"&&(l.preventDefault(),oe(),qt())}};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[$,h,P.length,f.webhookUrl,ee,be,qt,Jt,Kt,Ae,X]),!F||Oe)return null;const Ve=P.length>0,St=P.filter(o=>!On.has(o.id)&&$e(o)),Zn=P.filter(o=>On.has(o.id)),Jn=o=>{const g=o.x/100*window.innerWidth,b=typeof o.y=="string"?parseFloat(o.y):o.y,w={};window.innerHeight-b-22-10<80&&(w.top="auto",w.bottom="calc(100% + 10px)");const S=g-200/2,C=10;if(S<C){const v=C-S;w.left=`calc(50% + ${v}px)`}else if(S+200>window.innerWidth-C){const v=S+200-(window.innerWidth-C);w.left=`calc(50% - ${v}px)`}return w};return qn.createPortal(t.jsxs("div",{ref:pt,style:{display:"contents"},children:[t.jsx("div",{className:`${s.toolbar}${te?` ${te}`:""}`,"data-feedback-toolbar":!0,style:D?{left:D.x,top:D.y,right:"auto",bottom:"auto"}:void 0,children:t.jsxs("div",{className:`${s.toolbarContainer} ${N?"":s.light} ${$?s.expanded:s.collapsed} ${Tn?s.entrance:""} ${ze?s.hiding:""} ${ke?s.dragging:""} ${!f.webhooksEnabled&&(fe(f.webhookUrl)||fe(ee||""))?s.serverConnected:""}`,onClick:$?void 0:o=>{if(Vt.current){Vt.current=!1,o.preventDefault();return}re(!0)},onMouseDown:Po,role:$?void 0:"button",tabIndex:$?-1:0,title:$?void 0:"Start feedback mode",style:{...ke&&{transform:`scale(1.05) rotate(${vo}deg)`,cursor:"grabbing"}},children:[t.jsxs("div",{className:`${s.toggleContent} ${$?s.hidden:s.visible}`,children:[t.jsx(Wo,{size:24}),Ve&&t.jsx("span",{className:`${s.badge} ${$?s.fadeOut:""} ${Tn?s.entrance:""}`,style:{backgroundColor:f.annotationColor},children:P.length})]}),t.jsxs("div",{className:`${s.controlsContent} ${$?s.visible:s.hidden} ${D&&D.y<100?s.tooltipBelow:""} ${xo||tt?s.tooltipsHidden:""} ${$n?s.tooltipsInSession:""}`,onMouseEnter:ko,onMouseLeave:Co,children:[t.jsxs("div",{className:`${s.buttonWrapper} ${D&&D.x<120?s.buttonWrapperAlignLeft:""}`,children:[t.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:o=>{o.stopPropagation(),oe(),Jt()},"data-active":ce,children:t.jsx(Xo,{size:24,isPaused:ce})}),t.jsxs("span",{className:s.buttonTooltip,children:[ce?"Resume animations":"Pause animations",t.jsx("span",{className:s.shortcut,children:"P"})]})]}),t.jsxs("div",{className:s.buttonWrapper,children:[t.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:o=>{o.stopPropagation(),oe(),Se(!Ne)},disabled:!Ve,children:t.jsx(Fo,{size:24,isOpen:Ne})}),t.jsxs("span",{className:s.buttonTooltip,children:[Ne?"Hide markers":"Show markers",t.jsx("span",{className:s.shortcut,children:"H"})]})]}),t.jsxs("div",{className:s.buttonWrapper,children:[t.jsx("button",{className:`${s.controlButton} ${N?"":s.light} ${Te?s.statusShowing:""}`,onClick:o=>{o.stopPropagation(),oe(),Kt()},disabled:!Ve,"data-active":Te,children:t.jsx(Do,{size:24,copied:Te})}),t.jsxs("span",{className:s.buttonTooltip,children:["Copy feedback",t.jsx("span",{className:s.shortcut,children:"C"})]})]}),t.jsxs("div",{className:`${s.buttonWrapper} ${s.sendButtonWrapper} ${$&&!f.webhooksEnabled&&(fe(f.webhookUrl)||fe(ee||""))?s.sendButtonVisible:""}`,children:[t.jsxs("button",{className:`${s.controlButton} ${N?"":s.light} ${be==="sent"||be==="failed"?s.statusShowing:""}`,onClick:o=>{o.stopPropagation(),oe(),qt()},disabled:!Ve||!fe(f.webhookUrl)&&!fe(ee||"")||be==="sending","data-no-hover":be==="sent"||be==="failed",tabIndex:fe(f.webhookUrl)||fe(ee||"")?0:-1,children:[t.jsx(Ho,{size:24,state:be}),Ve&&be==="idle"&&t.jsx("span",{className:`${s.buttonBadge} ${N?"":s.light}`,style:{backgroundColor:f.annotationColor},children:P.length})]}),t.jsxs("span",{className:s.buttonTooltip,children:["Send Annotations",t.jsx("span",{className:s.shortcut,children:"S"})]})]}),t.jsxs("div",{className:s.buttonWrapper,children:[t.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:o=>{o.stopPropagation(),oe(),Ae()},disabled:!Ve,"data-danger":!0,children:t.jsx(Qo,{size:24})}),t.jsxs("span",{className:s.buttonTooltip,children:["Clear all",t.jsx("span",{className:s.shortcut,children:"X"})]})]}),t.jsxs("div",{className:s.buttonWrapper,children:[t.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:o=>{o.stopPropagation(),oe(),Dt(!tt)},children:t.jsx(Uo,{size:24})}),k&&q!=="disconnected"&&t.jsx("span",{className:`${s.mcpIndicator} ${N?"":s.light} ${s[q]} ${tt?s.hidden:""}`,title:q==="connected"?"MCP Connected":"MCP Connecting..."}),t.jsx("span",{className:s.buttonTooltip,children:"Settings"})]}),t.jsx("div",{className:`${s.divider} ${N?"":s.light}`}),t.jsxs("div",{className:`${s.buttonWrapper} ${D&&typeof window<"u"&&D.x>window.innerWidth-120?s.buttonWrapperAlignRight:""}`,children:[t.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:o=>{o.stopPropagation(),oe(),re(!1)},children:t.jsx(Vo,{size:24})}),t.jsxs("span",{className:s.buttonTooltip,children:["Exit",t.jsx("span",{className:s.shortcut,children:"Esc"})]})]})]}),t.jsx("div",{className:`${s.settingsPanel} ${N?s.dark:s.light} ${bo?s.enter:s.exit}`,onClick:o=>o.stopPropagation(),style:D&&D.y<230?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,children:t.jsxs("div",{className:`${s.settingsPanelContainer} ${Ln?s.transitioning:""}`,children:[t.jsxs("div",{className:`${s.settingsPage} ${Ht==="automations"?s.slideLeft:""}`,children:[t.jsxs("div",{className:s.settingsHeader,children:[t.jsxs("span",{className:s.settingsBrand,children:[t.jsx("span",{className:s.settingsBrandSlash,style:{color:f.annotationColor,transition:"color 0.2s ease"},children:"/"}),"agentation"]}),t.jsxs("span",{className:s.settingsVersion,children:["v","2.3.0"]}),t.jsx("button",{className:s.themeToggle,onClick:()=>En(!N),title:N?"Switch to light mode":"Switch to dark mode",children:t.jsx("span",{className:s.themeIconWrapper,children:t.jsx("span",{className:s.themeIcon,children:N?t.jsx(Zo,{size:20}):t.jsx(Jo,{size:20})},N?"sun":"moon")})})]}),t.jsxs("div",{className:s.settingsSection,children:[t.jsxs("div",{className:s.settingsRow,children:[t.jsxs("div",{className:`${s.settingsLabel} ${N?"":s.light}`,children:["Output Detail",t.jsx(Fe,{content:"Controls how much detail is included in the copied output",children:t.jsx("span",{className:s.helpIcon,children:t.jsx(Ze,{size:20})})})]}),t.jsxs("button",{className:`${s.cycleButton} ${N?"":s.light}`,onClick:()=>{const l=(ut.findIndex(d=>d.value===f.outputDetail)+1)%ut.length;je(d=>({...d,outputDetail:ut[l].value}))},children:[t.jsx("span",{className:s.cycleButtonText,children:ut.find(o=>o.value===f.outputDetail)?.label},f.outputDetail),t.jsx("span",{className:s.cycleDots,children:ut.map((o,l)=>t.jsx("span",{className:`${s.cycleDot} ${N?"":s.light} ${f.outputDetail===o.value?s.active:""}`},o.value))})]})]}),t.jsxs("div",{className:`${s.settingsRow} ${s.settingsRowMarginTop} ${s.settingsRowDisabled}`,children:[t.jsxs("div",{className:`${s.settingsLabel} ${N?"":s.light}`,children:["React Components",t.jsx(Fe,{content:"Disabled — production builds minify component names, making detection unreliable. Use in development mode.",children:t.jsx("span",{className:s.helpIcon,children:t.jsx(Ze,{size:20})})})]}),t.jsxs("label",{className:`${s.toggleSwitch} ${s.disabled}`,children:[t.jsx("input",{type:"checkbox",checked:Mn,disabled:!Mn,onChange:()=>je(o=>({...o,reactEnabled:!o.reactEnabled}))}),t.jsx("span",{className:s.toggleSlider})]})]}),t.jsxs("div",{className:`${s.settingsRow} ${s.settingsRowMarginTop}`,children:[t.jsxs("div",{className:`${s.settingsLabel} ${N?"":s.light}`,children:["Hide Until Restart",t.jsx(Fe,{content:"Hides the toolbar until you open a new tab",children:t.jsx("span",{className:s.helpIcon,children:t.jsx(Ze,{size:20})})})]}),t.jsxs("label",{className:s.toggleSwitch,children:[t.jsx("input",{type:"checkbox",checked:!1,onChange:o=>{o.target.checked&&Io()}}),t.jsx("span",{className:s.toggleSlider})]})]})]}),t.jsxs("div",{className:s.settingsSection,children:[t.jsx("div",{className:`${s.settingsLabel} ${s.settingsLabelMarker} ${N?"":s.light}`,children:"Marker Colour"}),t.jsx("div",{className:s.colorOptions,children:Ds.map(o=>t.jsx("div",{role:"button",onClick:()=>je(l=>({...l,annotationColor:o.value})),style:{borderColor:f.annotationColor===o.value?o.value:"transparent"},className:`${s.colorOptionRing} ${f.annotationColor===o.value?s.selected:""}`,children:t.jsx("div",{className:`${s.colorOption} ${f.annotationColor===o.value?s.selected:""}`,style:{backgroundColor:o.value},title:o.label})},o.value))})]}),t.jsxs("div",{className:s.settingsSection,children:[t.jsxs("label",{className:s.settingsToggle,children:[t.jsx("input",{type:"checkbox",id:"autoClearAfterCopy",checked:f.autoClearAfterCopy,onChange:o=>je(l=>({...l,autoClearAfterCopy:o.target.checked}))}),t.jsx("label",{className:`${s.customCheckbox} ${f.autoClearAfterCopy?s.checked:""}`,htmlFor:"autoClearAfterCopy",children:f.autoClearAfterCopy&&t.jsx(eo,{size:14})}),t.jsxs("span",{className:`${s.toggleLabel} ${N?"":s.light}`,children:["Clear on copy/send",t.jsx(Fe,{content:"Automatically clear annotations after copying",children:t.jsx("span",{className:`${s.helpIcon} ${s.helpIconNudge2}`,children:t.jsx(Ze,{size:20})})})]})]}),t.jsxs("label",{className:`${s.settingsToggle} ${s.settingsToggleMarginBottom}`,children:[t.jsx("input",{type:"checkbox",id:"blockInteractions",checked:f.blockInteractions,onChange:o=>je(l=>({...l,blockInteractions:o.target.checked}))}),t.jsx("label",{className:`${s.customCheckbox} ${f.blockInteractions?s.checked:""}`,htmlFor:"blockInteractions",children:f.blockInteractions&&t.jsx(eo,{size:14})}),t.jsx("span",{className:`${s.toggleLabel} ${N?"":s.light}`,children:"Block page interactions"})]})]}),t.jsx("div",{className:`${s.settingsSection} ${s.settingsSectionExtraPadding}`,children:t.jsxs("button",{className:`${s.settingsNavLink} ${N?"":s.light}`,onClick:()=>Ft("automations"),children:[t.jsx("span",{children:"Manage MCP & Webhooks"}),t.jsxs("span",{className:s.settingsNavLinkRight,children:[k&&q!=="disconnected"&&t.jsx("span",{className:`${s.mcpNavIndicator} ${s[q]}`}),t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]}),t.jsxs("div",{className:`${s.settingsPage} ${s.automationsPage} ${Ht==="automations"?s.slideIn:""}`,children:[t.jsxs("button",{className:`${s.settingsBackButton} ${N?"":s.light}`,onClick:()=>Ft("main"),children:[t.jsx(Ko,{size:16}),t.jsx("span",{children:"Manage MCP & Webhooks"})]}),t.jsxs("div",{className:s.settingsSection,children:[t.jsxs("div",{className:s.settingsRow,children:[t.jsxs("span",{className:`${s.automationHeader} ${N?"":s.light}`,children:["MCP Connection",t.jsx(Fe,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.",children:t.jsx("span",{className:`${s.helpIcon} ${s.helpIconNudgeDown}`,children:t.jsx(Ze,{size:20})})})]}),k&&t.jsx("div",{className:`${s.mcpStatusDot} ${s[q]}`,title:q==="connected"?"Connected":q==="connecting"?"Connecting...":"Disconnected"})]}),t.jsxs("p",{className:`${s.automationDescription} ${N?"":s.light}`,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",t.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:`${s.learnMoreLink} ${N?"":s.light}`,children:"Learn more"})]})]}),t.jsxs("div",{className:`${s.settingsSection} ${s.settingsSectionGrow}`,children:[t.jsxs("div",{className:s.settingsRow,children:[t.jsxs("span",{className:`${s.automationHeader} ${N?"":s.light}`,children:["Webhooks",t.jsx(Fe,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.",children:t.jsx("span",{className:`${s.helpIcon} ${s.helpIconNoNudge}`,children:t.jsx(Ze,{size:20})})})]}),t.jsxs("div",{className:s.autoSendRow,children:[t.jsx("span",{className:`${s.autoSendLabel} ${N?"":s.light} ${f.webhooksEnabled?s.active:""}`,children:"Auto-Send"}),t.jsxs("label",{className:`${s.toggleSwitch} ${f.webhookUrl?"":s.disabled}`,children:[t.jsx("input",{type:"checkbox",checked:f.webhooksEnabled,disabled:!f.webhookUrl,onChange:()=>je(o=>({...o,webhooksEnabled:!o.webhooksEnabled}))}),t.jsx("span",{className:s.toggleSlider})]})]})]}),t.jsx("p",{className:`${s.automationDescription} ${N?"":s.light}`,children:"The webhook URL will receive live annotation changes and annotation data."}),t.jsx("textarea",{className:`${s.webhookUrlInput} ${N?"":s.light}`,placeholder:"Webhook URL",value:f.webhookUrl,style:{"--marker-color":f.annotationColor},onChange:o=>je(l=>({...l,webhookUrl:o.target.value}))})]})]})]})})]})}),t.jsxs("div",{className:s.markersLayer,"data-feedback-toolbar":!0,children:[de&&St.filter(o=>!o.isFixed).map((o,l)=>{const d=!Q&&ft===o.id,p=yn===o.id,c=(d||p)&&!M,g=o.isMultiSelect,b=g?"#34C759":f.annotationColor,w=P.findIndex(v=>v.id===o.id),L=!Yn.has(o.id),S=Q?s.exit:gn?s.clearing:L?s.enter:"",C=c&&f.markerClickBehavior==="delete";return t.jsxs("div",{className:`${s.marker} ${g?s.multiSelect:""} ${S} ${C?s.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:C?void 0:b,animationDelay:Q?`${(St.length-1-l)*20}ms`:`${l*20}ms`},onMouseEnter:()=>!Q&&o.id!==wt.current&&vt(o),onMouseLeave:()=>vt(null),onClick:v=>{v.stopPropagation(),Q||(f.markerClickBehavior==="delete"?Gt(o.id):Ct(o))},onContextMenu:v=>{f.markerClickBehavior==="delete"&&(v.preventDefault(),v.stopPropagation(),Q||Ct(o))},children:[c?C?t.jsx(en,{size:g?18:16}):t.jsx(to,{size:16}):t.jsx("span",{className:ht!==null&&w>=ht?s.renumber:void 0,children:w+1}),d&&!M&&t.jsxs("div",{className:`${s.markerTooltip} ${N?"":s.light} ${s.enter}`,style:Jn(o),children:[t.jsxs("span",{className:s.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),t.jsx("span",{className:s.markerNote,children:o.comment})]})]},o.id)}),de&&!Q&&Zn.filter(o=>!o.isFixed).map(o=>{const l=o.isMultiSelect;return t.jsx("div",{className:`${s.marker} ${s.hovered} ${l?s.multiSelect:""} ${s.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:t.jsx(en,{size:l?12:10})},o.id)})]}),t.jsxs("div",{className:s.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[de&&St.filter(o=>o.isFixed).map((o,l)=>{const d=St.filter(I=>I.isFixed),p=!Q&&ft===o.id,c=yn===o.id,g=(p||c)&&!M,b=o.isMultiSelect,w=b?"#34C759":f.annotationColor,L=P.findIndex(I=>I.id===o.id),S=!Yn.has(o.id),C=Q?s.exit:gn?s.clearing:S?s.enter:"",v=g&&f.markerClickBehavior==="delete";return t.jsxs("div",{className:`${s.marker} ${s.fixed} ${b?s.multiSelect:""} ${C} ${v?s.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:v?void 0:w,animationDelay:Q?`${(d.length-1-l)*20}ms`:`${l*20}ms`},onMouseEnter:()=>!Q&&o.id!==wt.current&&vt(o),onMouseLeave:()=>vt(null),onClick:I=>{I.stopPropagation(),Q||(f.markerClickBehavior==="delete"?Gt(o.id):Ct(o))},onContextMenu:I=>{f.markerClickBehavior==="delete"&&(I.preventDefault(),I.stopPropagation(),Q||Ct(o))},children:[g?v?t.jsx(en,{size:b?18:16}):t.jsx(to,{size:16}):t.jsx("span",{className:ht!==null&&L>=ht?s.renumber:void 0,children:L+1}),p&&!M&&t.jsxs("div",{className:`${s.markerTooltip} ${N?"":s.light} ${s.enter}`,style:Jn(o),children:[t.jsxs("span",{className:s.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),t.jsx("span",{className:s.markerNote,children:o.comment})]})]},o.id)}),de&&!Q&&Zn.filter(o=>o.isFixed).map(o=>{const l=o.isMultiSelect;return t.jsx("div",{className:`${s.marker} ${s.fixed} ${s.hovered} ${l?s.multiSelect:""} ${s.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:t.jsx(Oo,{size:l?12:10})},o.id)})]}),$&&t.jsxs("div",{className:s.overlay,"data-feedback-toolbar":!0,style:h||M?{zIndex:99999}:void 0,children:[ie?.rect&&!h&&!Cn&&!Ce&&t.jsx("div",{className:`${s.hoverHighlight} ${s.enter}`,style:{left:ie.rect.left,top:ie.rect.top,width:ie.rect.width,height:ie.rect.height,borderColor:`${f.annotationColor}80`,backgroundColor:`${f.annotationColor}0A`}}),X.filter(o=>document.contains(o.element)).map((o,l)=>{const d=o.element.getBoundingClientRect(),p=X.length>1;return t.jsx("div",{className:p?s.multiSelectOutline:s.singleSelectOutline,style:{position:"fixed",left:d.left,top:d.top,width:d.width,height:d.height,...p?{}:{borderColor:`${f.annotationColor}99`,backgroundColor:`${f.annotationColor}0D`}}},l)}),ft&&!h&&(()=>{const o=P.find(c=>c.id===ft);if(!o?.boundingBox)return null;if(o.elementBoundingBoxes?.length)return hn.length>0?hn.filter(c=>document.contains(c)).map((c,g)=>{const b=c.getBoundingClientRect();return t.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:b.left,top:b.top,width:b.width,height:b.height}},`hover-outline-live-${g}`)}):o.elementBoundingBoxes.map((c,g)=>t.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:c.x,top:c.y-Be,width:c.width,height:c.height}},`hover-outline-${g}`));const l=zt&&document.contains(zt)?zt.getBoundingClientRect():null,d=l?{x:l.left,y:l.top,width:l.width,height:l.height}:{x:o.boundingBox.x,y:o.isFixed?o.boundingBox.y:o.boundingBox.y-Be,width:o.boundingBox.width,height:o.boundingBox.height},p=o.isMultiSelect;return t.jsx("div",{className:`${p?s.multiSelectOutline:s.singleSelectOutline} ${s.enter}`,style:{left:d.x,top:d.y,width:d.width,height:d.height,...p?{}:{borderColor:`${f.annotationColor}99`,backgroundColor:`${f.annotationColor}0D`}}})})(),ie&&!h&&!Cn&&!Ce&&t.jsxs("div",{className:`${s.hoverTooltip} ${s.enter}`,style:{left:Math.max(8,Math.min(We.x,window.innerWidth-100)),top:Math.max(We.y-(ie.reactComponents?48:32),8)},children:[ie.reactComponents&&t.jsx("div",{className:s.hoverReactPath,children:ie.reactComponents}),t.jsx("div",{className:s.hoverElementName,children:ie.elementName})]}),h&&t.jsxs(t.Fragment,{children:[h.multiSelectElements?.length?h.multiSelectElements.filter(o=>document.contains(o)).map((o,l)=>{const d=o.getBoundingClientRect();return t.jsx("div",{className:`${s.multiSelectOutline} ${ot?s.exit:s.enter}`,style:{left:d.left,top:d.top,width:d.width,height:d.height}},`pending-multi-${l}`)}):h.targetElement&&document.contains(h.targetElement)?(()=>{const o=h.targetElement.getBoundingClientRect();return t.jsx("div",{className:`${s.singleSelectOutline} ${ot?s.exit:s.enter}`,style:{left:o.left,top:o.top,width:o.width,height:o.height,borderColor:`${f.annotationColor}99`,backgroundColor:`${f.annotationColor}0D`}})})():h.boundingBox&&t.jsx("div",{className:`${h.isMultiSelect?s.multiSelectOutline:s.singleSelectOutline} ${ot?s.exit:s.enter}`,style:{left:h.boundingBox.x,top:h.boundingBox.y-Be,width:h.boundingBox.width,height:h.boundingBox.height,...h.isMultiSelect?{}:{borderColor:`${f.annotationColor}99`,backgroundColor:`${f.annotationColor}0D`}}}),(()=>{const o=h.x,l=h.isFixed?h.y:h.y-Be;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`${s.marker} ${s.pending} ${h.isMultiSelect?s.multiSelect:""} ${ot?s.exit:s.enter}`,style:{left:`${o}%`,top:l,backgroundColor:h.isMultiSelect?"#34C759":f.annotationColor},children:t.jsx(zo,{size:12})}),t.jsx(oo,{ref:Hn,element:h.element,selectedText:h.selectedText,computedStyles:h.computedStylesObj,placeholder:h.element==="Area selection"?"What should change in this area?":h.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:$o,onCancel:No,isExiting:ot,lightMode:!N,accentColor:h.isMultiSelect?"#34C759":f.annotationColor,style:{left:Math.max(160,Math.min(window.innerWidth-160,o/100*window.innerWidth)),...l>window.innerHeight-290?{bottom:window.innerHeight-l+20}:{top:l+20}}})]})})()]}),M&&t.jsxs(t.Fragment,{children:[M.elementBoundingBoxes?.length?wn.length>0?wn.filter(o=>document.contains(o)).map((o,l)=>{const d=o.getBoundingClientRect();return t.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:d.left,top:d.top,width:d.width,height:d.height}},`edit-multi-live-${l}`)}):M.elementBoundingBoxes.map((o,l)=>t.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:o.x,top:o.y-Be,width:o.width,height:o.height}},`edit-multi-${l}`)):(()=>{const o=Wt&&document.contains(Wt)?Wt.getBoundingClientRect():null,l=o?{x:o.left,y:o.top,width:o.width,height:o.height}:M.boundingBox?{x:M.boundingBox.x,y:M.isFixed?M.boundingBox.y:M.boundingBox.y-Be,width:M.boundingBox.width,height:M.boundingBox.height}:null;return l?t.jsx("div",{className:`${M.isMultiSelect?s.multiSelectOutline:s.singleSelectOutline} ${s.enter}`,style:{left:l.x,top:l.y,width:l.width,height:l.height,...M.isMultiSelect?{}:{borderColor:`${f.annotationColor}99`,backgroundColor:`${f.annotationColor}0D`}}}):null})(),t.jsx(oo,{ref:Fn,element:M.element,selectedText:M.selectedText,computedStyles:_s(M.computedStyles),placeholder:"Edit your feedback...",initialValue:M.comment,submitLabel:"Save",onSubmit:Eo,onCancel:To,onDelete:()=>Gt(M.id),isExiting:jo,lightMode:!N,accentColor:M.isMultiSelect?"#34C759":f.annotationColor,style:(()=>{const o=M.isFixed?M.y:M.y-Be;return{left:Math.max(160,Math.min(window.innerWidth-160,M.x/100*window.innerWidth)),...o>window.innerHeight-290?{bottom:window.innerHeight-o+20}:{top:o+20}}})()})]}),Ce&&t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:st,className:s.dragSelection}),t.jsx("div",{ref:lt,className:s.highlightsContainer})]})]})]}),document.body)}function Zs(){return t.jsx(Hs,{})}export{Zs as default};
