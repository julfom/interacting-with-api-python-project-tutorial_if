(self.webpackChunkjupyter_leaflet=self.webpackChunkjupyter_leaflet||[]).push([[340],{6408:function(){!function(e,o,n){"use strict";L.AwesomeMarkers={},L.AwesomeMarkers.version="2.0.1",L.AwesomeMarkers.Icon=L.Icon.extend({options:{iconSize:[35,45],iconAnchor:[17,42],popupAnchor:[1,-32],shadowAnchor:[10,12],shadowSize:[36,16],className:"awesome-marker",prefix:"glyphicon",spinClass:"fa-spin",extraClasses:"",icon:"home",markerColor:"blue",iconColor:"white"},initialize:function(e){e=L.Util.setOptions(this,e)},createIcon:function(){var e=o.createElement("div"),n=this.options;return n.icon&&(e.innerHTML=this._createInner()),n.bgPos&&(e.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(e,"icon-"+n.markerColor),e},_createInner:function(){var e,o="",n="",i="",s=this.options;return e=s.icon.slice(0,s.prefix.length+1)===s.prefix+"-"?s.icon:s.prefix+"-"+s.icon,s.spin&&"string"==typeof s.spinClass&&(o=s.spinClass),s.iconColor&&("white"===s.iconColor||"black"===s.iconColor?n="icon-"+s.iconColor:i="style='color: "+s.iconColor+"' "),"<i "+i+"class='"+s.extraClasses+" "+s.prefix+" "+e+" "+o+" "+n+"'></i>"},_setIconStyles:function(e,o){var n,i=this.options,s=L.point(i["shadow"===o?"shadowSize":"iconSize"]);!(n="shadow"===o?L.point(i.shadowAnchor||i.iconAnchor):L.point(i.iconAnchor))&&s&&(n=s.divideBy(2,!0)),e.className="awesome-marker-"+o+" "+i.className,n&&(e.style.marginLeft=-n.x+"px",e.style.marginTop=-n.y+"px"),s&&(e.style.width=s.x+"px",e.style.height=s.y+"px")},createShadow:function(){var e=o.createElement("div");return this._setIconStyles(e,"shadow"),e}}),L.AwesomeMarkers.icon=function(e){return new L.AwesomeMarkers.Icon(e)}}(0,document)}}]);