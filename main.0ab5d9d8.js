parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,d=function(){};return{s:d,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,c=!0,m=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return c=e.done,e},e:function(e){m=!0,l=e},f:function(){try{c||null==o.return||o.return()}finally{if(m)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var d=Object.prototype.toString.call(e).slice(8,-1);return"Object"===d&&e.constructor&&(d=e.constructor.name),"Map"===d||"Set"===d?Array.from(e):"Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,d=new Array(t);n<t;n++)d[n]=e[n];return d}var d=document.getElementById("Mbtn"),o=document.getElementById("Mbtn2");d.addEventListener("click",function(){document.getElementById("more").classList.toggle("more--active")}),o.addEventListener("click",function(){document.getElementById("more").classList.toggle("more--active")}),window.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("left-button"),n=document.getElementById("right-button");t.addEventListener("click",function(){m(-1)}),n.addEventListener("click",function(){m(1)})});var l=document.getElementById("now"),c=1;function m(e){a(c+=e)}function a(e){var t,n=document.getElementsByClassName("video-player__frame");for(e>n.length&&(c=1),e<1&&(c=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[c-1].style.display="block",l.textContent=c}a(c);var i=document.getElementById("r1"),u=document.getElementById("r2"),y=document.getElementById("r3"),s=document.getElementById("r4"),r=document.getElementById("r5");i.addEventListener("click",function(){document.getElementById("vframe2-mob").style.display="none",document.getElementById("vframe3-mob").style.display="none",document.getElementById("vframe4-mob").style.display="none",document.getElementById("vframe5-mob").style.display="none",document.getElementById("vframe1-mob").style.display="block"}),u.addEventListener("click",function(){document.getElementById("vframe1-mob").style.display="none",document.getElementById("vframe3-mob").style.display="none",document.getElementById("vframe4-mob").style.display="none",document.getElementById("vframe5-mob").style.display="none",document.getElementById("vframe2-mob").style.display="block"}),y.addEventListener("click",function(){document.getElementById("vframe1-mob").style.display="none",document.getElementById("vframe2-mob").style.display="none",document.getElementById("vframe4-mob").style.display="none",document.getElementById("vframe5-mob").style.display="none",document.getElementById("vframe3-mob").style.display="block"}),s.addEventListener("click",function(){document.getElementById("vframe1-mob").style.display="none",document.getElementById("vframe2-mob").style.display="none",document.getElementById("vframe3-mob").style.display="none",document.getElementById("vframe5-mob").style.display="none",document.getElementById("vframe4-mob").style.display="block"}),r.addEventListener("click",function(){document.getElementById("vframe1-mob").style.display="none",document.getElementById("vframe2-mob").style.display="none",document.getElementById("vframe3-mob").style.display="none",document.getElementById("vframe4-mob").style.display="none",document.getElementById("vframe5-mob").style.display="block"}),document.querySelector("div.tech__buttons").addEventListener("click",function(e){var t=e.target.classList;t.contains("tech__button")&&t.toggle("tech__button--active")}),window.addEventListener("DOMContentLoaded",function(e){var t=document.getElementById("ba-left"),n=document.getElementById("ba-right");t.addEventListener("click",function(){E(-1)}),n.addEventListener("click",function(){E(1)})});var g=1;function E(e){v(g+=e)}function v(e){var t,n=document.getElementsByClassName("header__content");for(e>n.length&&(g=1),e<1&&(g=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[g-1].style.display="flex"}v(g),window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var f=document.getElementById("form");f.onsubmit=function(){return document.getElementById("form").reset(),!1};var I=document.getElementById("langMain"),B=document.getElementById("langEn"),p=document.getElementById("langUa"),x=document.getElementById("langPl"),C=document.getElementById("langFr"),L=document.getElementById("langIt"),k=document.getElementById("langSp"),h=document.getElementById("langDe"),b=document.getElementById("langRo"),M=document.getElementById("langCh"),_=0,D=["flex","none"];I.addEventListener("click",function(){document.getElementById("langMenu").style.display=D[_],_=_>=D.length-1?0:_+1}),B.addEventListener("click",function(){document.getElementById("langMain").textContent="En",document.getElementById("langMenu").style.display="none",event.preventDefault()}),p.addEventListener("click",function(){document.getElementById("langMain").textContent="Ua",document.getElementById("langMenu").style.display="none",event.preventDefault()}),x.addEventListener("click",function(){document.getElementById("langMain").textContent="Pl",document.getElementById("langMenu").style.display="none",event.preventDefault()}),C.addEventListener("click",function(){document.getElementById("langMain").textContent="Fr",document.getElementById("langMenu").style.display="none",event.preventDefault()}),L.addEventListener("click",function(){document.getElementById("langMain").textContent="It",document.getElementById("langMenu").style.display="none",event.preventDefault()}),k.addEventListener("click",function(){document.getElementById("langMain").textContent="Sp",document.getElementById("langMenu").style.display="none",event.preventDefault()}),h.addEventListener("click",function(){document.getElementById("langMain").textContent="De",document.getElementById("langMenu").style.display="none",event.preventDefault()}),b.addEventListener("click",function(){document.getElementById("langMain").textContent="Ro",document.getElementById("langMenu").style.display="none",event.preventDefault()}),M.addEventListener("click",function(){document.getElementById("langMain").textContent="Ch",document.getElementById("langMenu").style.display="none",event.preventDefault()});var q=document.getElementById("language-go"),w=document.getElementById("menu-back"),A=document.getElementById("faq-go");A.addEventListener("click",function(){document.getElementById("menuContent").style.display="none",document.getElementById("menuFAQ").style.display="flex",event.preventDefault()}),q.addEventListener("click",function(){document.getElementById("menuContent").style.display="none",document.getElementById("languageContent").style.display="flex",event.preventDefault()}),w.addEventListener("click",function(){document.getElementById("languageContent").style.display="none",document.getElementById("menuContent").style.display="flex",event.preventDefault()});var O=document.getElementById("faqBack");O.addEventListener("click",function(){document.getElementById("menuFAQ").style.display="none",document.getElementById("menuContent").style.display="flex",event.preventDefault()});var S=document.getElementById("helpBack");S.addEventListener("click",function(){document.getElementById("menuHelp").style.display="none",document.getElementById("menuContent").style.display="flex",event.preventDefault()});var P=document.getElementById("help-go");P.addEventListener("click",function(){document.getElementById("menuContent").style.display="none",document.getElementById("menuHelp").style.display="flex",event.preventDefault()});var F=document.getElementById("helpToFaq");F.addEventListener("click",function(){document.getElementById("menuHelp").style.display="none",document.getElementById("menuContent").style.display="none",document.getElementById("menuFAQ").style.display="flex",event.preventDefault()});var U=document.getElementById("menuEn");U.addEventListener("click",function(){document.getElementById("langMain").textContent="En"});var N=document.getElementById("menuAr");N.addEventListener("click",function(){document.getElementById("langMain").textContent="Ar"});var $=document.getElementById("menuAr");$.addEventListener("click",function(){document.getElementById("langMain").textContent="Ch"});var K=document.getElementById("menuAr");K.addEventListener("click",function(){document.getElementById("langMain").textContent="Cht"});var W=document.getElementById("menuAr");W.addEventListener("click",function(){document.getElementById("langMain").textContent="Fr"});var H=document.getElementById("menuAr");H.addEventListener("click",function(){document.getElementById("langMain").textContent="De"});var R=document.getElementById("menuAr");R.addEventListener("click",function(){document.getElementById("langMain").textContent="It"});var T=document.getElementById("menuAr");T.addEventListener("click",function(){document.getElementById("langMain").textContent="Pl"});var j=document.getElementById("menuAr");j.addEventListener("click",function(){document.getElementById("langMain").textContent="Ua"}),window.addEventListener("hashchange",function(){"#faq"===window.location.hash?document.body.classList.add("page__body--with-faq"):document.body.classList.remove("page__body--with-faq")}),window.addEventListener("hashchange",function(){"#videoFull"===window.location.hash?document.body.classList.add("page__body--with-video"):document.body.classList.remove("page__body--with-video")}),window.addEventListener("hashchange",function(){"#help"===window.location.hash?document.body.classList.add("page__body--with-help"):document.body.classList.remove("page__body--with-help")});var Q=document.getElementById("priceM"),V=document.getElementById("price1"),z=document.getElementById("price2"),Y=document.getElementById("price3"),G=document.getElementById("price4"),J=document.getElementById("price5"),X=0,Z=["flex","none"];Q.addEventListener("click",function(){document.getElementById("priceAll").style.display=Z[X],X=X>=D.length-1?0:X+1}),V.addEventListener("click",function(){document.getElementById("priceM").textContent="1",document.getElementById("priceAmount").textContent="1200$",document.getElementById("priceAll").style.display="none",event.preventDefault()}),z.addEventListener("click",function(){document.getElementById("priceM").textContent="2",document.getElementById("priceAmount").textContent="2400$",document.getElementById("priceAll").style.display="none",event.preventDefault()}),Y.addEventListener("click",function(){document.getElementById("priceM").textContent="3",document.getElementById("priceAmount").textContent="3600$",document.getElementById("priceAll").style.display="none",event.preventDefault()}),G.addEventListener("click",function(){document.getElementById("priceM").textContent="4",document.getElementById("priceAmount").textContent="4800$",document.getElementById("priceAll").style.display="none",event.preventDefault()}),J.addEventListener("click",function(){document.getElementById("priceM").textContent="5",document.getElementById("priceAmount").textContent="6000$",document.getElementById("priceAll").style.display="none",event.preventDefault()});var ee=0,te=["flex","none"],ne=document.getElementById("counryMain"),de=document.getElementById("countryUa"),oe=document.getElementById("countryEn"),le=document.getElementById("countryFr"),ce=document.getElementById("countryUs"),me=document.getElementById("countryDe"),ae=document.getElementById("countryIt"),ie=document.getElementById("countryPl"),ue=document.getElementById("countrySp");ne.addEventListener("click",function(){document.getElementById("countryOpener").style.display=te[ee],ee=ee>=D.length-1?0:ee+1}),de.addEventListener("click",function(){document.getElementById("counryMain").textContent="Ukraine",document.getElementById("countryOpener").style.display="none",event.preventDefault()}),de.addEventListener("click",function(){document.getElementById("counryMain").textContent="Ukraine",document.getElementById("countryOpener").style.display="none",re.textContent="Kyiv",ge.textContent="Kyiv",Ee.textContent="Lviv",ve.textContent="Odesa",fe.textContent="Dnipro",Ie.textContent="Kharkiv",event.preventDefault()}),oe.addEventListener("click",function(){document.getElementById("counryMain").textContent="England",document.getElementById("countryOpener").style.display="none",re.textContent="London",ge.textContent="London",Ee.textContent="Liverpool",ve.textContent="Manchester",fe.textContent="Newcastle",Ie.textContent="Cambridge",event.preventDefault()}),ce.addEventListener("click",function(){document.getElementById("counryMain").textContent="United States",document.getElementById("countryOpener").style.display="none",re.textContent="Washington",ge.textContent="Washington",Ee.textContent="Miami",ve.textContent="San Francisco",fe.textContent="New York",Ie.textContent="Dallas",event.preventDefault()}),le.addEventListener("click",function(){document.getElementById("counryMain").textContent="France",document.getElementById("countryOpener").style.display="none",re.textContent="Paris",ge.textContent="Paris",Ee.textContent="Marseille",ve.textContent="Lyon",fe.textContent="Nice",Ie.textContent="Toulouse",event.preventDefault()}),me.addEventListener("click",function(){document.getElementById("counryMain").textContent="Deuchland",document.getElementById("countryOpener").style.display="none",re.textContent="Berlin",ge.textContent="Berlin",Ee.textContent="Munich",ve.textContent="Dusseldorf",fe.textContent="Hamburg",Ie.textContent="Frankfurt",event.preventDefault()}),ae.addEventListener("click",function(){document.getElementById("counryMain").textContent="Italy",document.getElementById("countryOpener").style.display="none",re.textContent="Rome",ge.textContent="Rome",Ee.textContent="Milan",ve.textContent="Naples",fe.textContent="Turin",Ie.textContent="Palermo",event.preventDefault()}),ie.addEventListener("click",function(){document.getElementById("counryMain").textContent="Poland",document.getElementById("countryOpener").style.display="none",re.textContent="Warsaw",ge.textContent="Warsaw",Ee.textContent="Katowice",ve.textContent="Krakiv",fe.textContent="Wroclav",Ie.textContent="Poznan",event.preventDefault()}),ue.addEventListener("click",function(){document.getElementById("counryMain").textContent="Spain",document.getElementById("countryOpener").style.display="none",re.textContent="Barcelona",ge.textContent="Barcelona",Ee.textContent="Madrid",ve.textContent="Mallorka",fe.textContent="Seville",Ie.textContent="Valencia",event.preventDefault()});var ye=0,se=["flex","none"],re=document.getElementById("cityMain"),ge=document.getElementById("city1"),Ee=document.getElementById("city2"),ve=document.getElementById("city3"),fe=document.getElementById("city4"),Ie=document.getElementById("city5");re.addEventListener("click",function(){document.getElementById("cityOpener").style.display=se[ye],ye=ye>=se.length-1?0:ye+1}),ge.addEventListener("click",function(){document.getElementById("cityMain").textContent=ge.textContent,document.getElementById("cityOpener").style.display="none",event.preventDefault()}),Ee.addEventListener("click",function(){document.getElementById("cityMain").textContent=Ee.textContent,document.getElementById("cityOpener").style.display="none",event.preventDefault()}),ve.addEventListener("click",function(){document.getElementById("cityMain").textContent=ve.textContent,document.getElementById("cityOpener").style.display="none",event.preventDefault()}),fe.addEventListener("click",function(){document.getElementById("cityMain").textContent=fe.textContent,document.getElementById("cityOpener").style.display="none",event.preventDefault()}),Ie.addEventListener("click",function(){document.getElementById("cityMain").textContent=Ie.textContent,document.getElementById("cityOpener").style.display="none",event.preventDefault()});var Be=document.getElementById("toPay"),pe=document.getElementById("toComplete"),xe=document.getElementById("form2"),Ce=document.getElementById("form3"),Le=document.getElementById("status1"),ke=document.getElementById("status2"),he=document.getElementById("status3");Be.addEventListener("click",function(){xe.style.display="none",Ce.style.display="flex",Le.classList.remove("cart__content-top-process-status--active"),Le.classList.add("cart__content-top-process-status--unactive"),ke.classList.add("cart__content-top-process-status--active"),event.preventDefault(),document.getElementById("price").classList.add("cart__content-main-pricing--active"),document.getElementById("pay").classList.add("cart__content-main-container-form--active"),event.preventDefault()}),pe.addEventListener("click",function(){document.getElementById("cartPricing").style.display="none",document.getElementById("pay").style.display="none",Le.classList.remove("cart__content-top-process-status--unactive"),ke.classList.remove("cart__content-top-process-status--active"),he.classList.add("cart__content-top-process-status--active"),document.getElementById("finish").style.display="flex",event.preventDefault()});var be,Me=document.querySelector("#otp-screen"),_e=e(Me.children);try{var De=function(){var e=be.value;e.onkeyup=function(){this.value.length===parseInt(this.attributes.maxlength.value)&&e.nextElementSibling.focus()}};for(_e.s();!(be=_e.n()).done;)De()}catch(Ke){_e.e(Ke)}finally{_e.f()}document.getElementById("toPay").disabled=!0;var qe=document.getElementById("form2");qe.addEventListener("change",function(){document.getElementById("toPay").disabled=!qe.checkValidity()}),document.getElementById("toComplete").disabled=!0;var we=document.getElementById("form3");we.addEventListener("change",function(){document.getElementById("toComplete").disabled=!we.checkValidity()});var Ae=document.getElementById("fq1"),Oe=document.getElementById("fq2"),Se=document.getElementById("fq3"),Pe=document.getElementById("fq4"),Fe=document.getElementById("mfq1"),Ue=document.getElementById("mfq2"),Ne=document.getElementById("mfq3"),$e=document.getElementById("mfq4");Ae.addEventListener("click",function(){document.getElementById("fqt1").classList.toggle("faq__question-text--active-1")}),Oe.addEventListener("click",function(){document.getElementById("fqt2").classList.toggle("faq__question-text--active-2")}),Se.addEventListener("click",function(){document.getElementById("fqt3").classList.toggle("faq__question-text--active-3")}),Pe.addEventListener("click",function(){document.getElementById("fqt4").classList.toggle("faq__question-text--active-4")}),Fe.addEventListener("click",function(){document.getElementById("mfqt1").classList.toggle("faq__question-text--active-1")}),Ue.addEventListener("click",function(){document.getElementById("mfqt2").classList.toggle("faq__question-text--active-2")}),Ne.addEventListener("click",function(){document.getElementById("mfqt3").classList.toggle("faq__question-text--active-3")}),$e.addEventListener("click",function(){document.getElementById("mfqt4").classList.toggle("faq__question-text--active-4")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0ab5d9d8.js.map