if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f2077539.css",revision:"cd1aa59af4439eb61c8bfaa7151da76f"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/70.49b7a7ee.js",revision:"4e18c75d09f9041017318311ff4b7c25"},{url:"assets/js/71.7227db09.js",revision:"f6bddf302ce96649fff2afcb718bfb49"},{url:"assets/js/app.46101841.js",revision:"392cd817b92ee9dd5e1e50859b087808"},{url:"assets/js/layout-Blog.82dce7ad.js",revision:"4a37940a87e1bf3afe89dc4a06ed8db4"},{url:"assets/js/layout-Layout.2be11ea2.js",revision:"8a417b3ba71d3d56e844f20a7f4a55dd"},{url:"assets/js/layout-NotFound.409c3cda.js",revision:"bed1d2da53d3986ce5c5a8966ef8f6a5"},{url:"assets/js/layout-Slide.fbcce3e0.js",revision:"1f3ec4ce20babc832a87aeb16908ef4d"},{url:"assets/js/page--4c69b3e0.e33977c1.js",revision:"33e1c68468faaf6b3de3ac6425608157"},{url:"assets/js/page--7024a1db.cfa3aa1c.js",revision:"f53c680f9179ab7b9dd060e71ac78c08"},{url:"assets/js/page--dff2a364.d7eb825b.js",revision:"58bb98d37accfbbf3fd5809941a98687"},{url:"assets/js/page-1)Whatarethebenefitsofmakingaplanbeforestartingtojustwritethecode--2e578e7e.fadcc095.js",revision:"53c9a87684e4c011ca04c85174005bf6"},{url:"assets/js/page-1)WhatarethemainwaystowriteinformationtotheconsoleWhywhenshouldyouuseeachstyle--54f67600.6e4b4914.js",revision:"3b04a36d6bfdbc7addb6e1a1b38d93e8"},{url:"assets/js/page-1)WhatarethethreewaystosyntacticallywriteafunctionWhatarethedifferencesinhowthefunctionacts(ifany)--57ecdb9c.d8008b6c.js",revision:"51838bc38e941d861f9e4acd734b0506"},{url:"assets/js/page-1)Whatisthepurposeofwire-framing--3a28d014.c34f36ed.js",revision:"d5c7bef51ea3fe7a9da610bd378f2258"},{url:"assets/js/page-1Insimpletermswhatisasub-document--352e8e54.e89aa082.js",revision:"90be2d00e52d14082a700a86ca2f4735"},{url:"assets/js/page-1WhatarelifecyclehooksWhatarelifecyclehooksusedfor--511819e4.16b3db0f.js",revision:"4b80a5b16d5e86c4edba4f9d197c3b36"},{url:"assets/js/page-1Whatareprops--7ea12990.20f8af32.js",revision:"2d6d9460fcad20a187fda0a2f29913a3"},{url:"assets/js/page-1WhataresomeofthesignsandcausesofCallbackHell--51402dca.38e86d9b.js",revision:"7d59cfe3f208021d53b5d15058011168"},{url:"assets/js/page-1WhatarethethreestatesofaPromise--abda1170.f2f0c791.js",revision:"a51cadcc76a6cce0a6829bde2eac9bef"},{url:"assets/js/page-1Whatarethethreetypesofrelationships--e6d42150.53f62977.js",revision:"4f328f7556c69d084d36a92d2319e29a"},{url:"assets/js/page-1Whatarethetwocommonoperationsthatwewillsetinthehandler--10da868e.29a211fb.js",revision:"6383815e89a2cbf374826d7555e15d3e"},{url:"assets/js/page-1WhatdoesRESTstandfor,andinsimpletermswhatdoesitmean--5bb88a44.9e2e59e2.js",revision:"dda5ee3732fa89a2cf435bf2f1215de1"},{url:"assets/js/page-1Whatisanestedroute--3046bc8c.113e48db.js",revision:"de174fc21071383f3cb188d341982733"},{url:"assets/js/page-1WhatisaUserExperienceWhatshouldbeconsideredwhendevelopingaUserExperience--12c9b49c.d57c57d4.js",revision:"f13d11c4859c326780f699e44b7fd95c"},{url:"assets/js/page-1Whatisavirtualproperty--3e3b8254.897c70d9.js",revision:"339c2edbc4e480c1fe2370f0679cc54d"},{url:"assets/js/page-1WhatisCodeDocumentationWhataresomeofthewaystodocumentcode--8c1229c4.8f9d20c1.js",revision:"6bb44a1b1d87a35da4d80db4d11e728e"},{url:"assets/js/page-1WhatisComponentbasedarchitecture--25ce6012.7820847d.js",revision:"6fede818d8dda753f1a3b884caf52bd2"},{url:"assets/js/page-1WhatisPairProgrammingWhataretherolesandhowdotheywork--612421a0.fbb6feba.js",revision:"eb1c75d334238f86b043fc08b2fe1cb9"},{url:"assets/js/page-1WhatisthepurposeofaQueryString--33c325da.b1a4b5c7.js",revision:"dab0d7a648f0413d07c30632f4c4142f"},{url:"assets/js/page-1WhatisthepurposeofAsyncAwait--02e5c0c6.0fbb2b28.js",revision:"75111bb153218fafe05f5a6592288413"},{url:"assets/js/page-1WhatisthepurposeofEncapsulation--8ff085e0.fae650f7.js",revision:"7367c523c90ea3ddaa4638acb3cd7ea4"},{url:"assets/js/page-1Whatproblemdoesusingexportssolve--5f34f392.12a824c7.js",revision:"c9453b1c5181ac55e05031ce7ccd563b"},{url:"assets/js/page-1WhatproblemsdoestheObserverPatternseektosolve--69ad500c.576d4238.js",revision:"c989298c5e9e7e481609c60cbf9d0b4e"},{url:"assets/js/page-1Whichprinciplesfromthisweeksreadingdidyouimplement--6b9c7e1a.5c2f1666.js",revision:"f763e58b8117eafb55afb9b33f4cf671"},{url:"assets/js/page-AdvancedFront-EndFrameworks--e3bd767c.450fd013.js",revision:"98d41d603bbaf23f884a0146be0c09b2"},{url:"assets/js/page-ApplicationArchitecture,MVCDesignPattern--7376447c.a9e23766.js",revision:"76ec383ac706f88a5e1a7812b7a97f52"},{url:"assets/js/page-CFundamentals--41c6417c.5ff1eb83.js",revision:"490b595d2a4ab53c585dc9c4d9ca31e6"},{url:"assets/js/page-DeployingApplications--7fcf42fc.013a0eea.js",revision:"41e32733da918619741b9e2c67fbe797"},{url:"assets/js/page-endofweektwo--5f16415c.b7c4d55a.js",revision:"38e8c3b003f3cafb86b71ea64164a7da"},{url:"assets/js/page-FindMoreAboutmehere--0f690267.40921162.js",revision:"2cea92b457c4638c83db6e889d588359"},{url:"assets/js/page-FoundationsofWebDevelopment--6256aa42.b9e77529.js",revision:"86351d3def457253fc95905fc300f78b"},{url:"assets/js/page-HowaresomewaysScrumforasmallteamwoulddifferfromScrumwithalargeteam--402ab062.acb149f7.js",revision:"eb87190c5c1484aa2bcf05f22a5e82b3"},{url:"assets/js/page-InaSQLtable,whatisthedifferencebetweeninformationinarowandinformationinacolumn--6c19ada2.6ccd1e2a.js",revision:"dc9195c75a3a8cbad0ec231249df92f8"},{url:"assets/js/page-IntrotoJavaScript--d76477fc.3e8b58e0.js",revision:"5324ad7a4f27c5a303621986c4ca160a"},{url:"assets/js/page-IntrotoServersideconcernswithJavaScript--2a331142.86b93970.js",revision:"4401d22fe6010f97952247e420aa6929"},{url:"assets/js/page-journalday3--7a62ee78.dd7eb0f4.js",revision:"ead989a8f45514ae3f5cae7ee31eeed1"},{url:"assets/js/page-journalentrydaynumbertwo--2b629166.f782e0cd.js",revision:"66f2907c018a2ec431da301e06ff95bc"},{url:"assets/js/page-Journalentrynumber1--26e416b0.b69d221b.js",revision:"1a7acfad596dd4b2e6faa553b351f03b"},{url:"assets/js/page-Myfirstweek--4b744174.8de327a1.js",revision:"aa72a5d9b5915595f0cb88b7ee3dd929"},{url:"assets/js/page-Mytesttitle--3ff2dc42.b5f30976.js",revision:"1b34296f8e30fd55c91d05bbe07e4ff8"},{url:"assets/js/page-opensource--7affccec.535fbdab.js",revision:"ba97965dffb5d33e455952f2776d5bbd"},{url:"assets/js/page-UnderStandingAsynchronousCode,andAPI's--0f8810fc.7754b8d8.js",revision:"b94e16c2497c6f163970be4496786323"},{url:"assets/js/page-UnderstandingPersistentRelationalData--5c2a2b02.f31034b6.js",revision:"433abbbb85aa9e09ab113b60dba8c093"},{url:"assets/js/page-WhatarethethreecategoriesofdatatypesHowaretheydifferent--7dcaba7c.af53b84e.js",revision:"46f727ba2ec277a292f013ca29707530"},{url:"assets/js/page-WhatdoesInheritanceaccomplishforusinC--438c4962.6dfae0fc.js",revision:"c76be4629fde6885cd823e460bb5dea1"},{url:"assets/js/page-WhatfunctiondoesadeveloperPortfolioprovide--532f5bd8.427c5015.js",revision:"b39e298ad6736b8b5aac9725b9c21e48"},{url:"assets/js/page-WhatisaGithubactionandhowdotheywork--31503238.656a4f0c.js",revision:"8d9be621f0286e6b71424cb6be1d4f73"},{url:"assets/js/page-WhatisaListinC--4f6fa662.34f9cfe1.js",revision:"ec62ee42a703000068635c65d3d1238b"},{url:"assets/js/page-WhatisanEnum,andwhataresomeusecasesforthem--4476abfc.1aab1603.js",revision:"40c40d61595db3c98db1ad406f728a5b"},{url:"assets/js/page-WhatisanSSLcertificate--ce050c40.7c57a884.js",revision:"90a676f80d91aaa2693fcbe5e51583f6"},{url:"assets/js/page-WhatisScope--6b80e8b4.8d40c6de.js",revision:"a56911b18d01f09a0bb7112f327bb30b"},{url:"assets/js/page-WhatisSQLinjection--603650a2.b931ff58.js",revision:"a6e96d67fe58cc610e2c522b339d6247"},{url:"assets/js/page-Whatisthedifferencebetweenaprimarykeyandaforeignkey--5c3d65fc.eb6de0dc.js",revision:"61ce4dc5c94872e14634cbe6ac341de3"},{url:"assets/js/page-Whattechnologiesandprinciplesareyouusinginyourproject--e2f5c534.0f60ab0a.js",revision:"df479a3d302b1d45780ce6a08ff8b1df"},{url:"assets/js/page-Whyiscommunicationonasmallteamimportant--a7fbb554.ddeedca3.js",revision:"c9cea4737bfb0ac347748f1e87078293"},{url:"assets/js/page-WorkinginaProfessionalEnvironment--1be10f7c.b7951d1b.js",revision:"465059cc7a3e41ae9bbb50cfdd4adae5"},{url:"assets/js/page-Writeareflection--22e9577c.2e899b60.js",revision:"e323fb018bf9d63d5593a3f94dd2506f"},{url:"assets/js/vendors~layout-Blog~layout-Layout.60a5b978.js",revision:"667943e234586fa90b70902cb04fc8d4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.022dd1bd.js",revision:"4e78380c045460fc098c93f949d5619c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a6166c07.js",revision:"fbd3678b04a3945e66331259905922af"},{url:"assets/js/vendors~photo-swipe.f4909e5b.js",revision:"80171a5d68f075d7de786f23a34a8be7"},{url:"404.html",revision:"de7694d64fb7e15e6595cabb38e95380"},{url:"article/index.html",revision:"12b2c458b4c04d79cf48646b59b0425c"},{url:"category/index.html",revision:"ad2a51debc242bc0eacc15e6271c3cf3"},{url:"encrypt/index.html",revision:"d339139eb1ade71b70c7901b5d88d13f"},{url:"index.html",revision:"df7ae272acf3204ec0cb64bba169b5a9"},{url:"reflections/index.html",revision:"7ce05995094b251e8ff6ec519e7b62fb"},{url:"reflections/wk1/03-day/index.html",revision:"ea4db74a19e38e53ffaea4f7cfcacae2"},{url:"reflections/wk1/04-day/index.html",revision:"ee2fa6cb597a6c555b3e0cbddafe115f"},{url:"reflections/wk1/05-day/index.html",revision:"079531eaa4ece56058d7dcbb8d14f86c"},{url:"reflections/wk1/intro/index.html",revision:"34c5c9643e276b477ef171c024c64f94"},{url:"reflections/wk1/journal1/index.html",revision:"ffa6a5f61ceb3f8ba453fd76ff2e64cc"},{url:"reflections/wk1/journal2/index.html",revision:"b3cd644575b796daec0039fbc2e1c3d6"},{url:"reflections/wk1/quiz1/index.html",revision:"48972385ba4c8f248a92f0ec47841e78"},{url:"reflections/wk10/journal-day-45/index.html",revision:"cbd61576ee7c5c7b723111f7ffd8d697"},{url:"reflections/wk10/journal-day-46/index.html",revision:"cd9654bb25d0b25f011a9b643145e989"},{url:"reflections/wk10/journal-day-47/index.html",revision:"07adbded674f3318f7a465a1624788a4"},{url:"reflections/wk10/journal-day-48/index.html",revision:"288953bb4388f6e5c32be8ea5c7abf80"},{url:"reflections/wk10/quiz10/index.html",revision:"dc3f5fbd2146c5c3fe15bd2905a531c8"},{url:"reflections/wk11/journal-day-50/index.html",revision:"01e8471c8533df3bda79a414bc798f3f"},{url:"reflections/wk11/journal-day-51/index.html",revision:"fa8a9add3a06c673b71f93602bbc4238"},{url:"reflections/wk11/journal-day-52/index.html",revision:"fa08687e22cfbeb6eaa9b02984e2b4b0"},{url:"reflections/wk11/journal-day-53/index.html",revision:"3efa8791a844110914bfe5dee6d2fb4c"},{url:"reflections/wk11/placeholder/index.html",revision:"72562c9b67d0d238fe17ad08dafc72f9"},{url:"reflections/wk12/placeholder/index.html",revision:"3d1731f1cc67029228ac9da9031a0ec5"},{url:"reflections/wk2/06-day/index.html",revision:"0b1cee647556848b053506ac9d6766ba"},{url:"reflections/wk2/07-day/index.html",revision:"22efed3638a127a8252cbde1a057f827"},{url:"reflections/wk2/journal-day-08/index.html",revision:"aa9aa12c98b83234f6635f5b0641966d"},{url:"reflections/wk2/journal-day-09/index.html",revision:"e358c4ec25f3822d7be471c9d275d143"},{url:"reflections/wk2/journal-day-10/index.html",revision:"7d9570994dd2df0be7f3c7ca3f062534"},{url:"reflections/wk2/quiz2/index.html",revision:"dfec694169c04bd10a4911b4f2be7f97"},{url:"reflections/wk3/journal-day-11/index.html",revision:"c019501e532c53c122c3a7770acc0427"},{url:"reflections/wk3/journal-day-12/index.html",revision:"1f64de5ae2712b1d423f8ff04b2ed563"},{url:"reflections/wk3/journal-day-13/index.html",revision:"a55982d6f06f71de411f546ccfdb384b"},{url:"reflections/wk3/journal-day-14/index.html",revision:"b271e04b36dc102eee4589df801a5f6c"},{url:"reflections/wk3/journal-day-15/index.html",revision:"5e9ff5ff5f1f606fab34a49d62819953"},{url:"reflections/wk3/quiz3/index.html",revision:"cf2172d93689889b9ed684f1fa7828bf"},{url:"reflections/wk4/journal-day-16/index.html",revision:"1b6617e16816647f9e093670df97042d"},{url:"reflections/wk4/journal-day-17/index.html",revision:"8d6b9ff170b83edae0a9ea56a94a4013"},{url:"reflections/wk4/journal-day-18/index.html",revision:"a49807f5e60bdee7b3bdcba795825e0f"},{url:"reflections/wk4/journal-day-19/index.html",revision:"2fb871bff13826eddb8e129fa0a8c769"},{url:"reflections/wk4/quiz4/index.html",revision:"cf5c8e422c62496db9416ffcf537d58b"},{url:"reflections/wk5/journal-day-20/index.html",revision:"9cc3b193775e49f79ec40cc9f267b84b"},{url:"reflections/wk5/journal-day-21/index.html",revision:"a54ebe6c7d1c05e707532bfb091e76e1"},{url:"reflections/wk5/journal-day-22/index.html",revision:"e45bf929591a7cbc92f6d0820b67e0e7"},{url:"reflections/wk5/journal-day-23/index.html",revision:"3160c09d48f7080f157668d396d27b37"},{url:"reflections/wk5/quiz5/index.html",revision:"c9354436c77991f2381e091191a4a776"},{url:"reflections/wk6/journal-day-25/index.html",revision:"a4d5404657ca2d10503a4d7685143b76"},{url:"reflections/wk6/journal-day-26/index.html",revision:"a9f005df791bf7f3e2c6856c9c70874c"},{url:"reflections/wk6/journal-day-27/index.html",revision:"1b5137efbf2774c3429bb9bb72432a1e"},{url:"reflections/wk6/journal-day-28/index.html",revision:"dc1a4b3ee9b6fa975465115341b93a86"},{url:"reflections/wk6/quiz6/index.html",revision:"1da4cb8358862358e5cd8854362945e9"},{url:"reflections/wk7/journal-day-30/index.html",revision:"74af2b577d75be82f7afc65b7b54bc8b"},{url:"reflections/wk7/journal-day-31/index.html",revision:"df8f941d55abdbefbc91af9f48d12561"},{url:"reflections/wk7/journal-day-32/index.html",revision:"4e2c69f582e0bb20fe228ae82ebb3c4c"},{url:"reflections/wk7/journal-day-33/index.html",revision:"88f1f4eb9a6b5b2fe603505d1b6801bc"},{url:"reflections/wk7/quiz7/index.html",revision:"5b93a0b91cc0239225ebfc75040898b5"},{url:"reflections/wk8/journal-day-35/index.html",revision:"f5c699fcdc6873e5b88f2b629547bfe5"},{url:"reflections/wk8/journal-day-36/index.html",revision:"96e78bc1cd52e1fd6130b728753ab296"},{url:"reflections/wk8/quiz8/index.html",revision:"89d5009d43b9a56827d28dc8638480d8"},{url:"reflections/wk9/journal-day-40/index.html",revision:"1f4968c832b76f99d018f40c461ea110"},{url:"reflections/wk9/journal-day-41/index.html",revision:"28a42d0ddcadf981f48f2c9e3eb7aec3"},{url:"reflections/wk9/journal-day-42/index.html",revision:"d3a7c7c476e8dd4067737d6bd2c26273"},{url:"reflections/wk9/journal-day-43/index.html",revision:"9d4a0473d4069e66169dd537da1da892"},{url:"reflections/wk9/quiz9/index.html",revision:"159000cae3841b4d0466df5324b696dc"},{url:"slide/index.html",revision:"4ebdee3fe9796b9586851002f63735c6"},{url:"tag/index.html",revision:"f924c60fa79b968db7fd298c949f2051"},{url:"timeline/index.html",revision:"66900e2070ec16086341b1efd7ea7aa7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
