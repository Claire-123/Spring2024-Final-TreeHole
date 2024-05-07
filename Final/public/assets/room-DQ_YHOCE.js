(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="164",js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},w_=0,th=1,R_=2,Of=1,C_=2,ki=3,Xi=0,Sn=1,Si=2,ms=0,vr=1,nh=2,ih=3,sh=4,L_=5,Ds=100,I_=101,P_=102,D_=103,O_=104,U_=200,F_=201,V_=202,B_=203,zl=204,kl=205,z_=206,k_=207,H_=208,G_=209,W_=210,X_=211,q_=212,Y_=213,j_=214,K_=0,$_=1,Z_=2,Fa=3,J_=4,Q_=5,ex=6,tx=7,oc=0,nx=1,ix=2,$n=0,Uf=1,Ff=2,Vf=3,Bf=4,sx=5,zf=6,rx=7,rh="attached",ox="detached",kf=300,Cr=301,Lr=302,Hl=303,Gl=304,ac=306,Ir=1e3,us=1001,Va=1002,$t=1003,Hf=1004,vo=1005,Fn=1006,Na=1007,Ai=1008,gs=1009,ax=1010,cx=1011,Gf=1012,Wf=1013,Pr=1014,oi=1015,Fo=1016,Xf=1017,qf=1018,Vo=1020,lx=35902,ux=1021,hx=1022,ai=1023,dx=1024,fx=1025,Mr=1026,wo=1027,Yf=1028,jf=1029,px=1030,Kf=1031,$f=1033,Uc=33776,Fc=33777,Vc=33778,Bc=33779,oh=35840,ah=35841,ch=35842,lh=35843,uh=36196,hh=37492,dh=37496,fh=37808,ph=37809,mh=37810,gh=37811,_h=37812,xh=37813,yh=37814,vh=37815,Mh=37816,Th=37817,Sh=37818,Eh=37819,Ah=37820,bh=37821,zc=36492,Nh=36494,wh=36495,mx=36283,Rh=36284,Ch=36285,Lh=36286,Ro=2300,Dr=2301,kc=2302,Ih=2400,Ph=2401,Dh=2402,gx=2500,_x=0,Zf=1,Wl=2,xx=3200,yx=3201,Bs=0,Jf=1,ls="",gn="srgb",qt="srgb-linear",xu="display-p3",cc="display-p3-linear",Ba="linear",wt="srgb",za="rec709",ka="p3",$s=7680,Oh=519,vx=512,Qf=513,Mx=514,ep=515,Tx=516,Sx=517,Ex=518,Ax=519,Ha=35044,Xl=35048,Uh="300 es",ci=2e3,Or=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const So=Math.PI/180,Ur=180/Math.PI;function li(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function on(s,e,t){return Math.max(e,Math.min(t,s))}function yu(s,e){return(s%e+e)%e}function bx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Nx(s,e,t){return s!==e?(t-s)/(e-s):0}function Eo(s,e,t){return(1-t)*s+t*e}function wx(s,e,t,n){return Eo(s,e,1-Math.exp(-t*n))}function Rx(s,e=1){return e-Math.abs(yu(s,e*2)-e)}function Cx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Lx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ix(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Px(s,e){return s+Math.random()*(e-s)}function Dx(s){return s*(.5-Math.random())}function Ox(s){s!==void 0&&(Fh=s);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ux(s){return s*So}function Fx(s){return s*Ur}function Vx(s){return(s&s-1)===0&&s!==0}function Bx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function kx(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const lc={DEG2RAD:So,RAD2DEG:Ur,generateUUID:li,clamp:on,euclideanModulo:yu,mapLinear:bx,inverseLerp:Nx,lerp:Eo,damp:wx,pingpong:Rx,smoothstep:Cx,smootherstep:Lx,randInt:Ix,randFloat:Px,randFloatSpread:Dx,seededRandom:Ox,degToRad:Ux,radToDeg:Fx,isPowerOfTwo:Vx,ceilPowerOfTwo:Bx,floorPowerOfTwo:zx,setQuaternionFromProperEuler:kx,normalize:gt,denormalize:ri};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],y=i[4],A=i[7],I=i[2],w=i[5],b=i[8];return r[0]=o*_+a*T+c*I,r[3]=o*m+a*y+c*w,r[6]=o*p+a*A+c*b,r[1]=l*_+u*T+h*I,r[4]=l*m+u*y+h*w,r[7]=l*p+u*A+h*b,r[2]=d*_+f*T+g*I,r[5]=d*m+f*y+g*w,r[8]=d*p+f*A+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new qe;function tp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hx(){const s=Co("canvas");return s.style.display="block",s}const Vh={};function np(s){s in Vh||(Vh[s]=!0,console.warn(s))}const Bh=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[qt]:{transfer:Ba,primaries:za,toReference:s=>s,fromReference:s=>s},[gn]:{transfer:wt,primaries:za,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[cc]:{transfer:Ba,primaries:ka,toReference:s=>s.applyMatrix3(zh),fromReference:s=>s.applyMatrix3(Bh)},[xu]:{transfer:wt,primaries:ka,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zh),fromReference:s=>s.applyMatrix3(Bh).convertLinearToSRGB()}},Gx=new Set([qt,cc]),dt={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Gx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ko[e].toReference,i=Ko[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ko[s].primaries},getTransfer:function(s){return s===ls?Ba:Ko[s].transfer}};function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class Wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=Co("canvas")),Zs.width=e.width,Zs.height=e.height;const n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Tr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xx=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wc(i[o].image)):r.push(Wc(i[o]))}else r=Wc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class Zt extends ji{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=us,i=us,r=Fn,o=Ai,a=ai,c=gs,l=Zt.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=li(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=kf;Zt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,A=(f+1)/2,I=(p+1)/2,w=(u+d)/4,b=(h+_)/4,B=(g+m)/4;return y>A&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=b/n):A>I?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=w/i,r=B/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=b/r,i=B/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _s extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ip(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends _s{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vu extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yx extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),w=Math.atan2(I,p*T);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}const A=a*T;if(c=c*m+d*A,l=l*m+f*A,u=u*m+g*A,h=h*m+_*A,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new L,kh=new Ni;class Ki{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Zo.subVectors(this.max,ao),Js.subVectors(e.a,ao),Qs.subVectors(e.b,ao),er.subVectors(e.c,ao),es.subVectors(Qs,Js),ts.subVectors(er,Qs),Ts.subVectors(Js,er);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ts.z,Ts.y,es.z,0,-es.x,ts.z,0,-ts.x,Ts.z,0,-Ts.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ts.y,Ts.x,0];return!qc(t,Js,Qs,er,Zo)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Js,Qs,er,Zo))?!1:(Jo.crossVectors(es,ts),t=[Jo.x,Jo.y,Jo.z],qc(t,Js,Qs,er,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new L,new L,new L,new L,new L,new L,new L,new L],ei=new L,$o=new Ki,Js=new L,Qs=new L,er=new L,es=new L,ts=new L,Ts=new L,ao=new L,Zo=new L,Jo=new L,Ss=new L;function qc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ss.fromArray(s,r);const a=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),c=e.dot(Ss),l=t.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const jx=new Ki,co=new L,Yc=new L;class Ci{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(co,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Yc)),this.expandByPoint(co.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new L,jc=new L,Qo=new L,ns=new L,Kc=new L,ea=new L,$c=new L;class Wr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){jc.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(jc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Qo),a=ns.dot(this.direction),c=-ns.dot(Qo),l=ns.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jc).addScaledVector(Qo,d),f}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,r){Kc.subVectors(t,e),ea.subVectors(n,e),$c.crossVectors(Kc,ea);let o=this.direction.dot($c),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const c=a*this.direction.dot(ea.crossVectors(ns,ea));if(c<0)return null;const l=a*this.direction.dot(Kc.cross(ns));if(l<0||c+l>o)return null;const u=-a*ns.dot($c);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kx,e,$x)}lookAt(e,t,n){const i=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),is.crossVectors(n,Dn),is.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),is.crossVectors(n,Dn)),is.normalize(),ta.crossVectors(Dn,is),i[0]=is.x,i[4]=ta.x,i[8]=Dn.x,i[1]=is.y,i[5]=ta.y,i[9]=Dn.y,i[2]=is.z,i[6]=ta.z,i[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],y=n[7],A=n[11],I=n[15],w=i[0],b=i[4],B=i[8],E=i[12],v=i[1],H=i[5],J=i[9],D=i[13],ne=i[2],te=i[6],ae=i[10],ce=i[14],j=i[3],ue=i[7],le=i[11],we=i[15];return r[0]=o*w+a*v+c*ne+l*j,r[4]=o*b+a*H+c*te+l*ue,r[8]=o*B+a*J+c*ae+l*le,r[12]=o*E+a*D+c*ce+l*we,r[1]=u*w+h*v+d*ne+f*j,r[5]=u*b+h*H+d*te+f*ue,r[9]=u*B+h*J+d*ae+f*le,r[13]=u*E+h*D+d*ce+f*we,r[2]=g*w+_*v+m*ne+p*j,r[6]=g*b+_*H+m*te+p*ue,r[10]=g*B+_*J+m*ae+p*le,r[14]=g*E+_*D+m*ce+p*we,r[3]=T*w+y*v+A*ne+I*j,r[7]=T*b+y*H+A*te+I*ue,r[11]=T*B+y*J+A*ae+I*le,r[15]=T*E+y*D+A*ce+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,A=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,I=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,w=t*T+n*y+i*A+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*b,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*b,e[4]=y*b,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*b,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*b,e[8]=A*b,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=I*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,T=c*l,y=c*u,A=c*h,I=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+A)*I,i[2]=(g-y)*I,i[3]=0,i[4]=(f-A)*w,i[5]=(1-(d+p))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+y)*b,i[9]=(m-T)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=tr.set(i[0],i[1],i[2]).length();const o=tr.set(i[4],i[5],i[6]).length(),a=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const l=1/r,u=1/o,h=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ci){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Or)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ci){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let g,_;if(a===ci)g=(o+r)*h,_=-2*h;else if(a===Or)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new L,ti=new Be,Kx=new L(0,0,0),$x=new L(1,1,1),is=new L,ta=new L,Dn=new L,Hh=new Be,Gh=new Ni;class Zn{constructor(e=0,t=0,n=0,i=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const Wh=new L,nr=new Ni,Fi=new Be,na=new L,lo=new L,Jx=new L,Qx=new Ni,Xh=new L(1,0,0),qh=new L(0,1,0),Yh=new L(0,0,1),jh={type:"added"},e0={type:"removed"},ir={type:"childadded",child:null},Zc={type:"childremoved",child:null};class It extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new L,t=new Zn,n=new Ni,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new qe}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(lo,na,this.up):Fi.lookAt(na,lo,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(Fi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e0),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new L(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new L,Vi=new L,Jc=new L,Bi=new L,sr=new L,rr=new L,Kh=new L,Qc=new L,el=new L,tl=new L;class Ei{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ni.subVectors(i,t),Vi.subVectors(n,t),Jc.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Vi),c=ni.dot(Jc),l=Vi.dot(Vi),u=Vi.dot(Jc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Vi.subVectors(e,t),ni.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ni.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;sr.subVectors(i,n),rr.subVectors(r,n),Qc.subVectors(e,n);const c=sr.dot(Qc),l=rr.dot(Qc);if(c<=0&&l<=0)return t.copy(n);el.subVectors(e,i);const u=sr.dot(el),h=rr.dot(el);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(sr,o);tl.subVectors(e,r);const f=sr.dot(tl),g=rr.dot(tl);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(rr,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Kh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Kh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},ia={h:0,s:0,l:0};function nl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=yu(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nl(o,r,e+1/3),this.g=nl(o,r,e),this.b=nl(o,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return dt.fromWorkingColorSpace(mn.copy(this),e),Math.round(on(mn.r*255,0,255))*65536+Math.round(on(mn.g*255,0,255))*256+Math.round(on(mn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,r=mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=gn){dt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(ia);const n=Eo(ss.h,ia.h,t),i=Eo(ss.s,ia.s,t),r=Eo(ss.l,ia.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Ne;Ne.NAMES=sp;let t0=0;class xn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=vr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=kl,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hs extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new L,sa=new Te;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return np("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class rp extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class op extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ui extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let n0=0;const qn=new Be,il=new It,or=new L,On=new Ki,uo=new Ki,tn=new L;class _i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?op:rp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(On.min,uo.min),On.expandByPoint(tn),tn.addVectors(On.max,uo.max),On.expandByPoint(tn)):(On.expandByPoint(uo.min),On.expandByPoint(uo.max))}On.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(e,l),tn.add(or)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new L,c[B]=new L;const l=new L,u=new L,h=new L,d=new Te,f=new Te,g=new Te,_=new L,m=new L;function p(B,E,v){l.fromBufferAttribute(n,B),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const H=1/(f.x*g.y-g.x*f.y);isFinite(H)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(H),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(H),a[B].add(_),a[E].add(_),a[v].add(_),c[B].add(m),c[E].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,E=T.length;B<E;++B){const v=T[B],H=v.start,J=v.count;for(let D=H,ne=H+J;D<ne;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new L,A=new L,I=new L,w=new L;function b(B){I.fromBufferAttribute(i,B),w.copy(I);const E=a[B];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),A.crossVectors(w,E);const H=A.dot(c[B])<0?-1:1;o.setXYZW(B,y.x,y.y,y.z,H)}for(let B=0,E=T.length;B<E;++B){const v=T[B],H=v.start,J=v.count;for(let D=H,ne=H+J;D<ne;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new En(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new Be,Es=new Wr,ra=new Ci,Zh=new L,ar=new L,cr=new L,lr=new L,sl=new L,oa=new L,aa=new Te,ca=new Te,la=new Te,Jh=new L,Qh=new L,ed=new L,ua=new L,ha=new L;class Rn extends It{constructor(e=new _i,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(sl.fromBufferAttribute(h,e),o?oa.addScaledVector(sl,u):oa.addScaledVector(sl.sub(t),u))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(ra.containsPoint(Es.origin)===!1&&(Es.intersectSphere(ra,Zh)===null||Es.origin.distanceToSquared(Zh)>(e.far-e.near)**2))&&($h.copy(r).invert(),Es.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let A=T,I=y;A<I;A+=3){const w=a.getX(A),b=a.getX(A+1),B=a.getX(A+2);i=da(this,p,e,n,l,u,h,w,b,B),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);i=da(this,o,e,n,l,u,h,T,y,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let A=T,I=y;A<I;A+=3){const w=A,b=A+1,B=A+2;i=da(this,p,e,n,l,u,h,w,b,B),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,y=m+1,A=m+2;i=da(this,o,e,n,l,u,h,T,y,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function i0(s,e,t,n,i,r,o,a){let c;if(e.side===Sn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Xi,a),c===null)return null;ha.copy(a),ha.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ha);return l<t.near||l>t.far?null:{distance:l,point:ha.clone(),object:s}}function da(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ar),s.getVertexPosition(c,cr),s.getVertexPosition(l,lr);const u=i0(s,e,t,n,ar,cr,lr,ua);if(u){i&&(aa.fromBufferAttribute(i,a),ca.fromBufferAttribute(i,c),la.fromBufferAttribute(i,l),u.uv=Ei.getInterpolation(ua,ar,cr,lr,aa,ca,la,new Te)),r&&(aa.fromBufferAttribute(r,a),ca.fromBufferAttribute(r,c),la.fromBufferAttribute(r,l),u.uv1=Ei.getInterpolation(ua,ar,cr,lr,aa,ca,la,new Te)),o&&(Jh.fromBufferAttribute(o,a),Qh.fromBufferAttribute(o,c),ed.fromBufferAttribute(o,l),u.normal=Ei.getInterpolation(ua,ar,cr,lr,Jh,Qh,ed,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};Ei.getNormal(ar,cr,lr,h.normal),u.face=h}return u}class Bo extends _i{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ui(l,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(h,2));function g(_,m,p,T,y,A,I,w,b,B,E){const v=A/b,H=I/B,J=A/2,D=I/2,ne=w/2,te=b+1,ae=B+1;let ce=0,j=0;const ue=new L;for(let le=0;le<ae;le++){const we=le*H-D;for(let tt=0;tt<te;tt++){const mt=tt*v-J;ue[_]=mt*T,ue[m]=we*y,ue[p]=ne,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(tt/b),h.push(1-le/B),ce+=1}}for(let le=0;le<B;le++)for(let we=0;we<b;we++){const tt=d+we+te*le,mt=d+we+te*(le+1),Z=d+(we+1)+te*(le+1),he=d+(we+1)+te*le;c.push(tt,mt,he),c.push(mt,Z,he),j+=6}a.addGroup(f,j,E),f+=j,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const n=Fr(s[t]);for(const i in n)e[i]=n[i]}return e}function s0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ap(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const r0={clone:Fr,merge:Mn};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cp extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new L,td=new Te,nd=new Te;class Tn extends cp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class c0 extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(ur,hr,e,t);i.layers=this.layers,this.add(i);const r=new Tn(ur,hr,e,t);r.layers=this.layers,this.add(r);const o=new Tn(ur,hr,e,t);o.layers=this.layers,this.add(o);const a=new Tn(ur,hr,e,t);a.layers=this.layers,this.add(a);const c=new Tn(ur,hr,e,t);c.layers=this.layers,this.add(c);const l=new Tn(ur,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lp extends Zt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bo(5,5,5),r=new qi({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:ms});r.uniforms.tEquirect.value=t;const o=new Rn(i,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Fn),new c0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const rl=new L,u0=new L,h0=new qe;class Hi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Ci,fa=new L;class Tu{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],y=i[14],A=i[15];if(n[0].setComponents(c-r,d-l,m-f,A-p).normalize(),n[1].setComponents(c+r,d+l,m+f,A+p).normalize(),n[2].setComponents(c+o,d+u,m+g,A+T).normalize(),n[3].setComponents(c-o,d-u,m-g,A-T).normalize(),n[4].setComponents(c-a,d-h,m-_,A-y).normalize(),t===ci)n[5].setComponents(c+a,d+h,m+_,A+y).normalize();else if(t===Or)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function up(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function d0(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&d.length===0&&s.bufferSubData(l,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class uc extends _i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let y=0;y<l;y++){const A=y*h-r;g.push(A,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const y=T+l*p,A=T+l*(p+1),I=T+1+l*(p+1),w=T+1+l*p;f.push(y,A,w),f.push(A,I,w)}this.setIndex(f),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ty=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,by=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:x0,aomap_fragment:y0,aomap_pars_fragment:v0,batching_pars_vertex:M0,batching_vertex:T0,begin_vertex:S0,beginnormal_vertex:E0,bsdfs:A0,iridescence_fragment:b0,bumpmap_pars_fragment:N0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:L0,color_fragment:I0,color_pars_fragment:P0,color_pars_vertex:D0,color_vertex:O0,common:U0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:V0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:H0,colorspace_fragment:G0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:ry,envmap_vertex:K0,fog_vertex:$0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:Q0,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ty,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:sy,lights_toon_fragment:oy,lights_toon_pars_fragment:ay,lights_phong_fragment:cy,lights_phong_pars_fragment:ly,lights_physical_fragment:uy,lights_physical_pars_fragment:hy,lights_fragment_begin:dy,lights_fragment_maps:fy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:xy,map_fragment:yy,map_pars_fragment:vy,map_particle_fragment:My,map_particle_pars_fragment:Ty,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:Ey,morphinstance_vertex:Ay,morphcolor_vertex:by,morphnormal_vertex:Ny,morphtarget_pars_vertex:wy,morphtarget_vertex:Ry,normal_fragment_begin:Cy,normal_fragment_maps:Ly,normal_pars_fragment:Iy,normal_pars_vertex:Py,normal_vertex:Dy,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:By,opaque_fragment:zy,packing:ky,premultiplied_alpha_fragment:Hy,project_vertex:Gy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Ky,shadowmap_vertex:$y,shadowmask_pars_fragment:Zy,skinbase_vertex:Jy,skinning_pars_vertex:Qy,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:sv,tonemapping_pars_fragment:rv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:cv,uv_pars_vertex:lv,uv_vertex:uv,worldpos_vertex:hv,background_vert:dv,background_frag:fv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:_v,depth_vert:xv,depth_frag:yv,distanceRGBA_vert:vv,distanceRGBA_frag:Mv,equirect_vert:Tv,equirect_frag:Sv,linedashed_vert:Ev,linedashed_frag:Av,meshbasic_vert:bv,meshbasic_frag:Nv,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Lv,meshnormal_vert:Iv,meshnormal_frag:Pv,meshphong_vert:Dv,meshphong_frag:Ov,meshphysical_vert:Uv,meshphysical_frag:Fv,meshtoon_vert:Vv,meshtoon_frag:Bv,points_vert:zv,points_frag:kv,shadow_vert:Hv,shadow_frag:Gv,sprite_vert:Wv,sprite_frag:Xv},_e={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},vi={basic:{uniforms:Mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Mn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Mn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Mn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Mn([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Mn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Mn([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Mn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Mn([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Mn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Mn([_e.lights,_e.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};vi.physical={uniforms:Mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const pa={r:0,b:0,g:0},bs=new Zn,qv=new Be;function Yv(s,e,t,n,i,r,o){const a=new Ne(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const A=g(T);A===null?p(a,c):A&&A.isColor&&(p(A,1),y=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(T,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===ac)?(u===void 0&&(u=new Rn(new Bo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Fr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bs.copy(y.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(bs)),u.material.toneMapped=dt.getTransfer(A.colorSpace)!==wt,(h!==A||d!==A.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Rn(new uc(2,2),new qi({name:"BackgroundMaterial",uniforms:Fr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=dt.getTransfer(A.colorSpace)!==wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,y){T.getRGB(pa,ap(s)),n.buffers.color.setClear(pa.r,pa.g,pa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function jv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(v,H,J,D,ne){let te=!1;const ae=h(D,J,H);r!==ae&&(r=ae,l(r.object)),te=f(v,D,J,ne),te&&g(v,D,J,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,A(v,H,J,D),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,H,J){const D=J.wireframe===!0;let ne=n[v.id];ne===void 0&&(ne={},n[v.id]=ne);let te=ne[H.id];te===void 0&&(te={},ne[H.id]=te);let ae=te[D];return ae===void 0&&(ae=d(c()),te[D]=ae),ae}function d(v){const H=[],J=[],D=[];for(let ne=0;ne<t;ne++)H[ne]=0,J[ne]=0,D[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,H,J,D){const ne=r.attributes,te=H.attributes;let ae=0;const ce=J.getAttributes();for(const j in ce)if(ce[j].location>=0){const le=ne[j];let we=te[j];if(we===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),le===void 0||le.attribute!==we||we&&le.data!==we.data)return!0;ae++}return r.attributesNum!==ae||r.index!==D}function g(v,H,J,D){const ne={},te=H.attributes;let ae=0;const ce=J.getAttributes();for(const j in ce)if(ce[j].location>=0){let le=te[j];le===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const we={};we.attribute=le,le&&le.data&&(we.data=le.data),ne[j]=we,ae++}r.attributes=ne,r.attributesNum=ae,r.index=D}function _(){const v=r.newAttributes;for(let H=0,J=v.length;H<J;H++)v[H]=0}function m(v){p(v,0)}function p(v,H){const J=r.newAttributes,D=r.enabledAttributes,ne=r.attributeDivisors;J[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),ne[v]!==H&&(s.vertexAttribDivisor(v,H),ne[v]=H)}function T(){const v=r.newAttributes,H=r.enabledAttributes;for(let J=0,D=H.length;J<D;J++)H[J]!==v[J]&&(s.disableVertexAttribArray(J),H[J]=0)}function y(v,H,J,D,ne,te,ae){ae===!0?s.vertexAttribIPointer(v,H,J,ne,te):s.vertexAttribPointer(v,H,J,D,ne,te)}function A(v,H,J,D){_();const ne=D.attributes,te=J.getAttributes(),ae=H.defaultAttributeValues;for(const ce in te){const j=te[ce];if(j.location>=0){let ue=ne[ce];if(ue===void 0&&(ce==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),ce==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){const le=ue.normalized,we=ue.itemSize,tt=e.get(ue);if(tt===void 0)continue;const mt=tt.buffer,Z=tt.type,he=tt.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||ue.gpuType===Wf;if(ue.isInterleavedBufferAttribute){const ge=ue.data,nt=ge.stride,$e=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let z=0;z<j.locationSize;z++)p(j.location+z,ge.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let z=0;z<j.locationSize;z++)m(j.location+z);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let z=0;z<j.locationSize;z++)y(j.location+z,we/j.locationSize,Z,le,nt*he,($e+we/j.locationSize*z)*he,Se)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<j.locationSize;ge++)p(j.location+ge,ue.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<j.locationSize;ge++)m(j.location+ge);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let ge=0;ge<j.locationSize;ge++)y(j.location+ge,we/j.locationSize,Z,le,we*he,we/j.locationSize*ge*he,Se)}}else if(ae!==void 0){const le=ae[ce];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(j.location,le);break;case 3:s.vertexAttrib3fv(j.location,le);break;case 4:s.vertexAttrib4fv(j.location,le);break;default:s.vertexAttrib1fv(j.location,le)}}}}T()}function I(){B();for(const v in n){const H=n[v];for(const J in H){const D=H[J];for(const ne in D)u(D[ne].object),delete D[ne];delete H[J]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const H=n[v.id];for(const J in H){const D=H[J];for(const ne in D)u(D[ne].object),delete D[ne];delete H[J]}delete n[v.id]}function b(v){for(const H in n){const J=n[H];if(J[v.id]===void 0)continue;const D=J[v.id];for(const ne in D)u(D[ne].object),delete D[ne];delete J[v.id]}}function B(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Kv(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $v(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==ai&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gs&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==oi&&!b)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=f>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:A,maxSamples:I}}function Zv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Hi,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:n,y=T*4;let A=p.clippingState||null;c.value=A,A=u(g,d,y,f);for(let I=0;I!==y;++I)A[I]=t[I];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,A=f;y!==_;++y,A+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jv(s){let e=new WeakMap;function t(o,a){return a===Hl?o.mapping=Cr:a===Gl&&(o.mapping=Lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hl||a===Gl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new l0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hc extends cp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,id=[.125,.215,.35,.446,.526,.582],Os=20,ol=new hc,sd=new Ne;let al=null,cl=0,ll=0,ul=!1;const Is=(1+Math.sqrt(5))/2,dr=1/Is,rd=[new L(-Is,dr,0),new L(Is,dr,0),new L(-dr,0,Is),new L(dr,0,Is),new L(0,Is,-dr),new L(0,Is,dr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,cl,ll),this._renderer.xr.enabled=ul,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Fo,format:ai,colorSpace:qt,depthBuffer:!1},i=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qv(r)),this._blurMaterial=eM(r,e,t)}return i}_compileMaterial(e){const t=new Rn(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,n,i){const a=new Tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sd),u.toneMapping=$n,u.autoClear=!1;const f=new hs({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new Rn(new Bo,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(sd),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;ma(i,T*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cr||e.mapping===Lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ma(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ol)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rd[(i-r-1)%rd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rn(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Os-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);const p=[];let T=0;for(let b=0;b<Os;++b){const B=b/_,E=Math.exp(-B*B/2);p.push(E),b===0?T+=E:b<m&&(T+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const A=this._sizeLods[i],I=3*A*(i>y-mr?i-y+mr:0),w=4*(this._cubeSize-A);ma(t,I,w,3*A,2*A),c.setRenderTarget(t),c.render(h,ol)}}function Qv(s){const e=[],t=[],n=[];let i=s;const r=s-mr+1+id.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-mr?c=id[o-s+mr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),y=new Float32Array(m*g*f),A=new Float32Array(p*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,B=w>2?0:-1,E=[b,B,0,b+2/3,B,0,b+2/3,B+1,0,b,B,0,b+2/3,B+1,0,b,B+1,0];T.set(E,_*g*w),y.set(d,m*g*w);const v=[w,w,w,w,w,w];A.set(v,p*g*w)}const I=new _i;I.setAttribute("position",new En(T,_)),I.setAttribute("uv",new En(y,m)),I.setAttribute("faceIndex",new En(A,p)),e.push(I),i>mr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ad(s,e,t){const n=new zs(s,e,t);return n.texture.mapping=ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function eM(s,e,t){const n=new Float32Array(Os),i=new L(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function cd(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function ld(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Hl||c===Gl,u=c===Cr||c===Lr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new od(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new od(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function nM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function iM(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let y=0,A=T.length;y<A;y+=3){const I=T[y+0],w=T[y+1],b=T[y+2];d.push(I,w,w,b,b,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,A=T.length/3-1;y<A;y+=3){const I=y+0,w=y+1,b=y+2;d.push(I,w,w,b,b,I)}}else return;const m=new(tp(d)?op:rp)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function sM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T];for(let T=0;T<_.length;T++)t.update(p,n,_[T])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function rM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function oM(s,e,t){const n=new WeakMap,i=new at;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),m===!0&&(A=3);let I=a.attributes.position.count*A,w=1;I>e.maxTextureSize&&(w=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const b=new Float32Array(I*w*4*h),B=new vu(b,I,w,h);B.type=oi,B.needsUpdate=!0;const E=A*4;for(let H=0;H<h;H++){const J=p[H],D=T[H],ne=y[H],te=I*w*4*H;for(let ae=0;ae<J.count;ae++){const ce=ae*E;g===!0&&(i.fromBufferAttribute(J,ae),b[te+ce+0]=i.x,b[te+ce+1]=i.y,b[te+ce+2]=i.z,b[te+ce+3]=0),_===!0&&(i.fromBufferAttribute(D,ae),b[te+ce+4]=i.x,b[te+ce+5]=i.y,b[te+ce+6]=i.z,b[te+ce+7]=0),m===!0&&(i.fromBufferAttribute(ne,ae),b[te+ce+8]=i.x,b[te+ce+9]=i.y,b[te+ce+10]=i.z,b[te+ce+11]=ne.itemSize===4?i.w:1)}}d={count:h,texture:B,size:new Te(I,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function aM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class zo extends Zt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:Mr,u!==Mr&&u!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mr&&(n=Pr),n===void 0&&u===wo&&(n=Vo),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hp=new Zt,dp=new zo(1,1);dp.compareFunction=ep;const fp=new vu,pp=new Yx,mp=new lp,ud=[],hd=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function Xr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ud[i];if(r===void 0&&(r=new Float32Array(i),ud[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function dc(s,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function dM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;pd.set(n),s.uniformMatrix2fv(this.addr,!1,pd),Qt(t,n)}}function fM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;fd.set(n),s.uniformMatrix3fv(this.addr,!1,fd),Qt(t,n)}}function pM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;dd.set(n),s.uniformMatrix4fv(this.addr,!1,dd),Qt(t,n)}}function mM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function SM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?dp:hp;t.setTexture2D(e||r,i)}function EM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pp,i)}function AM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mp,i)}function bM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fp,i)}function NM(s){switch(s){case 5126:return cM;case 35664:return lM;case 35665:return uM;case 35666:return hM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return vM;case 36295:return MM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return bM}}function wM(s,e){s.uniform1fv(this.addr,e)}function RM(s,e){const t=Xr(e,this.size,2);s.uniform2fv(this.addr,t)}function CM(s,e){const t=Xr(e,this.size,3);s.uniform3fv(this.addr,t)}function LM(s,e){const t=Xr(e,this.size,4);s.uniform4fv(this.addr,t)}function IM(s,e){const t=Xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function PM(s,e){const t=Xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function DM(s,e){const t=Xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function OM(s,e){s.uniform1iv(this.addr,e)}function UM(s,e){s.uniform2iv(this.addr,e)}function FM(s,e){s.uniform3iv(this.addr,e)}function VM(s,e){s.uniform4iv(this.addr,e)}function BM(s,e){s.uniform1uiv(this.addr,e)}function zM(s,e){s.uniform2uiv(this.addr,e)}function kM(s,e){s.uniform3uiv(this.addr,e)}function HM(s,e){s.uniform4uiv(this.addr,e)}function GM(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hp,r[o])}function WM(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pp,r[o])}function XM(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||mp,r[o])}function qM(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fp,r[o])}function YM(s){switch(s){case 5126:return wM;case 35664:return RM;case 35665:return CM;case 35666:return LM;case 35674:return IM;case 35675:return PM;case 35676:return DM;case 5124:case 35670:return OM;case 35667:case 35671:return UM;case 35668:case 35672:return FM;case 35669:case 35673:return VM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}class jM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class KM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}}class $M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function md(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,t){const n=s.name,i=n.length;for(hl.lastIndex=0;;){const r=hl.exec(n),o=hl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){md(t,l===void 0?new jM(a,s,e):new KM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new $M(a),md(t,h)),t=h}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ZM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function gd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const JM=37297;let QM=0;function eT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function tT(s){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(s);let n;switch(e===t?n="":e===ka&&t===za?n="LinearDisplayP3ToLinearSRGB":e===za&&t===ka&&(n="LinearSRGBToLinearDisplayP3"),s){case qt:case cc:return[n,"LinearTransferOETF"];case gn:case xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _d(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+eT(s.getShaderSource(e),o)}else return i}function nT(s,e){const t=tT(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iT(s,e){let t;switch(e){case Uf:t="Linear";break;case Ff:t="Reinhard";break;case Vf:t="OptimizedCineon";break;case Bf:t="ACESFilmic";break;case zf:t="AgX";break;case rx:t="Neutral";break;case sx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function rT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Mo(s){return s!==""}function xd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(s){return s.replace(aT,lT)}const cT=new Map;function lT(s,e){let t=Ke[e];if(t===void 0){const n=cT.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}const uT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(s){return s.replace(uT,hT)}function hT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Md(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function fT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cr:case Lr:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function mT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case nx:e="ENVMAP_BLENDING_MIX";break;case ix:e="ENVMAP_BLENDING_ADD";break}return e}function gT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _T(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=dT(t),l=fT(t),u=pT(t),h=mT(t),d=gT(t),f=sT(t),g=rT(r),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(m=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ke.tonemapping_pars_fragment:"",t.toneMapping!==$n?iT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,nT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=ql(o),o=xd(o,t),o=yd(o,t),a=ql(a),a=xd(a,t),a=yd(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=T+m+o,A=T+p+a,I=gd(i,i.VERTEX_SHADER,y),w=gd(i,i.FRAGMENT_SHADER,A);i.attachShader(_,I),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(H){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(I).trim(),ne=i.getShaderInfoLog(w).trim();let te=!0,ae=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,w);else{const ce=_d(i,I,"vertex"),j=_d(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+ce+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||ne==="")&&(ae=!1);ae&&(H.diagnostics={runnable:te,programLog:J,vertexShader:{log:D,prefix:m},fragmentShader:{log:ne,prefix:p}})}i.deleteShader(I),i.deleteShader(w),B=new wa(i,_),E=oT(i,_)}let B;this.getUniforms=function(){return B===void 0&&b(this),B};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,JM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let xT=0;class yT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vT(e),t.set(e,n)),n}}class vT{constructor(e){this.id=xT++,this.code=e,this.usedTimes=0}}function MT(s,e,t,n,i,r,o){const a=new Mu,c=new yT,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,H,J,D){const ne=J.fog,te=D.geometry,ae=E.isMeshStandardMaterial?J.environment:null,ce=(E.isMeshStandardMaterial?t:e).get(E.envMap||ae),j=ce&&ce.mapping===ac?ce.image.height:null,ue=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const le=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,we=le!==void 0?le.length:0;let tt=0;te.morphAttributes.position!==void 0&&(tt=1),te.morphAttributes.normal!==void 0&&(tt=2),te.morphAttributes.color!==void 0&&(tt=3);let mt,Z,he,Se;if(ue){const lt=vi[ue];mt=lt.vertexShader,Z=lt.fragmentShader}else mt=E.vertexShader,Z=E.fragmentShader,c.update(E),he=c.getVertexShaderID(E),Se=c.getFragmentShaderID(E);const ge=s.getRenderTarget(),nt=D.isInstancedMesh===!0,$e=D.isBatchedMesh===!0,z=!!E.map,yt=!!E.matcap,Pe=!!ce,vt=!!E.aoMap,Oe=!!E.lightMap,it=!!E.bumpMap,Ge=!!E.normalMap,rt=!!E.displacementMap,Ct=!!E.emissiveMap,R=!!E.metalnessMap,M=!!E.roughnessMap,Y=E.anisotropy>0,ie=E.clearcoat>0,re=E.dispersion>0,oe=E.iridescence>0,Ie=E.sheen>0,ye=E.transmission>0,xe=Y&&!!E.anisotropyMap,Ve=ie&&!!E.clearcoatMap,fe=ie&&!!E.clearcoatNormalMap,Le=ie&&!!E.clearcoatRoughnessMap,ot=oe&&!!E.iridescenceMap,De=oe&&!!E.iridescenceThicknessMap,Me=Ie&&!!E.sheenColorMap,We=Ie&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,Mt=!!E.specularColorMap,Ye=!!E.specularIntensityMap,x=ye&&!!E.transmissionMap,F=ye&&!!E.thicknessMap,k=!!E.gradientMap,se=!!E.alphaMap,de=E.alphaTest>0,Xe=!!E.alphaHash,Je=!!E.extensions;let Dt=$n;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const en={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:mt,fragmentShader:Z,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:$e,instancing:nt,instancingColor:nt&&D.instanceColor!==null,instancingMorph:nt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:qt,alphaToCoverage:!!E.alphaToCoverage,map:z,matcap:yt,envMap:Pe,envMapMode:Pe&&ce.mapping,envMapCubeUVHeight:j,aoMap:vt,lightMap:Oe,bumpMap:it,normalMap:Ge,displacementMap:d&&rt,emissiveMap:Ct,normalMapObjectSpace:Ge&&E.normalMapType===Jf,normalMapTangentSpace:Ge&&E.normalMapType===Bs,metalnessMap:R,roughnessMap:M,anisotropy:Y,anisotropyMap:xe,clearcoat:ie,clearcoatMap:Ve,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:re,iridescence:oe,iridescenceMap:ot,iridescenceThicknessMap:De,sheen:Ie,sheenColorMap:Me,sheenRoughnessMap:We,specularMap:Ze,specularColorMap:Mt,specularIntensityMap:Ye,transmission:ye,transmissionMap:x,thicknessMap:F,gradientMap:k,opaque:E.transparent===!1&&E.blending===vr&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:de,alphaHash:Xe,combine:E.combine,mapUv:z&&_(E.map.channel),aoMapUv:vt&&_(E.aoMap.channel),lightMapUv:Oe&&_(E.lightMap.channel),bumpMapUv:it&&_(E.bumpMap.channel),normalMapUv:Ge&&_(E.normalMap.channel),displacementMapUv:rt&&_(E.displacementMap.channel),emissiveMapUv:Ct&&_(E.emissiveMap.channel),metalnessMapUv:R&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:xe&&_(E.anisotropyMap.channel),clearcoatMapUv:Ve&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(E.sheenRoughnessMap.channel),specularMapUv:Ze&&_(E.specularMap.channel),specularColorMapUv:Mt&&_(E.specularColorMap.channel),specularIntensityMapUv:Ye&&_(E.specularIntensityMap.channel),transmissionMapUv:x&&_(E.transmissionMap.channel),thicknessMapUv:F&&_(E.thicknessMap.channel),alphaMapUv:se&&_(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ge||Y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!te.attributes.uv&&(z||se),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:tt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:z&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Si,flipSided:E.side===Sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return en.vertexUv1s=l.has(1),en.vertexUv2s=l.has(2),en.vertexUv3s=l.has(3),l.clear(),en}function p(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)v.push(H),v.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(T(v,E),y(v,E),v.push(s.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function T(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),E.push(a.mask)}function A(E){const v=g[E.type];let H;if(v){const J=vi[v];H=r0.clone(J.uniforms)}else H=E.uniforms;return H}function I(E,v){let H;for(let J=0,D=u.length;J<D;J++){const ne=u[J];if(ne.cacheKey===v){H=ne,++H.usedTimes;break}}return H===void 0&&(H=new _T(s,v,E,r),u.push(H)),H}function w(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function b(E){c.remove(E)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:I,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:B}}function TT(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ST(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Td(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||ST),n.length>1&&n.sort(d||Td),i.length>1&&i.sort(d||Td)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function ET(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Sd,s.set(n,[o])):i>=r.length?(o=new Sd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function AT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function bT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NT=0;function wT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function RT(s){const e=new AT,t=bT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new Be,o=new Be;function a(l,u){let h=0,d=0,f=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let g=0,_=0,m=0,p=0,T=0,y=0,A=0,I=0,w=0,b=0,B=0;l.sort(wT);const E=u===!0?Math.PI:1;for(let H=0,J=l.length;H<J;H++){const D=l[H],ne=D.color,te=D.intensity,ae=D.distance,ce=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=ne.r*te*E,d+=ne.g*te*E,f+=ne.b*te*E;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],te);B++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const ue=D.shadow,le=t.get(D);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=D.shadow.matrix,y++}n.directional[g]=j,g++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(ne).multiplyScalar(te*E),j.distance=ae,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[m]=j;const ue=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ue.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[m]=ue.matrix,D.castShadow){const le=t.get(D);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.spotShadow[m]=le,n.spotShadowMap[m]=ce,I++}m++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(ne).multiplyScalar(te),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=j,p++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*E),j.distance=D.distance,j.decay=D.decay,D.castShadow){const ue=D.shadow,le=t.get(D);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,le.shadowCameraNear=ue.camera.near,le.shadowCameraFar=ue.camera.far,n.pointShadow[_]=le,n.pointShadowMap[_]=ce,n.pointShadowMatrix[_]=D.shadow.matrix,A++}n.point[_]=j,_++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(te*E),j.groundColor.copy(D.groundColor).multiplyScalar(te*E),n.hemi[T]=j,T++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==m||v.rectAreaLength!==p||v.hemiLength!==T||v.numDirectionalShadows!==y||v.numPointShadows!==A||v.numSpotShadows!==I||v.numSpotMaps!==w||v.numLightProbes!==B)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=T,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=I+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=B,v.directionalLength=g,v.pointLength=_,v.spotLength=m,v.rectAreaLength=p,v.hemiLength=T,v.numDirectionalShadows=y,v.numPointShadows=A,v.numSpotShadows=I,v.numSpotMaps=w,v.numLightProbes=B,n.version=NT++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const y=l[p];if(y.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(m),h++}else if(y.isSpotLight){const A=n.spot[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ed(s){const e=new RT(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function CT(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ed(s),e.set(i,[a])):r>=o.length?(a=new Ed(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class LT extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IT extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OT(s,e,t){let n=new Tu;const i=new Te,r=new Te,o=new at,a=new LT({depthPacking:yx}),c=new IT,l={},u=t.maxTextureSize,h={[Xi]:Sn,[Sn]:Xi,[Si]:Si},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:PT,fragmentShader:DT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _i;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let p=this.type;this.render=function(w,b,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=s.getRenderTarget(),v=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ms),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const D=p!==ki&&this.type===ki,ne=p===ki&&this.type!==ki;for(let te=0,ae=w.length;te<ae;te++){const ce=w[te],j=ce.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const ue=j.getFrameExtents();if(i.multiply(ue),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ue.x),i.x=r.x*ue.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ue.y),i.y=r.y*ue.y,j.mapSize.y=r.y)),j.map===null||D===!0||ne===!0){const we=this.type!==ki?{minFilter:$t,magFilter:$t}:{};j.map!==null&&j.map.dispose(),j.map=new zs(i.x,i.y,we),j.map.texture.name=ce.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const le=j.getViewportCount();for(let we=0;we<le;we++){const tt=j.getViewport(we);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),J.viewport(o),j.updateMatrices(ce,we),n=j.getFrustum(),A(b,B,j.camera,ce,this.type)}j.isPointLightShadow!==!0&&this.type===ki&&T(j,B),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,v,H)};function T(w,b){const B=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zs(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,B,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,B,f,_,null)}function y(w,b,B,E){let v=null;const H=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)v=H;else if(v=B.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const J=v.uuid,D=b.uuid;let ne=l[J];ne===void 0&&(ne={},l[J]=ne);let te=ne[D];te===void 0&&(te=v.clone(),ne[D]=te,b.addEventListener("dispose",I)),v=te}if(v.visible=b.visible,v.wireframe=b.wireframe,E===ki?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const J=s.properties.get(v);J.light=B}return v}function A(w,b,B,E,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ki)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const D=e.update(w),ne=w.material;if(Array.isArray(ne)){const te=D.groups;for(let ae=0,ce=te.length;ae<ce;ae++){const j=te[ae],ue=ne[j.materialIndex];if(ue&&ue.visible){const le=y(w,ue,E,v);w.onBeforeShadow(s,w,b,B,D,le,j),s.renderBufferDirect(B,null,D,le,w,j),w.onAfterShadow(s,w,b,B,D,le,j)}}}else if(ne.visible){const te=y(w,ne,E,v);w.onBeforeShadow(s,w,b,B,D,te,null),s.renderBufferDirect(B,null,D,te,w,null),w.onAfterShadow(s,w,b,B,D,te,null)}}const J=w.children;for(let D=0,ne=J.length;D<ne;D++)A(J[D],b,B,E,v)}function I(w){w.target.removeEventListener("dispose",I);for(const B in l){const E=l[B],v=w.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function UT(s){function e(){let x=!1;const F=new at;let k=null;const se=new at(0,0,0,0);return{setMask:function(de){k!==de&&!x&&(s.colorMask(de,de,de,de),k=de)},setLocked:function(de){x=de},setClear:function(de,Xe,Je,Dt,en){en===!0&&(de*=Dt,Xe*=Dt,Je*=Dt),F.set(de,Xe,Je,Dt),se.equals(F)===!1&&(s.clearColor(de,Xe,Je,Dt),se.copy(F))},reset:function(){x=!1,k=null,se.set(-1,0,0,0)}}}function t(){let x=!1,F=null,k=null,se=null;return{setTest:function(de){de?Se(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(de){F!==de&&!x&&(s.depthMask(de),F=de)},setFunc:function(de){if(k!==de){switch(de){case K_:s.depthFunc(s.NEVER);break;case $_:s.depthFunc(s.ALWAYS);break;case Z_:s.depthFunc(s.LESS);break;case Fa:s.depthFunc(s.LEQUAL);break;case J_:s.depthFunc(s.EQUAL);break;case Q_:s.depthFunc(s.GEQUAL);break;case ex:s.depthFunc(s.GREATER);break;case tx:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}k=de}},setLocked:function(de){x=de},setClear:function(de){se!==de&&(s.clearDepth(de),se=de)},reset:function(){x=!1,F=null,k=null,se=null}}}function n(){let x=!1,F=null,k=null,se=null,de=null,Xe=null,Je=null,Dt=null,en=null;return{setTest:function(lt){x||(lt?Se(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(lt){F!==lt&&!x&&(s.stencilMask(lt),F=lt)},setFunc:function(lt,kt,Nt){(k!==lt||se!==kt||de!==Nt)&&(s.stencilFunc(lt,kt,Nt),k=lt,se=kt,de=Nt)},setOp:function(lt,kt,Nt){(Xe!==lt||Je!==kt||Dt!==Nt)&&(s.stencilOp(lt,kt,Nt),Xe=lt,Je=kt,Dt=Nt)},setLocked:function(lt){x=lt},setClear:function(lt){en!==lt&&(s.clearStencil(lt),en=lt)},reset:function(){x=!1,F=null,k=null,se=null,de=null,Xe=null,Je=null,Dt=null,en=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,T=null,y=null,A=null,I=null,w=new Ne(0,0,0),b=0,B=!1,E=null,v=null,H=null,J=null,D=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ae=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ce)[1]),te=ae>=1):ce.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),te=ae>=2);let j=null,ue={};const le=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),tt=new at().fromArray(le),mt=new at().fromArray(we);function Z(x,F,k,se){const de=new Uint8Array(4),Xe=s.createTexture();s.bindTexture(x,Xe),s.texParameteri(x,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(x,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<k;Je++)x===s.TEXTURE_3D||x===s.TEXTURE_2D_ARRAY?s.texImage3D(F,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(F+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return Xe}const he={};he[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),he[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),he[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(s.DEPTH_TEST),r.setFunc(Fa),it(!1),Ge(th),Se(s.CULL_FACE),vt(ms);function Se(x){l[x]!==!0&&(s.enable(x),l[x]=!0)}function ge(x){l[x]!==!1&&(s.disable(x),l[x]=!1)}function nt(x,F){return u[x]!==F?(s.bindFramebuffer(x,F),u[x]=F,x===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=F),x===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=F),!0):!1}function $e(x,F){let k=d,se=!1;if(x){k=h.get(F),k===void 0&&(k=[],h.set(F,k));const de=x.textures;if(k.length!==de.length||k[0]!==s.COLOR_ATTACHMENT0){for(let Xe=0,Je=de.length;Xe<Je;Xe++)k[Xe]=s.COLOR_ATTACHMENT0+Xe;k.length=de.length,se=!0}}else k[0]!==s.BACK&&(k[0]=s.BACK,se=!0);se&&s.drawBuffers(k)}function z(x){return f!==x?(s.useProgram(x),f=x,!0):!1}const yt={[Ds]:s.FUNC_ADD,[I_]:s.FUNC_SUBTRACT,[P_]:s.FUNC_REVERSE_SUBTRACT};yt[D_]=s.MIN,yt[O_]=s.MAX;const Pe={[U_]:s.ZERO,[F_]:s.ONE,[V_]:s.SRC_COLOR,[zl]:s.SRC_ALPHA,[W_]:s.SRC_ALPHA_SATURATE,[H_]:s.DST_COLOR,[z_]:s.DST_ALPHA,[B_]:s.ONE_MINUS_SRC_COLOR,[kl]:s.ONE_MINUS_SRC_ALPHA,[G_]:s.ONE_MINUS_DST_COLOR,[k_]:s.ONE_MINUS_DST_ALPHA,[X_]:s.CONSTANT_COLOR,[q_]:s.ONE_MINUS_CONSTANT_COLOR,[Y_]:s.CONSTANT_ALPHA,[j_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(x,F,k,se,de,Xe,Je,Dt,en,lt){if(x===ms){g===!0&&(ge(s.BLEND),g=!1);return}if(g===!1&&(Se(s.BLEND),g=!0),x!==L_){if(x!==_||lt!==B){if((m!==Ds||y!==Ds)&&(s.blendEquation(s.FUNC_ADD),m=Ds,y=Ds),lt)switch(x){case vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nh:s.blendFunc(s.ONE,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}p=null,T=null,A=null,I=null,w.set(0,0,0),b=0,_=x,B=lt}return}de=de||F,Xe=Xe||k,Je=Je||se,(F!==m||de!==y)&&(s.blendEquationSeparate(yt[F],yt[de]),m=F,y=de),(k!==p||se!==T||Xe!==A||Je!==I)&&(s.blendFuncSeparate(Pe[k],Pe[se],Pe[Xe],Pe[Je]),p=k,T=se,A=Xe,I=Je),(Dt.equals(w)===!1||en!==b)&&(s.blendColor(Dt.r,Dt.g,Dt.b,en),w.copy(Dt),b=en),_=x,B=!1}function Oe(x,F){x.side===Si?ge(s.CULL_FACE):Se(s.CULL_FACE);let k=x.side===Sn;F&&(k=!k),it(k),x.blending===vr&&x.transparent===!1?vt(ms):vt(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),r.setFunc(x.depthFunc),r.setTest(x.depthTest),r.setMask(x.depthWrite),i.setMask(x.colorWrite);const se=x.stencilWrite;o.setTest(se),se&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Ct(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(x){E!==x&&(x?s.frontFace(s.CW):s.frontFace(s.CCW),E=x)}function Ge(x){x!==w_?(Se(s.CULL_FACE),x!==v&&(x===th?s.cullFace(s.BACK):x===R_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),v=x}function rt(x){x!==H&&(te&&s.lineWidth(x),H=x)}function Ct(x,F,k){x?(Se(s.POLYGON_OFFSET_FILL),(J!==F||D!==k)&&(s.polygonOffset(F,k),J=F,D=k)):ge(s.POLYGON_OFFSET_FILL)}function R(x){x?Se(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function M(x){x===void 0&&(x=s.TEXTURE0+ne-1),j!==x&&(s.activeTexture(x),j=x)}function Y(x,F,k){k===void 0&&(j===null?k=s.TEXTURE0+ne-1:k=j);let se=ue[k];se===void 0&&(se={type:void 0,texture:void 0},ue[k]=se),(se.type!==x||se.texture!==F)&&(j!==k&&(s.activeTexture(k),j=k),s.bindTexture(x,F||he[x]),se.type=x,se.texture=F)}function ie(){const x=ue[j];x!==void 0&&x.type!==void 0&&(s.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ie(){try{s.texSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function fe(){try{s.texStorage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Le(){try{s.texStorage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ot(){try{s.texImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Me(x){tt.equals(x)===!1&&(s.scissor(x.x,x.y,x.z,x.w),tt.copy(x))}function We(x){mt.equals(x)===!1&&(s.viewport(x.x,x.y,x.z,x.w),mt.copy(x))}function Ze(x,F){let k=c.get(F);k===void 0&&(k=new WeakMap,c.set(F,k));let se=k.get(x);se===void 0&&(se=s.getUniformBlockIndex(F,x.name),k.set(x,se))}function Mt(x,F){const se=c.get(F).get(x);a.get(F)!==se&&(s.uniformBlockBinding(F,se,x.__bindingPointIndex),a.set(F,se))}function Ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},j=null,ue={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,T=null,y=null,A=null,I=null,w=new Ne(0,0,0),b=0,B=!1,E=null,v=null,H=null,J=null,D=null,tt.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Se,disable:ge,bindFramebuffer:nt,drawBuffers:$e,useProgram:z,setBlending:vt,setMaterial:Oe,setFlipSided:it,setCullFace:Ge,setLineWidth:rt,setPolygonOffset:Ct,setScissorTest:R,activeTexture:M,bindTexture:Y,unbindTexture:ie,compressedTexImage2D:re,compressedTexImage3D:oe,texImage2D:ot,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:Mt,texStorage2D:fe,texStorage3D:Le,texSubImage2D:Ie,texSubImage3D:ye,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ve,scissor:Me,viewport:We,reset:Ye}}function FT(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):Co("canvas")}function _(R,M,Y){let ie=1;const re=Ct(R);if((re.width>Y||re.height>Y)&&(ie=Y/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(ie*re.width),Ie=Math.floor(ie*re.height);h===void 0&&(h=g(oe,Ie));const ye=M?g(oe,Ie):h;return ye.width=oe,ye.height=Ie,ye.getContext("2d").drawImage(R,0,0,oe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+oe+"x"+Ie+")."),ye}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==$t&&R.minFilter!==Fn}function p(R){s.generateMipmap(R)}function T(R,M,Y,ie,re=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=M;if(M===s.RED&&(Y===s.FLOAT&&(oe=s.R32F),Y===s.HALF_FLOAT&&(oe=s.R16F),Y===s.UNSIGNED_BYTE&&(oe=s.R8)),M===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(oe=s.R8UI),Y===s.UNSIGNED_SHORT&&(oe=s.R16UI),Y===s.UNSIGNED_INT&&(oe=s.R32UI),Y===s.BYTE&&(oe=s.R8I),Y===s.SHORT&&(oe=s.R16I),Y===s.INT&&(oe=s.R32I)),M===s.RG&&(Y===s.FLOAT&&(oe=s.RG32F),Y===s.HALF_FLOAT&&(oe=s.RG16F),Y===s.UNSIGNED_BYTE&&(oe=s.RG8)),M===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(oe=s.RG8UI),Y===s.UNSIGNED_SHORT&&(oe=s.RG16UI),Y===s.UNSIGNED_INT&&(oe=s.RG32UI),Y===s.BYTE&&(oe=s.RG8I),Y===s.SHORT&&(oe=s.RG16I),Y===s.INT&&(oe=s.RG32I)),M===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),M===s.RGBA){const Ie=re?Ba:dt.getTransfer(ie);Y===s.FLOAT&&(oe=s.RGBA32F),Y===s.HALF_FLOAT&&(oe=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(oe=Ie===wt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&u.delete(M)}function I(R){const M=R.target;M.removeEventListener("dispose",I),B(M)}function w(R){const M=n.get(R);if(M.__webglInit===void 0)return;const Y=R.source,ie=d.get(Y);if(ie){const re=ie[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(R),Object.keys(ie).length===0&&d.delete(Y)}n.remove(R)}function b(R){const M=n.get(R);s.deleteTexture(M.__webglTexture);const Y=R.source,ie=d.get(Y);delete ie[M.__cacheKey],o.memory.textures--}function B(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let re=0;re<M.__webglFramebuffer[ie].length;re++)s.deleteFramebuffer(M.__webglFramebuffer[ie][re]);else s.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)s.deleteFramebuffer(M.__webglFramebuffer[ie]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=R.textures;for(let ie=0,re=Y.length;ie<re;ie++){const oe=n.get(Y[ie]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(Y[ie])}n.remove(R)}let E=0;function v(){E=0}function H(){const R=E;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),E+=1,R}function J(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function D(R,M){const Y=n.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Y,R,M);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+M)}function ne(R,M){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){tt(Y,R,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+M)}function te(R,M){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){tt(Y,R,M);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+M)}function ae(R,M){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){mt(Y,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+M)}const ce={[Ir]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[Va]:s.MIRRORED_REPEAT},j={[$t]:s.NEAREST,[Hf]:s.NEAREST_MIPMAP_NEAREST,[vo]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[Na]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},ue={[vx]:s.NEVER,[Ax]:s.ALWAYS,[Qf]:s.LESS,[ep]:s.LEQUAL,[Mx]:s.EQUAL,[Ex]:s.GEQUAL,[Tx]:s.GREATER,[Sx]:s.NOTEQUAL};function le(R,M){if(M.type===oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Na||M.magFilter===vo||M.magFilter===Ai||M.minFilter===Fn||M.minFilter===Na||M.minFilter===vo||M.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ce[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ce[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ce[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,j[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==vo&&M.minFilter!==Ai||M.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function we(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const ie=M.source;let re=d.get(ie);re===void 0&&(re={},d.set(ie,re));const oe=J(M);if(oe!==R.__cacheKey){re[oe]===void 0&&(re[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[oe].usedTimes++;const Ie=re[R.__cacheKey];Ie!==void 0&&(re[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(M)),R.__cacheKey=oe,R.__webglTexture=re[oe].texture}return Y}function tt(R,M,Y){let ie=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=s.TEXTURE_3D);const re=we(R,M),oe=M.source;t.bindTexture(ie,R.__webglTexture,s.TEXTURE0+Y);const Ie=n.get(oe);if(oe.version!==Ie.__version||re===!0){t.activeTexture(s.TEXTURE0+Y);const ye=dt.getPrimaries(dt.workingColorSpace),xe=M.colorSpace===ls?null:dt.getPrimaries(M.colorSpace),Ve=M.colorSpace===ls||ye===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=_(M.image,!1,i.maxTextureSize);fe=rt(M,fe);const Le=r.convert(M.format,M.colorSpace),ot=r.convert(M.type);let De=T(M.internalFormat,Le,ot,M.colorSpace,M.isVideoTexture);le(ie,M);let Me;const We=M.mipmaps,Ze=M.isVideoTexture!==!0,Mt=Ie.__version===void 0||re===!0,Ye=oe.dataReady,x=y(M,fe);if(M.isDepthTexture)De=s.DEPTH_COMPONENT16,M.type===oi?De=s.DEPTH_COMPONENT32F:M.type===Pr?De=s.DEPTH_COMPONENT24:M.type===Vo&&(De=s.DEPTH24_STENCIL8),Mt&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,De,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,De,fe.width,fe.height,0,Le,ot,null));else if(M.isDataTexture)if(We.length>0){Ze&&Mt&&t.texStorage2D(s.TEXTURE_2D,x,De,We[0].width,We[0].height);for(let F=0,k=We.length;F<k;F++)Me=We[F],Ze?Ye&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Me.width,Me.height,Le,ot,Me.data):t.texImage2D(s.TEXTURE_2D,F,De,Me.width,Me.height,0,Le,ot,Me.data);M.generateMipmaps=!1}else Ze?(Mt&&t.texStorage2D(s.TEXTURE_2D,x,De,fe.width,fe.height),Ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,Le,ot,fe.data)):t.texImage2D(s.TEXTURE_2D,0,De,fe.width,fe.height,0,Le,ot,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,x,De,We[0].width,We[0].height,fe.depth);for(let F=0,k=We.length;F<k;F++)Me=We[F],M.format!==ai?Le!==null?Ze?Ye&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Me.width,Me.height,fe.depth,Le,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,F,De,Me.width,Me.height,fe.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?Ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Me.width,Me.height,fe.depth,Le,ot,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,F,De,Me.width,Me.height,fe.depth,0,Le,ot,Me.data)}else{Ze&&Mt&&t.texStorage2D(s.TEXTURE_2D,x,De,We[0].width,We[0].height);for(let F=0,k=We.length;F<k;F++)Me=We[F],M.format!==ai?Le!==null?Ze?Ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,F,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,F,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?Ye&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Me.width,Me.height,Le,ot,Me.data):t.texImage2D(s.TEXTURE_2D,F,De,Me.width,Me.height,0,Le,ot,Me.data)}else if(M.isDataArrayTexture)Ze?(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,x,De,fe.width,fe.height,fe.depth),Ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Le,ot,fe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,fe.width,fe.height,fe.depth,0,Le,ot,fe.data);else if(M.isData3DTexture)Ze?(Mt&&t.texStorage3D(s.TEXTURE_3D,x,De,fe.width,fe.height,fe.depth),Ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Le,ot,fe.data)):t.texImage3D(s.TEXTURE_3D,0,De,fe.width,fe.height,fe.depth,0,Le,ot,fe.data);else if(M.isFramebufferTexture){if(Mt)if(Ze)t.texStorage2D(s.TEXTURE_2D,x,De,fe.width,fe.height);else{let F=fe.width,k=fe.height;for(let se=0;se<x;se++)t.texImage2D(s.TEXTURE_2D,se,De,F,k,0,Le,ot,null),F>>=1,k>>=1}}else if(We.length>0){if(Ze&&Mt){const F=Ct(We[0]);t.texStorage2D(s.TEXTURE_2D,x,De,F.width,F.height)}for(let F=0,k=We.length;F<k;F++)Me=We[F],Ze?Ye&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Le,ot,Me):t.texImage2D(s.TEXTURE_2D,F,De,Le,ot,Me);M.generateMipmaps=!1}else if(Ze){if(Mt){const F=Ct(fe);t.texStorage2D(s.TEXTURE_2D,x,De,F.width,F.height)}Ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,ot,fe)}else t.texImage2D(s.TEXTURE_2D,0,De,Le,ot,fe);m(M)&&p(ie),Ie.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function mt(R,M,Y){if(M.image.length!==6)return;const ie=we(R,M),re=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Y);const oe=n.get(re);if(re.version!==oe.__version||ie===!0){t.activeTexture(s.TEXTURE0+Y);const Ie=dt.getPrimaries(dt.workingColorSpace),ye=M.colorSpace===ls?null:dt.getPrimaries(M.colorSpace),xe=M.colorSpace===ls||Ie===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let k=0;k<6;k++)!Ve&&!fe?Le[k]=_(M.image[k],!0,i.maxCubemapSize):Le[k]=fe?M.image[k].image:M.image[k],Le[k]=rt(M,Le[k]);const ot=Le[0],De=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),We=T(M.internalFormat,De,Me,M.colorSpace),Ze=M.isVideoTexture!==!0,Mt=oe.__version===void 0||ie===!0,Ye=re.dataReady;let x=y(M,ot);le(s.TEXTURE_CUBE_MAP,M);let F;if(Ve){Ze&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,x,We,ot.width,ot.height);for(let k=0;k<6;k++){F=Le[k].mipmaps;for(let se=0;se<F.length;se++){const de=F[se];M.format!==ai?De!==null?Ze?Ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?Ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,de.width,de.height,De,Me,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,We,de.width,de.height,0,De,Me,de.data)}}}else{if(F=M.mipmaps,Ze&&Mt){F.length>0&&x++;const k=Ct(Le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,x,We,k.width,k.height)}for(let k=0;k<6;k++)if(fe){Ze?Ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Le[k].width,Le[k].height,De,Me,Le[k].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,We,Le[k].width,Le[k].height,0,De,Me,Le[k].data);for(let se=0;se<F.length;se++){const Xe=F[se].image[k].image;Ze?Ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,Xe.width,Xe.height,De,Me,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,We,Xe.width,Xe.height,0,De,Me,Xe.data)}}else{Ze?Ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,De,Me,Le[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,We,De,Me,Le[k]);for(let se=0;se<F.length;se++){const de=F[se];Ze?Ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,De,Me,de.image[k]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,We,De,Me,de.image[k])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),oe.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Z(R,M,Y,ie,re,oe){const Ie=r.convert(Y.format,Y.colorSpace),ye=r.convert(Y.type),xe=T(Y.internalFormat,Ie,ye,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const fe=Math.max(1,M.width>>oe),Le=Math.max(1,M.height>>oe);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,oe,xe,fe,Le,M.depth,0,Ie,ye,null):t.texImage2D(re,oe,xe,fe,Le,0,Ie,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),it(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,re,n.get(Y).__webglTexture,0,Oe(M)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,re,n.get(Y).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(R,M,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ie=s.DEPTH_COMPONENT24;if(Y||it(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===oi?ie=s.DEPTH_COMPONENT32F:re.type===Pr&&(ie=s.DEPTH_COMPONENT24));const oe=Oe(M);it(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,ie,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ie,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ie,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ie=Oe(M);Y&&it(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,M.width,M.height):it(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const ie=M.textures;for(let re=0;re<ie.length;re++){const oe=ie[re],Ie=r.convert(oe.format,oe.colorSpace),ye=r.convert(oe.type),xe=T(oe.internalFormat,Ie,ye,oe.colorSpace),Ve=Oe(M);Y&&it(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,xe,M.width,M.height):it(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve,xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,re=Oe(M);if(M.depthTexture.format===Mr)it(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(M.depthTexture.format===wo)it(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(R){const M=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,R)}else if(Y){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=s.createRenderbuffer(),he(M.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),he(M.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(R,M,Y){const ie=n.get(R);M!==void 0&&Z(ie.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ge(R)}function $e(R){const M=R.texture,Y=n.get(R),ie=n.get(M);R.addEventListener("dispose",I);const re=R.textures,oe=R.isWebGLCubeRenderTarget===!0,Ie=re.length>1;if(Ie||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=M.version,o.memory.textures++),oe){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let xe=0;xe<M.mipmaps.length;xe++)Y.__webglFramebuffer[ye][xe]=s.createFramebuffer()}else Y.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let ye=0,xe=re.length;ye<xe;ye++){const Ve=n.get(re[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&it(R)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){const xe=re[ye];Y.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ye]);const Ve=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Le=T(xe.internalFormat,Ve,fe,xe.colorSpace,R.isXRRenderTarget===!0),ot=Oe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Le,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),le(s.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Z(Y.__webglFramebuffer[ye][xe],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xe);else Z(Y.__webglFramebuffer[ye],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ye=0,xe=re.length;ye<xe;ye++){const Ve=re[ye],fe=n.get(Ve);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),le(s.TEXTURE_2D,Ve),Z(Y.__webglFramebuffer,R,Ve,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),m(Ve)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ie.__webglTexture),le(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Z(Y.__webglFramebuffer[xe],R,M,s.COLOR_ATTACHMENT0,ye,xe);else Z(Y.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,ye,0);m(M)&&p(ye),t.unbindTexture()}R.depthBuffer&&ge(R)}function z(R){const M=R.textures;for(let Y=0,ie=M.length;Y<ie;Y++){const re=M[Y];if(m(re)){const oe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ie=n.get(re).__webglTexture;t.bindTexture(oe,Ie),p(oe),t.unbindTexture()}}}const yt=[],Pe=[];function vt(R){if(R.samples>0){if(it(R)===!1){const M=R.textures,Y=R.width,ie=R.height;let re=s.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=n.get(R),ye=M.length>1;if(ye)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Ve=n.get(M[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,re,s.NEAREST),c===!0&&(yt.length=0,Pe.length=0,yt.push(s.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push(oe),Pe.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Pe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[xe]);const Ve=n.get(M[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Oe(R){return Math.min(i.maxSamples,R.samples)}function it(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function rt(R,M){const Y=R.colorSpace,ie=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==qt&&Y!==ls&&(dt.getTransfer(Y)===wt?(ie!==ai||re!==gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=v,this.setTexture2D=D,this.setTexture2DArray=ne,this.setTexture3D=te,this.setTextureCube=ae,this.rebindTextures=nt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=it}function VT(s,e){function t(n,i=ls){let r;const o=dt.getTransfer(i);if(n===gs)return s.UNSIGNED_BYTE;if(n===Xf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lx)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ax)return s.BYTE;if(n===cx)return s.SHORT;if(n===Gf)return s.UNSIGNED_SHORT;if(n===Wf)return s.INT;if(n===Pr)return s.UNSIGNED_INT;if(n===oi)return s.FLOAT;if(n===Fo)return s.HALF_FLOAT;if(n===ux)return s.ALPHA;if(n===hx)return s.RGB;if(n===ai)return s.RGBA;if(n===dx)return s.LUMINANCE;if(n===fx)return s.LUMINANCE_ALPHA;if(n===Mr)return s.DEPTH_COMPONENT;if(n===wo)return s.DEPTH_STENCIL;if(n===Yf)return s.RED;if(n===jf)return s.RED_INTEGER;if(n===px)return s.RG;if(n===Kf)return s.RG_INTEGER;if(n===$f)return s.RGBA_INTEGER;if(n===Uc||n===Fc||n===Vc||n===Bc)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===ah||n===ch||n===lh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uh||n===hh||n===dh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uh||n===hh)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===yh||n===vh||n===Mh||n===Th||n===Sh||n===Eh||n===Ah||n===bh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ph)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Th)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ah)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===Nh||n===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zc)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mx||n===Rh||n===Ch||n===Lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class BT extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zT={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zT)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new qi({vertexShader:kT,fragmentShader:HT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rn(new uc(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class WT extends ji{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new GT,m=t.getContextAttributes();let p=null,T=null;const y=[],A=[],I=new Te;let w=null;const b=new Tn;b.layers.enable(1),b.viewport=new at;const B=new Tn;B.layers.enable(2),B.viewport=new at;const E=[b,B],v=new BT;v.layers.enable(1),v.layers.enable(2);let H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=y[Z];return he===void 0&&(he=new dl,y[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=y[Z];return he===void 0&&(he=new dl,y[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=y[Z];return he===void 0&&(he=new dl,y[Z]=he),he.getHandSpace()};function D(Z){const he=A.indexOf(Z.inputSource);if(he===-1)return;const Se=y[he];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,l||o),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ne(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",te);for(let Z=0;Z<y.length;Z++){const he=A[Z];he!==null&&(A[Z]=null,y[Z].disconnect(he))}H=null,J=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,T=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new zs(f.framebufferWidth,f.framebufferHeight,{format:ai,type:gs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Se=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?wo:Mr,Se=m.stencil?Vo:Pr);const nt={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new zs(d.textureWidth,d.textureHeight,{format:ai,type:gs,depthTexture:new zo(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function te(Z){for(let he=0;he<Z.removed.length;he++){const Se=Z.removed[he],ge=A.indexOf(Se);ge>=0&&(A[ge]=null,y[ge].disconnect(Se))}for(let he=0;he<Z.added.length;he++){const Se=Z.added[he];let ge=A.indexOf(Se);if(ge===-1){for(let $e=0;$e<y.length;$e++)if($e>=A.length){A.push(Se),ge=$e;break}else if(A[$e]===null){A[$e]=Se,ge=$e;break}if(ge===-1)break}const nt=y[ge];nt&&nt.connect(Se)}}const ae=new L,ce=new L;function j(Z,he,Se){ae.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ge=ae.distanceTo(ce),nt=he.projectionMatrix.elements,$e=Se.projectionMatrix.elements,z=nt[14]/(nt[10]-1),yt=nt[14]/(nt[10]+1),Pe=(nt[9]+1)/nt[5],vt=(nt[9]-1)/nt[5],Oe=(nt[8]-1)/nt[0],it=($e[8]+1)/$e[0],Ge=z*Oe,rt=z*it,Ct=ge/(-Oe+it),R=Ct*-Oe;he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(R),Z.translateZ(Ct),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const M=z+Ct,Y=yt+Ct,ie=Ge-R,re=rt+(ge-R),oe=Pe*yt/Y*M,Ie=vt*yt/Y*M;Z.projectionMatrix.makePerspective(ie,re,oe,Ie,M,Y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function ue(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),v.near=B.near=b.near=Z.near,v.far=B.far=b.far=Z.far,(H!==v.near||J!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),H=v.near,J=v.far,b.near=H,b.far=J,B.near=H,B.far=J,b.updateProjectionMatrix(),B.updateProjectionMatrix(),Z.updateProjectionMatrix());const he=Z.parent,Se=v.cameras;ue(v,he);for(let ge=0;ge<Se.length;ge++)ue(Se[ge],he);Se.length===2?j(v,b,B):v.projectionMatrix.copy(b.projectionMatrix),le(Z,v,he)};function le(Z,he,Se){Se===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ur*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null};let we=null;function tt(Z,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ge=!1;Se.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let $e=0;$e<Se.length;$e++){const z=Se[$e];let yt=null;if(f!==null)yt=f.getViewport(z);else{const vt=h.getViewSubImage(d,z);yt=vt.viewport,$e===0&&(e.setRenderTargetTextures(T,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(T))}let Pe=E[$e];Pe===void 0&&(Pe=new Tn,Pe.layers.enable($e),Pe.viewport=new at,E[$e]=Pe),Pe.matrix.fromArray(z.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(z.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(yt.x,yt.y,yt.width,yt.height),$e===0&&(v.matrix.copy(Pe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(Pe)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const $e=h.getDepthInformation(Se[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,i.renderState)}}for(let Se=0;Se<y.length;Se++){const ge=A[Se],nt=y[Se];ge!==null&&nt!==void 0&&nt.update(ge,he,l||o)}_.render(e,v),we&&we(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const mt=new up;mt.setAnimationLoop(tt),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}}const Ns=new Zn,XT=new Be;function qT(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ap(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,y,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),y=T.envMap,A=T.envMapRotation;if(y&&(m.envMap.value=y,Ns.copy(A),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const I=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*I,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function YT(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const A=y.program;n.uniformBlockBinding(T,A)}function l(T,y){let A=i[T.id];A===void 0&&(g(T),A=u(T),i[T.id]=A,T.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(T,I);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function u(T){const y=h();T.__bindingPointIndex=y;const A=s.createBuffer(),I=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,I,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,A),A}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=i[T.id],A=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,b=A.length;w<b;w++){const B=Array.isArray(A[w])?A[w]:[A[w]];for(let E=0,v=B.length;E<v;E++){const H=B[E];if(f(H,w,E,I)===!0){const J=H.__offset,D=Array.isArray(H.value)?H.value:[H.value];let ne=0;for(let te=0;te<D.length;te++){const ae=D[te],ce=_(ae);typeof ae=="number"||typeof ae=="boolean"?(H.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,J+ne,H.__data)):ae.isMatrix3?(H.__data[0]=ae.elements[0],H.__data[1]=ae.elements[1],H.__data[2]=ae.elements[2],H.__data[3]=0,H.__data[4]=ae.elements[3],H.__data[5]=ae.elements[4],H.__data[6]=ae.elements[5],H.__data[7]=0,H.__data[8]=ae.elements[6],H.__data[9]=ae.elements[7],H.__data[10]=ae.elements[8],H.__data[11]=0):(ae.toArray(H.__data,ne),ne+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,y,A,I){const w=T.value,b=y+"_"+A;if(I[b]===void 0)return typeof w=="number"||typeof w=="boolean"?I[b]=w:I[b]=w.clone(),!0;{const B=I[b];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return I[b]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function g(T){const y=T.uniforms;let A=0;const I=16;for(let b=0,B=y.length;b<B;b++){const E=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,H=E.length;v<H;v++){const J=E[v],D=Array.isArray(J.value)?J.value:[J.value];for(let ne=0,te=D.length;ne<te;ne++){const ae=D[ne],ce=_(ae),j=A%I;j!==0&&I-j<ce.boundary&&(A+=I-j),J.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=ce.storage}}}const w=A%I;return w>0&&(A+=I-w),T.__size=A,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class jT{constructor(e={}){const{canvas:t=Hx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const y=this;let A=!1,I=0,w=0,b=null,B=-1,E=null;const v=new at,H=new at;let J=null;const D=new Ne(0);let ne=0,te=t.width,ae=t.height,ce=1,j=null,ue=null;const le=new at(0,0,te,ae),we=new at(0,0,te,ae);let tt=!1;const mt=new Tu;let Z=!1,he=!1;const Se=new Be,ge=new L,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return b===null?ce:1}let z=n;function yt(S,V){return t.getContext(S,V)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_u}`),t.addEventListener("webglcontextlost",x,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",k,!1),z===null){const V="webgl2";if(z=yt(V,S),z===null)throw yt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Pe,vt,Oe,it,Ge,rt,Ct,R,M,Y,ie,re,oe,Ie,ye,xe,Ve,fe,Le,ot,De,Me,We,Ze;function Mt(){Pe=new nM(z),Pe.init(),Me=new VT(z,Pe),vt=new $v(z,Pe,e,Me),Oe=new UT(z),it=new rM(z),Ge=new TT,rt=new FT(z,Pe,Oe,Ge,vt,Me,it),Ct=new Jv(y),R=new tM(y),M=new d0(z),We=new jv(z,M),Y=new iM(z,M,it,We),ie=new aM(z,Y,M,it),Le=new oM(z,vt,rt),xe=new Zv(Ge),re=new MT(y,Ct,R,Pe,vt,We,xe),oe=new qT(y,Ge),Ie=new ET,ye=new CT(Pe),fe=new Yv(y,Ct,R,Oe,ie,d,c),Ve=new OT(y,ie,vt),Ze=new YT(z,it,vt,Oe),ot=new Kv(z,Pe,it),De=new sM(z,Pe,it),it.programs=re.programs,y.capabilities=vt,y.extensions=Pe,y.properties=Ge,y.renderLists=Ie,y.shadowMap=Ve,y.state=Oe,y.info=it}Mt();const Ye=new WT(y,z);this.xr=Ye,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(S){S!==void 0&&(ce=S,this.setSize(te,ae,!1))},this.getSize=function(S){return S.set(te,ae)},this.setSize=function(S,V,q=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=S,ae=V,t.width=Math.floor(S*ce),t.height=Math.floor(V*ce),q===!0&&(t.style.width=S+"px",t.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(te*ce,ae*ce).floor()},this.setDrawingBufferSize=function(S,V,q){te=S,ae=V,ce=q,t.width=Math.floor(S*q),t.height=Math.floor(V*q),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,V,q,W){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,V,q,W),Oe.viewport(v.copy(le).multiplyScalar(ce).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,V,q,W){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,V,q,W),Oe.scissor(H.copy(we).multiplyScalar(ce).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){Oe.setScissorTest(tt=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(S=!0,V=!0,q=!0){let W=0;if(S){let X=!1;if(b!==null){const ve=b.texture.format;X=ve===$f||ve===Kf||ve===jf}if(X){const ve=b.texture.type,be=ve===gs||ve===Pr||ve===Gf||ve===Vo||ve===Xf||ve===qf,Re=fe.getClearColor(),Ue=fe.getClearAlpha(),ze=Re.r,je=Re.g,Qe=Re.b;be?(f[0]=ze,f[1]=je,f[2]=Qe,f[3]=Ue,z.clearBufferuiv(z.COLOR,0,f)):(g[0]=ze,g[1]=je,g[2]=Qe,g[3]=Ue,z.clearBufferiv(z.COLOR,0,g))}else W|=z.COLOR_BUFFER_BIT}V&&(W|=z.DEPTH_BUFFER_BIT),q&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",x,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",k,!1),Ie.dispose(),ye.dispose(),Ge.dispose(),Ct.dispose(),R.dispose(),ie.dispose(),We.dispose(),Ze.dispose(),re.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",lt),Ye.removeEventListener("sessionend",kt),Nt.stop()};function x(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=it.autoReset,V=Ve.enabled,q=Ve.autoUpdate,W=Ve.needsUpdate,X=Ve.type;Mt(),it.autoReset=S,Ve.enabled=V,Ve.autoUpdate=q,Ve.needsUpdate=W,Ve.type=X}function k(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){const V=S.target;V.removeEventListener("dispose",se),de(V)}function de(S){Xe(S),Ge.remove(S)}function Xe(S){const V=Ge.get(S).programs;V!==void 0&&(V.forEach(function(q){re.releaseProgram(q)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,q,W,X,ve){V===null&&(V=nt);const be=X.isMesh&&X.matrixWorld.determinant()<0,Re=E_(S,V,q,W,X);Oe.setMaterial(W,be);let Ue=q.index,ze=1;if(W.wireframe===!0){if(Ue=Y.getWireframeAttribute(q),Ue===void 0)return;ze=2}const je=q.drawRange,Qe=q.attributes.position;let Ht=je.start*ze,dn=(je.start+je.count)*ze;ve!==null&&(Ht=Math.max(Ht,ve.start*ze),dn=Math.min(dn,(ve.start+ve.count)*ze)),Ue!==null?(Ht=Math.max(Ht,0),dn=Math.min(dn,Ue.count)):Qe!=null&&(Ht=Math.max(Ht,0),dn=Math.min(dn,Qe.count));const Pn=dn-Ht;if(Pn<0||Pn===1/0)return;We.setup(X,W,Re,q,Ue);let Di,ht=ot;if(Ue!==null&&(Di=M.get(Ue),ht=De,ht.setIndex(Di)),X.isMesh)W.wireframe===!0?(Oe.setLineWidth(W.wireframeLinewidth*$e()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(X.isLine){let ke=W.linewidth;ke===void 0&&(ke=1),Oe.setLineWidth(ke*$e()),X.isLineSegments?ht.setMode(z.LINES):X.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else X.isPoints?ht.setMode(z.POINTS):X.isSprite&&ht.setMode(z.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?ht.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ht.renderInstances(Ht,Pn,X.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ro=Math.min(q.instanceCount,ke);ht.renderInstances(Ht,Pn,ro)}else ht.render(Ht,Pn)};function Je(S,V,q){S.transparent===!0&&S.side===Si&&S.forceSinglePass===!1?(S.side=Sn,S.needsUpdate=!0,jo(S,V,q),S.side=Xi,S.needsUpdate=!0,jo(S,V,q),S.side=Si):jo(S,V,q)}this.compile=function(S,V,q=null){q===null&&(q=S),m=ye.get(q),m.init(V),T.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),S!==q&&S.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(y._useLegacyLights);const W=new Set;return S.traverse(function(X){const ve=X.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Re=ve[be];Je(Re,q,X),W.add(Re)}else Je(ve,q,X),W.add(ve)}),T.pop(),m=null,W},this.compileAsync=function(S,V,q=null){const W=this.compile(S,V,q);return new Promise(X=>{function ve(){if(W.forEach(function(be){Ge.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){X(S);return}setTimeout(ve,10)}Pe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Dt=null;function en(S){Dt&&Dt(S)}function lt(){Nt.stop()}function kt(){Nt.start()}const Nt=new up;Nt.setAnimationLoop(en),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(S){Dt=S,Ye.setAnimationLoop(S),S===null?Nt.stop():Nt.start()},Ye.addEventListener("sessionstart",lt),Ye.addEventListener("sessionend",kt),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(V),V=Ye.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,V,b),m=ye.get(S,T.length),m.init(V),T.push(m),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),mt.setFromProjectionMatrix(Se),he=this.localClippingEnabled,Z=xe.init(this.clippingPlanes,he),_=Ie.get(S,p.length),_.init(),p.push(_),Zi(S,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(j,ue);const q=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1;q&&fe.addToRenderList(_,S),this.info.render.frame++,Z===!0&&xe.beginShadows();const W=m.state.shadowsArray;Ve.render(W,S,V),Z===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,ve=_.transmissive;if(m.setupLights(y._useLegacyLights),V.isArrayCamera){const be=V.cameras;if(ve.length>0)for(let Re=0,Ue=be.length;Re<Ue;Re++){const ze=be[Re];Ji(X,ve,S,ze)}q&&fe.render(S);for(let Re=0,Ue=be.length;Re<Ue;Re++){const ze=be[Re];Wn(_,S,ze,ze.viewport)}}else ve.length>0&&Ji(X,ve,S,V),q&&fe.render(S),Wn(_,S,V);b!==null&&(rt.updateMultisampleRenderTarget(b),rt.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(y,S,V),We.resetDefaultState(),B=-1,E=null,T.pop(),T.length>0?(m=T[T.length-1],Z===!0&&xe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Zi(S,V,q,W){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||mt.intersectsSprite(S)){W&&ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const be=ie.update(S),Re=S.material;Re.visible&&_.push(S,be,Re,q,ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||mt.intersectsObject(S))){const be=ie.update(S),Re=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ge.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ge.copy(be.boundingSphere.center)),ge.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(Re)){const Ue=be.groups;for(let ze=0,je=Ue.length;ze<je;ze++){const Qe=Ue[ze],Ht=Re[Qe.materialIndex];Ht&&Ht.visible&&_.push(S,be,Ht,q,ge.z,Qe)}}else Re.visible&&_.push(S,be,Re,q,ge.z,null)}}const ve=S.children;for(let be=0,Re=ve.length;be<Re;be++)Zi(ve[be],V,q,W)}function Wn(S,V,q,W){const X=S.opaque,ve=S.transmissive,be=S.transparent;m.setupLightsView(q),Z===!0&&xe.setGlobalState(y.clippingPlanes,q),W&&Oe.viewport(v.copy(W)),X.length>0&&Pi(X,V,q),ve.length>0&&Pi(ve,V,q),be.length>0&&Pi(be,V,q),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ji(S,V,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new zs(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?Fo:gs,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ve=m.state.transmissionRenderTarget[W.id],be=W.viewport||v;ve.setSize(be.z,be.w);const Re=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(D),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear();const Ue=y.toneMapping;y.toneMapping=$n;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Z===!0&&xe.setGlobalState(y.clippingPlanes,W),Pi(S,q,W),rt.updateMultisampleRenderTarget(ve),rt.updateRenderTargetMipmap(ve),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Qe=0,Ht=V.length;Qe<Ht;Qe++){const dn=V[Qe],Pn=dn.object,Di=dn.geometry,ht=dn.material,ke=dn.group;if(ht.side===Si&&Pn.layers.test(W.layers)){const ro=ht.side;ht.side=Sn,ht.needsUpdate=!0,so(Pn,q,W,Di,ht,ke),ht.side=ro,ht.needsUpdate=!0,je=!0}}je===!0&&(rt.updateMultisampleRenderTarget(ve),rt.updateRenderTargetMipmap(ve))}y.setRenderTarget(Re),y.setClearColor(D,ne),ze!==void 0&&(W.viewport=ze),y.toneMapping=Ue}function Pi(S,V,q){const W=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ve=S.length;X<ve;X++){const be=S[X],Re=be.object,Ue=be.geometry,ze=W===null?be.material:W,je=be.group;Re.layers.test(q.layers)&&so(Re,V,q,Ue,ze,je)}}function so(S,V,q,W,X,ve){S.onBeforeRender(y,V,q,W,X,ve),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(y,V,q,W,S,ve),X.transparent===!0&&X.side===Si&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,y.renderBufferDirect(q,V,W,X,S,ve),X.side=Xi,X.needsUpdate=!0,y.renderBufferDirect(q,V,W,X,S,ve),X.side=Si):y.renderBufferDirect(q,V,W,X,S,ve),S.onAfterRender(y,V,q,W,X,ve)}function jo(S,V,q){V.isScene!==!0&&(V=nt);const W=Ge.get(S),X=m.state.lights,ve=m.state.shadowsArray,be=X.state.version,Re=re.getParameters(S,X.state,ve,V,q),Ue=re.getProgramCacheKey(Re);let ze=W.programs;W.environment=S.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(S.isMeshStandardMaterial?R:Ct).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?V.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",se),ze=new Map,W.programs=ze);let je=ze.get(Ue);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===be)return Ju(S,Re),je}else Re.uniforms=re.getUniforms(S),S.onBuild(q,Re,y),S.onBeforeCompile(Re,y),je=re.acquireProgram(Re,Ue),ze.set(Ue,je),W.uniforms=Re.uniforms;const Qe=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Qe.clippingPlanes=xe.uniform),Ju(S,Re),W.needsLights=b_(S),W.lightsStateVersion=be,W.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=je,W.uniformsList=null,je}function Zu(S){if(S.uniformsList===null){const V=S.currentProgram.getUniforms();S.uniformsList=wa.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function Ju(S,V){const q=Ge.get(S);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function E_(S,V,q,W,X){V.isScene!==!0&&(V=nt),rt.resetTextureUnits();const ve=V.fog,be=W.isMeshStandardMaterial?V.environment:null,Re=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:qt,Ue=(W.isMeshStandardMaterial?R:Ct).get(W.envMap||be),ze=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Qe=!!q.morphAttributes.position,Ht=!!q.morphAttributes.normal,dn=!!q.morphAttributes.color;let Pn=$n;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pn=y.toneMapping);const Di=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=Di!==void 0?Di.length:0,ke=Ge.get(W),ro=m.state.lights;if(Z===!0&&(he===!0||S!==E)){const Xn=S===E&&W.id===B;xe.setState(W,S,Xn)}let Lt=!1;W.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ro.state.version||ke.outputColorSpace!==Re||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ke.instancingMorph===!1&&X.morphTexture!==null||ke.envMap!==Ue||W.fog===!0&&ke.fog!==ve||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==xe.numPlanes||ke.numIntersection!==xe.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==je||ke.morphTargets!==Qe||ke.morphNormals!==Ht||ke.morphColors!==dn||ke.toneMapping!==Pn||ke.morphTargetsCount!==ht)&&(Lt=!0):(Lt=!0,ke.__version=W.version);let Ms=ke.currentProgram;Lt===!0&&(Ms=jo(W,V,X));let Qu=!1,oo=!1,Pc=!1;const fn=Ms.getUniforms(),Qi=ke.uniforms;if(Oe.useProgram(Ms.program)&&(Qu=!0,oo=!0,Pc=!0),W.id!==B&&(B=W.id,oo=!0),Qu||E!==S){fn.setValue(z,"projectionMatrix",S.projectionMatrix),fn.setValue(z,"viewMatrix",S.matrixWorldInverse);const Xn=fn.map.cameraPosition;Xn!==void 0&&Xn.setValue(z,ge.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&fn.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fn.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,oo=!0,Pc=!0)}if(X.isSkinnedMesh){fn.setOptional(z,X,"bindMatrix"),fn.setOptional(z,X,"bindMatrixInverse");const Xn=X.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),fn.setValue(z,"boneTexture",Xn.boneTexture,rt))}X.isBatchedMesh&&(fn.setOptional(z,X,"batchingTexture"),fn.setValue(z,"batchingTexture",X._matricesTexture,rt));const Dc=q.morphAttributes;if((Dc.position!==void 0||Dc.normal!==void 0||Dc.color!==void 0)&&Le.update(X,q,Ms),(oo||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,fn.setValue(z,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qi.envMap.value=Ue,Qi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&V.environment!==null&&(Qi.envMapIntensity.value=V.environmentIntensity),oo&&(fn.setValue(z,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&A_(Qi,Pc),ve&&W.fog===!0&&oe.refreshFogUniforms(Qi,ve),oe.refreshMaterialUniforms(Qi,W,ce,ae,m.state.transmissionRenderTarget[S.id]),wa.upload(z,Zu(ke),Qi,rt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wa.upload(z,Zu(ke),Qi,rt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fn.setValue(z,"center",X.center),fn.setValue(z,"modelViewMatrix",X.modelViewMatrix),fn.setValue(z,"normalMatrix",X.normalMatrix),fn.setValue(z,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xn=W.uniformsGroups;for(let Oc=0,N_=Xn.length;Oc<N_;Oc++){const eh=Xn[Oc];Ze.update(eh,Ms),Ze.bind(eh,Ms)}}return Ms}function A_(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function b_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,V,q){Ge.get(S.texture).__webglTexture=V,Ge.get(S.depthTexture).__webglTexture=q;const W=Ge.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,V){const q=Ge.get(S);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,q=0){b=S,I=V,w=q;let W=!0,X=null,ve=!1,be=!1;if(S){const Ue=Ge.get(S);Ue.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Ue.__webglFramebuffer===void 0?rt.setupRenderTarget(S):Ue.__hasExternalTextures&&rt.rebindTextures(S,Ge.get(S.texture).__webglTexture,Ge.get(S.depthTexture).__webglTexture);const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const je=Ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[V])?X=je[V][q]:X=je[V],ve=!0):S.samples>0&&rt.useMultisampledRTT(S)===!1?X=Ge.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?X=je[q]:X=je,v.copy(S.viewport),H.copy(S.scissor),J=S.scissorTest}else v.copy(le).multiplyScalar(ce).floor(),H.copy(we).multiplyScalar(ce).floor(),J=tt;if(Oe.bindFramebuffer(z.FRAMEBUFFER,X)&&W&&Oe.drawBuffers(S,X),Oe.viewport(v),Oe.scissor(H),Oe.setScissorTest(J),ve){const Ue=Ge.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,q)}else if(be){const Ue=Ge.get(S.texture),ze=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,ze)}B=-1},this.readRenderTargetPixels=function(S,V,q,W,X,ve,be){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){Oe.bindFramebuffer(z.FRAMEBUFFER,Re);try{const Ue=S.texture,ze=Ue.format,je=Ue.type;if(!vt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-W&&q>=0&&q<=S.height-X&&z.readPixels(V,q,W,X,Me.convert(ze),Me.convert(je),ve)}finally{const Ue=b!==null?Ge.get(b).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(S,V,q=0){const W=Math.pow(2,-q),X=Math.floor(V.image.width*W),ve=Math.floor(V.image.height*W);rt.setTexture2D(V,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,S.x,S.y,X,ve),Oe.unbindTexture()},this.copyTextureToTexture=function(S,V,q,W=0){const X=V.image.width,ve=V.image.height,be=Me.convert(q.format),Re=Me.convert(q.type);rt.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,S.x,S.y,X,ve,be,Re,V.image.data):V.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,S.x,S.y,V.mipmaps[0].width,V.mipmaps[0].height,be,V.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,S.x,S.y,be,Re,V.image),W===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(S,V,q,W,X=0){const ve=S.max.x-S.min.x,be=S.max.y-S.min.y,Re=S.max.z-S.min.z,Ue=Me.convert(W.format),ze=Me.convert(W.type);let je;if(W.isData3DTexture)rt.setTexture3D(W,0),je=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)rt.setTexture2DArray(W,0),je=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Qe=z.getParameter(z.UNPACK_ROW_LENGTH),Ht=z.getParameter(z.UNPACK_IMAGE_HEIGHT),dn=z.getParameter(z.UNPACK_SKIP_PIXELS),Pn=z.getParameter(z.UNPACK_SKIP_ROWS),Di=z.getParameter(z.UNPACK_SKIP_IMAGES),ht=q.isCompressedTexture?q.mipmaps[X]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ht.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,S.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,S.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(je,X,V.x,V.y,V.z,ve,be,Re,Ue,ze,ht.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(je,X,V.x,V.y,V.z,ve,be,Re,Ue,ht.data):z.texSubImage3D(je,X,V.x,V.y,V.z,ve,be,Re,Ue,ze,ht),z.pixelStorei(z.UNPACK_ROW_LENGTH,Qe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ht),z.pixelStorei(z.UNPACK_SKIP_PIXELS,dn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Di),X===0&&W.generateMipmaps&&z.generateMipmap(je),Oe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?rt.setTextureCube(S,0):S.isData3DTexture?rt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?rt.setTexture2DArray(S,0):rt.setTexture2D(S,0),Oe.unbindTexture()},this.resetState=function(){I=0,w=0,b=null,Oe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xu?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===cc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class KT extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return np("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new L;class fc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $T extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ad=new L,bd=new at,Nd=new at,ZT=new L,wd=new Be,ga=new L,fl=new Ci,Rd=new Be,pl=new Wr;class JT extends Rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rh,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ga),this.boundingBox.expandByPoint(ga)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ga),this.boundingSphere.expandByPoint(ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(i),e.ray.intersectsSphere(fl)!==!1&&(Rd.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Rd),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ox?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bd.fromBufferAttribute(i.attributes.skinIndex,e),Nd.fromBufferAttribute(i.attributes.skinWeight,e),Ad.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nd.getComponent(r);if(o!==0){const a=bd.getComponent(r);wd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ZT.copy(Ad).applyMatrix4(wd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gp extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _p extends Zt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=$t,u=$t,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new Be,QT=new Be;class Au{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:QT;Cd.multiplyMatrices(a,t[r]),Cd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Au(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _p(t,e,e,ai,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gp),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ga extends En{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fr=new Be,Ld=new Be,_a=[],Id=new Ki,eS=new Be,ho=new Rn,fo=new Ci;class tS extends Rn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),Id.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(Id)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),fo.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fr),Ld.multiplyMatrices(n,fr),ho.matrixWorld=Ld,ho.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){const c=_a[o];c.instanceId=r,c.object=this,t.push(c)}_a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _p(new Float32Array(i*this.count),i,this.count,Yf,oi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pc extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new L,Xa=new L,Pd=new Be,po=new Wr,xa=new Ci,ml=new L,Dd=new L;class bu extends It{constructor(e=new _i,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wa.fromBufferAttribute(t,i-1),Xa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;Pd.copy(i).invert(),po.copy(e.ray).applyMatrix4(Pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),T=u.getX(_+1),y=ya(this,e,po,c,p,T);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ya(this,e,po,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=ya(this,e,po,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ya(this,e,po,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ya(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Wa.fromBufferAttribute(o,i),Xa.fromBufferAttribute(o,r),t.distanceSqToSegment(Wa,Xa,ml,Dd)>n)return;ml.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ml);if(!(c<e.near||c>e.far))return{distance:c,point:Dd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Od=new L,Ud=new L;class nS extends bu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Od.fromBufferAttribute(t,i),Ud.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Od.distanceTo(Ud);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iS extends bu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mc extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fd=new Be,Yl=new Wr,va=new Ci,Ma=new L;class sS extends It{constructor(e=new _i,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Fd.copy(i).invert(),Yl.copy(e.ray).applyMatrix4(Fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ma.fromBufferAttribute(h,m),Vd(Ma,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ma.fromBufferAttribute(h,g),Vd(Ma,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vd(s,e,t,n,i,r,o){const a=Yl.distanceSqToPoint(s);if(a<t){const c=new L;Yl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class xp extends Zt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=$t,this.minFilter=$t,this.generateMipmaps=!1,this.needsUpdate=!0}}class rS extends xn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class gc extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xi extends gc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class oS extends xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aS extends xn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class cS extends xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bs,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yp extends pc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ta(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function uS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function vp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ko{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hS extends ko{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=e,a=2*t-n;break;case Dh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ph:o=e,c=2*n-t;break;case Dh:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,A=f*m-f*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+T*o[l+I]+y*o[c+I]+A*o[h+I];return r}}class dS extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class fS extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Li{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&lS(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=Dr;class qr extends Li{}qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Ro;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mp extends Li{}Mp.prototype.ValueTypeName="color";class Vr extends Li{}Vr.prototype.ValueTypeName="number";class pS extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ni.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ks extends Li{InterpolantFactoryMethodLinear(e){return new pS(this.times,this.values,this.getValueSize(),e)}}ks.prototype.ValueTypeName="quaternion";ks.prototype.DefaultInterpolation=Dr;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends Li{}Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Ro;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends Li{}Br.prototype.ValueTypeName="vector";class mS{constructor(e="",t=-1,n=[],i=gx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_S(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Li.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=uS(c);c=Bd(c,1,u),l=Bd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Vr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];vp(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Vr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Br,f+".position",d,"pos",i),n(ks,f+".quaternion",d,"rot",i),n(Br,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vr;case"vector":case"vector2":case"vector3":case"vector4":return Br;case"color":return Mp;case"quaternion":return ks;case"bool":case"boolean":return qr;case"string":return Yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _S(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gS(s.type);if(s.times===void 0){const t=[],n=[];vp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ds={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xS{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const yS=new xS;class jr{constructor(e){this.manager=e!==void 0?e:yS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class vS extends Error{constructor(e,t){super(e),this.response=t}}class Tp extends jr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:i});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=zi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:y,value:A})=>{if(y)p.close();else{_+=A.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,b=u.length;w<b;w++){const B=u[w];B.onProgress&&B.onProgress(I)}p.enqueue(A),T()}})}}});return new Response(m)}else throw new vS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ds.add(e,l);const u=zi[e];delete zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=zi[e];if(u===void 0)throw this.manager.itemError(e),l;delete zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class MS extends jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Co("img");function c(){u(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class TS extends jr{constructor(e){super(e)}load(e,t,n,i){const r=new Zt,o=new MS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ho extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class SS extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gl=new Be,zd=new L,kd=new L;class Nu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ES extends Nu{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ur*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wu extends Ho{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ES}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hd=new Be,mo=new L,_l=new L;class AS extends Nu{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),n.position.copy(mo),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),i.makeTranslation(-mo.x,-mo.y,-mo.z),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}}class Ru extends Ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new AS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bS extends Nu{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new bS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ep extends Ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ao{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class NS extends jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ds.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,c),r.manager.itemStart(e)}}const Cu="\\[\\]\\.:\\/",wS=new RegExp("["+Cu+"]","g"),Lu="[^"+Cu+"]",RS="[^"+Cu.replace("\\.","")+"]",CS=/((?:WC+[\/:])*)/.source.replace("WC",Lu),LS=/(WCOD+)?/.source.replace("WCOD",RS),IS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),PS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),DS=new RegExp("^"+CS+LS+IS+PS+"$"),OS=["material","materials","bones","map"];class US{constructor(e,t,n){const i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wS,"")}static parseTrackName(e){const t=DS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);OS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=US;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class FS extends Eu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Gd=new Be;class VS{constructor(e,t,n=0,i=1/0){this.ray=new Wr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gd),this}intersectObject(e,t=!0,n=[]){return jl(e,this,n,t),n.sort(Wd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)jl(e[i],this,n,t);return n.sort(Wd),n}}function Wd(s,e){return s.distance-e.distance}function jl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)jl(i[r],e,t,!0)}}class Xd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(on(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);const qd={type:"change"},xl={type:"start"},Yd={type:"end"},Sa=new Wr,jd=new Hi,BS=Math.cos(70*lc.DEG2RAD);class zS extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ks.ROTATE,TWO:Ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",Ve),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qd),n.update(),r=i.NONE},this.update=function(){const x=new L,F=new Ni().setFromUnitVectors(e.up,new L(0,1,0)),k=F.clone().invert(),se=new L,de=new Ni,Xe=new L,Je=2*Math.PI;return function(en=null){const lt=n.object.position;x.copy(lt).sub(n.target),x.applyQuaternion(F),a.setFromVector3(x),n.autoRotate&&r===i.NONE&&J(v(en)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let kt=n.minAzimuthAngle,Nt=n.maxAzimuthAngle;isFinite(kt)&&isFinite(Nt)&&(kt<-Math.PI?kt+=Je:kt>Math.PI&&(kt-=Je),Nt<-Math.PI?Nt+=Je:Nt>Math.PI&&(Nt-=Je),kt<=Nt?a.theta=Math.max(kt,Math.min(Nt,a.theta)):a.theta=a.theta>(kt+Nt)/2?Math.max(kt,a.theta):Math.min(Nt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Zi=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)a.radius=le(a.radius);else{const Wn=a.radius;a.radius=le(a.radius*l),Zi=Wn!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(k),lt.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let Wn=null;if(n.object.isPerspectiveCamera){const Ji=x.length();Wn=le(Ji*l);const Pi=Ji-Wn;n.object.position.addScaledVector(A,Pi),n.object.updateMatrixWorld(),Zi=!!Pi}else if(n.object.isOrthographicCamera){const Ji=new L(I.x,I.y,0);Ji.unproject(n.object);const Pi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Zi=Pi!==n.object.zoom;const so=new L(I.x,I.y,0);so.unproject(n.object),n.object.position.sub(so).add(Ji),n.object.updateMatrixWorld(),Wn=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Wn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Wn).add(n.object.position):(Sa.origin.copy(n.object.position),Sa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Sa.direction))<BS?e.lookAt(n.target):(jd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Sa.intersectPlane(jd,n.target))))}else if(n.object.isOrthographicCamera){const Wn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Wn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Zi=!0)}return l=1,w=!1,Zi||se.distanceToSquared(n.object.position)>o||8*(1-de.dot(n.object.quaternion))>o||Xe.distanceToSquared(n.target)>o?(n.dispatchEvent(qd),se.copy(n.object.position),de.copy(n.object.quaternion),Xe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ot),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",Y),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",Y),n.domElement.getRootNode().removeEventListener("keydown",ye,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ve),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Xd,c=new Xd;let l=1;const u=new L,h=new Te,d=new Te,f=new Te,g=new Te,_=new Te,m=new Te,p=new Te,T=new Te,y=new Te,A=new L,I=new Te;let w=!1;const b=[],B={};let E=!1;function v(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function H(x){const F=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*F)}function J(x){c.theta-=x}function D(x){c.phi-=x}const ne=function(){const x=new L;return function(k,se){x.setFromMatrixColumn(se,0),x.multiplyScalar(-k),u.add(x)}}(),te=function(){const x=new L;return function(k,se){n.screenSpacePanning===!0?x.setFromMatrixColumn(se,1):(x.setFromMatrixColumn(se,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(k),u.add(x)}}(),ae=function(){const x=new L;return function(k,se){const de=n.domElement;if(n.object.isPerspectiveCamera){const Xe=n.object.position;x.copy(Xe).sub(n.target);let Je=x.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),ne(2*k*Je/de.clientHeight,n.object.matrix),te(2*se*Je/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ne(k*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),te(se*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ce(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(x,F){if(!n.zoomToCursor)return;w=!0;const k=n.domElement.getBoundingClientRect(),se=x-k.left,de=F-k.top,Xe=k.width,Je=k.height;I.x=se/Xe*2-1,I.y=-(de/Je)*2+1,A.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function we(x){h.set(x.clientX,x.clientY)}function tt(x){ue(x.clientX,x.clientX),p.set(x.clientX,x.clientY)}function mt(x){g.set(x.clientX,x.clientY)}function Z(x){d.set(x.clientX,x.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;J(2*Math.PI*f.x/F.clientHeight),D(2*Math.PI*f.y/F.clientHeight),h.copy(d),n.update()}function he(x){T.set(x.clientX,x.clientY),y.subVectors(T,p),y.y>0?ce(H(y.y)):y.y<0&&j(H(y.y)),p.copy(T),n.update()}function Se(x){_.set(x.clientX,x.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),ae(m.x,m.y),g.copy(_),n.update()}function ge(x){ue(x.clientX,x.clientY),x.deltaY<0?j(H(x.deltaY)):x.deltaY>0&&ce(H(x.deltaY)),n.update()}function nt(x){let F=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ae(-n.keyPanSpeed,0),F=!0;break}F&&(x.preventDefault(),n.update())}function $e(x){if(b.length===1)h.set(x.pageX,x.pageY);else{const F=Mt(x),k=.5*(x.pageX+F.x),se=.5*(x.pageY+F.y);h.set(k,se)}}function z(x){if(b.length===1)g.set(x.pageX,x.pageY);else{const F=Mt(x),k=.5*(x.pageX+F.x),se=.5*(x.pageY+F.y);g.set(k,se)}}function yt(x){const F=Mt(x),k=x.pageX-F.x,se=x.pageY-F.y,de=Math.sqrt(k*k+se*se);p.set(0,de)}function Pe(x){n.enableZoom&&yt(x),n.enablePan&&z(x)}function vt(x){n.enableZoom&&yt(x),n.enableRotate&&$e(x)}function Oe(x){if(b.length==1)d.set(x.pageX,x.pageY);else{const k=Mt(x),se=.5*(x.pageX+k.x),de=.5*(x.pageY+k.y);d.set(se,de)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;J(2*Math.PI*f.x/F.clientHeight),D(2*Math.PI*f.y/F.clientHeight),h.copy(d)}function it(x){if(b.length===1)_.set(x.pageX,x.pageY);else{const F=Mt(x),k=.5*(x.pageX+F.x),se=.5*(x.pageY+F.y);_.set(k,se)}m.subVectors(_,g).multiplyScalar(n.panSpeed),ae(m.x,m.y),g.copy(_)}function Ge(x){const F=Mt(x),k=x.pageX-F.x,se=x.pageY-F.y,de=Math.sqrt(k*k+se*se);T.set(0,de),y.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),ce(y.y),p.copy(T);const Xe=(x.pageX+F.x)*.5,Je=(x.pageY+F.y)*.5;ue(Xe,Je)}function rt(x){n.enableZoom&&Ge(x),n.enablePan&&it(x)}function Ct(x){n.enableZoom&&Ge(x),n.enableRotate&&Oe(x)}function R(x){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",Y)),!We(x)&&(De(x),x.pointerType==="touch"?fe(x):ie(x)))}function M(x){n.enabled!==!1&&(x.pointerType==="touch"?Le(x):re(x))}function Y(x){switch(Me(x),b.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",Y),n.dispatchEvent(Yd),r=i.NONE;break;case 1:const F=b[0],k=B[F];fe({pointerId:F,pageX:k.x,pageY:k.y});break}}function ie(x){let F;switch(x.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case js.DOLLY:if(n.enableZoom===!1)return;tt(x),r=i.DOLLY;break;case js.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;mt(x),r=i.PAN}else{if(n.enableRotate===!1)return;we(x),r=i.ROTATE}break;case js.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;we(x),r=i.ROTATE}else{if(n.enablePan===!1)return;mt(x),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xl)}function re(x){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Z(x);break;case i.DOLLY:if(n.enableZoom===!1)return;he(x);break;case i.PAN:if(n.enablePan===!1)return;Se(x);break}}function oe(x){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(x.preventDefault(),n.dispatchEvent(xl),ge(Ie(x)),n.dispatchEvent(Yd))}function Ie(x){const F=x.deltaMode,k={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(F){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return x.ctrlKey&&!E&&(k.deltaY*=10),k}function ye(x){x.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(x){x.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function Ve(x){n.enabled===!1||n.enablePan===!1||nt(x)}function fe(x){switch(Ze(x),b.length){case 1:switch(n.touches.ONE){case Ks.ROTATE:if(n.enableRotate===!1)return;$e(x),r=i.TOUCH_ROTATE;break;case Ks.PAN:if(n.enablePan===!1)return;z(x),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ks.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(x),r=i.TOUCH_DOLLY_PAN;break;case Ks.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;vt(x),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xl)}function Le(x){switch(Ze(x),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Oe(x),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;it(x),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(x),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(x),n.update();break;default:r=i.NONE}}function ot(x){n.enabled!==!1&&x.preventDefault()}function De(x){b.push(x.pointerId)}function Me(x){delete B[x.pointerId];for(let F=0;F<b.length;F++)if(b[F]==x.pointerId){b.splice(F,1);return}}function We(x){for(let F=0;F<b.length;F++)if(b[F]==x.pointerId)return!0;return!1}function Ze(x){let F=B[x.pointerId];F===void 0&&(F=new Te,B[x.pointerId]=F),F.set(x.pageX,x.pageY)}function Mt(x){const F=x.pointerId===b[0]?b[1]:b[0];return B[F]}n.domElement.addEventListener("contextmenu",ot),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",Y),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}function Kd(s,e){if(e===_x)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wl||e===Zf){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Wl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class kS extends wu{constructor(e,t,n,i,r,o){super(e,t,n,i,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const HS=kS;class GS extends jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new cE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ao.extractUrlBase(e);o=Ao.resolveURL(l,this.path)}else o=Ao.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Tp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ap){try{o[st.KHR_BINARY_GLTF]=new lE(e)}catch(h){i&&i(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new TE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new qS;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new uE(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new hE;break;case st.KHR_MESH_QUANTIZATION:o[h]=new dE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function WS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XS{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ru(u),l.distance=h;break;case"spot":l=new wu(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,as(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class qS{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return hs}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gn))}return Promise.all(i)}}class YS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(r)}}class KS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $S{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ZS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class JS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class QS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}}class eE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gn)),Promise.all(r)}}class nE{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class iE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class sE{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class rE{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oE{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aE{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class cE{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Yn.TRIANGLES&&l.mode!==Yn.TRIANGLE_STRIP&&l.mode!==Yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Be,m=new L,p=new Ni,T=new L(1,1,1),y=new tS(g.geometry,g.material,d);for(let A=0;A<d;A++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,A),c.SCALE&&T.fromBufferAttribute(c.SCALE,A),y.setMatrixAt(A,_.compose(m,p,T));for(const A in c)if(A==="_COLOR_0"){const I=c[A];y.instanceColor=new Ga(I.array,I.itemSize,I.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,c[A]);It.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Ap="glTF",go=12,$d={JSON:1313821514,BIN:5130562};class lE{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-go,r=new DataView(e,go);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===$d.JSON){const l=new Uint8Array(e,go+o,a);this.content=n.decode(l)}else if(c===$d.BIN){const l=go+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Kl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Kl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Sr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,qt,d)})})}}class hE{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dE{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class bp extends ko{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,T=1-m,y=p-d+h;for(let A=0;A!==a;A++){const I=o[_+A+a],w=o[_+A+c]*u,b=o[g+A+a],B=o[g+A]*u;r[A]=T*I+y*w+m*b+p*B}return r}}const fE=new Ni;class pE extends bp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return fE.fromArray(r).normalize().toArray(r),r}}const Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zd={9728:$t,9729:Fn,9984:Hf,9985:Na,9986:vo,9987:Ai},Jd={33071:us,33648:Va,10497:Ir},yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mE={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Ro},vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),s.DefaultMaterial}function ws(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function as(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _E(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function xE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yE(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=s.indices+":"+Ml(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ml(s.targets[n]);return e}function Ml(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $l(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ME=new Be;class TE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new TS(this.options.manager):this.textureLoader=new NS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ws(r,a,i),as(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ao.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=yl[i.type],a=Sr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new En(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=yl[i.type],l=Sr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(T);y||(_=new l(a,p*f,i.count*f/u),y=new Eu(_,f/u),t.cache.add(T,y)),m=new fc(y,c,d%f/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new En(_,c,g);if(i.sparse!==void 0){const p=yl.SCALAR,T=Sr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,I=new T(o[1],y,i.sparse.count*p),w=new l(o[2],A,i.sparse.count*c);a!==null&&(m=new En(m.array.slice(),m.itemSize,m.normalized));for(let b=0,B=I.length;b<B;b++){const E=I[b];if(m.setX(E,w[b*c]),c>=2&&m.setY(E,w[b*c+1]),c>=3&&m.setZ(E,w[b*c+2]),c>=4&&m.setW(E,w[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Zd[d.magFilter]||Fn,u.minFilter=Zd[d.minFilter]||Ai,u.wrapS=Jd[d.wrapS]||Ir,u.wrapT=Jd[d.wrapT]||Ir,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Zt(_);m.needsUpdate=!0,d(m)}),t.load(Ao.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||vE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new mc,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new pc,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,gn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Si);const u=r.alphaMode||vl.OPAQUE;if(u===vl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===vl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hs&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==hs&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hs){const h=r.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&o!==hs&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gn)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),as(h,r),t.associations.set(h,{materials:e}),r.extensions&&ws(i,h,r),h})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Qd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=yE(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Qd(new _i,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?gE(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const T=l[f];if(m.mode===Yn.TRIANGLES||m.mode===Yn.TRIANGLE_STRIP||m.mode===Yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new JT(_,T):new Rn(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Yn.TRIANGLE_STRIP?p.geometry=Kd(p.geometry,Zf):m.mode===Yn.TRIANGLE_FAN&&(p.geometry=Kd(p.geometry,Wl));else if(m.mode===Yn.LINES)p=new nS(_,T);else if(m.mode===Yn.LINE_STRIP)p=new bu(_,T);else if(m.mode===Yn.LINE_LOOP)p=new iS(_,T);else if(m.mode===Yn.POINTS)p=new sS(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&xE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),as(p,r),m.extensions&&ws(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ws(i,h[0],r),h[0];const d=new Fs;r.extensions&&ws(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(lc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),as(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Au(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let T=0,y=d.length;T<y;T++){const A=d[T],I=f[T],w=g[T],b=_[T],B=m[T];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const E=n._createAnimationTracks(A,I,w,b,B);if(E)for(let v=0;v<E.length;v++)p.push(E[v])}return new mS(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ME)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new gp:l.length>1?u=new Fs:l.length===1?u=l[0]:u=new It,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),as(u,r),r.extensions&&ws(n,u,r),r.matrix!==void 0){const h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Fs;n.name&&(r.name=i.createUniqueName(n.name)),as(r,n),n.extensions&&ws(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof xn||d instanceof Zt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];os[r.path]===os.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(os[r.path]){case os.weights:l=Vr;break;case os.rotation:l=ks;break;case os.position:case os.scale:l=Br;break;default:switch(n.itemSize){case 1:l=Vr;break;case 2:case 3:default:l=Br;break}break}const u=i.interpolation!==void 0?mE[i.interpolation]:Dr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+os[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$l(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ks?pE:bp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function SE(s,e,t){const n=e.attributes,i=new Ki;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const u=$l(Sr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=$l(Sr[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ci;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Qd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Kl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return dt.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),as(s,e),SE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_E(s,e.targets,t):s})}var ii,ef,rn;(function(s){s.Pan="Pan",s.Tilt="Tilt",s.Roll="Roll",s.Truck="Truck",s.Pedestal="Pedestal",s.Dolly="Dolly",s.Zoom="Zoom"})(ii||(ii={})),function(s){s.Body="body",s.Head="head",s.Eyes="eyes"}(ef||(ef={})),function(s){s.X="x",s.Y="y",s.Z="z"}(rn||(rn={}));rn.X+"",new L(1,0,0),rn.Y+"",new L(0,1,0),rn.Z+"",new L(0,0,1);rn.X+"",ii.Pan+"",rn.X,ii.Tilt+"",rn.Z,ii.Roll+"",rn.Y,rn.Y+"",ii.Pan+"",rn.Y,ii.Tilt+"",rn.X,ii.Roll+"",rn.Z,rn.Z+"",ii.Pan+"",rn.Z,ii.Tilt+"",rn.Y,ii.Roll+"",rn.X;(function(s,e){e===void 0&&(e={});var t=e.insertAt;if(s&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=s:i.appendChild(document.createTextNode(s))}})(`.tb-ch {
  width: 350px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  overflow-x: visible;
  transition: all 0.2s ease-in-out;
}
  .tb-ch.collapsed {
    left: -350px;
  }
  .tb-ch * {
    box-sizing: border-box;
  }
  .tb-ch button {
    text-transform: capitalize;
    cursor: pointer;
  }
  .tb-ch .btn-round {
    font-size: 1.8rem;
    line-height: 1;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    right: -3rem;
    bottom: 0.5rem;
  }
  .tb-ch .btn-round.collapse {
      bottom: 3.5rem;
    }
  .tb-ch .controls {
    position: absolute;
    bottom: 0;
    height: 225px;
    border-top: 1px solid black;
    padding: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .tb-ch .btn-text {
    padding: 0.5rem;
    text-align: center;
    width: 100%;
  }
  .tb-ch input[type='range'] {
    width: 100%;
  }
  .tb-ch .pois {
    height: calc(100vh - 225px - 1rem);
    overflow: scroll;
    padding: 1rem 1rem 0;
  }
  .tb-ch .poi {
    margin-bottom: 1rem;
  }
  .tb-ch .poi h2 {
      font-size: 1rem;
    }
  .tb-ch .poi .wrapper {
      display: flex;
      flex-direction: row;
    }
  .tb-ch .poi img {
      display: block;
      max-width: 100%;
      min-width: 0;
      margin-right: 0.5rem;
    }
  .tb-ch .poi .poi-controls {
      display: flex;
      flex-direction: column;
    }
  .tb-ch .poi .poi-controls button {
        padding: 0.5rem;
        width: 2rem;
        height: 2rem;
        margin-bottom: 0.25rem;
      }
  .tb-ch .poi .poi-params {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: calc(100% - 2.5rem);
    }
  .tb-ch .poi label,
    .tb-ch .poi input,
    .tb-ch .poi select {
      width: 50%;
      font-size: 0.7rem;
      font-family: monospace;
      margin: 0.25rem 0;
    }
  .tb-ch .poi input {
      text-align: center;
    }
`);const tf={VERTEX:"vertex",FRAGMENT:"fragment"},St={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},_c=["x","y","z","w"];function Np(s,e=!1){let t="{";s.isNode===!0&&(t+=s.id);for(const{property:n,childNode:i}of qa(s))t+=","+n.slice(0,-4)+":"+i.getCacheKey(e);return t+="}",t}function*qa(s,e=!1){for(const t in s){if(t.startsWith("_")===!0)continue;const n=s[t];if(Array.isArray(n)===!0)for(let i=0;i<n.length;i++){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const i in n){const r=n[i];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:i,childNode:r})}}}function fs(s){if(s==null)return null;const e=typeof s;return s.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":s.isVector2===!0?"vec2":s.isVector3===!0?"vec3":s.isVector4===!0?"vec4":s.isMatrix3===!0?"mat3":s.isMatrix4===!0?"mat4":s.isColor===!0?"color":s instanceof ArrayBuffer?"ArrayBuffer":null}function wp(s,...e){const t=s?s.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),s==="color"?new Ne(...e):t==="vec2"?new Te(...e):t==="vec3"?new L(...e):t==="vec4"?new at(...e):t==="mat3"?new qe(...e):t==="mat4"?new Be(...e):s==="bool"?e[0]||!1:s==="float"||s==="int"||s==="uint"?e[0]||0:s==="string"?e[0]||"":s==="ArrayBuffer"?Cp(e[0]):null}function Rp(s){let e="";const t=new Uint8Array(s);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Cp(s){return Uint8Array.from(atob(s),e=>e.charCodeAt(0)).buffer}const nf=new Map;let EE=0;class Ce extends ji{constructor(e=null){super(),this.nodeType=e,this.updateType=St.NONE,this.updateBeforeType=St.NONE,this.uuid=lc.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:EE++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,St.FRAME)}onRenderUpdate(e){return this.onUpdate(e,St.RENDER)}onObjectUpdate(e){return this.onUpdate(e,St.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of qa(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Np(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const i of Object.values(n))i&&i.isNode===!0&&i.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let i=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);i=c.snippet,i===void 0&&(i=this.generate(e)||"",c.snippet=i),i=e.format(i,a,t)}else i=this.generate(e,t)||"";return e.removeChain(this),i}getSerializeChildren(){return qa(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:i,index:r,childNode:o}of t)r!==void 0?(n[i]===void 0&&(n[i]=Number.isInteger(r)?[]:{}),n[i][r]=o.toJSON(e.meta).uuid):n[i]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const i=[];for(const r of e.inputNodes[n])i.push(t[r]);this[n]=i}else if(typeof e.inputNodes[n]=="object"){const i={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];i[r]=t[o]}this[n]=i}else{const i=e.inputNodes[n];this[n]=t[i]}}}toJSON(e){const{uuid:t,type:n}=this,i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},i!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(i){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function Q(s,e){if(typeof e!="function"||!s)throw new Error(`Node class ${s} is not a class`);if(nf.has(s)){console.warn(`Redefinition of node class ${s}`);return}nf.set(s,e),e.type=s}class At extends Ce{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const i=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,i,t);if(e.context.tempWrite!==!1&&i!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,i),a=e.getVarFromNode(this,null,i),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,i,t)}}return super.build(e,t)}}Q("TempNode",At);class Kr extends Ce{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}Q("ArrayElementNode",Kr);class Iu extends Ce{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const i of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(i))&&(n=i);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,i=this.getNodeType(e),r=n.build(e,i);return e.format(r,i,t)}}Q("ConvertNode",Iu);class Lp extends At{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),i=this.nodes,r=e.getComponentType(n),o=[];for(const c of i){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}Q("JoinNode",Lp);const AE=_c.join("");class Zl extends Ce{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(_c.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,i=e.getTypeLength(n.getNodeType(e));let r=null;if(i>1){let o=null;this.getVectorLength()>=i&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===i&&this.components===AE.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}Q("SplitNode",Zl);class Ip extends At{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:i}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=i.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=_c[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}Q("SetNode",Ip);class xc extends Ce{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?fs(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=fs(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Rp(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?wp(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}Q("InputNode",xc);class Jn extends xc{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}Q("ConstNode",Jn);let zr=null;const gr=new Map;function U(s,e){if(gr.has(s)){console.warn(`Redefinition of node element ${s}`);return}if(typeof e!="function")throw new Error(`Node element ${s} is not a function`);gr.set(s,e)}const sf=s=>s.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Pp={setup(s,e){const t=e.shift();return s(Mc(t),...e)},get(s,e,t){if(typeof e=="string"&&s[e]===void 0){if(s.isStackNode!==!0&&e==="assign")return(...n)=>(zr.assign(t,...n),t);if(gr.has(e)){const n=gr.get(e);return s.isStackNode?(...i)=>t.add(n(...i)):(...i)=>n(t,...i)}else{if(e==="self")return s;if(e.endsWith("Assign")&&gr.has(e.slice(0,e.length-6))){const n=gr.get(e.slice(0,e.length-6));return s.isStackNode?(...i)=>t.assign(i[0],n(...i)):(...i)=>t.assign(n(t,...i))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=sf(e),pe(new Zl(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=sf(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>pe(new Ip(s,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),pe(new Zl(s,e));if(/^\d+$/.test(e)===!0)return pe(new Kr(t,new Jn(Number(e),"uint")))}}}return Reflect.get(s,e,t)},set(s,e,t,n){return typeof e=="string"&&s[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(s,e,t,n)}},Tl=new WeakMap,rf=new WeakMap,bE=function(s,e=null){const t=fs(s);if(t==="node"){let n=Tl.get(s);return n===void 0&&(n=new Proxy(s,Pp),Tl.set(s,n),Tl.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return pe(Jl(s,e));if(t==="shader")return K(s)}return s},NE=function(s,e=null){for(const t in s)s[t]=pe(s[t],e);return s},wE=function(s,e=null){const t=s.length;for(let n=0;n<t;n++)s[n]=pe(s[n],e);return s},RE=function(s,e=null,t=null,n=null){const i=r=>pe(n!==null?Object.assign(r,n):r);return e===null?(...r)=>i(new s(...Er(r))):t!==null?(t=pe(t),(...r)=>i(new s(e,...Er(r),t))):(...r)=>i(new s(e,...Er(r)))},CE=function(s,...e){return pe(new s(...Er(e)))};class LE extends Ce{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=rf.get(e.constructor);o===void 0&&(o=new WeakMap,rf.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=pe(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),pe(a.call(n))}const i=t.jsFunc,r=n!==null?i(n,e.stack,e):i(e.stack,e);return pe(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class IE extends Ce{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return Mc(e),pe(new LE(this,e))}setup(){return this.call()}}const PE=[!1,!0],DE=[0,1,2,3],OE=[-1,-2],Dp=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Pu=new Map;for(const s of PE)Pu.set(s,new Jn(s));const Du=new Map;for(const s of DE)Du.set(s,new Jn(s,"uint"));const Ou=new Map([...Du].map(s=>new Jn(s.value,"int")));for(const s of OE)Ou.set(s,new Jn(s,"int"));const yc=new Map([...Ou].map(s=>new Jn(s.value)));for(const s of Dp)yc.set(s,new Jn(s));for(const s of Dp)yc.set(-s,new Jn(-s));const vc={bool:Pu,uint:Du,ints:Ou,float:yc},of=new Map([...Pu,...yc]),Jl=(s,e)=>of.has(s)?of.get(s):s.isNode===!0?s:new Jn(s,e),UE=s=>{try{return s.getNodeType()}catch{return}},xt=function(s,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(s)&&t.every(i=>typeof i!="object"))&&(t=[wp(s,...t)]),t.length===1&&e!==null&&e.has(t[0]))return pe(e.get(t[0]));if(t.length===1){const i=Jl(t[0],s);return UE(i)===s?pe(i):pe(new Iu(i,s))}const n=t.map(i=>Jl(i));return pe(new Lp(n,s))}},af=s=>s&&s.value,FE=s=>s!=null?s.nodeType||s.convertTo||(typeof s=="string"?s:null):null;function bo(s){return new Proxy(new IE(s),Pp)}const pe=(s,e=null)=>bE(s,e),Mc=(s,e=null)=>new NE(s,e),Er=(s,e=null)=>new wE(s,e),G=(...s)=>new RE(...s),ee=(...s)=>new CE(...s),K=s=>{const e=new bo(s),t=(...n)=>{let i;return Mc(n),n[0]&&n[0].isNode?i=[...n]:i=n[0],e.call(i)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};Q("ShaderNode",bo);const cf=s=>{zr=s},VE=()=>zr,et=(...s)=>zr.if(...s);function BE(s){return zr&&zr.add(s),s}U("append",BE);const zE=new xt("color"),N=new xt("float",vc.float),C=new xt("int",vc.ints),me=new xt("uint",vc.uint),Hs=new xt("bool",vc.bool),Ae=new xt("vec2"),Vs=new xt("ivec2"),kE=new xt("uvec2"),HE=new xt("bvec2"),O=new xt("vec3"),GE=new xt("ivec3"),Go=new xt("uvec3"),Op=new xt("bvec3"),Ee=new xt("vec4"),WE=new xt("ivec4"),XE=new xt("uvec4"),qE=new xt("bvec4"),Uu=new xt("mat2"),YE=new xt("imat2"),jE=new xt("umat2"),KE=new xt("bmat2"),fi=new xt("mat3"),$E=new xt("imat3"),ZE=new xt("umat3"),JE=new xt("bmat3"),Ar=new xt("mat4"),QE=new xt("imat4"),eA=new xt("umat4"),tA=new xt("bmat4"),nA=(s="")=>pe(new Jn(s,"string")),iA=s=>pe(new Jn(s,"ArrayBuffer"));U("color",zE);U("float",N);U("int",C);U("uint",me);U("bool",Hs);U("vec2",Ae);U("ivec2",Vs);U("uvec2",kE);U("bvec2",HE);U("vec3",O);U("ivec3",GE);U("uvec3",Go);U("bvec3",Op);U("vec4",Ee);U("ivec4",WE);U("uvec4",XE);U("bvec4",qE);U("mat2",Uu);U("imat2",YE);U("umat2",jE);U("bmat2",KE);U("mat3",fi);U("imat3",$E);U("umat3",ZE);U("bmat3",JE);U("mat4",Ar);U("imat4",QE);U("umat4",eA);U("bmat4",tA);U("string",nA);U("arrayBuffer",iA);const sA=G(Kr),rA=(s,e)=>pe(new Iu(pe(s),e));U("element",sA);U("convert",rA);class Up extends At{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return _c.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:i}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=i.build(e,o),l=i.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),f=e.getPropertyName(d);e.addLineFlowCode(`${f} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const m=n.components[_];e.addLineFlowCode(`${g}.${m} = ${f}[ ${_} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const oA=G(Up);Q("AssignNode",Up);U("assign",oA);class Fp extends Ce{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,i=this.getNodeType(e),r=e.getVaryingFromNode(this,t,i);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(r,tf.VERTEX);return e.flowNodeFromShaderStage(tf.VERTEX,n,i,o),e.getPropertyName(r)}}const Ft=G(Fp);U("varying",Ft);Q("VaryingNode",Fp);class Tc extends Ce{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const i=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(i)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Ft(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const _n=(s,e)=>pe(new Tc(s,e));Q("AttributeNode",Tc);class Vp extends Ce{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Bp=G(Vp);U("bypass",Bp);Q("BypassNode",Vp);let aA=0;class cA{constructor(){this.id=aA++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class zp extends Ce{constructor(e,t=new cA){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),i=this.cache||e.globalCache;e.setCache(i);const r=this.node.build(e,...t);return e.setCache(n),r}}const Ya=G(zp),lA=s=>Ya(s,null);U("cache",Ya);U("globalCache",lA);Q("CacheNode",zp);class Fu extends Ce{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const i=this.node.build(e,t);return e.setContext(n),i}}const Wi=G(Fu),uA=(s,e)=>Wi(s,{label:e});U("context",Wi);U("label",uA);Q("ContextNode",Fu);class wi extends Ce{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let i;if(n===wi.VERTEX)i=e.getVertexIndex();else if(n===wi.INSTANCE)i=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=i:r=Ft(this).build(e,t),r}}wi.VERTEX="vertex";wi.INSTANCE="instance";const hA=ee(wi,wi.VERTEX),kp=ee(wi,wi.INSTANCE);Q("IndexNode",wi);class Vu{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Hp extends Ce{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,i=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(i),o=t.build(e,i.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const Lo=G(Hp);U("temp",Lo);U("toVar",(...s)=>Lo(...s).append());Q("VarNode",Hp);class pt extends Ce{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const an=(s,e)=>pe(new pt(s,e)),yi=(s,e)=>pe(new pt(s,e,!0)),Ot=ee(pt,"vec4","DiffuseColor"),ps=ee(pt,"float","Roughness"),ja=ee(pt,"float","Metalness"),Ql=ee(pt,"float","Clearcoat"),Ka=ee(pt,"float","ClearcoatRoughness"),_r=ee(pt,"vec3","Sheen"),Bu=ee(pt,"float","SheenRoughness"),zu=ee(pt,"float","Iridescence"),Gp=ee(pt,"float","IridescenceIOR"),Wp=ee(pt,"float","IridescenceThickness"),eu=ee(pt,"float","AlphaT"),Ps=ee(pt,"float","Anisotropy"),Ra=ee(pt,"vec3","AnisotropyT"),br=ee(pt,"vec3","AnisotropyB"),si=ee(pt,"color","SpecularColor"),$a=ee(pt,"float","SpecularF90"),tu=ee(pt,"float","Shininess"),dA=ee(pt,"vec4","Output"),Nr=ee(pt,"float","dashSize"),Za=ee(pt,"float","gapSize");ee(pt,"float","pointWidth");const Ca=ee(pt,"float","IOR"),nu=ee(pt,"float","Transmission"),Xp=ee(pt,"float","Thickness"),qp=ee(pt,"float","AttenuationDistance"),Yp=ee(pt,"color","AttenuationColor");Q("PropertyNode",pt);class fA extends pt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}Q("ParameterNode",fA);class ku extends Ce{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const i of t)i.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}G(ku);Q("CodeNode",ku);class pA extends ku{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),i=n.name,r=n.type,o=e.getCodeFromNode(this,r);i!==""&&(o.name=i);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),f=l[h].build(e,"property");c=c.replace(d,f)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}Q("FunctionNode",pA);class Hu extends Ce{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const mA=s=>new Hu(s),jp=s=>new Hu(s,!0);jp("frame");jp("render");const gA=mA("object");Q("UniformGroupNode",Hu);class Xs extends xc{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=gA}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(i=>{const r=e(i,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),i=this.getUniformHash(e);let r=e.getNodeFromHash(i);r===void 0&&(e.setHashNode(this,i),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const Et=(s,e)=>{const t=FE(e||s),n=s&&s.isNode===!0?s.node&&s.node.value||s.value:s;return pe(new Xs(n,t))};Q("UniformNode",Xs);class Kp extends Tc{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const Ii=(...s)=>pe(new Kp(...s));Q("UVNode",Kp);class $p extends Ce{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),i=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${i} )`,this.getNodeType(e),t)}}const Gu=G($p);U("textureSize",Gu);Q("TextureSizeNode",$p);class Pt extends At{constructor(e,t,n,...i){if(super(),this.op=e,i.length>0){let r=n;for(let o=0;o<i.length;o++)r=new Pt(e,r,i[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=i.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,i=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=i.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=i.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const kn=G(Pt,"+"),zt=G(Pt,"-"),ct=G(Pt,"*"),xs=G(Pt,"/"),_A=G(Pt,"%"),xA=G(Pt,"=="),yA=G(Pt,"!="),vA=G(Pt,"<"),Zp=G(Pt,">"),MA=G(Pt,"<="),TA=G(Pt,">="),SA=G(Pt,"&&"),EA=G(Pt,"||"),AA=G(Pt,"!"),bA=G(Pt,"^^"),NA=G(Pt,"&"),wA=G(Pt,"~"),RA=G(Pt,"|"),CA=G(Pt,"^"),LA=G(Pt,"<<"),IA=G(Pt,">>");U("add",kn);U("sub",zt);U("mul",ct);U("div",xs);U("remainder",_A);U("equal",xA);U("notEqual",yA);U("lessThan",vA);U("greaterThan",Zp);U("lessThanEqual",MA);U("greaterThanEqual",TA);U("and",SA);U("or",EA);U("not",AA);U("xor",bA);U("bitAnd",NA);U("bitNot",wA);U("bitOr",RA);U("bitXor",CA);U("shiftLeft",LA);U("shiftRight",IA);Q("OperatorNode",Pt);class P extends At{constructor(e,t,n=null,i=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=i}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,i=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(i)?0:e.getTypeLength(i);return r>o&&r>a?t:o>a?n:a>r?i:t}getNodeType(e){const t=this.method;return t===P.LENGTH||t===P.DISTANCE||t===P.DOT?"float":t===P.CROSS?"vec3":t===P.ALL?"bool":t===P.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===P.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,i=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===P.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=Ee(O(h),0):u=Ee(O(u),0);const d=ct(u,h).xyz;return An(d).build(e,t)}else{if(n===P.NEGATE)return e.format("( - "+o.build(e,r)+" )",i,t);if(n===P.ONE_MINUS)return zt(1,o).build(e,t);if(n===P.RECIPROCAL)return xs(1,o).build(e,t);if(n===P.DIFFERENCE)return Wt(zt(o,a)).build(e,t);{const u=[];return n===P.CROSS||n===P.MOD?u.push(o.build(e,i),a.build(e,i)):n===P.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===P.MIN||n===P.MAX)||n===P.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===P.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===P.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,i)}( ${u.join(", ")} )`,i,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}P.ALL="all";P.ANY="any";P.EQUALS="equals";P.RADIANS="radians";P.DEGREES="degrees";P.EXP="exp";P.EXP2="exp2";P.LOG="log";P.LOG2="log2";P.SQRT="sqrt";P.INVERSE_SQRT="inversesqrt";P.FLOOR="floor";P.CEIL="ceil";P.NORMALIZE="normalize";P.FRACT="fract";P.SIN="sin";P.COS="cos";P.TAN="tan";P.ASIN="asin";P.ACOS="acos";P.ATAN="atan";P.ABS="abs";P.SIGN="sign";P.LENGTH="length";P.NEGATE="negate";P.ONE_MINUS="oneMinus";P.DFDX="dFdx";P.DFDY="dFdy";P.ROUND="round";P.RECIPROCAL="reciprocal";P.TRUNC="trunc";P.FWIDTH="fwidth";P.BITCAST="bitcast";P.ATAN2="atan2";P.MIN="min";P.MAX="max";P.MOD="mod";P.STEP="step";P.REFLECT="reflect";P.DISTANCE="distance";P.DIFFERENCE="difference";P.DOT="dot";P.CROSS="cross";P.POW="pow";P.TRANSFORM_DIRECTION="transformDirection";P.MIX="mix";P.CLAMP="clamp";P.REFRACT="refract";P.SMOOTHSTEP="smoothstep";P.FACEFORWARD="faceforward";const Jp=N(1e-6);N(1e6);const lf=N(Math.PI);N(Math.PI*2);const Qp=G(P,P.ALL),PA=G(P,P.ANY),DA=G(P,P.EQUALS),OA=G(P,P.RADIANS),UA=G(P,P.DEGREES),em=G(P,P.EXP),iu=G(P,P.EXP2),tm=G(P,P.LOG),Sc=G(P,P.LOG2),qs=G(P,P.SQRT),FA=G(P,P.INVERSE_SQRT),$r=G(P,P.FLOOR),nm=G(P,P.CEIL),An=G(P,P.NORMALIZE),Ec=G(P,P.FRACT),Gi=G(P,P.SIN),cs=G(P,P.COS),VA=G(P,P.TAN),BA=G(P,P.ASIN),zA=G(P,P.ACOS),kA=G(P,P.ATAN),Wt=G(P,P.ABS),Wu=G(P,P.SIGN),No=G(P,P.LENGTH),HA=G(P,P.NEGATE),GA=G(P,P.ONE_MINUS),WA=G(P,P.DFDX),XA=G(P,P.DFDY),qA=G(P,P.ROUND),YA=G(P,P.RECIPROCAL),im=G(P,P.TRUNC),jA=G(P,P.FWIDTH);G(P,P.BITCAST);const KA=G(P,P.ATAN2),kr=G(P,P.MIN),Hn=G(P,P.MAX),$A=G(P,P.MOD),ZA=G(P,P.STEP),JA=G(P,P.REFLECT),QA=G(P,P.DISTANCE),eb=G(P,P.DIFFERENCE),Zr=G(P,P.DOT),sm=G(P,P.CROSS),bi=G(P,P.POW),rm=G(P,P.POW,2),tb=G(P,P.POW,3),nb=G(P,P.POW,4),ib=G(P,P.TRANSFORM_DIRECTION),sb=s=>ct(Wu(s),bi(Wt(s),1/3)),rb=s=>Zr(s,s),un=G(P,P.MIX),Hr=(s,e=0,t=1)=>pe(new P(P.CLAMP,pe(s),pe(e),pe(t))),ob=s=>Hr(s),om=G(P,P.REFRACT),Yi=G(P,P.SMOOTHSTEP),ab=G(P,P.FACEFORWARD),cb=(s,e,t)=>un(e,t,s),lb=(s,e,t)=>Yi(e,t,s);U("all",Qp);U("any",PA);U("equals",DA);U("radians",OA);U("degrees",UA);U("exp",em);U("exp2",iu);U("log",tm);U("log2",Sc);U("sqrt",qs);U("inverseSqrt",FA);U("floor",$r);U("ceil",nm);U("normalize",An);U("fract",Ec);U("sin",Gi);U("cos",cs);U("tan",VA);U("asin",BA);U("acos",zA);U("atan",kA);U("abs",Wt);U("sign",Wu);U("length",No);U("lengthSq",rb);U("negate",HA);U("oneMinus",GA);U("dFdx",WA);U("dFdy",XA);U("round",qA);U("reciprocal",YA);U("trunc",im);U("fwidth",jA);U("atan2",KA);U("min",kr);U("max",Hn);U("mod",$A);U("step",ZA);U("reflect",JA);U("distance",QA);U("dot",Zr);U("cross",sm);U("pow",bi);U("pow2",rm);U("pow3",tb);U("pow4",nb);U("transformDirection",ib);U("mix",cb);U("clamp",Hr);U("refract",om);U("smoothstep",lb);U("faceForward",ab);U("difference",eb);U("saturate",ob);U("cbrt",sb);Q("MathNode",P);const ub=K(s=>{const{value:e}=s,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),i=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=un(n,i,r);return Ee(o,e.a)}),hb=K(s=>{const{value:e}=s,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),i=t.mul(12.92),r=t.lessThanEqual(.0031308),o=un(n,i,r);return Ee(o,e.a)}),uf=s=>{let e=null;return s===qt?e="Linear":s===gn&&(e="sRGB"),e},am=(s,e)=>uf(s)+"To"+uf(e);class In extends At{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===In.LINEAR_TO_LINEAR?t:db[e]({value:t})}}In.LINEAR_TO_LINEAR="LinearToLinear";In.LINEAR_TO_sRGB="LinearTosRGB";In.sRGB_TO_LINEAR="sRGBToLinear";const db={[In.LINEAR_TO_sRGB]:hb,[In.sRGB_TO_LINEAR]:ub},fb=(s,e)=>pe(new In(am(qt,e),pe(s))),cm=(s,e)=>pe(new In(am(e,qt),pe(s))),pb=G(In,In.LINEAR_TO_sRGB),mb=G(In,In.sRGB_TO_LINEAR);U("linearTosRGB",pb);U("sRGBToLinear",mb);U("linearToColorSpace",fb);U("colorSpaceToLinear",cm);Q("ColorSpaceNode",In);class lm extends Ce{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),i=this.snippet;if(n==="void")e.addLineFlowCode(i);else return e.format(`( ${i} )`,n,t)}}const Ac=G(lm);Q("ExpressionNode",lm);class um extends Xs{constructor(e){super(0),this.textureNode=e,this.updateType=St.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:i,height:r}=n;this.value=Math.log2(Math.max(i,r))}}}const gb=G(um);Q("MaxMipLevelNode",um);class Jr extends Xs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=St.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Ii(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return Et(t.matrix).mul(O(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?St.FRAME:St.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let i=this.levelNode;i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=i,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,i,r,o,a){const c=this.value;let l;return i?l=e.generateTextureLevel(c,t,n,i,r):a?l=e.generateTextureGrad(c,t,n,a,r):o?l=e.generateTextureCompare(c,t,n,o,r):this.sampler===!1?l=e.generateTextureLoad(c,t,n,r):l=e.generateTexture(c,t,n,r),l}generate(e,t){const n=e.getNodeProperties(this),i=this.value;if(!i||i.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:f,gradNode:g}=n,_=this.generateUV(e,u),m=h?h.build(e,"float"):null,p=f?f.build(e,"int"):null,T=d?d.build(e,"float"):null,y=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,A=e.getVarFromNode(this);a=e.getPropertyName(A);const I=this.generateSnippet(e,r,_,m,p,T,y);e.addLineFlowCode(`${a} = ${I}`),e.context.tempWrite!==!1&&(o.snippet=I,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(i)&&(c=cm(Ac(c,l),i.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,pe(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(gb(t)),t.referenceNode=this,pe(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Gu(this,e)}compare(e){const t=this.clone();return t.compareNode=pe(e),t.referenceNode=this,pe(t)}grad(e,t){const n=this.clone();return n.gradNode=[pe(e),pe(t)],n.referenceNode=this,pe(n)}depth(e){const t=this.clone();return t.depthNode=pe(e),t.referenceNode=this,pe(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const zn=G(Jr),Us=(...s)=>zn(...s).setSampler(!1);U("texture",zn);Q("TextureNode",Jr);class bc extends Xs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Xu=(s,e,t)=>pe(new bc(s,e,t));Q("BufferNode",bc);class _b extends Kr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class hm extends bc{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=St.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),i=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(i==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?fs(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return pe(new _b(this,pe(e)))}}const su=(s,e)=>pe(new hm(s,e));Q("UniformsNode",hm);class xb extends Kr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),i=this.getNodeType();return e.format(t,n,i)}}class Qr extends Ce{constructor(e,t,n=null,i=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=i,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=St.OBJECT}element(e){return pe(new xb(this,pe(e)))}setNodeType(e){let t=null;this.count!==null?t=Xu(null,e,this.count):Array.isArray(this.getValueFromReference())?t=su(null,e):e==="texture"?t=zn(null):t=Et(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let i=1;i<t.length;i++)n=n[t[i]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const pi=(s,e,t)=>pe(new Qr(s,e,t)),yb=(s,e,t,n)=>pe(new Qr(s,e,n,t));Q("ReferenceNode",Qr);class dm extends Qr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const fm=(s,e,t)=>pe(new dm(s,e,t));Q("MaterialReferenceNode",dm);class Fe extends Ce{constructor(e=Fe.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=St.OBJECT,this._uniformNode=new Xs(null)}getNodeType(){const e=this.scope;if(e===Fe.WORLD_MATRIX||e===Fe.VIEW_MATRIX)return"mat4";if(e===Fe.NORMAL_MATRIX)return"mat3";if(e===Fe.POSITION||e===Fe.VIEW_POSITION||e===Fe.DIRECTION||e===Fe.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,i=this.scope;if(i===Fe.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(i===Fe.NORMAL_MATRIX)n.value=t.normalMatrix;else if(i===Fe.WORLD_MATRIX)n.value=t.matrixWorld;else if(i===Fe.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(i===Fe.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(i===Fe.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(i===Fe.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Fe.WORLD_MATRIX||t===Fe.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Fe.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Fe.POSITION||t===Fe.VIEW_POSITION||t===Fe.DIRECTION||t===Fe.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Fe.VIEW_MATRIX="viewMatrix";Fe.NORMAL_MATRIX="normalMatrix";Fe.WORLD_MATRIX="worldMatrix";Fe.POSITION="position";Fe.SCALE="scale";Fe.VIEW_POSITION="viewPosition";Fe.DIRECTION="direction";G(Fe,Fe.DIRECTION);G(Fe,Fe.VIEW_MATRIX);G(Fe,Fe.NORMAL_MATRIX);G(Fe,Fe.WORLD_MATRIX);const ru=G(Fe,Fe.POSITION);G(Fe,Fe.SCALE);const pm=G(Fe,Fe.VIEW_POSITION);Q("Object3DNode",Fe);class He extends Fe{constructor(e=He.POSITION){super(e),this.updateType=St.RENDER}getNodeType(e){const t=this.scope;return t===He.PROJECTION_MATRIX||t===He.PROJECTION_MATRIX_INVERSE?"mat4":t===He.NEAR||t===He.FAR||t===He.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,i=this.scope;i===He.VIEW_MATRIX?n.value=t.matrixWorldInverse:i===He.PROJECTION_MATRIX?n.value=t.projectionMatrix:i===He.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:i===He.NEAR?n.value=t.near:i===He.FAR?n.value=t.far:i===He.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===He.PROJECTION_MATRIX||t===He.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===He.NEAR||t===He.FAR||t===He.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}He.PROJECTION_MATRIX="projectionMatrix";He.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";He.NEAR="near";He.FAR="far";He.LOG_DEPTH="logDepth";const Mi=ee(He,He.PROJECTION_MATRIX);ee(He,He.PROJECTION_MATRIX_INVERSE);const Sl=ee(He,He.NEAR),El=ee(He,He.FAR),vb=ee(He,He.LOG_DEPTH),$i=ee(He,He.VIEW_MATRIX);ee(He,He.NORMAL_MATRIX);ee(He,He.WORLD_MATRIX);const Mb=ee(He,He.POSITION);Q("CameraNode",He);class hn extends Fe{constructor(e=hn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ee(hn,hn.DIRECTION);const Gs=ee(hn,hn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),mm=ee(hn,hn.NORMAL_MATRIX),Io=ee(hn,hn.WORLD_MATRIX);ee(hn,hn.POSITION);ee(hn,hn.SCALE);ee(hn,hn.VIEW_POSITION);Q("ModelNode",hn);class Yt extends Ce{constructor(e=Yt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Yt.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=O(0,1,0):n=_n("normal","vec3");else if(t===Yt.LOCAL)n=Ft(Ja);else if(t===Yt.VIEW){const i=mm.mul(mi);n=An(Ft(i))}else if(t===Yt.WORLD){const i=ys.transformDirection($i);n=An(Ft(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Yt.GEOMETRY="geometry";Yt.LOCAL="local";Yt.VIEW="view";Yt.WORLD="world";const Ja=ee(Yt,Yt.GEOMETRY),mi=ee(Yt,Yt.LOCAL).temp("Normal"),ys=ee(Yt,Yt.VIEW),gm=ee(Yt,Yt.WORLD),Vt=an("vec3","TransformedNormalView"),_m=Vt.transformDirection($i).normalize(),xr=an("vec3","TransformedClearcoatNormalView");Q("NormalNode",Yt);const hf=new Map;class $ extends Ce{constructor(e){super(),this.scope=e}getCache(e,t){let n=hf.get(e);return n===void 0&&(n=fm(e,t),hf.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let i=null;if(n===$.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?i=r.mul(this.getTexture("map")):i=r}else if(n===$.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?i=r.mul(this.getTexture("alpha")):i=r}else if(n===$.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?i=this.getTexture("specular").r:i=N(1);else if(n===$.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?i=r.mul(this.getTexture(n).a):i=r}else if(n===$.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?i=r.mul(this.getTexture(n).rgb):i=r}else if(n===$.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).g):i=r}else if(n===$.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?i=r.mul(this.getTexture(n).b):i=r}else if(n===$.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?i=r.mul(this.getTexture(n)):i=r}else if(n===$.NORMAL)t.normalMap?i=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?i=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):i=ys;else if(n===$.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===$.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).r):i=r}else if(n===$.CLEARCOAT_NORMAL)t.clearcoatNormalMap?i=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):i=ys;else if(n===$.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?i=r.mul(this.getTexture("sheenColor").rgb):i=r}else if(n===$.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?i=r.mul(this.getTexture(n).a):i=r,i=i.clamp(.07,1)}else if(n===$.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);i=Uu(_o.x,_o.y,_o.y.negate(),_o.x).mul(r.rg.mul(2).sub(Ae(1)).normalize().mul(r.b))}else i=_o;else if(n===$.IRIDESCENCE_THICKNESS){const r=pi("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=pi("0","float",t.iridescenceThicknessRange);i=r.sub(o).mul(this.getTexture(n).g).add(o)}else i=r}else if(n===$.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?i=r.mul(this.getTexture(n).r):i=r}else if(n===$.THICKNESS){const r=this.getFloat(n);t.thicknessMap?i=r.mul(this.getTexture(n).g):i=r}else if(n===$.IOR)i=this.getFloat(n);else{const r=this.getNodeType(e);i=this.getCache(n,r)}return i}}$.ALPHA_TEST="alphaTest";$.COLOR="color";$.OPACITY="opacity";$.SHININESS="shininess";$.SPECULAR="specular";$.SPECULAR_STRENGTH="specularStrength";$.SPECULAR_INTENSITY="specularIntensity";$.SPECULAR_COLOR="specularColor";$.REFLECTIVITY="reflectivity";$.ROUGHNESS="roughness";$.METALNESS="metalness";$.NORMAL="normal";$.CLEARCOAT="clearcoat";$.CLEARCOAT_ROUGHNESS="clearcoatRoughness";$.CLEARCOAT_NORMAL="clearcoatNormal";$.EMISSIVE="emissive";$.ROTATION="rotation";$.SHEEN="sheen";$.SHEEN_ROUGHNESS="sheenRoughness";$.ANISOTROPY="anisotropy";$.IRIDESCENCE="iridescence";$.IRIDESCENCE_IOR="iridescenceIOR";$.IRIDESCENCE_THICKNESS="iridescenceThickness";$.IOR="ior";$.TRANSMISSION="transmission";$.THICKNESS="thickness";$.ATTENUATION_DISTANCE="attenuationDistance";$.ATTENUATION_COLOR="attenuationColor";$.LINE_SCALE="scale";$.LINE_DASH_SIZE="dashSize";$.LINE_GAP_SIZE="gapSize";$.LINE_WIDTH="linewidth";$.LINE_DASH_OFFSET="dashOffset";$.POINT_WIDTH="pointWidth";const Tb=ee($,$.ALPHA_TEST),Po=ee($,$.COLOR),Sb=ee($,$.SHININESS),Eb=ee($,$.EMISSIVE),xm=ee($,$.OPACITY),Ab=ee($,$.SPECULAR),df=ee($,$.SPECULAR_INTENSITY),bb=ee($,$.SPECULAR_COLOR),Nb=ee($,$.SPECULAR_STRENGTH);ee($,$.REFLECTIVITY);const wb=ee($,$.ROUGHNESS),Rb=ee($,$.METALNESS),Cb=ee($,$.NORMAL),Lb=ee($,$.CLEARCOAT),Ib=ee($,$.CLEARCOAT_ROUGHNESS),Pb=ee($,$.CLEARCOAT_NORMAL),Db=ee($,$.ROTATION),Ob=ee($,$.SHEEN),Ub=ee($,$.SHEEN_ROUGHNESS),Fb=ee($,$.ANISOTROPY),Vb=ee($,$.IRIDESCENCE),Bb=ee($,$.IRIDESCENCE_IOR),zb=ee($,$.IRIDESCENCE_THICKNESS),kb=ee($,$.TRANSMISSION),Hb=ee($,$.THICKNESS),Gb=ee($,$.IOR),Wb=ee($,$.ATTENUATION_DISTANCE),Xb=ee($,$.ATTENUATION_COLOR),ou=ee($,$.LINE_SCALE),ym=ee($,$.LINE_DASH_SIZE),vm=ee($,$.LINE_GAP_SIZE),Al=ee($,$.LINE_WIDTH),ff=ee($,$.LINE_DASH_OFFSET),qb=ee($,$.POINT_WIDTH),_o=Et(new Te).onReference(function(s){return s.material}).onRenderUpdate(function({material:s}){this.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation))});Q("MaterialNode",$);class Tt extends Ce{constructor(e=Tt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Tt.GEOMETRY)n=_n("position","vec3");else if(t===Tt.LOCAL)n=Ft(Nn);else if(t===Tt.WORLD){const i=Io.mul(yn);n=Ft(i)}else if(t===Tt.VIEW){const i=Gs.mul(yn);n=Ft(i)}else if(t===Tt.VIEW_DIRECTION){const i=Vn.negate();n=An(Ft(i))}else if(t===Tt.WORLD_DIRECTION){const i=yn.transformDirection(Io);n=An(Ft(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Tt.GEOMETRY="geometry";Tt.LOCAL="local";Tt.WORLD="world";Tt.WORLD_DIRECTION="worldDirection";Tt.VIEW="view";Tt.VIEW_DIRECTION="viewDirection";const Nn=ee(Tt,Tt.GEOMETRY),yn=ee(Tt,Tt.LOCAL).temp("Position"),au=ee(Tt,Tt.WORLD),Yb=ee(Tt,Tt.WORLD_DIRECTION),Vn=ee(Tt,Tt.VIEW),Ut=ee(Tt,Tt.VIEW_DIRECTION);Q("PositionNode",Tt);class Mm extends At{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ft(e.context.mvp);const t=this.positionNode||yn;return Mi.mul(Gs).mul(t)}}const pf=G(Mm);Q("ModelViewProjectionNode",Mm);class Tm extends xc{constructor(e,t=null,n=0,i=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=i,this.usage=Ha,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,i=e.getTypeLength(t),r=this.bufferStride||i,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Eu(n,r),c=new fc(a,i,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),i=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=i,r=i):r=Ft(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const Nc=(s,e,t,n)=>pe(new Tm(s,e,t,n)),jb=(s,e,t,n)=>Nc(s,e,t,n).setUsage(Xl),mf=(s,e,t,n)=>Nc(s,e,t,n).setInstanced(!0),gf=(s,e,t,n)=>jb(s,e,t,n).setInstanced(!0);U("toAttribute",s=>Nc(s.value));Q("BufferAttributeNode",Tm);class Sm extends Ce{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new FS(c.array,16,1),u=c.usage===Xl?gf:mf,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=Ar(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new Ga(n.array,3),l=n.usage===Xl?gf:mf;this.instanceColorNode=O(l(c,"vec3",3,0))}const i=e.mul(yn).xyz,r=fi(e[0].xyz,e[1].xyz,e[2].xyz),o=mi.div(O(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;yn.assign(i),mi.assign(a),this.instanceColorNode!==null&&yi("vec3","vInstanceColor").assign(this.instanceColorNode)}}const Kb=G(Sm);Q("InstanceNode",Sm);class Xt extends Ce{constructor(e=Xt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Xt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Xt.GEOMETRY)n=_n("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===Xt.LOCAL)n=Ft(Qa.xyz);else if(t===Xt.VIEW){const i=Gs.mul(Ee(wc,0)).xyz;n=An(Ft(i))}else if(t===Xt.WORLD){const i=Rc.transformDirection($i);n=An(Ft(i))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Xt.GEOMETRY="geometry";Xt.LOCAL="local";Xt.VIEW="view";Xt.WORLD="world";const Qa=ee(Xt,Xt.GEOMETRY),wc=ee(Xt,Xt.LOCAL),Rc=ee(Xt,Xt.VIEW),$b=ee(Xt,Xt.WORLD),Em=Lo(Rc,"TransformedTangentView");An(Em.transformDirection($i));Q("TangentNode",Xt);class Am extends Ce{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=_n("batchId"));const t=this.batchMesh._matricesTexture,n=Gu(Us(t),0),i=N(C(this.batchingIdNode)).mul(4).toVar(),r=C(i.mod(n)),o=C(i).div(C(n)),a=Ar(Us(t,Vs(r,o)),Us(t,Vs(r.add(1),o)),Us(t,Vs(r.add(2),o)),Us(t,Vs(r.add(3),o))),c=fi(a[0].xyz,a[1].xyz,a[2].xyz);yn.assign(a.mul(yn));const l=mi.div(O(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;mi.assign(u),e.hasGeometryAttribute("tangent")&&wc.mulAssign(c)}}const Zb=G(Am);Q("batch",Am);class bm extends Ce{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=St.OBJECT,this.skinIndexNode=_n("skinIndex","uvec4"),this.skinWeightNode=_n("skinWeight","vec4");let n,i,r;t?(n=pi("bindMatrix","mat4"),i=pi("bindMatrixInverse","mat4"),r=yb("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=Et(e.bindMatrix,"mat4"),i=Et(e.bindMatrixInverse,"mat4"),r=Xu(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=i,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:i,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=i.mul(yn),d=kn(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),f=r.mul(d).xyz;let g=kn(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(i);const _=g.transformDirection(mi).xyz;yn.assign(f),mi.assign(_),e.hasGeometryAttribute("tangent")&&wc.assign(_)}generate(e,t){if(t!=="void")return yn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const Jb=s=>pe(new bm(s,!0));Q("SkinningNode",bm);class Nm extends Ce{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let i=0,r=this.params.length-1;i<r;i++){const o=this.params[i],a=o.isNode!==!0&&o.name||this.getVarName(i),c=o.isNode!==!0&&o.type||"int";n[a]=Ac(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},i=this.params,r=t.stackNode;for(let c=0,l=i.length-1;c<l;c++){const u=i[c];let h=null,d=null,f=null,g=null,_=null,m=null;u.isNode?(g="int",f=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",f=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,m=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const p={start:h,end:d,condition:_},T=p.start,y=p.end;let A="",I="",w="";m||(g==="int"||g==="uint"?_.includes("<")?m="++":m="--":_.includes("<")?m="+= 1.":m="-= 1."),A+=e.getVar(g,f)+" = "+T,I+=f+" "+_+" "+y,w+=f+" "+m;const b=`for ( ${A}; ${I}; ${w} )`;e.addFlowCode((c===0?`
`:"")+e.tab+b+` {

`).addFlowTab()}const o=Wi(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const bt=(...s)=>pe(new Nm(Er(s,"int"))).append(),Qb=()=>Ac("break").append();U("loop",(s,...e)=>Bp(s,bt(...e)));Q("LoopNode",Nm);const bl=new WeakMap,Un=new at,_f=K(({bufferMap:s,influence:e,stride:t,width:n,depth:i,offset:r})=>{const o=C(hA).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return Us(s,Vs(c,a)).depth(i).mul(e)});function eN(s){const e=s.morphAttributes.position!==void 0,t=s.morphAttributes.normal!==void 0,n=s.morphAttributes.color!==void 0,i=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,r=i!==void 0?i.length:0;let o=bl.get(s);if(o===void 0||o.count!==r){let T=function(){m.dispose(),bl.delete(s),s.removeEventListener("dispose",T)};var a=T;o!==void 0&&o.texture.dispose();const c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=s.attributes.position.count*h,f=1;const g=4096;d>g&&(f=Math.ceil(d/g),d=g);const _=new Float32Array(d*f*4*r),m=new vu(_,d,f,r);m.type=oi,m.needsUpdate=!0;const p=h*4;for(let y=0;y<r;y++){const A=c[y],I=l[y],w=u[y],b=d*f*4*y;for(let B=0;B<A.count;B++){const E=B*p;e===!0&&(Un.fromBufferAttribute(A,B),_[b+E+0]=Un.x,_[b+E+1]=Un.y,_[b+E+2]=Un.z,_[b+E+3]=0),t===!0&&(Un.fromBufferAttribute(I,B),_[b+E+4]=Un.x,_[b+E+5]=Un.y,_[b+E+6]=Un.z,_[b+E+7]=0),n===!0&&(Un.fromBufferAttribute(w,B),_[b+E+8]=Un.x,_[b+E+9]=Un.y,_[b+E+10]=Un.z,_[b+E+11]=w.itemSize===4?Un.w:1)}}o={count:r,texture:m,stride:h,size:new Te(d,f)},bl.set(s,o),s.addEventListener("dispose",T)}return o}class wm extends Ce{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Et(1),this.updateType=St.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,i=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=eN(t);n===!0&&yn.mulAssign(this.morphBaseInfluence),i===!0&&mi.mulAssign(this.morphBaseInfluence);const u=C(l.width);bt(o,({i:h})=>{const d=N(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(Us(this.mesh.morphTexture,Vs(C(h).add(1),C(kp))).r):d.assign(pi("morphTargetInfluences","float").element(h).toVar()),n===!0&&yn.addAssign(_f({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),i===!0&&mi.addAssign(_f({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const tN=G(wm);Q("MorphNode",wm);class Rm extends Ce{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Ut.negate().reflect(Vt).transformDirection($i)}}const nN=ee(Rm);Q("ReflectVectorNode",Rm);class Cm extends Jr{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return nN}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===Or||!n.isRenderTargetTexture?O(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const Lm=G(Cm);U("cubeTexture",Lm);Q("CubeTextureNode",Cm);class Wo extends Ce{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}Q("LightingNode",Wo);let xo=null;class Ys extends Wo{constructor(e=null){super(),this.updateType=St.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Ne,this._defaultColorNode=Et(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){xo===null&&(xo=e.createNodeMaterial(),xo.fragmentNode=Ee(0,0,0,1),xo.isShadowNodeMaterial=!0);const i=this.light.shadow,r=e.createRenderTarget(i.mapSize.width,i.mapSize.height),o=new zo;o.minFilter=$t,o.magFilter=$t,o.image.width=i.mapSize.width,o.image.height=i.mapSize.height,o.compareFunction=Qf,r.depthTexture=o,i.camera.updateProjectionMatrix();const a=pi("bias","float",i),c=pi("normalBias","float",i),l=t.material.shadowPositionNode||au;let u=Et(i.matrix).mul(l.add(gm.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===Or&&(d=d.mul(2).sub(1)),u=O(u.x,u.y.oneMinus(),d),n=((m,p,T)=>zn(m,p).compare(T))(o,u.xy,u.z);const g=zn(r.texture,u),_=h.mix(1,n.mix(g.a.mix(1,g),1));this.rtt=r,this.colorNode=this.colorNode.mul(_),this.shadowNode=n,this.shadowMaskNode=_,this.updateBeforeType=St.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:i,scene:r}=e,o=r.overrideMaterial;r.overrideMaterial=xo,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=i.toneMapping,c=i.getRenderTarget(),l=i.getRenderObjectFunction();i.setRenderObjectFunction((u,...h)=>{u.castShadow===!0&&i.renderObject(u,...h)}),i.setRenderTarget(t),i.toneMapping=$n,i.render(r,n.shadow.camera),i.setRenderTarget(c),i.setRenderObjectFunction(l),i.toneMapping=a,r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}Q("AnalyticLightNode",Ys);const ec=new WeakMap,iN=s=>s.sort((e,t)=>e.id-t.id);class sN extends Ce{constructor(e=[]){super("vec3"),this.totalDiffuseNode=O().temp("totalDiffuse"),this.totalSpecularNode=O().temp("totalSpecular"),this.outgoingLightNode=O().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let i=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=i;const c=e.addStack();n.start(t,c,e);for(const m of r)m.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:f,indirectSpecular:g}=t.reflectedLight;let _=h.add(f);l!==null&&(u!==null?_=O(u.mix(_,l)):_=O(l),t.material.transparent=!0),o.assign(_),a.assign(d.add(g)),i.assign(o.add(a)),n.finish(t,c,e),i=i.bypass(e.removeStack())}return i}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=iN(e);for(const n of e){let i=this._getLightNodeById(n.id);if(i===null){const r=n.constructor,o=ec.has(r)?ec.get(r):Ys;i=pe(new o(n))}t.push(i)}return this.lightNodes=t,this._hash=null,this}}const rN=G(sN);function eo(s,e){if(ec.has(s)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof s!="function")throw new Error(`Light ${s.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);ec.set(s,e)}class Im extends Wo{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}Q("AONode",Im);class Pm extends Fu{constructor(e,t=null,n=null,i=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=i,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=O().temp("directDiffuse"),i=O().temp("directSpecular"),r=O().temp("indirectDiffuse"),o=O().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:i,indirectDiffuse:r,indirectSpecular:o};return{radiance:O().temp("radiance"),irradiance:O().temp("irradiance"),iblIrradiance:O().temp("iblIrradiance"),ambientOcclusion:N(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Dm=G(Pm);U("lightingContext",Dm);Q("LightingContextNode",Pm);class jt extends Ce{constructor(e=jt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===jt.GEOMETRY?n=Ja.cross(Qa):t===jt.LOCAL?n=mi.cross(wc):t===jt.VIEW?n=ys.cross(Rc):t===jt.WORLD&&(n=gm.cross($b));const i=n.mul(Qa.w).xyz;return An(Ft(i)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}jt.GEOMETRY="geometry";jt.LOCAL="local";jt.VIEW="view";jt.WORLD="world";ee(jt,jt.GEOMETRY);ee(jt,jt.LOCAL);const oN=ee(jt,jt.VIEW);ee(jt,jt.WORLD);const aN=An(Vt.cross(Em).mul(Qa.w));An(aN.transformDirection($i));Q("BitangentNode",jt);const yr=fi(Rc,oN,ys);Ut.mul(yr);const cN=(()=>{let s=br.cross(Ut);return s=s.cross(br).normalize(),s=un(s,Vt,Ps.mul(ps.oneMinus()).oneMinus().pow2().pow2()).normalize(),s})();class qu extends Ce{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),i={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?an(n).build(e):"";r.nodeProperty=l;const u=Wi(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Wi(o,i).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Wi(a,i).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Bn=G(qu);U("cond",Bn);Q("CondNode",qu);const xf=N(1),cu=N(-2),Ea=N(.8),Nl=N(-1),Aa=N(.4),wl=N(2),ba=N(.305),Rl=N(3),yf=N(.21),lN=N(4),vf=N(4),uN=N(16),hN=K(([s])=>{const e=O(Wt(s)).toVar(),t=N(-1).toVar();return et(e.x.greaterThan(e.z),()=>{et(e.x.greaterThan(e.y),()=>{t.assign(Bn(s.x.greaterThan(0),0,3))}).else(()=>{t.assign(Bn(s.y.greaterThan(0),1,4))})}).else(()=>{et(e.z.greaterThan(e.y),()=>{t.assign(Bn(s.z.greaterThan(0),2,5))}).else(()=>{t.assign(Bn(s.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),dN=K(([s,e])=>{const t=Ae().toVar();return et(e.equal(0),()=>{t.assign(Ae(s.z,s.y).div(Wt(s.x)))}).elseif(e.equal(1),()=>{t.assign(Ae(s.x.negate(),s.z.negate()).div(Wt(s.y)))}).elseif(e.equal(2),()=>{t.assign(Ae(s.x.negate(),s.y).div(Wt(s.z)))}).elseif(e.equal(3),()=>{t.assign(Ae(s.z.negate(),s.y).div(Wt(s.x)))}).elseif(e.equal(4),()=>{t.assign(Ae(s.x.negate(),s.z).div(Wt(s.y)))}).else(()=>{t.assign(Ae(s.x,s.y).div(Wt(s.z)))}),ct(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),fN=K(([s])=>{const e=N(0).toVar();return et(s.greaterThanEqual(Ea),()=>{e.assign(xf.sub(s).mul(Nl.sub(cu)).div(xf.sub(Ea)).add(cu))}).elseif(s.greaterThanEqual(Aa),()=>{e.assign(Ea.sub(s).mul(wl.sub(Nl)).div(Ea.sub(Aa)).add(Nl))}).elseif(s.greaterThanEqual(ba),()=>{e.assign(Aa.sub(s).mul(Rl.sub(wl)).div(Aa.sub(ba)).add(wl))}).elseif(s.greaterThanEqual(yf),()=>{e.assign(ba.sub(s).mul(lN.sub(Rl)).div(ba.sub(yf)).add(Rl))}).else(()=>{e.assign(N(-2).mul(Sc(ct(1.16,s))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});K(([s,e])=>{const t=s.toVar();t.assign(ct(2,t).sub(1));const n=O(t,1).toVar();return et(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const pN=K(([s,e,t,n,i,r])=>{const o=N(t),a=O(e),c=Hr(fN(o),cu,r),l=Ec(c),u=$r(c),h=O(lu(s,a,u,n,i,r)).toVar();return et(l.notEqual(0),()=>{const d=O(lu(s,a,u.add(1),n,i,r)).toVar();h.assign(un(h,d,l))}),h}),lu=K(([s,e,t,n,i,r])=>{const o=N(t).toVar(),a=O(e),c=N(hN(a)).toVar(),l=N(Hn(vf.sub(o),0)).toVar();o.assign(Hn(o,vf));const u=N(iu(o)).toVar(),h=Ae(dN(a,c).mul(u.sub(2)).add(1)).toVar();return et(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(ct(3,uN))),h.y.addAssign(ct(4,iu(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(i),s.uv(h).grad(Ae(),Ae())}),Cl=K(({envMap:s,mipInt:e,outputDirection:t,theta:n,axis:i,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=cs(n),l=t.mul(c).add(i.cross(t).mul(Gi(n))).add(i.mul(i.dot(t).mul(c.oneMinus())));return lu(s,l,e,r,o,a)});K(({n:s,latitudinal:e,poleAxis:t,outputDirection:n,weights:i,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=O(Bn(e,t,sm(t,n))).toVar();et(Qp(d.equals(O(0))),()=>{d.assign(O(n.z,0,n.x.negate()))}),d.assign(An(d));const f=O().toVar();return f.addAssign(i.element(C(0)).mul(Cl({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),bt({start:C(1),end:s},({i:g})=>{et(g.greaterThanEqual(r),()=>{Qb()});const _=N(o.mul(N(g))).toVar();f.addAssign(i.element(g).mul(Cl({theta:_.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),f.addAssign(i.element(g).mul(Cl({theta:_,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Ee(f,1)});let tc=null;const Mf=new WeakMap;function mN(s){const e=Math.log2(s)-2,t=1/s;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function gN(s){let e=Mf.get(s);if((e!==void 0?e.pmremVersion:-1)!==s.pmremVersion){if(s.isCubeTexture){if(s.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=tc.fromCubemap(s,e)}else{if(s.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=tc.fromEquirectangular(s,e)}e.pmremVersion=s.pmremVersion,Mf.set(s,e)}return e.texture}class Om extends At{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=zn(null),this._width=Et(0),this._height=Et(0),this._maxMip=Et(0),this.updateBeforeType=St.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=mN(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=gN(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){tc===null&&(tc=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===ci&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=O(t.x.negate(),t.yz));let i=this.levelNode;return i===null&&e.context.getTextureLevel&&(i=e.context.getTextureLevel(this)),pN(this._texture,t,i,this._width,this._height,this._maxMip)}}const _N=G(Om);Q("PMREMNode",Om);const Tf=new WeakMap;class Um extends Wo{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=Tf.get(t.value);d===void 0&&(d=_N(t.value),Tf.set(t.value,d)),t=d}const{material:n}=e,r=n.envMap?pi("envMapIntensity","float",e.material):pi("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?cN:Vt,c=Wi(t,Sf(ps,a)).mul(r),l=Wi(t,xN(_m)).mul(Math.PI).mul(r),u=Ya(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=Wi(t,Sf(Ka,xr)).mul(r),f=Ya(d);h.addAssign(f)}}}const Sf=(s,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Ut.negate().reflect(e),t=s.mul(s).mix(t,e).normalize(),t=t.transformDirection($i)),t),getTextureLevel:()=>s}},xN=s=>({getUV:()=>s,getTextureLevel:()=>N(1)});Q("EnvironmentNode",Um);class Fm extends Wo{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}Q("IrradianceNode",Fm);let Ll,Il;class ut extends Ce{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ut.VIEWPORT?"vec4":this.scope===ut.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=St.NONE;return(this.scope===ut.RESOLUTION||this.scope===ut.VIEWPORT)&&(e=St.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ut.VIEWPORT?e.getViewport(Il):e.getDrawingBufferSize(Ll)}setup(){const e=this.scope;let t=null;if(e===ut.RESOLUTION)t=Et(Ll||(Ll=new Te));else if(e===ut.VIEWPORT)t=Et(Il||(Il=new at));else{t=yN.div(uu);let n=t.x,i=t.y;/bottom/i.test(e)&&(i=i.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ae(n,i)}return t}generate(e){if(this.scope===ut.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(uu).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}ut.COORDINATE="coordinate";ut.RESOLUTION="resolution";ut.VIEWPORT="viewport";ut.TOP_LEFT="topLeft";ut.BOTTOM_LEFT="bottomLeft";ut.TOP_RIGHT="topRight";ut.BOTTOM_RIGHT="bottomRight";const yN=ee(ut,ut.COORDINATE),uu=ee(ut,ut.RESOLUTION),wr=ee(ut,ut.VIEWPORT),Do=ee(ut,ut.TOP_LEFT);ee(ut,ut.BOTTOM_LEFT);ee(ut,ut.TOP_RIGHT);ee(ut,ut.BOTTOM_RIGHT);Q("ViewportNode",ut);const yo=new Te;class Xo extends Jr{constructor(e=Do,t=null,n=null){n===null&&(n=new xp,n.minFilter=Ai),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=St.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(yo);const n=this.value;(n.image.width!==yo.width||n.image.height!==yo.height)&&(n.image.width=yo.width,n.image.height=yo.height,n.needsUpdate=!0);const i=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=i}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const vN=G(Xo),Vm=G(Xo,null,null,{generateMipmaps:!0});U("viewportTexture",vN);U("viewportMipTexture",Vm);Q("ViewportTextureNode",Xo);let Pl=null;class Bm extends Xo{constructor(e=Do,t=null){Pl===null&&(Pl=new zo),super(e,t,Pl)}}const zm=G(Bm);U("viewportDepthTexture",zm);Q("ViewportDepthTextureNode",Bm);class cn extends Ce{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===cn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===cn.DEPTH)t=hu(Vn.z,Sl,El);else if(e===cn.DEPTH_TEXTURE){const n=this.valueNode||zm(),i=km(n,Sl,El);t=hu(i,Sl,El)}else e===cn.DEPTH_PIXEL&&this.valueNode!==null&&(t=Hm().assign(this.valueNode));return t}}const hu=(s,e,t)=>s.add(e).div(e.sub(t)),km=(s,e,t)=>e.mul(t).div(t.sub(e).mul(s).sub(t));cn.DEPTH="depth";cn.DEPTH_TEXTURE="depthTexture";cn.DEPTH_PIXEL="depthPixel";const Hm=G(cn,cn.DEPTH_PIXEL);ee(cn,cn.DEPTH);G(cn,cn.DEPTH_TEXTURE);const Gm=ee(cn,cn.DEPTH_PIXEL);Gm.assign=s=>Hm(s);Q("ViewportDepthNode",cn);class vs extends Ce{constructor(e=vs.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:i,globalClippingCount:r}=t,o=r+i,a=n?o-i:o;return this.scope===vs.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return K(()=>{const i=su(e),r=an("float","distanceToPlane"),o=an("float","distanceToGradient"),a=an("float","clipOpacity");a.assign(1);let c;if(bt(n,({i:l})=>{c=i.element(l),r.assign(Vn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(Yi(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=an("float","unionclipOpacity");l.assign(1),bt({start:n,end:t},({i:u})=>{c=i.element(u),r.assign(Vn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(Yi(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}Ot.a.mulAssign(a),Ot.a.equal(0).discard()})()}setupDefault(e,t,n){return K(()=>{const i=su(e);let r;if(bt(n,({i:o})=>{r=i.element(o),Vn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=an("bool","clipped");o.assign(!0),bt({start:n,end:t},({i:a})=>{r=i.element(a),o.assign(Vn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}vs.ALPHA_TO_COVERAGE="alphaToCoverage";vs.DEFAULT="default";const MN=()=>pe(new vs),TN=()=>pe(new vs(vs.ALPHA_TO_COVERAGE));class Wm extends Ce{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===ci&&n.side===Sn?"false":e.getFrontFacing()}}const SN=ee(Wm),nc=N(SN).mul(2).sub(1);Q("FrontFacingNode",Wm);const du=new Map;class Gn extends qi{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Np(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const i=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Ee(i,Ot.a).max(0);t=this.setupOutput(e,r),dA.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let i=this.fragmentNode;i.isOutputStructNode!==!0&&(i=Ee(i)),t=this.setupOutput(e,i)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let i=null;return(t||n)&&(this.alphaToCoverage?i=TN():e.stack.add(MN())),i}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=pf().w.add(1).log2().mul(vb).mul(.5)),n!==null&&Gm.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&tN(t).append(),t.isSkinnedMesh===!0&&Jb(t).append(),t.isBatchedMesh&&Zb(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&Kb(t).append(),this.positionNode!==null&&yn.assign(this.positionNode);const i=pf();return e.context.vertex=e.removeStack(),e.context.mvp=i,i}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ee(this.colorNode):Po;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ee(n.xyz.mul(_n("color","vec3")),n.a)),e.instanceColor&&(n=yi("vec3","vInstanceColor").mul(n)),Ot.assign(n);const i=this.opacityNode?N(this.opacityNode):xm;if(Ot.a.assign(Ot.a.mul(i)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?N(this.alphaTestNode):Tb;Ot.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Vn.dFdx().cross(Vn.dFdy()).normalize();Vt.assign(e.mul(nc))}else{const e=this.normalNode?O(this.normalNode):Cb;Vt.assign(e.mul(nc))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?Lm(this.envMap):zn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Um(t)),e.material.lightMap&&n.push(new Fm(fm("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:zn(e.material.aoMap);n.push(new Im(r))}let i=this.lightsNode||e.lightsNode;return n.length>0&&(i=rN([...i.lightNodes,...n])),i}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:i,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Ot.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=Dm(a,l,n,i)}else n!==null&&(c=O(i!==null?un(c,n,i):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(O(r||Eb))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Ee(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const i=e[n];this[n]===void 0&&(this[n]=i,i&&i.clone&&(this[n]=i.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=xn.prototype.toJSON.call(this,e),i=qa(this);n.inputNodes={};for(const{property:o,childNode:a}of i)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=EN(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const i in e)n[i]=e[i];return n}}function bn(s,e){if(typeof e!="function"||!s)throw new Error(`Node material ${s} is not a class`);if(du.has(s)){console.warn(`Redefinition of node material ${s}`);return}du.set(s,e),e.type=s}function EN(s){const e=du.get(s);if(e!==void 0)return new e}bn("NodeMaterial",Gn);class Xm extends Ce{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new bo(t);return this._currentCond=Bn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new bo(t),i=Bn(e,n);return this._currentCond.elseNode=i,this._currentCond=i,this}else(e){return this._currentCond.elseNode=new bo(e),this}build(e,...t){const n=VE();cf(this);for(const i of this.nodes)i.build(e,"void");return cf(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}G(Xm);Q("StackNode",Xm);class qm extends At{constructor(e=Yb){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ae(t,n)}}G(qm);Q("EquirectUVNode",qm);class Ym extends Ce{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}Q("StructTypeNode",Ym);class jm extends Ce{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let i=0;i<t.length;i++)n.push(t[i].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Ym(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const i=e.getPropertyName(n),r=this.members,o=i!==""?i+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return i}}G(jm);Q("OutputStructNode",jm);class Km extends Ce{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const AN=G(Km);U("hash",AN);Q("HashNode",Km);const fu=(s,e)=>bi(ct(4,s.mul(zt(1,s))),e),bN=(s,e)=>s.lessThan(.5)?fu(s.mul(2),e).div(2):zt(1,fu(ct(zt(1,s),2),e).div(2)),NN=(s,e,t)=>bi(xs(bi(s,e),kn(bi(s,e),bi(zt(1,s),t))),1/e),wN=(s,e)=>Gi(lf.mul(e.mul(s).sub(1))).div(lf.mul(e.mul(s).sub(1)));U("parabola",fu);U("gain",bN);U("pcurve",NN);U("sinc",wN);const Ti=K(([s])=>s.fract().sub(.5).abs()),$m=K(([s])=>O(Ti(s.z.add(Ti(s.y.mul(1)))),Ti(s.z.add(Ti(s.x.mul(1)))),Ti(s.y.add(Ti(s.x.mul(1)))))),RN=K(([s,e,t])=>{const n=O(s).toVar(),i=N(1.4).toVar(),r=N(0).toVar(),o=O(n).toVar();return bt({start:N(0),end:N(3),type:"float",condition:"<="},()=>{const a=O($m(o.mul(2))).toVar();n.addAssign(a.add(t.mul(N(.1).mul(e)))),o.mulAssign(1.8),i.mulAssign(1.5),n.mulAssign(1.2);const c=N(Ti(n.z.add(Ti(n.x.add(Ti(n.y)))))).toVar();r.addAssign(c.div(i)),o.addAssign(.14)}),r});Ti.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});$m.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});RN.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Dl;class Zm extends qu{constructor(e){Dl=Dl||Ac("discard"),super(e,Dl)}}const CN=G(Zm),LN=s=>CN(s).append();U("discard",LN);Q("DiscardNode",Zm);class Jm extends Ce{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let i=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],f=l[h];d.getNodeType(e)===f.type?u++:u=0}u>r&&(i=o,r=u)}}this._candidateFnCall=n=i(...t)}return n}}const IN=G(Jm),Qn=s=>(...e)=>IN(s,...e);Q("FunctionOverloadingNode",Jm);class Qm extends At{constructor(){super("vec2")}setup(){const e=O(Ut.z,0,Ut.x.negate()).normalize(),t=Ut.cross(e);return Ae(e.dot(Vt),t.dot(Vt)).mul(.495).add(.5)}}ee(Qm);Q("MatcapUVNode",Qm);class Cn extends Xs{constructor(e=Cn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=St.FRAME}update(e){const t=this.scope,n=this.scale;t===Cn.LOCAL?this.value+=e.deltaTime*n:t===Cn.DELTA?this.value=e.deltaTime*n:t===Cn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Cn.LOCAL="local";Cn.GLOBAL="global";Cn.DELTA="delta";Cn.FRAME="frame";const PN=(s,e=0)=>pe(new Cn(Cn.LOCAL,s,e));ee(Cn,Cn.FRAME).uint();Q("TimerNode",Cn);class Kt extends Ce{constructor(e=Kt.SINE,t=PN()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=pe(this.timeNode);let n=null;return e===Kt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Kt.SQUARE?n=t.fract().round():e===Kt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Kt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Kt.SINE="sine";Kt.SQUARE="square";Kt.TRIANGLE="triangle";Kt.SAWTOOTH="sawtooth";G(Kt,Kt.SINE);G(Kt,Kt.SQUARE);G(Kt,Kt.TRIANGLE);G(Kt,Kt.SAWTOOTH);Q("OscNode",Kt);class Ri extends At{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Ri.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Ri.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Ri.DIRECTION_TO_COLOR="directionToColor";Ri.COLOR_TO_DIRECTION="colorToDirection";const eg=G(Ri,Ri.DIRECTION_TO_COLOR),DN=G(Ri,Ri.COLOR_TO_DIRECTION);U("directionToColor",eg);U("colorToDirection",DN);Q("PackingNode",Ri);class Yu extends Ce{constructor(e,t,n,i=N(0),r=N(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=i,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:i,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(i)).add(i)}}const ON=G(Yu,null,null,{doClamp:!1}),UN=G(Yu);U("remap",ON);U("remapClamp",UN);Q("RemapNode",Yu);class tg extends At{constructor(e,t,n=Ae(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const FN=G(tg);U("rotateUV",FN);Q("RotateUVNode",tg);class ng extends At{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return Uu(r,o,o.negate(),r).mul(n)}else{const r=t,o=Ar(Ee(1,0,0,0),Ee(0,cs(r.x),Gi(r.x).negate(),0),Ee(0,Gi(r.x),cs(r.x),0),Ee(0,0,0,1)),a=Ar(Ee(cs(r.y),0,Gi(r.y),0),Ee(0,1,0,0),Ee(Gi(r.y).negate(),0,cs(r.y),0),Ee(0,0,0,1)),c=Ar(Ee(cs(r.z),Gi(r.z).negate(),0,0),Ee(Gi(r.z),cs(r.z),0,0),Ee(0,0,1,0),Ee(0,0,0,1));return o.mul(a).mul(c).mul(Ee(n,1)).xyz}}}const VN=G(ng);U("rotate",VN);Q("RotateNode",ng);class ig extends Ce{constructor(e,t=Ii(),n=N(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:i,height:r}=n,o=e.mod(i.mul(r)).floor(),a=o.mod(i),c=r.sub(o.add(1).div(i).ceil()),l=n.reciprocal(),u=Ae(a,c);return t.add(u).mul(l)}}G(ig);Q("SpriteSheetUVNode",ig);class sg extends Kr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const i=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&i!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(i!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const rg=G(sg);U("storageElement",rg);Q("StorageArrayElementNode",sg);class og extends Ce{constructor(e,t=null,n=null,i=N(1),r=yn,o=mi){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=i,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:i,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(O(1)));const c=r.yz.mul(i),l=r.zx.mul(i),u=r.xy.mul(i),h=e.value,d=t!==null?t.value:h,f=n!==null?n.value:h,g=zn(h,c).mul(a.x),_=zn(d,l).mul(a.y),m=zn(f,u).mul(a.z);return kn(g,_,m)}}const BN=G(og),zN=(...s)=>BN(...s);U("triplanarTexture",zN);Q("TriplanarTexturesNode",og);new Hi;new L;new L;new L;new Be;new L(0,0,-1);new at;new L;new L;new at;new Te;new _s;Ae(Do.x.oneMinus(),Do.y);class kN extends Tc{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let i;return n===!0?i=super.generate(e):i=e.generateConst(this.nodeType,new at(1,1,1,1)),i}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}Q("VertexColorNode",kN);class ag extends Qr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const HN=(s,e,t)=>pe(new ag(s,e,t));Q("RendererReferenceNode",ag);const Cc=1/6,cg=s=>ct(Cc,ct(s,ct(s,s.negate().add(3)).sub(3)).add(1)),pu=s=>ct(Cc,ct(s,ct(s,ct(3,s).sub(6))).add(4)),lg=s=>ct(Cc,ct(s,ct(s,ct(-3,s).add(3)).add(3)).add(1)),mu=s=>ct(Cc,bi(s,3)),Ef=s=>cg(s).add(pu(s)),Af=s=>lg(s).add(mu(s)),bf=s=>kn(-1,pu(s).div(cg(s).add(pu(s)))),Nf=s=>kn(1,mu(s).div(lg(s).add(mu(s)))),wf=(s,e,t)=>{const n=s.uvNode,i=ct(n,e.zw).add(.5),r=$r(i),o=Ec(i),a=Ef(o.x),c=Af(o.x),l=bf(o.x),u=Nf(o.x),h=bf(o.y),d=Nf(o.y),f=Ae(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),g=Ae(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),_=Ae(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),m=Ae(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),p=Ef(o.y).mul(kn(a.mul(s.uv(f).level(t)),c.mul(s.uv(g).level(t)))),T=Af(o.y).mul(kn(a.mul(s.uv(_).level(t)),c.mul(s.uv(m).level(t))));return p.add(T)},GN=(s,e)=>{const t=Ae(s.size(C(e))),n=Ae(s.size(C(e.add(1)))),i=xs(1,t),r=xs(1,n),o=wf(s,Ee(i,t),$r(e)),a=wf(s,Ee(r,n),nm(e));return Ec(e).mix(o,a)};class ug extends At{constructor(e,t=N(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return GN(this.textureNode,this.blurNode)}}const WN=G(ug);U("bicubic",WN);Q("TextureBicubicNode",ug);class hg extends Ce{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ee(hg);Q("PointUVNode",hg);class hi extends Ce{constructor(e=hi.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let i;return t===hi.BACKGROUND_BLURRINESS?i=pi("backgroundBlurriness","float",n):t===hi.BACKGROUND_INTENSITY?i=pi("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),i}}hi.BACKGROUND_BLURRINESS="backgroundBlurriness";hi.BACKGROUND_INTENSITY="backgroundIntensity";ee(hi,hi.BACKGROUND_BLURRINESS);ee(hi,hi.BACKGROUND_INTENSITY);Q("SceneNode",hi);class XN extends bc{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return rg(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Nc(this.value),this._varying=Ft(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}Q("StorageBufferNode",XN);class dg extends Jr{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:i}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=i.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}G(dg);Q("TextureStoreNode",dg);class qN extends Qr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}Q("UserDataNode",qN);const YN=K(({base:s,blend:e})=>{const t=n=>e[n].lessThan(Jp).cond(e[n],s[n].oneMinus().div(e[n]).oneMinus().max(0));return O(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),jN=K(({base:s,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],s[n].div(e[n].oneMinus()).max(0));return O(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),KN=K(({base:s,blend:e})=>{const t=n=>s[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return O(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),$N=K(({base:s,blend:e})=>{const t=n=>s[n].lessThan(.5).cond(s[n].mul(e[n],2),s[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return O(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class sn extends At{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,i={base:t,blend:n};let r=null;return e===sn.BURN?r=YN(i):e===sn.DODGE?r=jN(i):e===sn.SCREEN?r=KN(i):e===sn.OVERLAY&&(r=$N(i)),r}}sn.BURN="burn";sn.DODGE="dodge";sn.SCREEN="screen";sn.OVERLAY="overlay";const ZN=G(sn,sn.BURN),JN=G(sn,sn.DODGE),QN=G(sn,sn.OVERLAY),ew=G(sn,sn.SCREEN);U("burn",ZN);U("dodge",JN);U("overlay",QN);U("screen",ew);Q("BlendModeNode",sn);const tw=K(({textureNode:s,bumpScale:e})=>{const t=i=>s.cache().context({getUV:r=>i(r.uvNode||Ii()),forceUVContext:!0}),n=N(t(i=>i));return Ae(N(t(i=>i.add(i.dFdx()))).sub(n),N(t(i=>i.add(i.dFdy()))).sub(n)).mul(e)}),nw=K(s=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=s,i=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(i),l=i.dot(a).mul(nc),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class fg extends At{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=tw({textureNode:this.textureNode,bumpScale:e});return nw({surf_pos:Vn,surf_norm:ys,dHdxy:t})}}const iw=G(fg);U("bumpMap",iw);Q("BumpMapNode",fg);const sw=K(({color:s,adjustment:e})=>e.mix(pg(s.rgb),s.rgb)),rw=K(({color:s,adjustment:e})=>{const t=kn(s.r,s.g,s.b).div(3),n=s.r.max(s.g.max(s.b)),i=n.sub(t).mul(e).mul(-3);return un(s.rgb,n,i)}),ow=K(({color:s,adjustment:e})=>{const t=O(.57735,.57735,.57735),n=e.cos();return O(s.rgb.mul(n).add(t.cross(s.rgb).mul(e.sin()).add(t.mul(Zr(t,s.rgb).mul(n.oneMinus())))))});class Ln extends At{constructor(e,t,n=N(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,i={color:t,adjustment:n};let r=null;return e===Ln.SATURATION?r=sw(i):e===Ln.VIBRANCE?r=rw(i):e===Ln.HUE?r=ow(i):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}Ln.SATURATION="saturation";Ln.VIBRANCE="vibrance";Ln.HUE="hue";const aw=G(Ln,Ln.SATURATION),cw=G(Ln,Ln.VIBRANCE),lw=G(Ln,Ln.HUE),uw=O(.2125,.7154,.0721),pg=(s,e=uw)=>Zr(s,e),mg=(s,e)=>un(O(0),s,pg(s).sub(e).max(0));U("saturation",aw);U("vibrance",cw);U("hue",lw);U("threshold",mg);Q("ColorAdjustmentNode",Ln);const hw=K(s=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:i}=s,r=e.dFdx(),o=e.dFdy(),a=i.dFdx(),c=i.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),f=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(f.dot(f)),_=nc.mul(g.inverseSqrt());return kn(d.mul(n.x,_),f.mul(n.y,_),l.mul(n.z)).normalize()});class gg extends At{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Bs}setup(e){const{normalMapType:t,scaleNode:n}=this;let i=this.node.mul(2).sub(1);n!==null&&(i=O(i.xy.mul(n),i.z));let r=null;return t===Jf?r=mm.mul(i).normalize():t===Bs&&(e.hasGeometryAttribute("tangent")===!0?r=yr.mul(i).normalize():r=hw({eye_pos:Vn,surf_norm:ys,mapN:i,uv:Ii()})),r}}const dw=G(gg);U("normalMap",dw);Q("NormalMapNode",gg);class _g extends At{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const fw=G(_g);U("posterize",fw);Q("PosterizeNode",_g);const pw=K(({color:s,exposure:e})=>s.mul(e).clamp()),mw=K(({color:s,exposure:e})=>(s=s.mul(e),s.div(s.add(1)).clamp())),gw=K(({color:s,exposure:e})=>{s=s.mul(e),s=s.sub(.004).max(0);const t=s.mul(s.mul(6.2).add(.5)),n=s.mul(s.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),_w=K(({color:s})=>{const e=s.mul(s.add(.0245786)).sub(90537e-9),t=s.mul(s.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),xw=K(({color:s,exposure:e})=>{const t=fi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=fi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return s=s.mul(e).div(.6),s=t.mul(s),s=_w({color:s}),s=n.mul(s),s.clamp()}),yw=fi(O(1.6605,-.1246,-.0182),O(-.5876,1.1329,-.1006),O(-.0728,-.0083,1.1187)),vw=fi(O(.6274,.0691,.0164),O(.3293,.9195,.088),O(.0433,.0113,.8956)),Mw=K(([s])=>{const e=O(s).toVar(),t=O(e.mul(e)).toVar(),n=O(t.mul(t)).toVar();return N(15.5).mul(n.mul(t)).sub(ct(40.14,n.mul(e))).add(ct(31.96,n).sub(ct(6.868,t.mul(e))).add(ct(.4298,t).add(ct(.1191,e).sub(.00232))))}),Tw=K(({color:s,exposure:e})=>{const t=O(s).toVar(),n=fi(O(.856627153315983,.137318972929847,.11189821299995),O(.0951212405381588,.761241990602591,.0767994186031903),O(.0482516061458583,.101439036467562,.811302368396859)),i=fi(O(1.1271005818144368,-.1413297634984383,-.14132976349843826),O(-.11060664309660323,1.157823702216272,-.11060664309660294),O(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=N(-12.47393),o=N(4.026069);return t.mulAssign(e),t.assign(vw.mul(t)),t.assign(n.mul(t)),t.assign(Hn(t,1e-10)),t.assign(Sc(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(Hr(t,0,1)),t.assign(Mw(t)),t.assign(i.mul(t)),t.assign(bi(Hn(O(0),t),O(2.2))),t.assign(yw.mul(t)),t.assign(Hr(t,0,1)),t}),Sw={[Uf]:pw,[Ff]:mw,[Vf]:gw,[Bf]:xw,[zf]:Tw};class xg extends At{constructor(e=$n,t=Aw,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===$n)return t;const i={exposure:this.exposureNode,color:t},r=Sw[n];let o=null;return r?o=r(i):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const Ew=(s,e,t)=>pe(new xg(s,pe(e),pe(t))),Aw=HN("toneMappingExposure","float");U("toneMapping",(s,e,t)=>Ew(e,t,s));Q("ToneMappingNode",xg);let Ol=null;class yg extends Xo{constructor(e=Do,t=null){Ol===null&&(Ol=new xp),super(e,t,Ol)}updateReference(){return this}}const bw=G(yg);U("viewportSharedTexture",bw);Q("ViewportSharedTextureNode",yg);class gu extends Jr{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class qo extends At{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const i=new zo;i.isRenderTargetTexture=!0,i.name="PostProcessingDepth";const r=new _s(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fo});r.texture.name="PostProcessing",r.depthTexture=i,this.renderTarget=r,this.updateBeforeType=St.FRAME,this._textureNode=pe(new gu(this,r.texture)),this._depthTextureNode=pe(new gu(this,i)),this._depthNode=null,this._viewZNode=null,this._cameraNear=Et(0),this._cameraFar=Et(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=km(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=hu(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===qo.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:i}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Te);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=i.near,this._cameraFar.value=i.far,t.toneMapping=$n,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,i),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget.setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}qo.COLOR="color";qo.DEPTH="depth";const ju=(s,e)=>pe(new gu(s,e));Q("PassNode",qo);const Ul=new hc(-1,1,1,-1,0,1);class Nw extends _i{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ui(t,2))}}const ww=new Nw;class Lc extends Rn{constructor(e=null){super(ww,e),this.camera=Ul}renderAsync(e){return e.renderAsync(this,Ul)}render(e){e.render(this,Ul)}}const Rf=new Lc,Cf=new Lc;class Rw extends At{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ae(1),this._invSize=Et(new Te),this._passDirection=Et(new Te),this._horizontalRT=new _s,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new _s,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=ju(this,this._verticalRT.texture),this.updateBeforeType=St.RENDER,this.resolution=new Te(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=t.getRenderTarget(),o=n.value;Rf.material=this._material,Cf.material=this._material,this.setSize(i.image.width,i.image.height);const a=i.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Rf.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Cf.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ee();const n=t.uvNode||Ii(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=K(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ae(this.directionNode).mul(this._passDirection),d=N(l[0]).toVar(),f=Ee(i(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=N(g),m=N(l[g]),p=Ae(h.mul(u.mul(_))).toVar(),T=Ee(i(n.add(p))),y=Ee(i(n.sub(p)));f.addAssign(T.add(y).mul(m)),d.addAssign(ct(2,m))}return f.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const Cw=(s,e)=>pe(new Rw(pe(s),e));U("gaussianBlur",Cw);const Lf=new Lc;class Lw extends At{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=zn(),this.damp=Et(t),this._compRT=new _s,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new _s,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=ju(this,this._compRT.texture),this.updateBeforeType=St.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value,r=i.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),Lf.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(i.image.width,i.image.height),t.setRenderTarget(o),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ee();const i=t.uvNode||Ii();n.uvNode=i;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=K(([u,h])=>{const d=N(h).toVar(),f=Ee(u).toVar();return Hn(Wu(f.sub(d)),0)}),a=K(()=>{const u=Ee(n),h=Ee(r(i));return u.mulAssign(this.damp.mul(o(u,.1))),Hn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),Lf.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const Iw=(s,e)=>pe(new Lw(pe(s),e));U("afterImage",Iw);const If=new Lc;class Pw extends At{constructor(e,t,n,i){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=O(.1,0,1),this.samples=i,this.resolution=new Te(1,1),this._renderTarget=new _s,this._renderTarget.texture.name="anamorphic",this._invSize=Et(new Te),this._textureNode=ju(this,this._renderTarget.texture),this.updateBeforeType=St.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,i=n.value;this._renderTarget.texture.type=i.type;const r=t.getRenderTarget(),o=n.value;If.material=this._material,this.setSize(i.image.width,i.image.height),t.setRenderTarget(this._renderTarget),If.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ee();const n=t.uvNode||Ii(),i=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=K(()=>{const c=this.samples,l=Math.floor(c/2),u=O(0).toVar();return bt({start:-l,end:l},({i:h})=>{const d=N(h).abs().div(l).oneMinus(),f=Ae(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=i(f),_=mg(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const Dw=(s,e=.9,t=3,n=32)=>pe(new Pw(pe(s),pe(e),pe(t),n));U("anamorphic",Dw);class vg extends At{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,i=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=i[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of i){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const Ow=(s,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Er(e):Mc(e[0]),pe(new vg(pe(s),e)));U("call",Ow);Q("FunctionCallNode",vg);class Mg extends Ce{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new ji,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:N()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Rp(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Cp(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const La=G(Mg);U("scriptableValue",La);Q("ScriptableValueNode",Mg);class Tg extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const i=t(...n);return this.set(e,i),i}}}class Uw{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Fl=new Tg;class Sg extends Ce{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Tg,this._output=La(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=La(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=La(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i(...t)}async callAsync(e,...t){const i=this.getObject()[e];if(typeof i=="function")return i.constructor.name==="AsyncFunction"?await i(...t):i(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new Uw(this),i=Fl.get("THREE"),r=Fl.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Fl,e,t,i,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:N()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),i="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=i+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const Fw=G(Sg);U("scriptable",Fw);Q("ScriptableNode",Sg);class Ic extends Ce{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Vn.z).negate()}setup(){return this.factorNode}}const Vw=G(Ic);U("fog",Vw);Q("FogNode",Ic);class Eg extends Ic{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Yi(this.nearNode,this.farNode,t)}}const Bw=G(Eg);U("rangeFog",Bw);Q("FogRangeNode",Eg);class Ag extends Ic{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const zw=G(Ag);U("densityFog",zw);Q("FogExp2Node",Ag);let Rs=null,Cs=null;class bg extends Ce{constructor(e=N(),t=N()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(fs(this.minNode.value)),n=e.getTypeLength(fs(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const i=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(fs(i)),a=e.getTypeLength(fs(r));Rs=Rs||new at,Cs=Cs||new at,Rs.setScalar(0),Cs.setScalar(0),o===1?Rs.setScalar(i):i.isColor?Rs.set(i.r,i.g,i.b):Rs.set(i.x,i.y,i.z||0,i.w||0),a===1?Cs.setScalar(r):r.isColor?Cs.set(r.r,r.g,r.b):Cs.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const f=d%c,g=Rs.getComponent(f),_=Cs.getComponent(f);u[d]=lc.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=Xu(u,"vec4",t.count).element(kp).convert(h)}else n=N(0);return n}}G(bg);Q("RangeNode",bg);class Ng extends Ce{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=St.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let i=1;i<t.length;i++)n*=t[i];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const kw=(s,e,t)=>pe(new Ng(pe(s),e,t));U("compute",kw);Q("ComputeNode",Ng);class Ws extends Ce{constructor(e=Ws.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Ws.TARGET_DIRECTION&&(n=$i.transformDirection(ru(t).sub(ru(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ws.TARGET_DIRECTION="targetDirection";const wg=G(Ws,Ws.TARGET_DIRECTION);Q("LightNode",Ws);const Rg=K(s=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=s,i=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(i.mul(e.div(t).pow4().oneMinus().clamp().pow2()),i)});class Cg extends Ys{constructor(e=null){super(e),this.cutoffDistanceNode=Et(0),this.decayExponentNode=Et(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:i,light:r}=this,o=e.context.lightingModel,a=pm(r).sub(Vn),c=a.normalize(),l=a.length(),u=Rg({lightDistance:l,cutoffDistance:n,decayExponent:i}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("PointLightNode",Cg);eo(Ru,Cg);class Lg extends Ys{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,i=wg(this.light),r=e.context.reflectedLight;t.direct({lightDirection:i,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("DirectionalLightNode",Lg);eo(Sp,Lg);class Ku extends Ys{constructor(e=null){super(e),this.coneCosNode=Et(0),this.penumbraCosNode=Et(0),this.cutoffDistanceNode=Et(0),this.decayExponentNode=Et(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Yi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:i,decayExponentNode:r,light:o}=this,a=pm(o).sub(Vn),c=a.normalize(),l=c.dot(wg(o)),u=this.getSpotAttenuation(l),h=a.length(),d=Rg({lightDistance:h,cutoffDistance:i,decayExponent:r}),f=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:f,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("SpotLightNode",Ku);eo(wu,Ku);class Ig extends Ku{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const i=e.acos().mul(1/Math.PI);n=zn(t,Ae(i,0),0).r}else n=super.getSpotAttenuation(e);return n}}Q("IESSpotLightNode",Ig);eo(HS,Ig);class Pg extends Ys{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}Q("AmbientLightNode",Pg);eo(Ep,Pg);class Dg extends Ys{constructor(e=null){super(e),this.lightPositionNode=ru(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=Et(new Ne)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:i}=this,o=ys.dot(i).mul(.5).add(.5),a=un(n,t,o);e.context.irradiance.addAssign(a)}}Q("HemisphereLightNode",Dg);eo(SS,Dg);const Hw=K(s=>{const e=s.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Og extends At{constructor(e=Ii()){super("float"),this.uvNode=e}setup(){return Hw({uv:this.uvNode})}}const Gw=G(Og);U("checker",Gw);Q("CheckerNode",Og);const Ww=new mc;class Xw extends Gn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(Ww),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=K(()=>{Ft(Ae(),"vUv").assign(Ii());const n=_n("instancePosition"),i=an("vec4","mvPos");i.assign(Gs.mul(Ee(n,1)));const r=wr.z.div(wr.w),o=Mi.mul(i),a=an("vec2","offset");return a.assign(Nn.xy),a.assign(a.mul(qb)),a.assign(a.div(wr.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Ee(a,0,0))),o})(),this.fragmentNode=K(()=>{const n=Ft(Ae(),"vUv"),i=an("float","alpha");i.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=an("float","dlen");l.assign(a.fwidth()),i.assign(Yi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=_n("instanceColor").mul(Po):c=Po,Ee(c,i)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}bn("InstancedPointsNodeMaterial",Xw);const qw=new pc;class Yw extends Gn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(qw),this.setValues(e)}}bn("LineBasicNodeMaterial",Yw);const jw=new yp;class Kw extends Gn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(jw),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?N(this.dashScaleNode):ou,n=this.dashSizeNode?N(this.dashSizeNode):ym,i=this.dashSizeNode?N(this.dashGapNode):vm;Nr.assign(n),Za.assign(i);const r=Ft(_n("lineDistance").mul(t));(e?r.add(e):r).mod(Nr.add(Za)).greaterThan(Nr).discard()}}bn("LineDashedNodeMaterial",Kw);const $w=new yp;class Zw extends Gn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues($w),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,i=this.worldUnits,r=K(({start:a,end:c})=>{const l=Mi.element(2).element(2),d=Mi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Ee(un(a.xyz,c.xyz,d),c.w)});this.vertexNode=K(()=>{yi("vec2","vUv").assign(Ii());const a=_n("instanceStart"),c=_n("instanceEnd"),l=an("vec4","start"),u=an("vec4","end");l.assign(Gs.mul(Ee(a,1))),u.assign(Gs.mul(Ee(c,1))),i&&(yi("vec3","worldStart").assign(l.xyz),yi("vec3","worldEnd").assign(u.xyz));const h=wr.z.div(wr.w),d=Mi.element(2).element(3).equal(-1);et(d,()=>{et(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const f=Mi.mul(l),g=Mi.mul(u),_=f.xyz.div(f.w),m=g.xyz.div(g.w),p=m.xy.sub(_.xy).temp();p.x.assign(p.x.mul(h)),p.assign(p.normalize());const T=Lo(Ee());if(i){const y=u.xyz.sub(l.xyz).normalize(),A=un(l.xyz,u.xyz,.5).normalize(),I=y.cross(A).normalize(),w=y.cross(I),b=yi("vec4","worldPos");b.assign(Nn.y.lessThan(.5).cond(l,u));const B=Al.mul(.5);b.addAssign(Ee(Nn.x.lessThan(0).cond(I.mul(B),I.mul(B).negate()),0)),n||(b.addAssign(Ee(Nn.y.lessThan(.5).cond(y.mul(B).negate(),y.mul(B)),0)),b.addAssign(Ee(w.mul(B),0)),et(Nn.y.greaterThan(1).or(Nn.y.lessThan(0)),()=>{b.subAssign(Ee(w.mul(2).mul(B),0))})),T.assign(Mi.mul(b));const E=Lo(O());E.assign(Nn.y.lessThan(.5).cond(_,m)),T.z.assign(E.z.mul(T.w))}else{const y=an("vec2","offset");y.assign(Ae(p.y,p.x.negate())),p.x.assign(p.x.div(h)),y.x.assign(y.x.div(h)),y.assign(Nn.x.lessThan(0).cond(y.negate(),y)),et(Nn.y.lessThan(0),()=>{y.assign(y.sub(p))}).elseif(Nn.y.greaterThan(1),()=>{y.assign(y.add(p))}),y.assign(y.mul(Al)),y.assign(y.div(wr.w)),T.assign(Nn.y.lessThan(.5).cond(f,g)),y.assign(y.mul(T.w)),T.assign(T.add(Ee(y,0,0)))}return T})();const o=K(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),f=c.sub(a),g=h.dot(d),_=d.dot(f),m=h.dot(f),p=d.dot(d),y=f.dot(f).mul(p).sub(_.mul(_)),I=g.mul(_).sub(m.mul(p)).div(y).clamp(),w=g.add(_.mul(I)).div(p).clamp();return Ae(I,w)});this.fragmentNode=K(()=>{const a=yi("vec2","vUv");if(n){const u=this.offsetNode?N(this.offsetNodeNode):ff,h=this.dashScaleNode?N(this.dashScaleNode):ou,d=this.dashSizeNode?N(this.dashSizeNode):ym,f=this.dashSizeNode?N(this.dashGapNode):vm;Nr.assign(d),Za.assign(f);const g=_n("instanceDistanceStart"),_=_n("instanceDistanceEnd"),m=Nn.y.lessThan(.5).cond(h.mul(g),ou.mul(_)),p=Ft(m.add(ff)),T=u?p.add(u):p;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),T.mod(Nr.add(Za)).greaterThan(Nr).discard()}const c=an("float","alpha");if(c.assign(1),i){const u=yi("vec3","worldStart"),h=yi("vec3","worldEnd"),d=yi("vec4","worldPos").xyz.normalize().mul(1e5),f=h.sub(u),g=o({p1:u,p2:h,p3:O(0,0,0),p4:d}),_=u.add(f.mul(g.x)),m=d.mul(g.y),y=_.sub(m).length().div(Al);if(!n)if(e){const A=y.fwidth();c.assign(Yi(A.negate().add(.5),A.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),f=an("float","dlen");f.assign(d.fwidth()),et(a.y.abs().greaterThan(1),()=>{c.assign(Yi(f.oneMinus(),f.add(1),d).oneMinus())})}else et(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=_n("instanceColorStart"),h=_n("instanceColorEnd");l=Nn.y.lessThan(.5).cond(u,h).mul(Po)}else l=Po;return Ee(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}bn("Line2NodeMaterial",Zw);const Jw=new aS;class Qw extends Gn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(Jw),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?N(this.opacityNode):xm;Ot.assign(Ee(eg(Vt),e))}}bn("MeshNormalNodeMaterial",Qw);const eR=new hs;class tR extends Gn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(eR),this.setValues(e)}}bn("MeshBasicNodeMaterial",tR);const Oo=K(({f0:s,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return s.mul(n.oneMinus()).add(e.mul(n))}),ic=K(s=>s.diffuseColor.mul(1/Math.PI)),nR=()=>N(.25),iR=K(({dotNH:s})=>tu.mul(N(.5)).add(1).mul(N(1/Math.PI)).mul(s.pow(tu))),sR=K(({lightDirection:s})=>{const e=s.add(Ut).normalize(),t=Vt.dot(e).clamp(),n=Ut.dot(e).clamp(),i=Oo({f0:si,f90:1,dotVH:n}),r=nR(),o=iR({dotNH:t});return i.mul(r).mul(o)});class Ug extends Vu{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Vt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(ic({diffuseColor:Ot.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(sR({lightDirection:e})).mul(Nb))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(ic({diffuseColor:Ot})))}}const rR=new cS;class oR extends Gn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(rR),this.setValues(e)}setupLightingModel(){return new Ug(!1)}}bn("MeshLambertNodeMaterial",oR);const aR=new oS;class cR extends Gn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(aR),this.setValues(e)}setupLightingModel(){return new Ug}setupVariants(){const e=(this.shininessNode?N(this.shininessNode):Sb).max(1e-4);tu.assign(e);const t=this.specularNode||Ab;si.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}bn("MeshPhongNodeMaterial",cR);const lR=K(()=>{const s=Ja.dFdx().abs().max(Ja.dFdy().abs());return s.x.max(s.y).max(s.z)}),uR=K(s=>{const{roughness:e}=s,t=lR();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),hR=K(({alpha:s,dotNL:e,dotNV:t})=>{const n=s.pow2(),i=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return xs(.5,i.add(r).max(Jp))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),dR=K(({alphaT:s,alphaB:e,dotTV:t,dotBV:n,dotTL:i,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(O(s.mul(t),e.mul(n),o).length()),l=o.mul(O(s.mul(i),e.mul(r),a).length());return xs(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),fR=K(({alpha:s,dotNH:e})=>{const t=s.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),pR=N(1/Math.PI),mR=K(({alphaT:s,alphaB:e,dotNH:t,dotTH:n,dotBH:i})=>{const r=s.mul(e),o=O(e.mul(n),s.mul(i),r.mul(t)),a=o.dot(o),c=r.div(a);return pR.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),Pf=K(s=>{const{lightDirection:e,f0:t,f90:n,roughness:i,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=s,c=s.normalView||Vt,l=i.pow2(),u=e.add(Ut).normalize(),h=c.dot(e).clamp(),d=c.dot(Ut).clamp(),f=c.dot(u).clamp(),g=Ut.dot(u).clamp();let _=Oo({f0:t,f90:n,dotVH:g}),m,p;if(af(o)&&(_=zu.mix(_,r)),af(a)){const T=Ra.dot(e),y=Ra.dot(Ut),A=Ra.dot(u),I=br.dot(e),w=br.dot(Ut),b=br.dot(u);m=dR({alphaT:eu,alphaB:l,dotTV:y,dotBV:w,dotTL:T,dotBL:I,dotNV:d,dotNL:h}),p=mR({alphaT:eu,alphaB:l,dotNH:f,dotTH:A,dotBH:b})}else m=hR({alpha:l,dotNL:h,dotNV:d}),p=fR({alpha:l,dotNH:f});return _.mul(m).mul(p)}),Fg=K(({roughness:s,dotNV:e})=>{const t=Ee(-1,-.0275,-.572,.022),n=Ee(1,.0425,1.04,-.04),i=s.mul(t).add(n),r=i.x.mul(i.x).min(e.mul(-9.28).exp2()).mul(i.x).add(i.y);return Ae(-1.04,1.04).mul(r).add(i.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Vg=K(s=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:i}=s,r=Fg({dotNV:e,roughness:i});return t.mul(r.x).add(n.mul(r.y))}),gR=K(({f:s,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),i=n.mul(n),r=n.mul(i,i).clamp(0,.9999);return s.sub(O(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),_R=K(({roughness:s,dotNH:e})=>{const t=s.pow2(),n=N(1).div(t),r=e.pow2().oneMinus().max(.0078125);return N(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),xR=K(({dotNV:s,dotNL:e})=>N(1).div(N(4).mul(e.add(s).sub(e.mul(s))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),yR=K(({lightDirection:s})=>{const e=s.add(Ut).normalize(),t=Vt.dot(s).clamp(),n=Vt.dot(Ut).clamp(),i=Vt.dot(e).clamp(),r=_R({roughness:Bu,dotNH:i}),o=xR({dotNV:n,dotNL:t});return _r.mul(r).mul(o)}),vR=K(([s,e,t,n,i])=>{const r=O(om(e.negate(),An(s),xs(1,n))),o=O(No(i[0].xyz),No(i[1].xyz),No(i[2].xyz));return An(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),MR=K(([s,e])=>s.mul(Hr(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),TR=Vm(),SR=K(([s,e,t])=>{const n=TR.uv(s),i=Sc(N(uu.x)).mul(MR(e,t));return n.bicubic(i)}),ER=K(([s,e,t])=>(et(t.notEqual(0),()=>{const n=tm(e).negate().div(t);return em(n.negate().mul(s))}),O(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),AR=K(([s,e,t,n,i,r,o,a,c,l,u,h,d,f])=>{const g=vR(s,e,h,u,a),_=o.add(g),m=l.mul(c.mul(Ee(_,1))),p=Ae(m.xy.div(m.w)).toVar();p.addAssign(1),p.divAssign(2),p.assign(Ae(p.x,p.y.oneMinus()));const T=SR(p,t,u),y=n.mul(ER(No(g),d,f)),A=y.rgb.mul(T.rgb),I=s.dot(e).clamp(),w=O(Vg({dotNV:I,specularColor:i,specularF90:r,roughness:t})),b=y.r.add(y.g,y.b).div(3);return Ee(w.oneMinus().mul(A),T.a.oneMinus().mul(b).oneMinus())}),bR=fi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),NR=s=>{const e=s.sqrt();return O(1).add(e).div(O(1).sub(e))},Df=(s,e)=>s.sub(e).div(s.add(e)).pow2(),wR=(s,e)=>{const t=s.mul(2*Math.PI*1e-9),n=O(54856e-17,44201e-17,52481e-17),i=O(1681e3,1795300,2208400),r=O(43278e5,93046e5,66121e5),o=N(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(i.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=O(a.x.add(o),a.y,a.z).div(10685e-11),bR.mul(a)},RR=K(({outsideIOR:s,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:i})=>{const r=un(s,e,Yi(0,.03,n)),o=s.div(r).pow2().mul(N(1).sub(t.pow2())),c=N(1).sub(o).sqrt(),l=Df(r,s),u=Oo({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(s).cond(Math.PI,0),f=N(Math.PI).sub(d),g=NR(i.clamp(0,.9999)),_=Df(g,r.vec3()),m=Oo({f0:_,f90:1,dotVH:c}),p=O(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),T=r.mul(n,c,2),y=O(f).add(p),A=u.mul(m).clamp(1e-5,.9999),I=A.sqrt(),w=h.pow2().mul(m).div(O(1).sub(A));let B=u.add(w),E=w.sub(h);for(let v=1;v<=2;++v){E=E.mul(I);const H=wR(N(v).mul(T),N(v).mul(y)).mul(2);B=B.add(E.mul(H))}return B.max(O(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),CR=K(({normal:s,viewDir:e,roughness:t})=>{const n=s.dot(e).saturate(),i=t.pow2(),r=Bn(t.lessThan(.25),N(-339.2).mul(i).add(N(161.4).mul(t)).sub(25.9),N(-8.48).mul(i).add(N(14.3).mul(t)).sub(9.95)),o=Bn(t.lessThan(.25),N(44).mul(i).sub(N(23.7).mul(t)).add(3.26),N(1.97).mul(i).sub(N(3.27).mul(t)).add(.72));return Bn(t.lessThan(.25),0,N(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Vl=O(.04),Bl=O(1);class $u extends Vu{constructor(e=!1,t=!1,n=!1,i=!1,r=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=i,this.transmission=r,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=O().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=O().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=O().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=O().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=O().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Vt.dot(Ut).clamp();this.iridescenceFresnel=RR({outsideIOR:N(1),eta2:Gp,cosTheta1:t,thinFilmThickness:Wp,baseF0:si}),this.iridescenceF0=gR({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=au,n=Mb.sub(au).normalize(),i=_m;e.backdrop=AR(i,n,ps,Ot,si,$a,t,Io,$i,Mi,Ca,Xp,Yp,qp),e.backdropAlpha=nu,Ot.a.mulAssign(un(1,e.backdrop.a,nu))}}computeMultiscattering(e,t,n){const i=Vt.dot(Ut).clamp(),r=Fg({roughness:ps,dotNV:i}),a=(this.iridescenceF0?zu.mix(si,this.iridescenceF0):si).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=si.add(si.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Vt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(yR({lightDirection:e}))),this.clearcoat===!0){const a=xr.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Pf({lightDirection:e,f0:Vl,f90:Bl,roughness:Ka,normalView:xr})))}n.directDiffuse.addAssign(r.mul(ic({diffuseColor:Ot.rgb}))),n.directSpecular.addAssign(r.mul(Pf({lightDirection:e,f0:si,f90:1,roughness:ps,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(ic({diffuseColor:Ot})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(_r,CR({normal:Vt,viewDir:Ut,roughness:Bu}))),this.clearcoat===!0){const l=xr.dot(Ut).clamp(),u=Vg({dotNV:l,specularColor:Vl,specularF90:Bl,roughness:Ka});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const i=O().temp("singleScattering"),r=O().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(i,r,$a);const a=i.add(r),c=Ot.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(i)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const i=Vt.dot(Ut).clamp().add(e),r=ps.mul(-16).oneMinus().negate().exp2(),o=e.sub(i.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=xr.dot(Ut).clamp(),i=Oo({dotVH:n,f0:Vl,f90:Bl}),r=t.mul(Ql.mul(i).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Ql));t.assign(r)}if(this.sheen===!0){const n=_r.r.max(_r.g).max(_r.b).mul(.157).oneMinus(),i=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(i)}}}const LR=new gc;class Bg extends Gn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(LR),this.setValues(e)}setupLightingModel(){return new $u}setupSpecular(){const e=un(O(.04),Ot.rgb,ja);si.assign(e),$a.assign(1)}setupVariants(){const e=this.metalnessNode?N(this.metalnessNode):Rb;ja.assign(e);let t=this.roughnessNode?N(this.roughnessNode):wb;t=uR({roughness:t}),ps.assign(t),this.setupSpecular(),Ot.assign(Ee(Ot.rgb.mul(e.oneMinus()),Ot.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}bn("MeshStandardNodeMaterial",Bg);const IR=new xi;class zg extends Bg{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.anisotropyNode=null,this.setDefaultValues(IR),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}setupSpecular(){const e=this.iorNode?N(this.iorNode):Gb;Ca.assign(e),si.assign(un(kr(rm(Ca.sub(1).div(Ca.add(1))).mul(bb),O(1)).mul(df),Ot.rgb,ja)),$a.assign(un(df,1,ja))}setupLightingModel(){return new $u(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?N(this.clearcoatNode):Lb,n=this.clearcoatRoughnessNode?N(this.clearcoatRoughnessNode):Ib;Ql.assign(t),Ka.assign(n)}if(this.useSheen){const t=this.sheenNode?O(this.sheenNode):Ob,n=this.sheenRoughnessNode?N(this.sheenRoughnessNode):Ub;_r.assign(t),Bu.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?N(this.iridescenceNode):Vb,n=this.iridescenceIORNode?N(this.iridescenceIORNode):Bb,i=this.iridescenceThicknessNode?N(this.iridescenceThicknessNode):zb;zu.assign(t),Gp.assign(n),Wp.assign(i)}if(this.useAnisotropy){const t=(this.anisotropyNode?Ae(this.anisotropyNode):Fb).toVar();Ps.assign(t.length()),et(Ps.equal(0),()=>{t.assign(Ae(1,0))}).else(()=>{t.divAssign(Ps),Ps.assign(Ps.saturate())}),eu.assign(Ps.pow2().mix(ps.pow2(),1)),Ra.assign(yr[0].mul(t.x).add(yr[1].mul(t.y))),br.assign(yr[1].mul(t.x).sub(yr[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?N(this.transmissionNode):kb,n=this.thicknessNode?N(this.thicknessNode):Hb,i=this.attenuationDistanceNode?N(this.attenuationDistanceNode):Wb,r=this.attenuationColorNode?O(this.attenuationColorNode):Xb;nu.assign(t),Xp.assign(n),qp.assign(i),Yp.assign(r)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?O(this.clearcoatNormalNode):Pb;xr.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}bn("MeshPhysicalNodeMaterial",zg);class PR extends $u{constructor(e,t,n,i){super(e,t,n),this.useSSS=i}direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,f=e.add(Vt.mul(c)).normalize(),g=N(Ut.dot(f.negate()).saturate().pow(h).mul(d)),_=O(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},i,r)}}class DR extends zg{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=N(.1),this.thicknessAmbientNode=N(0),this.thicknessAttenuationNode=N(.1),this.thicknessPowerNode=N(2),this.thicknessScaleNode=N(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new PR(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}bn("MeshSSSNodeMaterial",DR);const OR=new mc;class UR extends Gn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(OR),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}bn("PointsNodeMaterial",UR);const FR=new $T;class VR extends Gn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(FR),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:i,scaleNode:r}=this,o=yn;let a=Gs.mul(O(n||0)),c=Ae(Io[0].xyz.length(),Io[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(Et(e.center).sub(.5))),l=l.mul(c);const u=N(i||Db),h=l.rotate(u);a=Ee(a.xy.add(h),a.zw);const d=Mi.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}bn("SpriteNodeMaterial",VR);class BR extends Vu{constructor(){super(),this.shadowNode=N(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){Ot.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(Ot.rgb)}}const zR=new rS;class kR extends Gn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(zR),this.setValues(e)}setupLightingModel(){return new BR}}bn("ShadowNodeMaterial",kR);const Rr=K(([s,e,t])=>{const n=N(t).toVar(),i=N(e).toVar(),r=Hs(s).toVar();return Bn(r,i,n)}),Uo=K(([s,e])=>{const t=Hs(e).toVar(),n=N(s).toVar();return Bn(t,n.negate(),n)}),Bt=K(([s])=>{const e=N(s).toVar();return C($r(e))}),Rt=K(([s,e])=>{const t=N(s).toVar();return e.assign(Bt(t)),t.sub(N(e))}),kg=K(([s,e,t,n,i,r])=>{const o=N(r).toVar(),a=N(i).toVar(),c=N(n).toVar(),l=N(t).toVar(),u=N(e).toVar(),h=N(s).toVar(),d=N(zt(1,a)).toVar();return zt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Hg=K(([s,e,t,n,i,r])=>{const o=N(r).toVar(),a=N(i).toVar(),c=O(n).toVar(),l=O(t).toVar(),u=O(e).toVar(),h=O(s).toVar(),d=N(zt(1,a)).toVar();return zt(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),Gg=Qn([kg,Hg]),Wg=K(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=N(u).toVar(),d=N(l).toVar(),f=N(c).toVar(),g=N(a).toVar(),_=N(o).toVar(),m=N(r).toVar(),p=N(i).toVar(),T=N(n).toVar(),y=N(t).toVar(),A=N(e).toVar(),I=N(s).toVar(),w=N(zt(1,f)).toVar(),b=N(zt(1,d)).toVar();return N(zt(1,h)).toVar().mul(b.mul(I.mul(w).add(A.mul(f))).add(d.mul(y.mul(w).add(T.mul(f))))).add(h.mul(b.mul(p.mul(w).add(m.mul(f))).add(d.mul(_.mul(w).add(g.mul(f))))))}),Xg=K(([s,e,t,n,i,r,o,a,c,l,u])=>{const h=N(u).toVar(),d=N(l).toVar(),f=N(c).toVar(),g=O(a).toVar(),_=O(o).toVar(),m=O(r).toVar(),p=O(i).toVar(),T=O(n).toVar(),y=O(t).toVar(),A=O(e).toVar(),I=O(s).toVar(),w=N(zt(1,f)).toVar(),b=N(zt(1,d)).toVar();return N(zt(1,h)).toVar().mul(b.mul(I.mul(w).add(A.mul(f))).add(d.mul(y.mul(w).add(T.mul(f))))).add(h.mul(b.mul(p.mul(w).add(m.mul(f))).add(d.mul(_.mul(w).add(g.mul(f))))))}),qg=Qn([Wg,Xg]),Yg=K(([s,e,t])=>{const n=N(t).toVar(),i=N(e).toVar(),r=me(s).toVar(),o=me(r.bitAnd(me(7))).toVar(),a=N(Rr(o.lessThan(me(4)),i,n)).toVar(),c=N(ct(2,Rr(o.lessThan(me(4)),n,i))).toVar();return Uo(a,Hs(o.bitAnd(me(1)))).add(Uo(c,Hs(o.bitAnd(me(2)))))}),jg=K(([s,e,t,n])=>{const i=N(n).toVar(),r=N(t).toVar(),o=N(e).toVar(),a=me(s).toVar(),c=me(a.bitAnd(me(15))).toVar(),l=N(Rr(c.lessThan(me(8)),o,r)).toVar(),u=N(Rr(c.lessThan(me(4)),r,Rr(c.equal(me(12)).or(c.equal(me(14))),o,i))).toVar();return Uo(l,Hs(c.bitAnd(me(1)))).add(Uo(u,Hs(c.bitAnd(me(2)))))}),nn=Qn([Yg,jg]),Kg=K(([s,e,t])=>{const n=N(t).toVar(),i=N(e).toVar(),r=Go(s).toVar();return O(nn(r.x,i,n),nn(r.y,i,n),nn(r.z,i,n))}),$g=K(([s,e,t,n])=>{const i=N(n).toVar(),r=N(t).toVar(),o=N(e).toVar(),a=Go(s).toVar();return O(nn(a.x,o,r,i),nn(a.y,o,r,i),nn(a.z,o,r,i))}),jn=Qn([Kg,$g]),Zg=K(([s])=>{const e=N(s).toVar();return ct(.6616,e)}),Jg=K(([s])=>{const e=N(s).toVar();return ct(.982,e)}),Qg=K(([s])=>{const e=O(s).toVar();return ct(.6616,e)}),e_=Qn([Zg,Qg]),t_=K(([s])=>{const e=O(s).toVar();return ct(.982,e)}),n_=Qn([Jg,t_]),wn=K(([s,e])=>{const t=C(e).toVar(),n=me(s).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}),i_=K(([s,e,t])=>{s.subAssign(t),s.bitXorAssign(wn(t,C(4))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(wn(s,C(6))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(wn(e,C(8))),e.addAssign(s),s.subAssign(t),s.bitXorAssign(wn(t,C(16))),t.addAssign(e),e.subAssign(s),e.bitXorAssign(wn(s,C(19))),s.addAssign(t),t.subAssign(e),t.bitXorAssign(wn(e,C(4))),e.addAssign(s)}),to=K(([s,e,t])=>{const n=me(t).toVar(),i=me(e).toVar(),r=me(s).toVar();return n.bitXorAssign(i),n.subAssign(wn(i,C(14))),r.bitXorAssign(n),r.subAssign(wn(n,C(11))),i.bitXorAssign(r),i.subAssign(wn(r,C(25))),n.bitXorAssign(i),n.subAssign(wn(i,C(16))),r.bitXorAssign(n),r.subAssign(wn(n,C(4))),i.bitXorAssign(r),i.subAssign(wn(r,C(14))),n.bitXorAssign(i),n.subAssign(wn(i,C(24))),n}),ln=K(([s])=>{const e=me(s).toVar();return N(e).div(N(me(C(4294967295))))}),di=K(([s])=>{const e=N(s).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),s_=K(([s])=>{const e=C(s).toVar(),t=me(me(1)).toVar(),n=me(me(C(3735928559)).add(t.shiftLeft(me(2)).add(me(13)))).toVar();return to(n.add(me(e)),n,n)}),r_=K(([s,e])=>{const t=C(e).toVar(),n=C(s).toVar(),i=me(me(2)).toVar(),r=me().toVar(),o=me().toVar(),a=me().toVar();return r.assign(o.assign(a.assign(me(C(3735928559)).add(i.shiftLeft(me(2)).add(me(13)))))),r.addAssign(me(n)),o.addAssign(me(t)),to(r,o,a)}),o_=K(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=C(s).toVar(),o=me(me(3)).toVar(),a=me().toVar(),c=me().toVar(),l=me().toVar();return a.assign(c.assign(l.assign(me(C(3735928559)).add(o.shiftLeft(me(2)).add(me(13)))))),a.addAssign(me(r)),c.addAssign(me(i)),l.addAssign(me(n)),to(a,c,l)}),a_=K(([s,e,t,n])=>{const i=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=C(s).toVar(),c=me(me(4)).toVar(),l=me().toVar(),u=me().toVar(),h=me().toVar();return l.assign(u.assign(h.assign(me(C(3735928559)).add(c.shiftLeft(me(2)).add(me(13)))))),l.addAssign(me(a)),u.addAssign(me(o)),h.addAssign(me(r)),i_(l,u,h),l.addAssign(me(i)),to(l,u,h)}),c_=K(([s,e,t,n,i])=>{const r=C(i).toVar(),o=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(s).toVar(),u=me(me(5)).toVar(),h=me().toVar(),d=me().toVar(),f=me().toVar();return h.assign(d.assign(f.assign(me(C(3735928559)).add(u.shiftLeft(me(2)).add(me(13)))))),h.addAssign(me(l)),d.addAssign(me(c)),f.addAssign(me(a)),i_(h,d,f),h.addAssign(me(o)),d.addAssign(me(r)),to(h,d,f)}),ft=Qn([s_,r_,o_,a_,c_]),l_=K(([s,e])=>{const t=C(e).toVar(),n=C(s).toVar(),i=me(ft(n,t)).toVar(),r=Go().toVar();return r.x.assign(i.bitAnd(C(255))),r.y.assign(i.shiftRight(C(8)).bitAnd(C(255))),r.z.assign(i.shiftRight(C(16)).bitAnd(C(255))),r}),u_=K(([s,e,t])=>{const n=C(t).toVar(),i=C(e).toVar(),r=C(s).toVar(),o=me(ft(r,i,n)).toVar(),a=Go().toVar();return a.x.assign(o.bitAnd(C(255))),a.y.assign(o.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(o.shiftRight(C(16)).bitAnd(C(255))),a}),Kn=Qn([l_,u_]),h_=K(([s])=>{const e=Ae(s).toVar(),t=C().toVar(),n=C().toVar(),i=N(Rt(e.x,t)).toVar(),r=N(Rt(e.y,n)).toVar(),o=N(di(i)).toVar(),a=N(di(r)).toVar(),c=N(Gg(nn(ft(t,n),i,r),nn(ft(t.add(C(1)),n),i.sub(1),r),nn(ft(t,n.add(C(1))),i,r.sub(1)),nn(ft(t.add(C(1)),n.add(C(1))),i.sub(1),r.sub(1)),o,a)).toVar();return e_(c)}),d_=K(([s])=>{const e=O(s).toVar(),t=C().toVar(),n=C().toVar(),i=C().toVar(),r=N(Rt(e.x,t)).toVar(),o=N(Rt(e.y,n)).toVar(),a=N(Rt(e.z,i)).toVar(),c=N(di(r)).toVar(),l=N(di(o)).toVar(),u=N(di(a)).toVar(),h=N(qg(nn(ft(t,n,i),r,o,a),nn(ft(t.add(C(1)),n,i),r.sub(1),o,a),nn(ft(t,n.add(C(1)),i),r,o.sub(1),a),nn(ft(t.add(C(1)),n.add(C(1)),i),r.sub(1),o.sub(1),a),nn(ft(t,n,i.add(C(1))),r,o,a.sub(1)),nn(ft(t.add(C(1)),n,i.add(C(1))),r.sub(1),o,a.sub(1)),nn(ft(t,n.add(C(1)),i.add(C(1))),r,o.sub(1),a.sub(1)),nn(ft(t.add(C(1)),n.add(C(1)),i.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return n_(h)}),HR=Qn([h_,d_]),f_=K(([s])=>{const e=Ae(s).toVar(),t=C().toVar(),n=C().toVar(),i=N(Rt(e.x,t)).toVar(),r=N(Rt(e.y,n)).toVar(),o=N(di(i)).toVar(),a=N(di(r)).toVar(),c=O(Gg(jn(Kn(t,n),i,r),jn(Kn(t.add(C(1)),n),i.sub(1),r),jn(Kn(t,n.add(C(1))),i,r.sub(1)),jn(Kn(t.add(C(1)),n.add(C(1))),i.sub(1),r.sub(1)),o,a)).toVar();return e_(c)}),p_=K(([s])=>{const e=O(s).toVar(),t=C().toVar(),n=C().toVar(),i=C().toVar(),r=N(Rt(e.x,t)).toVar(),o=N(Rt(e.y,n)).toVar(),a=N(Rt(e.z,i)).toVar(),c=N(di(r)).toVar(),l=N(di(o)).toVar(),u=N(di(a)).toVar(),h=O(qg(jn(Kn(t,n,i),r,o,a),jn(Kn(t.add(C(1)),n,i),r.sub(1),o,a),jn(Kn(t,n.add(C(1)),i),r,o.sub(1),a),jn(Kn(t.add(C(1)),n.add(C(1)),i),r.sub(1),o.sub(1),a),jn(Kn(t,n,i.add(C(1))),r,o,a.sub(1)),jn(Kn(t.add(C(1)),n,i.add(C(1))),r.sub(1),o,a.sub(1)),jn(Kn(t,n.add(C(1)),i.add(C(1))),r,o.sub(1),a.sub(1)),jn(Kn(t.add(C(1)),n.add(C(1)),i.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return n_(h)}),GR=Qn([f_,p_]),WR=K(([s])=>{const e=N(s).toVar(),t=C(Bt(e)).toVar();return ln(ft(t))}),XR=K(([s])=>{const e=Ae(s).toVar(),t=C(Bt(e.x)).toVar(),n=C(Bt(e.y)).toVar();return ln(ft(t,n))}),qR=K(([s])=>{const e=O(s).toVar(),t=C(Bt(e.x)).toVar(),n=C(Bt(e.y)).toVar(),i=C(Bt(e.z)).toVar();return ln(ft(t,n,i))}),YR=K(([s])=>{const e=Ee(s).toVar(),t=C(Bt(e.x)).toVar(),n=C(Bt(e.y)).toVar(),i=C(Bt(e.z)).toVar(),r=C(Bt(e.w)).toVar();return ln(ft(t,n,i,r))}),m_=K(([s])=>{const e=N(s).toVar(),t=C(Bt(e)).toVar();return O(ln(ft(t,C(0))),ln(ft(t,C(1))),ln(ft(t,C(2))))}),g_=K(([s])=>{const e=Ae(s).toVar(),t=C(Bt(e.x)).toVar(),n=C(Bt(e.y)).toVar();return O(ln(ft(t,n,C(0))),ln(ft(t,n,C(1))),ln(ft(t,n,C(2))))}),__=K(([s])=>{const e=O(s).toVar(),t=C(Bt(e.x)).toVar(),n=C(Bt(e.y)).toVar(),i=C(Bt(e.z)).toVar();return O(ln(ft(t,n,i,C(0))),ln(ft(t,n,i,C(1))),ln(ft(t,n,i,C(2))))}),x_=K(([s])=>{const e=Ee(s).toVar(),t=C(Bt(e.x)).toVar(),n=C(Bt(e.y)).toVar(),i=C(Bt(e.z)).toVar(),r=C(Bt(e.w)).toVar();return O(ln(ft(t,n,i,r,C(0))),ln(ft(t,n,i,r,C(1))),ln(ft(t,n,i,r,C(2))))}),y_=Qn([m_,g_,__,x_]),sc=K(([s,e,t,n])=>{const i=N(n).toVar(),r=N(t).toVar(),o=C(e).toVar(),a=O(s).toVar(),c=N(0).toVar(),l=N(1).toVar();return bt({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(HR(a))),l.mulAssign(i),a.mulAssign(r)}),c}),v_=K(([s,e,t,n])=>{const i=N(n).toVar(),r=N(t).toVar(),o=C(e).toVar(),a=O(s).toVar(),c=O(0).toVar(),l=N(1).toVar();return bt({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(GR(a))),l.mulAssign(i),a.mulAssign(r)}),c}),jR=K(([s,e,t,n])=>{const i=N(n).toVar(),r=N(t).toVar(),o=C(e).toVar(),a=O(s).toVar();return Ae(sc(a,o,r,i),sc(a.add(O(C(19),C(193),C(17))),o,r,i))}),KR=K(([s,e,t,n])=>{const i=N(n).toVar(),r=N(t).toVar(),o=C(e).toVar(),a=O(s).toVar(),c=O(v_(a,o,r,i)).toVar(),l=N(sc(a.add(O(C(19),C(193),C(17))),o,r,i)).toVar();return Ee(c,l)}),M_=K(([s,e,t,n,i,r,o])=>{const a=C(o).toVar(),c=N(r).toVar(),l=C(i).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),f=Ae(s).toVar(),g=O(y_(Ae(d.add(u),h.add(l)))).toVar(),_=Ae(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const m=Ae(Ae(N(d),N(h)).add(_)).toVar(),p=Ae(m.sub(f)).toVar();return et(a.equal(C(2)),()=>Wt(p.x).add(Wt(p.y))),et(a.equal(C(3)),()=>Hn(Wt(p.x),Wt(p.y))),Zr(p,p)}),T_=K(([s,e,t,n,i,r,o,a,c])=>{const l=C(c).toVar(),u=N(a).toVar(),h=C(o).toVar(),d=C(r).toVar(),f=C(i).toVar(),g=C(n).toVar(),_=C(t).toVar(),m=C(e).toVar(),p=O(s).toVar(),T=O(y_(O(m.add(f),_.add(d),g.add(h)))).toVar();T.subAssign(.5),T.mulAssign(u),T.addAssign(.5);const y=O(O(N(m),N(_),N(g)).add(T)).toVar(),A=O(y.sub(p)).toVar();return et(l.equal(C(2)),()=>Wt(A.x).add(Wt(A.y).add(Wt(A.z)))),et(l.equal(C(3)),()=>Hn(Hn(Wt(A.x),Wt(A.y)),Wt(A.z))),Zr(A,A)}),no=Qn([M_,T_]),$R=K(([s,e,t])=>{const n=C(t).toVar(),i=N(e).toVar(),r=Ae(s).toVar(),o=C().toVar(),a=C().toVar(),c=Ae(Rt(r.x,o),Rt(r.y,a)).toVar(),l=N(1e6).toVar();return bt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{bt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=N(no(c,u,h,o,a,i,n)).toVar();l.assign(kr(l,d))})}),et(n.equal(C(0)),()=>{l.assign(qs(l))}),l}),ZR=K(([s,e,t])=>{const n=C(t).toVar(),i=N(e).toVar(),r=Ae(s).toVar(),o=C().toVar(),a=C().toVar(),c=Ae(Rt(r.x,o),Rt(r.y,a)).toVar(),l=Ae(1e6,1e6).toVar();return bt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{bt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=N(no(c,u,h,o,a,i,n)).toVar();et(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),et(n.equal(C(0)),()=>{l.assign(qs(l))}),l}),JR=K(([s,e,t])=>{const n=C(t).toVar(),i=N(e).toVar(),r=Ae(s).toVar(),o=C().toVar(),a=C().toVar(),c=Ae(Rt(r.x,o),Rt(r.y,a)).toVar(),l=O(1e6,1e6,1e6).toVar();return bt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{bt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=N(no(c,u,h,o,a,i,n)).toVar();et(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),et(n.equal(C(0)),()=>{l.assign(qs(l))}),l}),QR=K(([s,e,t])=>{const n=C(t).toVar(),i=N(e).toVar(),r=O(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=O(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=N(1e6).toVar();return bt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{bt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{bt({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const g=N(no(l,h,d,f,o,a,c,i,n)).toVar();u.assign(kr(u,g))})})}),et(n.equal(C(0)),()=>{u.assign(qs(u))}),u}),eC=K(([s,e,t])=>{const n=C(t).toVar(),i=N(e).toVar(),r=O(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=O(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=Ae(1e6,1e6).toVar();return bt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{bt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{bt({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const g=N(no(l,h,d,f,o,a,c,i,n)).toVar();et(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),et(n.equal(C(0)),()=>{u.assign(qs(u))}),u}),tC=K(([s,e,t])=>{const n=C(t).toVar(),i=N(e).toVar(),r=O(s).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=O(Rt(r.x,o),Rt(r.y,a),Rt(r.z,c)).toVar(),u=O(1e6,1e6,1e6).toVar();return bt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{bt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{bt({start:-1,end:C(1),name:"z",condition:"<="},({z:f})=>{const g=N(no(l,h,d,f,o,a,c,i,n)).toVar();et(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),et(n.equal(C(0)),()=>{u.assign(qs(u))}),u});Rr.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Uo.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Bt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});kg.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});Hg.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});Wg.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Xg.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Yg.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});jg.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Kg.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});$g.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Zg.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});Jg.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});Qg.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});t_.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});wn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});to.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});ln.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});di.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});s_.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});r_.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});o_.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});a_.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});c_.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});l_.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});u_.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});h_.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});d_.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});f_.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});p_.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});WR.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});XR.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});qR.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});YR.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});m_.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});g_.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});__.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});x_.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});sc.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});v_.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});jR.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});KR.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});M_.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});T_.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});$R.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});ZR.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});JR.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});QR.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});eC.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});tC.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const nC=K(([s])=>{const e=O(s).toVar(),t=N(e.x).toVar(),n=N(e.y).toVar(),i=N(e.z).toVar();et(n.lessThan(1e-4),()=>O(i,i,i)).else(()=>{t.assign(ct(6,t.sub($r(t))));const r=C(im(t)).toVar(),o=N(t.sub(N(r))).toVar(),a=N(i.mul(zt(1,n))).toVar(),c=N(i.mul(zt(1,n.mul(o)))).toVar(),l=N(i.mul(zt(1,n.mul(zt(1,o))))).toVar();return et(r.equal(C(0)),()=>O(i,l,a)).elseif(r.equal(C(1)),()=>O(c,i,a)).elseif(r.equal(C(2)),()=>O(a,i,l)).elseif(r.equal(C(3)),()=>O(a,c,i)).elseif(r.equal(C(4)),()=>O(l,a,i)),O(i,a,c)})}),iC=K(([s])=>{const e=O(s).toVar(),t=N(e.x).toVar(),n=N(e.y).toVar(),i=N(e.z).toVar(),r=N(kr(t,kr(n,i))).toVar(),o=N(Hn(t,Hn(n,i))).toVar(),a=N(o.sub(r)).toVar(),c=N().toVar(),l=N().toVar(),u=N().toVar();return u.assign(o),et(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),et(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{et(t.greaterThanEqual(o),()=>{c.assign(n.sub(i).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(kn(2,i.sub(t).div(a)))}).else(()=>{c.assign(kn(4,t.sub(n).div(a)))}),c.mulAssign(1/6),et(c.lessThan(0),()=>{c.addAssign(1)})}),O(c,l,u)});nC.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});iC.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const sC=K(([s])=>{const e=O(s).toVar(),t=Op(Zp(e,O(.04045))).toVar(),n=O(e.div(12.92)).toVar(),i=O(bi(Hn(e.add(O(.055)),O(0)).div(1.055),O(2.4))).toVar();return un(n,i,t)});sC.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});const gi=new KT,Gr=new Tn(50,window.innerWidth/window.innerHeight,.1,100),rc=new jT({alpha:!0});Gr.position.set(2,0,-2);const io=new zS(Gr,rc.domElement);io.enableZoom=!1;io.enablePan=!1;io.autoRotate=!1;io.minPolarAngle=Math.PI/9;io.maxPolarAngle=Math.PI/6*5;io.target.set(1.8,.2,.1);gi.background=new Ne(7774563);let Ls=null;const To=new VS,pr=new Te,rC=new L(0,0,-1);To.set(Gr.position,rC.normalize());const Yo=new GS;let Ia,Pa,Da,Oa,Ua;const oC=fC(),aC=pC();window.onload=()=>{rc.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(rc.domElement),Ia=cC(),Pa=lC(),Da=dC(),Oa=uC(),Ua=hC(),gi.add(oC),gi.add(aC),S_(),mC(),gC()};function S_(){requestAnimationFrame(S_),rc.render(gi,Gr)}function cC(){return Yo.load("/room.glb",function(s){s.scene.scale.set(2,2,2),gi.add(s.scene),Ia=s.scene,Ia.userData.groupName="room"},void 0,function(s){console.error(s)}),Ia}function lC(){return Yo.load("/notebook.glb",function(s){s.scene.scale.set(2,2,2),gi.add(s.scene),Pa=s.scene,Pa.userData.groupName="notebook"},void 0,function(s){console.error(s)}),Pa}function uC(){return Yo.load("/mailbox.glb",function(s){s.scene.scale.set(2,2,2),s.scene.position.set(-.741,0,-.133),s.scene.rotation.x=Math.PI,s.scene.rotation.y=Math.PI/2,s.scene.rotation.z=Math.PI,gi.add(s.scene),Oa=s.scene,Oa.userData.groupName="mailbox"},void 0,function(s){console.error(s)}),Oa}function hC(){return Yo.load("/door.glb",function(s){s.scene.scale.set(2,2,2),gi.add(s.scene),Ua=s.scene,Ua.userData.groupName="door"},void 0,function(s){console.error(s)}),Ua}function dC(){return Yo.load("/readingArea.glb",function(s){s.scene.scale.set(2,2,2),gi.add(s.scene),Da=s.scene,Da.userData.groupName="readingArea"},void 0,function(s){console.error(s)}),Da}function fC(){const s=new Ru(14403492,10);return s.position.set(0,2,0),s}function pC(){return new Ep(16574927,2)}function mC(){window.addEventListener("click",()=>{pr.x=event.clientX/window.innerWidth*2-1,pr.y=-(event.clientY/window.innerHeight)*2+1,To.setFromCamera(pr,Gr);const s=To.intersectObjects(gi.children,!0);for(let i=0;i<s.length;i++){let r=s[i].object;for(;r;){if(r.userData.groupName==="notebook"){console.log("clicked on noteboook");var e=document.getElementById("makePost");e.style.display==="none"&&(e.style.display="block");break}if(r.userData.groupName==="readingArea"){console.log("clicked on reading area");var t=document.getElementById("all-posts");t.style.display==="none"&&(t.style.display="block");break}if(r.userData.groupName==="mailbox"){console.log("clicked on mailbox");var n=document.getElementById("comments");n.style.display==="none"&&(n.style.display="block");break}if(r.userData.groupName==="door"){console.log("clicked on door"),window.location.href="/start";break}r=r.parent}}}),window.addEventListener("mousemove",s=>{pr.x=s.clientX/window.innerWidth*2-1,pr.y=-(s.clientY/window.innerHeight)*2+1,To.setFromCamera(pr,Gr);const e=To.intersectObjects(gi.children,!0);var t=document.getElementById("post-indicate");if(e.length>0){const n=e[0].object;let i=null,r=n;for(;r;){if(r.userData.groupName==="notebook"){i=r;break}r=r.parent}i!==Ls&&(Ls&&(t.style.display="none",Ls.traverse(o=>{o.isMesh&&o.material&&(o.material.emissive=new Ne(0),o.material.emissiveIntensity=1)})),Ls=i,i&&(t.style.display="block",i.traverse(o=>{o.isMesh&&o.material&&(o.material.emissive=new Ne(16777215),o.material.emissiveIntensity=.3)})))}else Ls&&(t.style.display="none",Ls.traverse(n=>{n.isMesh&&n.material&&(n.material.emissive=new Ne(0),n.material.emissiveIntensity=1)}),Ls=null)})}function gC(){document.getElementById("post-cross").addEventListener("click",()=>{var s=document.getElementById("makePost");console.log("post cross clicked"),s.style.display==="block"&&(s.style.display="none")}),document.getElementById("all-cross").addEventListener("click",()=>{var s=document.getElementById("all-posts");console.log("all cross clicked"),s.style.display==="block"&&(s.style.display="none")}),document.getElementById("mail-cross").addEventListener("click",()=>{var s=document.getElementById("comments");console.log("comments cross clicked"),s.style.display==="block"&&(s.style.display="none")})}
