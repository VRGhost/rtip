google.maps.__gjsload__('kml', function(_){'use strict';var R8=function(a,b,c){if(2<arguments.length){var d=_.Va(arguments,2);return function(){return b.apply(a||this,0<arguments.length?d.concat(_.qk(arguments)):d)}}return function(){return b.apply(a||this,arguments)}},S8=function(a){this.j=a||[]},T8=function(a){this.j=a||[]},U8=function(a){this.j=a||[]},V8=function(a){this.j=a||[]},W8=function(a){this.H=a||[]},X8=function(a){this.j=a||[]},Y8=function(a){this.j=a||[]},Z8=function(a){this.j=a||[]},$8=function(a){this.j=a||[]},a9=function(a){this.j=
a||[]},b9=function(a){this.j=a||[]},c9=function(a){this.j=a||[]},d9=function(a){this.j=a||[]},e9=function(a){return(a=a.j[4])?new V8(a):Dea},f9=function(a){return(a=a.H[1])?new Y8(a):Eea},g9=function(a){return(a=a.H[2])?new Y8(a):Fea},h9=function(a){return(a=a.H[3])?new $8(a):Gea},i9=function(a){a=a.j[0];return null!=a?a:0},j9=function(a){a=a.j[1];return null!=a?a:0},k9=function(a){return(a=a.j[0])?new X8(a):Hea},l9=function(a){return(a=a.j[1])?new X8(a):Iea},m9=function(a){a=a.j[0];return null!=
a?a:0},n9=function(a){return(a=a.j[1])?new X8(a):Jea},o9=function(a){return(a=a.j[0])?new Z8(a):Kea},p9=function(a){return(a=a.j[1])?new Z8(a):Lea},q9=_.na("j"),r9=function(a){this.H=0;this.j=[];this.S=a},s9=function(){_.If.call(this)},t9=function(a){if(a.j){var b;b=a.j.getCenter();var c=a.get("projection"),d=a.get("bounds"),e=a.get("zoom");b=c&&d&&_.E(e)?_.Ak(c,d,e,_.Xg,b):void 0;c=a.j;b=_.Ff(Math.max(c.Aa,b.Aa),Math.max(c.ya,b.ya),Math.min(c.Ca,b.Ca),Math.min(c.Ea,b.Ea));_.fj(b,a.H)||(a.set("croppedBounds",
b),a.H=b)}},Mea=function(a,b){return{j:function(b,d){if(d)return null;var e=null,f=b.latLng;a.forEach(function(a){if(!e){var b=a.get("bounds");b&&b.contains(f)&&0!=a.get("clickable")&&(e=a)}});return e},handleEvent:function(a,d,e){"mouseover"==a?b.set("cursor","pointer"):"mouseout"==a&&b.set("cursor",null);_.I.trigger(e,a,new _.Hk(d.latLng,d.Ob))},zIndex:10}},u9=function(a,b){_.If.call(this);this.H=a;this.j=b},Nea=function(a){a.j.forEach(function(a){a.ao=!0})},v9=function(a,b){var c=a.get("projection"),
d=a.get("zoom");return _.hk(c,new _.N(0,b),d).lat()},w9=function(a,b,c){_.If.call(this);this.T=a;this.S=b;this.j=c;this.H=null;this.U={scale:!0};_.I.addListener(c,"insert",(0,_.u)(this.Em,this));_.I.addListener(c,"remove",(0,_.u)(this.Sj,this))},x9=function(a){a=a.get("opacity");return _.Pa(a,1)},y9=function(a,b,c,d){this.j=_.u(_.Ul,null,a,b,d+"/maps/api/js/KmlOverlayService.GetFeature",c)},z9=function(a,b){return 0==j9(a)?i9(a)*b:2==j9(a)?b-i9(a):i9(a)},A9=function(a,b,c){return 2==m9(a)?(a=0==j9(n9(a))?
i9(n9(a))*b:i9(n9(a)),a/c):1},B9=function(a,b,c,d){return 0==m9(a)?b:2==m9(a)?z9(n9(a),c):b*d},C9=function(a,b){this.H=b;this.j=this.S=null;_.I.bind(this.H,"insert",this,this.ki);_.I.bind(this.H,"remove",this,this.li)},D9=function(a,b){this.j=b;this.H=_.I.bind(a,"click",this,this.S)},Oea=function(a){var b=a.get("map");0!=a.get("screenOverlays")?E9(a,b):F9(a,b)},G9=function(a){return a.get("url")?a.get("url"):a.get("driveFileId")?"docs://"+a.get("driveFileId"):null},Rea=function(a,b,c){b.__gm.ka||
(b.__gm.ka={},_.Ia({"false":_.Gx,"true":_.hy},function(a,c){var d=R8(null,_.Ul,window.document,_.Zh,c+"/maps/api/js/KmlOverlayService.GetOverlays",_.pg);b.__gm.ka[a]=new r9(new q9(d))}));if(a.ka=c){a.W=!0;var d=R8(null,Pea,R8(null,Qea,a,b,c));b.__gm.ka[0==c.lastIndexOf("https://",0)].load(c,a.get("token")||null,d);_.Y(b,"Lk");_.tm("Lk","-p",a,!(!b||!b.j));a.screenOverlays_changed=R8(null,Oea,a)}},Qea=function(a,b,c,d,e,f,g,h,l,n){if(a.get("map")==b&&c==a.ka&&a.W){a.W=!1;var p=G9(a);if(p&&p==c&&(a.set("status",
g),g==_.ha)){H9(b);a.j=h;a.H=l;e&&a.set("defaultViewport",e);a.set("metadata",f);a.ta=n;c=0==c.lastIndexOf("https://",0);e=new y9(window.document,_.Zh,_.pg,c?_.hy:_.Gx);f=_.RB(e);g=new _.Ev;g.Sa=d;g.Me=c;g.zIndex=a.get("zIndex")||0;for(var q in n)g.j[q]=n[q];g.U=R8(f,f.load);g.Sb=0!=a.get("clickable");a.T=g;_.X0.Dg(g,b);a.U||(a.U=_.I.addListener(g,"click",R8(a,Sea,a,b)));0!=a.get("screenOverlays")&&E9(a,b);for(d=0;d<a.H.length;++d)n=a.H[d],n.j.set("map",b),n.j.bindTo("clickable",a),Tea(e,n,a,b);d=
a.get("preserveViewport");e=a.get("defaultViewport");!d&&e&&b.fitBounds(e);b=new _.se;b=new D9(a,b);b.bindTo("map",a);b.bindTo("suppressInfoWindows",a);a.S=b;_.I.addListener(a,"clickable_changed",function(){a.T.Sb=0!=a.get("clickable")})}}},Tea=function(a,b,c,d){var e=new _.a0(c.T.Sa,b.Sa);c=R8(c,I9,c,d,b.j.get("bounds").getCenter(),null);a=R8(a,a.load,e,c);b.listener=_.I.addListener(b.j,"click",a)},I9=function(a,b,c,d,e){var f={};f.latLng=c;f.pixelOffset=d;if(!e.infoWindowHtml){a:if(c=_.X("div",
null,null,null,null,{style:"font-family: Roboto,Arial,sans-serif; font-size: small"}),e.info_window_html)_.UC(c,e.info_window_html);else if(e.name||e.description)e.name&&(d=_.X("div",c,null,null,null,{style:"font-weight: 500; font-size: medium; margin-bottom: 0em"}),_.ll(e.name,d)),e.description&&(d=_.X("div",c),_.UC(d,e.description));else{c=null;break a}d="";c&&(d=window.document.createElement("div"),d.appendChild(c),d=d.innerHTML);e.infoWindowHtml=d}f.featureData=e;_.I.trigger(a,"click",f);_.tm("Lk",
"-i",e,!(!b||!b.j))},Sea=function(a,b,c,d,e,f){I9(a,b,d,e,f)},Pea=function(a,b){if(b&&a&&0==b.getStatus()){for(var c=[],d=[],e={},f=0;f<_.ed(b.j,5);++f){var g;g=f;g=new U8(_.Q(b.j,5)[g]);if(null!=g.j[5])g=g.j[5],d.push({j:g?new W8(g):Uea});else if(null!=g.j[4]){var h=e9(g).j[1],h=J9(h?new _.le(h):Vea),l=e9(g).j[0],h=new _.Ae((l?new T8(l):Wea).getUrl(),h);c.push({j:h,Sa:g.getId()})}}g=b.j[1];g=null!=g?g:"";h=J9(b.getDefaultViewport());f=b.j[3];if(f=f?new a9(f):Xea){var n;n=(l=f.j[3])?new d9(l):Yea;
var l={},p=n.j[0];l.name=null!=p?p:"";p=n.j[2];l.email=null!=p?p:"";n=n.j[1];l.uri=null!=n?n:"";n={};p=f.j[0];n.name=null!=p?p:"";p=f.j[1];n.description=null!=p?p:"";f=f.j[2];n.snippet=null!=f?f:"";n.author=l;l=n}else l=null;l.hasScreenOverlays=!!d.length;var f=b.j[6],f=null!=f?f:0,q;a:{for(q in _.$h)if(f==Zea[q]){q=_.$h[q];break a}q="UNKNOWN"}for(f=0;f<_.ed(b.j,9);++f)n=f,n=new _.F0(_.Q(b.j,9)[n]),e[_.K0(n)]=_.L0(n);for(f=0;f<_.ed(b.j,7);++f)n=f,n=new _.F0(_.Q(b.j,7)[n]),e[_.K0(n)]=_.L0(n);a(g,h,
l,q,d,c,e)}},H9=function(a){a.__gm.ua||(a.__gm.ua=new _.yc,(new C9(0,a.__gm.ua)).bindTo("innerContainer",a.__gm));return a.__gm.ua},F9=function(a,b){if(a.j)for(var c=H9(b),d=0;d<a.j.length;++d)c.remove(a.j[d])},E9=function(a,b){if(a.j)for(var c=H9(b),d=a.j.length-1;0<=d;--d)_.zc(c,a.j[d])},J9=function(a){var b=new _.L(_.sj(_.mj(a)),_.qj(_.mj(a)));a=new _.L(_.sj(_.oj(a)),_.qj(_.oj(a)));return new _.yd(a,b)},K9=_.k();var Zea={UNKNOWN:0,OK:1,INVALID_REQUEST:2,DOCUMENT_NOT_FOUND:3,FETCH_ERROR:4,INVALID_DOCUMENT:5,DOCUMENT_TOO_LARGE:6,LIMITS_EXCEEDED:7,INTERNAL_ERROR:8,TIMED_OUT:9,jr:10};var L9,M9;S8.prototype.V=_.m("j");S8.prototype.getUrl=function(){var a=this.j[0];return null!=a?a:""};S8.prototype.setUrl=function(a){this.j[0]=a};T8.prototype.V=_.m("j");T8.prototype.getUrl=function(){var a=this.j[0];return null!=a?a:""};T8.prototype.setUrl=function(a){this.j[0]=a};U8.prototype.V=_.m("j");U8.prototype.getId=function(){var a=this.j[0];return null!=a?a:""};var Dea=new V8,Uea=new W8;V8.prototype.V=_.m("j");var Wea=new T8,Vea=new _.le;W8.prototype.V=_.m("H");
var $ea=new T8,Eea=new Y8,Fea=new Y8,Gea=new $8;X8.prototype.V=_.m("j");Y8.prototype.V=_.m("j");var Hea=new X8,Iea=new X8;Z8.prototype.V=_.m("j");var Jea=new X8;$8.prototype.V=_.m("j");var Kea=new Z8,Lea=new Z8;a9.prototype.V=_.m("j");var Yea=new d9;b9.prototype.V=_.m("j");b9.prototype.getStatus=function(){var a=this.j[0];return null!=a?a:-1};var Xea=new a9,afa=new _.le;b9.prototype.getDefaultViewport=function(){var a=this.j[4];return a?new _.le(a):afa};c9.prototype.V=_.m("j");d9.prototype.V=_.m("j");q9.prototype.load=function(a,b,c){var d=new S8;d.setUrl(a);b&&(d.j[1]=b);L9||(a=[],L9={ma:-1,qa:a},a[1]={type:"s",label:1,R:""},a[2]={type:"s",label:1,R:""},a[3]={type:"i",label:1,R:0});d=_.dh.j(d.j,L9);a=(0,_.u)(this.S,this,c);c=(0,_.u)(this.H,this,c);this.j(d,a,c)};q9.prototype.H=function(a){a(null)};q9.prototype.S=function(a,b){a(new b9(b))};r9.prototype.load=function(a,b,c){this.H++;c=_.$a((0,_.u)(this.T,this,c));this.S.load(a,b,c)};r9.prototype.T=function(a,b){this.j.push((0,_.u)(a,null,b));this.H--;if(0==this.H){for(var c=0;c<this.j.length;++c)this.j[c]();this.j=[]}};_.v(s9,_.If);s9.prototype.projection_changed=function(){t9(this)};s9.prototype.bounds_changed=function(){t9(this)};s9.prototype.projectionBounds_changed=function(){this.Ba()};
s9.prototype.La=function(){var a=this.get("projectionBounds"),b=this.get("zoom"),c=this.get("projection");a&&c&&_.E(b)&&(a=_.Ff(a.Aa,a.ya,a.Ca,a.Ea),b=_.Jj(c,b),c=(a.Aa+a.Ca)/2,b=c-_.Ma(c,0,Math.sqrt(b.x*b.x+b.y*b.y)),a.Ca-=b,a.Aa-=b,this.j&&_.dj(this.j,a)||(b=a.getCenter(),a=_.wB(a),this.j=new _.Ef([new _.N(b.x-a.width,b.y-a.height),new _.N(b.x+a.width,b.y+a.height)])),t9(this))};_.v(u9,_.If);u9.prototype.changed=function(a){"bounds"!=a&&"zoom"!=a&&"projection"!=a||this.Ba()};
u9.prototype.La=function(){var a=this.get("projection"),b=this.get("bounds"),c=this.get("zoom");Nea(this);if(a&&b&&_.E(c)&&!b.isEmpty())for(var d=Math.round(b.ya),b=Math.round(b.Ea),e=this.get("projection"),f=this.get("zoom"),g=this.H,a=(new _.L(g.H.j,g.j.j,!0)).lng(),c=_.CB(g).lng(),e=_.gk(e,g,f),e=Math.round(_.wB(e).width),g=g.getNorthEast().lat()-g.getSouthWest().lat(),h=v9(this,d),l=d;d<=b;++d){var f=v9(this,d),n=l,p=d,q=h,t=f,z=(q+t)/2,y=v9(this,(n+p)/2),w=Math.abs(d-l);if(1<=Math.abs((n-p)/
(t-q)*(y-z))&&10<w||d==b)n=new _.L(f,c),h=new _.L(h,a),l=new _.O(e,d-l),h=new _.yd(n,h),n=g,p=h.getNorthEast().lat(),q=h.getSouthWest().lat(),q=l.height/(p-q),p=(this.H.getNorthEast().lat()-p)*q,n=Math.abs(n*q),p=new _.N(0,p),h=h.getNorthEast(),_.zc(this.j,{U:p,position:h,T:l,scaledSize:new _.O(l.width,n)}),l=d,h=f}_.$a((0,_.u)(this.S,this))()};u9.prototype.S=function(){this.j.forEach(function(a){a.ao&&this.remove(a)})};_.v(w9,_.If);_.r=w9.prototype;_.r.changed=function(){this.Ba()};_.r.opacity_changed=function(){var a=x9(this);this.j.forEach(function(b){_.Al(b.node,a,!0)})};_.r.La=function(){if(_.DB(this.j)){var a=this.get("projection"),b=this.get("zoom"),c=this.get("center"),d=this.get("offset"),e=this.get("latLngBounds"),f=x9(this);_.E(b)&&e&&a&&d&&c&&(e=_.Ak(a,e,b,d,c))&&!_.fj(e,this.H)&&(this.H=e,this.j.forEach((0,_.u)(this.Sj,this)),this.j.forEach((0,_.u)(this.Si,this,a,b,c,d,f)))}};
_.r.Em=function(a){var b=this.get("projection"),c=this.get("zoom"),d=this.get("center"),e=this.get("offset"),f=x9(this);b&&_.E(c)&&e&&d&&this.Si(b,c,d,e,f,a)};_.r.Si=function(a,b,c,d,e,f){f.j=_.fk(a,f.position,b,c,d.width,d.height,null);f.node=_.DC(this.T,this.S,f.U,f.T,f.j,f.scaledSize,this.U);_.Al(f.node,e,!0);_.tl(f.node,10)};_.r.Sj=function(a){a.node&&(_.ig(a.node),a.node=null)};y9.prototype.load=function(a,b){var c=new c9;c.j[0]=a.Sa;c.j[1]=a.H+"";if(a.j)for(var d in a.j){var e;e=[];_.Q(c.j,2).push(e);e=new _.F0(e);e.j[0]=d;e.j[1]=a.j[d]}M9||(d=[],M9={ma:-1,qa:d},d[1]={type:"s",label:1,R:""},d[2]={type:"s",label:1,R:""},d[3]={type:"m",label:3,$:_.J0()});c=_.dh.j(c.j,M9);this.j(c,b,b);return c};y9.prototype.cancel=function(){throw Error("Not implemented");};_.v(C9,_.J);_.r=C9.prototype;_.r.innerContainer_changed=function(){var a=this.j;this.j=this.get("innerContainer");this.S&&(_.I.removeListener(this.S),delete this.S);a&&this.H.forEach((0,_.u)(this.li,this));this.j&&(this.S=_.I.bind(this.j,"resize",this,this.$p),this.H.forEach((0,_.u)(this.ki,this)))};_.r.$p=function(){var a=this;_.$a(function(){a.H.forEach((0,_.u)(a.xi,a))})()};
_.r.ki=function(a){if(this.j){var b=_.Kf(this.j),b=_.X("div",this.j,new _.N(b.width,b.height));_.ol(b);_.tl(b,2);a.Ia=b;b=_.X("div",a.Ia,new _.N(0,0),null,!0);_.ol(b);a.H=b;var b={scale:!0,Rc:(0,_.u)(this.Pl,this,a)},c=a.j.H[0];a.hb=_.oC((c?new T8(c):$ea).getUrl(),a.Ia,null,null,b)}};_.r.li=function(a){a.Ia&&_.xk(a.Ia);a.H&&_.xk(a.H);a.hb&&_.xk(a.hb);a.Ia=null;a.hb=null;a.H=null};_.r.Pl=function(a,b,c){a.Ia&&c&&(a.hb=c,_.ol(c),this.xi(a))};
_.r.xi=function(a){var b=_.Kf(this.j),c;c=_.Kf(a.hb);c=new _.O(B9(o9(h9(a.j)),c.width,b.width,A9(p9(h9(a.j)),b.height,c.height)),B9(p9(h9(a.j)),c.height,b.height,A9(o9(h9(a.j)),b.width,c.width)));var d=z9(k9(g9(a.j)),b.width),e=z9(l9(g9(a.j)),b.height),e=b.height-e-c.height;_.kl(a.Ia,new _.N(d-z9(k9(f9(a.j)),c.width),e+z9(l9(f9(a.j)),c.height)));_.Jf(a.Ia,c);_.Jf(a.hb,c);_.Jf(a.H,c)};_.v(D9,_.J);D9.prototype.remove=function(){this.j.close();_.I.removeListener(this.H);delete this.H};D9.prototype.changed=function(){this.j.close()};D9.prototype.suppressInfoWindows_changed=function(){this.get("suppressInfoWindows")&&this.j.close()};D9.prototype.S=function(a){if(a){var b=this.get("map");if(b&&!this.get("suppressInfoWindows")){var c=a.featureData;if(c=c&&c.infoWindowHtml||a.infoWindowHtml)this.j.setOptions({pixelOffset:a.pixelOffset,position:a.latLng,content:c}),this.j.open(b)}}};K9.prototype.H=function(a){var b=a.ra,c=a.ra=a.get("map"),d=G9(a);if(b){a.W=!1;a.T&&_.X0.zh(a.T,b);a.U&&(_.I.removeListener(a.U),delete a.U);F9(a,b);delete a.screenOverlays_changed;if(a.H)for(b=0;b<a.H.length;++b){var e=a.H[b];e.j.set("map",null);_.I.removeListener(e.listener);delete e.listener}a.S&&(a.S.remove(),a.S.unbindAll(),delete a.S);_.um("Lk","-p",a)}c&&Rea(a,c,d)};
K9.prototype.j=function(a){var b=a.get("map"),c=b&&b.__gm;a.T&&a.T.W.remove(a);(a.T=c)&&_.zc(c.W,a);if(c&&!c.Na){var d=Mea(c.W,c);c.Na=d;c.H.uc(d)}a.H&&(a.H.set("bounds",null),a.S.unbindAll(),a.H.unbindAll(),a.U.unbindAll(),delete a.S,delete a.H,delete a.U,_.um("Og","-p",a));if(b){var d=a.get("bounds"),e=a.get("url"),f=c.get("panes").overlayLayer,g=new _.yc;a.W=g;var h=new s9;h.bindTo("projectionBounds",c);h.bindTo("projectionTopLeft",c);h.bindTo("projection",b);h.bindTo("zoom",b);h.set("bounds",
d);a.S=h;var l=new u9(d,g);l.bindTo("zoom",b);l.bindTo("projection",b);l.bindTo("bounds",h,"croppedBounds");a.H=l;e=new w9(e,f,g);e.bindTo("offset",c);e.bindTo("zoom",b);e.bindTo("center",c,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("clickable",a);e.bindTo("opacity",a);e.set("latLngBounds",d);a.U=e;_.I.forward(e,"click",a);_.Y(b,"Og");_.tm("Og","-p",a,!(!b||!b.j));_.I.addListener(a,"click",function(){_.tm("Og","-i",a,!(!b||!b.j))})}};_.nc("kml",new K9);});