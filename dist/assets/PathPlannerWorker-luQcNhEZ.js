(function(){"use strict";const fl="124",Pd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Id={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dl=0,ta=1,pl=2,Dd=3,Fd=0,na=1,ml=2,xi=3,vi=0,et=1,hr=2,ia=1,Od=2,sn=0,_i=1,ra=2,sa=3,oa=4,gl=5,Hn=100,yl=101,xl=102,aa=103,ca=104,vl=200,_l=201,bl=202,wl=203,la=204,ha=205,Ml=206,Sl=207,Tl=208,El=209,Al=210,Ll=0,Cl=1,Rl=2,_s=3,Pl=4,Il=5,Dl=6,Fl=7,ur=0,Ol=1,Nl=2,Vn=0,Bl=1,Gl=2,zl=3,Ul=4,Hl=5,bs=300,fr=301,dr=302,ws=303,Ms=304,bi=306,pr=307,mr=1e3,ft=1001,gr=1002,tt=1003,Ss=1004,Nd=1004,Ts=1005,Bd=1005,nt=1006,ua=1007,Gd=1007,wi=1008,zd=1008,Mi=1009,Vl=1010,kl=1011,yr=1012,Wl=1013,xr=1014,on=1015,vr=1016,jl=1017,ql=1018,Xl=1019,Si=1020,Yl=1021,bn=1022,bt=1023,Zl=1024,Jl=1025,$l=bt,kn=1026,Ti=1027,Kl=1028,Ql=1029,eh=1030,th=1031,nh=1032,ih=1033,fa=33776,da=33777,pa=33778,ma=33779,ga=35840,ya=35841,xa=35842,va=35843,rh=36196,_a=37492,ba=37496,sh=37808,oh=37809,ah=37810,ch=37811,lh=37812,hh=37813,uh=37814,fh=37815,dh=37816,ph=37817,mh=37818,gh=37819,yh=37820,xh=37821,vh=36492,_h=37840,bh=37841,wh=37842,Mh=37843,Sh=37844,Th=37845,Eh=37846,Ah=37847,Lh=37848,Ch=37849,Rh=37850,Ph=37851,Ih=37852,Dh=37853,Fh=2200,Oh=2201,Nh=2202,_r=2300,br=2301,Es=2302,Wn=2400,jn=2401,wr=2402,As=2500,wa=2501,Bh=0,Ud=1,Hd=2,dt=3e3,Mr=3001,Ls=3007,Cs=3002,Gh=3003,Ma=3004,Sa=3005,Ta=3006,zh=3200,Uh=3201,qn=0,Hh=1,Vd=0,Rs=7680,kd=7681,Wd=7682,jd=7683,qd=34055,Xd=34056,Yd=5386,Zd=512,Jd=513,$d=514,Kd=515,Qd=516,ep=517,tp=518,Vh=519,Sr=35044,Xn=35048,np=35040,ip=35045,rp=35049,sp=35041,op=35046,ap=35050,cp=35042,lp="100",Ea="300 es";function qt(){}Object.assign(qt.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});const st=[];for(let t=0;t<256;t++)st[t]=(t<16?"0":"")+t.toString(16);let Ps=1234567;const we={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(st[t&255]+st[t>>8&255]+st[t>>16&255]+st[t>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[n&63|128]+st[n>>8&255]+"-"+st[n>>16&255]+st[n>>24&255]+st[i&255]+st[i>>8&255]+st[i>>16&255]+st[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(Ps=t%2147483647),Ps=Ps*16807%2147483647,(Ps-1)/2147483646},degToRad:function(t){return t*we.DEG2RAD},radToDeg:function(t){return t*we.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*u,c*h,c*f,a*l);break;case"YZY":t.set(c*f,a*u,c*h,a*l);break;case"ZXZ":t.set(c*h,c*f,a*u,a*l);break;case"XZX":t.set(a*u,c*p,c*d,a*l);break;case"YXY":t.set(c*d,a*u,c*p,a*l);break;case"ZYZ":t.set(c*p,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class V{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class pt{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],y=r[0],x=r[3],g=r[6],m=r[1],_=r[4],b=r[7],w=r[2],v=r[5],E=r[8];return s[0]=o*y+a*m+c*w,s[3]=o*x+a*_+c*v,s[6]=o*g+a*b+c*E,s[1]=l*y+u*m+h*w,s[4]=l*x+u*_+h*v,s[7]=l*g+u*b+h*E,s[2]=f*y+d*m+p*w,s[5]=f*x+d*_+p*v,s[8]=f*g+d*b+p*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,p=n*h+i*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/p;return e[0]=h*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*c)*y,e[5]=(r*s-a*n)*y,e[6]=d*y,e[7]=(i*c-l*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).copy(this).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*u,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let Ei;const Yn={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let hp=0;function Be(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ft,i=ft,r=nt,s=wi,o=bt,a=Mi,c=1,l=dt){Object.defineProperty(this,"id",{value:hp++}),this.uuid=we.generateUUID(),this.name="",this.image=t,this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.version=0,this.onUpdate=null}Be.DEFAULT_IMAGE=void 0,Be.DEFAULT_MAPPING=bs,Be.prototype=Object.assign(Object.create(qt.prototype),{constructor:Be,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=we.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Aa(i[s].image)):r.push(Aa(i[s]))}else r=Aa(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==bs)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case ft:t.x=t.x<0?0:1;break;case gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case ft:t.y=t.y<0?0:1;break;case gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(Be.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Aa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yn.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ge{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],y=c[2],x=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(p-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(p+x)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,b=(d+1)/2,w=(g+1)/2,v=(u+f)/4,E=(h+y)/4,L=(p+x)/4;return _>b&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=v/i,s=E/i):b>w?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=v/r,s=L/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=L/s),this.set(i,r,s,n),this}let m=Math.sqrt((x-p)*(x-p)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(x-p)/m,this.y=(h-y)/m,this.z=(f-u)/m,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function wt(t,e,n){this.width=t,this.height=e,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),n=n||{},this.texture=new Be(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}wt.prototype=Object.assign(Object.create(qt.prototype),{constructor:wt,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function La(t,e,n){wt.call(this,t,e,n),this.samples=4}La.prototype=Object.assign(Object.create(wt.prototype),{constructor:La,isWebGLMultisampleRenderTarget:!0,copy:function(t){return wt.prototype.copy.call(this,t),this.samples=t.samples,this}});class ct{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],p=s[o+2],y=s[o+3];if(h!==y||c!==f||l!==d||u!==p){let x=1-a;const g=c*f+l*d+u*p+h*y,m=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const w=Math.sqrt(_),v=Math.atan2(w,g*m);x=Math.sin(x*v)/w,a=Math.sin(a*v)/w}const b=a*m;if(c=c*x+f*b,l=l*x+d*b,u=u*x+p*b,h=h*x+y*b,x===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[n]=a*p+u*h+c*d-l*f,e[n+1]=c*p+u*f+l*h-a*d,e[n+2]=l*p+u*d+a*f-c*h,e[n+3]=u*p-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(we.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class M{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,u=c*i+a*n-s*r,h=c*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(we.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const Ca=new M,kh=new ct;class Xt{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new M(1/0,1/0,1/0),this.max=n!==void 0?n:new M(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<n&&(n=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<n&&(n=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new M),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox),Pa.applyMatrix4(e.matrixWorld),this.union(Pa));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new M),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tr),Tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Is.subVectors(this.max,Er),Ai.subVectors(e.a,Er),Li.subVectors(e.b,Er),Ci.subVectors(e.c,Er),wn.subVectors(Li,Ai),Mn.subVectors(Ci,Li),Zn.subVectors(Ai,Ci);let n=[0,-wn.z,wn.y,0,-Mn.z,Mn.y,0,-Zn.z,Zn.y,wn.z,0,-wn.x,Mn.z,0,-Mn.x,Zn.z,0,-Zn.x,-wn.y,wn.x,0,-Mn.y,Mn.x,0,-Zn.y,Zn.x,0];return!Ra(n,Ai,Li,Ci,Is)||(n=[1,0,0,0,1,0,0,0,1],!Ra(n,Ai,Li,Ci,Is))?!1:(Ds.crossVectors(wn,Mn),n=[Ds.x,Ds.y,Ds.z],Ra(n,Ai,Li,Ci,Is))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new M),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Tr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Ra(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Jn.fromArray(t,s);const a=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),c=e.dot(Jn),l=n.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const an=[new M,new M,new M,new M,new M,new M,new M,new M],Tr=new M,Pa=new Xt,Ai=new M,Li=new M,Ci=new M,wn=new M,Mn=new M,Zn=new M,Er=new M,Is=new M,Ds=new M,Jn=new M,up=new Xt;class cn{constructor(e,n){this.center=e!==void 0?e:new M,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):up.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new M),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Xt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const ln=new M,Ia=new M,Fs=new M,Sn=new M,Da=new M,Os=new M,Fa=new M;class Ri{constructor(e,n){this.origin=e!==void 0?e:new M,this.direction=n!==void 0?n:new M(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new M),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new M),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ln.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ln.copy(this.direction).multiplyScalar(n).add(this.origin),ln.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ia.copy(e).add(n).multiplyScalar(.5),Fs.copy(n).sub(e).normalize(),Sn.copy(this.origin).sub(Ia);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fs),a=Sn.dot(this.direction),c=-Sn.dot(Fs),l=Sn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*c-a,f=o*a-c,p=s*u,h>=0)if(f>=-p)if(f<=p){const y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Fs).multiplyScalar(f).add(Ia),d}intersectSphere(e,n){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,n,i,r,s){Da.subVectors(n,e),Os.subVectors(i,e),Fa.crossVectors(Da,Os);let o=this.direction.dot(Fa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const c=a*this.direction.dot(Os.crossVectors(Sn,Os));if(c<0)return null;const l=a*this.direction.dot(Da.cross(Sn));if(l<0||c+l>o)return null;const u=-a*Sn.dot(Fa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class Se{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,u,h,f,d,p,y,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,p=a*u,y=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=d+p*l,n[5]=f-y*l,n[9]=-a*c,n[2]=y-f*l,n[6]=p+d*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,y=l*h;n[0]=f+y*a,n[4]=p*a-d,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=d*a-p,n[6]=y+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,y=l*h;n[0]=f-y*a,n[4]=-o*h,n[8]=p+d*a,n[1]=d+p*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,p=a*u,y=a*h;n[0]=c*u,n[4]=p*l-d,n[8]=f*l+y,n[1]=c*h,n[5]=y*l+f,n[9]=d*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,y=a*l;n[0]=c*u,n[4]=y-f*h,n[8]=p*h+d,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*h+p,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,y=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=f*h+y,n[5]=o*u,n[9]=d*h-p,n[2]=p*h-d,n[6]=a*u,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,dp)}lookAt(e,n,i){const r=this.elements;return Mt.subVectors(e,n),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),Tn.crossVectors(i,Mt),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),Tn.crossVectors(i,Mt)),Tn.normalize(),Ns.crossVectors(Mt,Tn),r[0]=Tn.x,r[4]=Ns.x,r[8]=Mt.x,r[1]=Tn.y,r[5]=Ns.y,r[9]=Mt.y,r[2]=Tn.z,r[6]=Ns.z,r[10]=Mt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],y=i[6],x=i[10],g=i[14],m=i[3],_=i[7],b=i[11],w=i[15],v=r[0],E=r[4],L=r[8],P=r[12],z=r[1],I=r[5],F=r[9],O=r[13],D=r[2],C=r[6],N=r[10],k=r[14],Y=r[3],J=r[7],Q=r[11],Z=r[15];return s[0]=o*v+a*z+c*D+l*Y,s[4]=o*E+a*I+c*C+l*J,s[8]=o*L+a*F+c*N+l*Q,s[12]=o*P+a*O+c*k+l*Z,s[1]=u*v+h*z+f*D+d*Y,s[5]=u*E+h*I+f*C+d*J,s[9]=u*L+h*F+f*N+d*Q,s[13]=u*P+h*O+f*k+d*Z,s[2]=p*v+y*z+x*D+g*Y,s[6]=p*E+y*I+x*C+g*J,s[10]=p*L+y*F+x*N+g*Q,s[14]=p*P+y*O+x*k+g*Z,s[3]=m*v+_*z+b*D+w*Y,s[7]=m*E+_*I+b*C+w*J,s[11]=m*L+_*F+b*N+w*Q,s[15]=m*P+_*O+b*k+w*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],y=e[7],x=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+y*(+n*c*d-n*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+x*(+n*l*h-n*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+g*(-r*a*u-n*c*h+n*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],y=e[13],x=e[14],g=e[15],m=h*x*l-y*f*l+y*c*d-a*x*d-h*c*g+a*f*g,_=p*f*l-u*x*l-p*c*d+o*x*d+u*c*g-o*f*g,b=u*y*l-p*h*l+p*a*d-o*y*d-u*a*g+o*h*g,w=p*h*c-u*y*c-p*a*f+o*y*f+u*a*x-o*h*x,v=n*m+i*_+r*b+s*w;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=m*E,e[1]=(y*f*s-h*x*s-y*r*d+i*x*d+h*r*g-i*f*g)*E,e[2]=(a*x*s-y*c*s+y*r*l-i*x*l-a*r*g+i*c*g)*E,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*E,e[4]=_*E,e[5]=(u*x*s-p*f*s+p*r*d-n*x*d-u*r*g+n*f*g)*E,e[6]=(p*c*s-o*x*s-p*r*l+n*x*l+o*r*g-n*c*g)*E,e[7]=(o*f*s-u*c*s+u*r*l-n*f*l-o*r*d+n*c*d)*E,e[8]=b*E,e[9]=(p*h*s-u*y*s-p*i*d+n*y*d+u*i*g-n*h*g)*E,e[10]=(o*y*s-p*a*s+p*i*l-n*y*l-o*i*g+n*a*g)*E,e[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*d-n*a*d)*E,e[12]=w*E,e[13]=(u*y*r-p*h*r+p*i*f-n*y*f-u*i*x+n*h*x)*E,e[14]=(p*a*r-o*y*r-p*i*c+n*y*c+o*i*x-n*a*x)*E,e[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*f+n*a*f)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,p=s*h,y=o*u,x=o*h,g=a*h,m=c*l,_=c*u,b=c*h,w=i.x,v=i.y,E=i.z;return r[0]=(1-(y+g))*w,r[1]=(d+b)*w,r[2]=(p-_)*w,r[3]=0,r[4]=(d-b)*v,r[5]=(1-(f+g))*v,r[6]=(x+m)*v,r[7]=0,r[8]=(p+_)*E,r[9]=(x-m)*E,r[10]=(1-(f+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const o=Pi.set(r[4],r[5],r[6]).length(),a=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const l=1/s,u=1/o,h=1/a;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,n.setFromRotationMatrix(Ot),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-e),l=2*s/(i-r),u=(n+e)/(n-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,c=1/(n-e),l=1/(i-r),u=1/(o-s),h=(n+e)*c,f=(i+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pi=new M,Ot=new Se,fp=new M(0,0,0),dp=new M(1,1,1),Tn=new M,Ns=new M,Mt=new M;class Ii{constructor(e=0,n=0,i=0,r=Ii.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=we.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new M(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ii.DefaultOrder="XYZ",Ii.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const Wh=new Se,jh=new ct;class Oa{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let pp=0;const qh=new M,Di=new ct,hn=new Se,Bs=new M,Ar=new M,mp=new M,gp=new ct,Xh=new M(1,0,0),Yh=new M(0,1,0),Zh=new M(0,0,1),yp={type:"added"},Jh={type:"removed"};function he(){Object.defineProperty(this,"id",{value:pp++}),this.uuid=we.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DefaultUp.clone();const t=new M,e=new Ii,n=new ct,i=new M(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new pt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=he.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}he.DefaultUp=new M(0,1,0),he.DefaultMatrixAutoUpdate=!0,he.prototype=Object.assign(Object.create(qt.prototype),{constructor:he,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this},rotateOnWorldAxis:function(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this},rotateX:function(t){return this.rotateOnAxis(Xh,t)},rotateY:function(t){return this.rotateOnAxis(Yh,t)},rotateZ:function(t){return this.rotateOnAxis(Zh,t)},translateOnAxis:function(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(Xh,t)},translateY:function(t){return this.translateOnAxis(Yh,t)},translateZ:function(t){return this.translateOnAxis(Zh,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(hn.copy(this.matrixWorld).invert())},lookAt:function(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ar,Bs,this.up):hn.lookAt(Bs,Ar,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(hn),this.quaternion.premultiply(Di.invert()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(yp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Jh)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new M),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ct),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,mp),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new M),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,gp,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(t.shapes,u)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(t.animations,a))}}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),u=s(t.shapes),h=s(t.skeletons),f=s(t.animations);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const Na=new M,xp=new M,vp=new pt;class Yt{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new M(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Na.subVectors(i,n).cross(xp.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new M),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new M);const i=e.delta(Na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new M),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vp.getNormalMatrix(e),r=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const Nt=new M,un=new M,Ba=new M,fn=new M,Fi=new M,Oi=new M,$h=new M,Ga=new M,za=new M,Ua=new M;class ot{constructor(e,n,i){this.a=e!==void 0?e:new M,this.b=n!==void 0?n:new M,this.c=i!==void 0?i:new M}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new M),r.subVectors(i,n),Nt.subVectors(e,n),r.cross(Nt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nt.subVectors(r,n),un.subVectors(i,n),Ba.subVectors(e,n);const o=Nt.dot(Nt),a=Nt.dot(un),c=Nt.dot(Ba),l=un.dot(un),u=un.dot(Ba),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new M),h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,p=(o*u-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,fn),c.set(0,0),c.addScaledVector(s,fn.x),c.addScaledVector(o,fn.y),c.addScaledVector(a,fn.z),c}static isFrontFacing(e,n,i,r){return Nt.subVectors(i,n),un.subVectors(e,n),Nt.cross(un).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Nt.cross(un).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new M),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Yt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ot.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ot.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new M);const i=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,i),Oi.subVectors(s,i),Ga.subVectors(e,i);const c=Fi.dot(Ga),l=Oi.dot(Ga);if(c<=0&&l<=0)return n.copy(i);za.subVectors(e,r);const u=Fi.dot(za),h=Oi.dot(za);if(u>=0&&h<=u)return n.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Fi,o);Ua.subVectors(e,s);const d=Fi.dot(Ua),p=Oi.dot(Ua);if(p>=0&&d<=p)return n.copy(s);const y=d*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Oi,a);const x=u*p-d*h;if(x<=0&&h-u>=0&&d-p>=0)return $h.subVectors(s,r),a=(h-u)/(h-u+(d-p)),n.copy(r).addScaledVector($h,a);const g=1/(x+y+f);return o=y*g,a=f*g,n.copy(i).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ha(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Va(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ka(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}class se{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=we.euclideanModulo(e,1),n=we.clamp(n,0,1),i=we.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Ha(s,r,e+1/3),this.g=Ha(s,r,e),this.b=Ha(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[4]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[4]),this;break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=Kh[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n=2){return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n=2){const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case n:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-n)/u+2;break;case r:a=(n-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(Bt),Bt.h+=e,Bt.s+=n,Bt.l+=i,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(Bt),e.getHSL(Gs);const i=we.lerp(Bt.h,Gs.h,n),r=we.lerp(Bt.s,Gs.s,n),s=we.lerp(Bt.l,Gs.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}se.NAMES=Kh,se.prototype.r=1,se.prototype.g=1,se.prototype.b=1;class Lr{constructor(e,n,i,r,s,o=0){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new M,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new se,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let _p=0;function ve(){Object.defineProperty(this,"id",{value:_p++}),this.uuid=we.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=_i,this.side=vi,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=la,this.blendDst=ha,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}ve.prototype=Object.assign(Object.create(qt.prototype),{constructor:ve,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ia;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==vi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Object.defineProperty(ve.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function Rt(t){ve.call(this),this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}Rt.prototype=Object.create(ve.prototype),Rt.prototype.constructor=Rt,Rt.prototype.isMeshBasicMaterial=!0,Rt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const Ue=new M,zs=new V;function ge(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Sr,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(ge.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(ge.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new se),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new V),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new M),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ge),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)Ue.x=this.getX(e),Ue.y=this.getY(e),Ue.z=this.getZ(e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this},set:function(t,e=0){return this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Cr(t,e,n){ge.call(this,new Int8Array(t),e,n)}Cr.prototype=Object.create(ge.prototype),Cr.prototype.constructor=Cr;function Rr(t,e,n){ge.call(this,new Uint8Array(t),e,n)}Rr.prototype=Object.create(ge.prototype),Rr.prototype.constructor=Rr;function Pr(t,e,n){ge.call(this,new Uint8ClampedArray(t),e,n)}Pr.prototype=Object.create(ge.prototype),Pr.prototype.constructor=Pr;function Ir(t,e,n){ge.call(this,new Int16Array(t),e,n)}Ir.prototype=Object.create(ge.prototype),Ir.prototype.constructor=Ir;function $n(t,e,n){ge.call(this,new Uint16Array(t),e,n)}$n.prototype=Object.create(ge.prototype),$n.prototype.constructor=$n;function Dr(t,e,n){ge.call(this,new Int32Array(t),e,n)}Dr.prototype=Object.create(ge.prototype),Dr.prototype.constructor=Dr;function Kn(t,e,n){ge.call(this,new Uint32Array(t),e,n)}Kn.prototype=Object.create(ge.prototype),Kn.prototype.constructor=Kn;function Fr(t,e,n){ge.call(this,new Uint16Array(t),e,n)}Fr.prototype=Object.create(ge.prototype),Fr.prototype.constructor=Fr,Fr.prototype.isFloat16BufferAttribute=!0;function ne(t,e,n){ge.call(this,new Float32Array(t),e,n)}ne.prototype=Object.create(ge.prototype),ne.prototype.constructor=ne;function Or(t,e,n){ge.call(this,new Float64Array(t),e,n)}Or.prototype=Object.create(ge.prototype),Or.prototype.constructor=Or;class bp{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const n=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){const n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length;let l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}const u=e.morphNormals,h=u.length;let f;if(h>0){f=[];for(let g=0;g<h;g++)f[g]={name:u[g].name,data:[]};this.morphTargets.normal=f}const d=e.skinIndices,p=e.skinWeights,y=d.length===i.length,x=p.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){const m=n[g];this.vertices.push(i[m.a],i[m.b],i[m.c]);const _=m.vertexNormals;if(_.length===3)this.normals.push(_[0],_[1],_[2]);else{const w=m.normal;this.normals.push(w,w,w)}const b=m.vertexColors;if(b.length===3)this.colors.push(b[0],b[1],b[2]);else{const w=m.color;this.colors.push(w,w,w)}if(s===!0){const w=r[0][g];w!==void 0?this.uvs.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new V,new V,new V))}if(o===!0){const w=r[1][g];w!==void 0?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new V,new V,new V))}for(let w=0;w<c;w++){const v=a[w].vertices;l[w].data.push(v[m.a],v[m.b],v[m.c])}for(let w=0;w<h;w++){const v=u[w].vertexNormals[g];f[w].data.push(v.a,v.b,v.c)}y&&this.skinIndices.push(d[m.a],d[m.b],d[m.c]),x&&this.skinWeights.push(p[m.a],p[m.b],p[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function Qh(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}const wp={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Nr(t,e){return new wp[t](e)}let Mp=1;const Zt=new Se,Wa=new he,Ni=new M,St=new Xt,Br=new Xt,it=new M;function me(){Object.defineProperty(this,"id",{value:Mp+=2}),this.uuid=we.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}me.prototype=Object.assign(Object.create(qt.prototype),{constructor:me,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(Qh(t)>65535?Kn:$n)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},hasAttribute:function(t){return this.attributes[t]!==void 0},addGroup:function(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Zt.makeRotationX(t),this.applyMatrix4(Zt),this},rotateY:function(t){return Zt.makeRotationY(t),this.applyMatrix4(Zt),this},rotateZ:function(t){return Zt.makeRotationZ(t),this.applyMatrix4(Zt),this},translate:function(t,e,n){return Zt.makeTranslation(t,e,n),this.applyMatrix4(Zt),this},scale:function(t,e,n){return Zt.makeScale(t,e,n),this.applyMatrix4(Zt),this},lookAt:function(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const n=new ne(e.vertices.length*3,3),i=new ne(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new ne(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new bp().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new ge(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new ge(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const n=new Float32Array(t.colors.length*3);this.setAttribute("color",new ge(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new ge(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new ge(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const n in t.morphTargets){const i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new ne(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){const n=new ne(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const n=new ne(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Xt);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];St.setFromBufferAttribute(r),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(St.min,Br.min),St.expandByPoint(it),it.addVectors(St.max,Br.max),St.expandByPoint(it)):(St.expandByPoint(Br.min),St.expandByPoint(Br.max))}St.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)it.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(it));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)it.fromBufferAttribute(o,c),a&&(Ni.fromBufferAttribute(t,c),it.add(Ni)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new M,r=new M,s=new M,o=new M,a=new M,c=new M,l=new M,u=new M;if(t)for(let h=0,f=t.count;h<f;h+=3){const d=t.getX(h+0),p=t.getX(h+1),y=t.getX(h+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)it.fromBufferAttribute(t,e),it.normalize(),t.setXYZ(e,it.x,it.y,it.z)},toNonIndexed:function(){function t(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let f=0,d=0;for(let p=0,y=a.length;p<y;p++){f=a[p]*l;for(let x=0;x<l;x++)h[d++]=c[f++]}return new ge(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],f=t(h,n);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=f.toJSON(t.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new me().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const eu=new Se,Qn=new Ri,ja=new cn,En=new M,An=new M,Ln=new M,qa=new M,Xa=new M,Ya=new M,Us=new M,Hs=new M,Vs=new M,Bi=new V,Gi=new V,zi=new V,Gr=new M,ks=new M;function We(t=new me,e=new Rt){he.call(this),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}We.prototype=Object.assign(Object.create(he.prototype),{constructor:We,isMesh:!0,copy:function(t){return he.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),t.ray.intersectsSphere(ja)===!1)||(eu.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(eu),n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=f.length;p<y;p++){const x=f[p],g=i[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(x.start+x.count,d.start+d.count);for(let b=m,w=_;b<w;b+=3){const v=o.getX(b),E=o.getX(b+1),L=o.getX(b+2);s=Ws(this,g,t,Qn,a,c,l,u,h,v,E,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=p,g=y;x<g;x+=3){const m=o.getX(x),_=o.getX(x+1),b=o.getX(x+2);s=Ws(this,i,t,Qn,a,c,l,u,h,m,_,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=f.length;p<y;p++){const x=f[p],g=i[x.materialIndex],m=Math.max(x.start,d.start),_=Math.min(x.start+x.count,d.start+d.count);for(let b=m,w=_;b<w;b+=3){const v=b,E=b+1,L=b+2;s=Ws(this,g,t,Qn,a,c,l,u,h,v,E,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let x=p,g=y;x<g;x+=3){const m=x,_=x+1,b=x+2;s=Ws(this,i,t,Qn,a,c,l,u,h,m,_,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const u=n.faceVertexUvs[0];u.length>0&&(l=u);for(let h=0,f=c.length;h<f;h++){const d=c[h],p=o?i[d.materialIndex]:i;if(p===void 0)continue;const y=a[d.a],x=a[d.b],g=a[d.c];if(s=tu(this,p,t,Qn,y,x,g,Gr),s){if(l&&l[h]){const m=l[h];Bi.copy(m[0]),Gi.copy(m[1]),zi.copy(m[2]),s.uv=ot.getUV(Gr,y,x,g,Bi,Gi,zi,new V)}s.face=d,s.faceIndex=h,e.push(s)}}}}});function tu(t,e,n,i,r,s,o,a){let c;if(e.side===et?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==hr,a),c===null)return null;ks.copy(a),ks.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(ks);return l<n.near||l>n.far?null:{distance:l,point:ks.clone(),object:t}}function Ws(t,e,n,i,r,s,o,a,c,l,u,h){En.fromBufferAttribute(r,l),An.fromBufferAttribute(r,u),Ln.fromBufferAttribute(r,h);const f=t.morphTargetInfluences;if(e.morphTargets&&s&&f){Us.set(0,0,0),Hs.set(0,0,0),Vs.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const x=f[p],g=s[p];x!==0&&(qa.fromBufferAttribute(g,l),Xa.fromBufferAttribute(g,u),Ya.fromBufferAttribute(g,h),o?(Us.addScaledVector(qa,x),Hs.addScaledVector(Xa,x),Vs.addScaledVector(Ya,x)):(Us.addScaledVector(qa.sub(En),x),Hs.addScaledVector(Xa.sub(An),x),Vs.addScaledVector(Ya.sub(Ln),x)))}En.add(Us),An.add(Hs),Ln.add(Vs)}t.isSkinnedMesh&&(t.boneTransform(l,En),t.boneTransform(u,An),t.boneTransform(h,Ln));const d=tu(t,e,n,i,En,An,Ln,Gr);if(d){a&&(Bi.fromBufferAttribute(a,l),Gi.fromBufferAttribute(a,u),zi.fromBufferAttribute(a,h),d.uv=ot.getUV(Gr,En,An,Ln,Bi,Gi,zi,new V)),c&&(Bi.fromBufferAttribute(c,l),Gi.fromBufferAttribute(c,u),zi.fromBufferAttribute(c,h),d.uv2=ot.getUV(Gr,En,An,Ln,Bi,Gi,zi,new V));const p=new Lr(l,u,h);ot.getNormal(En,An,Ln,p.normal),d.face=p}return d}class zr extends me{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(h,2));function p(y,x,g,m,_,b,w,v,E,L,P){const z=b/E,I=w/L,F=b/2,O=w/2,D=v/2,C=E+1,N=L+1;let k=0,Y=0;const J=new M;for(let Q=0;Q<N;Q++){const Z=Q*I-O;for(let ce=0;ce<C;ce++){const le=ce*z-F;J[y]=le*m,J[x]=Z*_,J[g]=D,l.push(J.x,J.y,J.z),J[y]=0,J[x]=0,J[g]=v>0?1:-1,u.push(J.x,J.y,J.z),h.push(ce/E),h.push(1-Q/L),k+=1}}for(let Q=0;Q<L;Q++)for(let Z=0;Z<E;Z++){const ce=f+Z+C*Q,le=f+Z+C*(Q+1),Fe=f+(Z+1)+C*(Q+1),U=f+(Z+1)+C*Q;c.push(ce,le,U),c.push(le,Fe,U),Y+=6}a.addGroup(d,Y,P),d+=Y,f+=k}}}function Ui(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function lt(t){const e={};for(let n=0;n<t.length;n++){const i=Ui(t[n]);for(const r in i)e[r]=i[r]}return e}const nu={clone:Ui,merge:lt};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function mt(t){ve.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Sp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}mt.prototype=Object.create(ve.prototype),mt.prototype.constructor=mt,mt.prototype.isShaderMaterial=!0,mt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this},mt.prototype.toJSON=function(t){const e=ve.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function Jt(){he.call(this),this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}Jt.prototype=Object.assign(Object.create(he.prototype),{constructor:Jt,isCamera:!0,copy:function(t,e){return he.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new M),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){he.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(t,e){he.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Ke(t=50,e=1,n=.1,i=2e3){Jt.call(this),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ke.prototype=Object.assign(Object.create(Jt.prototype),{constructor:Ke,isPerspectiveCamera:!0,copy:function(t,e){return Jt.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=we.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(we.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return we.RAD2DEG*2*Math.atan(Math.tan(we.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(we.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=he.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const Hi=90,Vi=1;function ei(t,e,n){if(he.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ke(Hi,Vi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new M(1,0,0)),this.add(i);const r=new Ke(Hi,Vi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new M(-1,0,0)),this.add(r);const s=new Ke(Hi,Vi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new M(0,1,0)),this.add(s);const o=new Ke(Hi,Vi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new M(0,-1,0)),this.add(o);const a=new Ke(Hi,Vi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new M(0,0,1)),this.add(a);const c=new Ke(Hi,Vi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,f=l.getRenderTarget();l.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(u,i),l.setRenderTarget(n,1),l.render(u,r),l.setRenderTarget(n,2),l.render(u,s),l.setRenderTarget(n,3),l.render(u,o),l.setRenderTarget(n,4),l.render(u,a),n.texture.generateMipmaps=d,l.setRenderTarget(n,5),l.render(u,c),l.setRenderTarget(f),l.xr.enabled=h}}ei.prototype=Object.create(he.prototype),ei.prototype.constructor=ei;function $t(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:fr,o=o!==void 0?o:bn,Be.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}$t.prototype=Object.create(Be.prototype),$t.prototype.constructor=$t,$t.prototype.isCubeTexture=!0,Object.defineProperty($t.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function dn(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),wt.call(this,t,t,e),e=e||{},this.texture=new $t(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}dn.prototype=Object.create(wt.prototype),dn.prototype.constructor=dn,dn.prototype.isWebGLCubeRenderTarget=!0,dn.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=bt,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},i=new zr(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:et,blending:sn});r.uniforms.tEquirect.value=e;const s=new We(i,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=nt),new ei(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this},dn.prototype.clear=function(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)};function pn(t,e,n,i,r,s,o,a,c,l,u,h){Be.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:tt,this.minFilter=l!==void 0?l:tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}pn.prototype=Object.create(Be.prototype),pn.prototype.constructor=pn,pn.prototype.isDataTexture=!0;const ki=new cn,js=new M;class Ur{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new Yt,n!==void 0?n:new Yt,i!==void 0?i:new Yt,r!==void 0?r:new Yt,s!==void 0?s:new Yt,o!==void 0?o:new Yt]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],p=i[10],y=i[11],x=i[12],g=i[13],m=i[14],_=i[15];return n[0].setComponents(a-r,h-c,y-f,_-x).normalize(),n[1].setComponents(a+r,h+c,y+f,_+x).normalize(),n[2].setComponents(a+s,h+l,y+d,_+g).normalize(),n[3].setComponents(a-s,h-l,y-d,_-g).normalize(),n[4].setComponents(a-o,h-u,y-p,_-m).normalize(),n[5].setComponents(a+o,h+u,y+p,_+m).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function iu(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ep(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=t.createBuffer();t.bindBuffer(u,d),t.bufferData(u,h,f),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?n?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;t.bindBuffer(h,l),d.count===-1?t.bufferSubData(h,0,f):(n?t.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):t.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class qs extends me{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=n/c,d=[],p=[],y=[],x=[];for(let g=0;g<u;g++){const m=g*f-o;for(let _=0;_<l;_++){const b=_*h-s;p.push(b,-m,0),y.push(0,0,1),x.push(_/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const _=m+l*g,b=m+l*(g+1),w=m+1+l*(g+1),v=m+1+l*g;d.push(_,b,v),d.push(b,w,v)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(x,2))}}var Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip="vec3 transformed = vec3( position );",Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Qp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,dm=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Am=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,Nm=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Bm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,zm=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jm=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,$m=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Km=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,cg=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,lg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ug=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Ng=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Gg=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jg=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xg=`uniform float rotation;
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
}`;const Re={alphamap_fragment:Ap,alphamap_pars_fragment:Lp,alphatest_fragment:Cp,aomap_fragment:Rp,aomap_pars_fragment:Pp,begin_vertex:Ip,beginnormal_vertex:Dp,bsdfs:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:zp,color_fragment:Up,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:kp,common:Wp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Xp,displacementmap_vertex:Yp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Jp,encodings_fragment:$p,encodings_pars_fragment:Kp,envmap_fragment:Qp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:dm,envmap_vertex:im,fog_vertex:rm,fog_pars_vertex:sm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:cm,lightmap_fragment:lm,lightmap_pars_fragment:hm,lights_lambert_vertex:um,lights_pars_begin:fm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:ym,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:_m,lights_fragment_maps:bm,lights_fragment_end:wm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Em,map_fragment:Am,map_pars_fragment:Lm,map_particle_fragment:Cm,map_particle_pars_fragment:Rm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Im,morphnormal_vertex:Dm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:Nm,normal_fragment_maps:Bm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Hm,packing:Vm,premultiplied_alpha_fragment:km,project_vertex:Wm,dithering_fragment:jm,dithering_pars_fragment:qm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Jm,shadowmap_vertex:$m,shadowmask_pars_fragment:Km,skinbase_vertex:Qm,skinning_pars_vertex:eg,skinning_vertex:tg,skinnormal_vertex:ng,specularmap_fragment:ig,specularmap_pars_fragment:rg,tonemapping_fragment:sg,tonemapping_pars_fragment:og,transmissionmap_fragment:ag,transmissionmap_pars_fragment:cg,uv_pars_fragment:lg,uv_pars_vertex:hg,uv_vertex:ug,uv2_pars_fragment:fg,uv2_pars_vertex:dg,uv2_vertex:pg,worldpos_vertex:mg,background_frag:gg,background_vert:yg,cube_frag:xg,cube_vert:vg,depth_frag:_g,depth_vert:bg,distanceRGBA_frag:wg,distanceRGBA_vert:Mg,equirect_frag:Sg,equirect_vert:Tg,linedashed_frag:Eg,linedashed_vert:Ag,meshbasic_frag:Lg,meshbasic_vert:Cg,meshlambert_frag:Rg,meshlambert_vert:Pg,meshmatcap_frag:Ig,meshmatcap_vert:Dg,meshtoon_frag:Fg,meshtoon_vert:Og,meshphong_frag:Ng,meshphong_vert:Bg,meshphysical_frag:Gg,meshphysical_vert:zg,normal_frag:Ug,normal_vert:Hg,points_frag:Vg,points_vert:kg,shadow_frag:Wg,shadow_vert:jg,sprite_frag:qg,sprite_vert:Xg},K={common:{diffuse:{value:new se(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new pt}},sprite:{diffuse:{value:new se(15658734)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new pt}}},Gt={basic:{uniforms:lt([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:lt([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new se(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:lt([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:lt([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:lt([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new se(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:lt([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:lt([K.points,K.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:lt([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:lt([K.common,K.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:lt([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Re.normal_vert,fragmentShader:Re.normal_frag},sprite:{uniforms:lt([K.sprite,K.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:lt([K.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:lt([K.common,K.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:lt([K.lights,K.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Gt.physical={uniforms:lt([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new V(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new se(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Yg(t,e,n,i,r){const s=new se(0);let o=0,a,c,l=null,u=0,h=null;function f(p,y,x,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));const _=t.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?d(s,o):m&&m.isColor&&(d(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===bi)?(c===void 0&&(c=new We(new zr(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Ui(Gt.cube.uniforms),vertexShader:Gt.cube.vertexShader,fragmentShader:Gt.cube.fragmentShader,side:et,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||u!==m.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,u=m.version,h=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new We(new qs(2,2),new mt({name:"BackgroundMaterial",uniforms:Ui(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||u!==m.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,u=m.version,h=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function d(p,y){n.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y=1){s.set(p),o=y,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,d(s,o)},render:f}}function Zg(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function u(O,D,C,N,k){let Y=!1;if(o){const J=p(N,C,D);l!==J&&(l=J,f(l.object)),Y=x(N,k),Y&&g(N,k)}else{const J=D.wireframe===!0;(l.geometry!==N.id||l.program!==C.id||l.wireframe!==J)&&(l.geometry=N.id,l.program=C.id,l.wireframe=J,Y=!0)}O.isInstancedMesh===!0&&(Y=!0),k!==null&&n.update(k,34963),Y&&(E(O,D,C,N),k!==null&&t.bindBuffer(34963,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function f(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function d(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,D,C){const N=C.wireframe===!0;let k=a[O.id];k===void 0&&(k={},a[O.id]=k);let Y=k[D.id];Y===void 0&&(Y={},k[D.id]=Y);let J=Y[N];return J===void 0&&(J=y(h()),Y[N]=J),J}function y(O){const D=[],C=[],N=[];for(let k=0;k<r;k++)D[k]=0,C[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:N,object:O,attributes:{},index:null}}function x(O,D){const C=l.attributes,N=O.attributes;let k=0;for(const Y in N){const J=C[Y],Q=N[Y];if(J===void 0||J.attribute!==Q||J.data!==Q.data)return!0;k++}return l.attributesNum!==k||l.index!==D}function g(O,D){const C={},N=O.attributes;let k=0;for(const Y in N){const J=N[Y],Q={};Q.attribute=J,J.data&&(Q.data=J.data),C[Y]=Q,k++}l.attributes=C,l.attributesNum=k,l.index=D}function m(){const O=l.newAttributes;for(let D=0,C=O.length;D<C;D++)O[D]=0}function _(O){b(O,0)}function b(O,D){const C=l.newAttributes,N=l.enabledAttributes,k=l.attributeDivisors;C[O]=1,N[O]===0&&(t.enableVertexAttribArray(O),N[O]=1),k[O]!==D&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,D),k[O]=D)}function w(){const O=l.newAttributes,D=l.enabledAttributes;for(let C=0,N=D.length;C<N;C++)D[C]!==O[C]&&(t.disableVertexAttribArray(C),D[C]=0)}function v(O,D,C,N,k,Y){i.isWebGL2===!0&&(C===5124||C===5125)?t.vertexAttribIPointer(O,D,C,k,Y):t.vertexAttribPointer(O,D,C,N,k,Y)}function E(O,D,C,N){if(i.isWebGL2===!1&&(O.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const k=N.attributes,Y=C.getAttributes(),J=D.defaultAttributeValues;for(const Q in Y){const Z=Y[Q];if(Z>=0){const ce=k[Q];if(ce!==void 0){const le=ce.normalized,Fe=ce.itemSize,U=n.get(ce);if(U===void 0)continue;const _e=U.buffer,oe=U.type,be=U.bytesPerElement;if(ce.isInterleavedBufferAttribute){const Te=ce.data,Ne=Te.stride,Pe=ce.offset;Te&&Te.isInstancedInterleavedBuffer?(b(Z,Te.meshPerAttribute),N._maxInstanceCount===void 0&&(N._maxInstanceCount=Te.meshPerAttribute*Te.count)):_(Z),t.bindBuffer(34962,_e),v(Z,Fe,oe,le,Ne*be,Pe*be)}else ce.isInstancedBufferAttribute?(b(Z,ce.meshPerAttribute),N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)):_(Z),t.bindBuffer(34962,_e),v(Z,Fe,oe,le,0,0)}else if(Q==="instanceMatrix"){const le=n.get(O.instanceMatrix);if(le===void 0)continue;const Fe=le.buffer,U=le.type;b(Z+0,1),b(Z+1,1),b(Z+2,1),b(Z+3,1),t.bindBuffer(34962,Fe),t.vertexAttribPointer(Z+0,4,U,!1,64,0),t.vertexAttribPointer(Z+1,4,U,!1,64,16),t.vertexAttribPointer(Z+2,4,U,!1,64,32),t.vertexAttribPointer(Z+3,4,U,!1,64,48)}else if(Q==="instanceColor"){const le=n.get(O.instanceColor);if(le===void 0)continue;const Fe=le.buffer,U=le.type;b(Z,1),t.bindBuffer(34962,Fe),t.vertexAttribPointer(Z,3,U,!1,12,0)}else if(J!==void 0){const le=J[Q];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(Z,le);break;case 3:t.vertexAttrib3fv(Z,le);break;case 4:t.vertexAttrib4fv(Z,le);break;default:t.vertexAttrib1fv(Z,le)}}}}w()}function L(){I();for(const O in a){const D=a[O];for(const C in D){const N=D[C];for(const k in N)d(N[k].object),delete N[k];delete D[C]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const D=a[O.id];for(const C in D){const N=D[C];for(const k in N)d(N[k].object),delete N[k];delete D[C]}delete a[O.id]}function z(O){for(const D in a){const C=a[D];if(C[O.id]===void 0)continue;const N=C[O.id];for(const k in N)d(N[k].object),delete N[k];delete C[O.id]}}function I(){F(),l!==c&&(l=c,f(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:m,enableAttribute:_,disableUnusedAttributes:w}}function Jg(t,e,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){t.drawArrays(s,l,u),n.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=t,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),n.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function $g(t,e,n){let i;function r(){if(i!==void 0)return i;const v=e.get("EXT_texture_filter_anisotropic");return v!==null?i=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(v){if(v==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,u=t.getParameter(34930),h=t.getParameter(35660),f=t.getParameter(3379),d=t.getParameter(34076),p=t.getParameter(34921),y=t.getParameter(36347),x=t.getParameter(36348),g=t.getParameter(36349),m=h>0,_=o||!!e.get("OES_texture_float"),b=m&&_,w=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:w}}function Kg(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Yt,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const p=h.length!==0||f||i!==0||r;return r=f,n=u(h,d,0),i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,d){const p=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,g=t.get(h);if(!r||p===null||p.length===0||s&&!x)s?u(null):l();else{const m=s?0:i,_=m*4;let b=g.clippingState||null;c.value=b,b=u(p,f,_,d);for(let w=0;w!==_;++w)b[w]=n[w];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,p){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=c.value,p!==!0||x===null){const g=d+y*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<g)&&(x=new Float32Array(g));for(let _=0,b=d;_!==y;++_,b+=4)o.copy(h[_]).applyMatrix4(m,a),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function Qg(t){let e=new WeakMap;function n(o,a){return a===ws?o.mapping=fr:a===Ms&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ws||a===Ms)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=t.getRenderList(),u=t.getRenderTarget(),h=new dn(c.height/2);return h.fromEquirectangularTexture(t,o),e.set(o,h),t.setRenderTarget(u),t.setRenderList(l),o.addEventListener("dispose",r),n(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function ey(t){const e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function ty(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const f=h.target,d=r.get(f);d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);f.removeEventListener("dispose",o),r.delete(f);const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){let d=r.get(f);return d||(f.addEventListener("dispose",o),f.isBufferGeometry?d=f:f.isGeometry&&(f._bufferGeometry===void 0&&(f._bufferGeometry=new me().setFromObject(h)),d=f._bufferGeometry),r.set(f,d),n.memory.geometries++,d)}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],34962);const d=h.morphAttributes;for(const p in d){const y=d[p];for(let x=0,g=y.length;x<g;x++)e.update(y[x],34962)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let y=0;if(d!==null){const m=d.array;y=d.version;for(let _=0,b=m.length;_<b;_+=3){const w=m[_+0],v=m[_+1],E=m[_+2];f.push(w,v,v,E,E,w)}}else{const m=p.array;y=p.version;for(let _=0,b=m.length/3-1;_<b;_+=3){const w=_+0,v=_+1,E=_+2;f.push(w,v,v,E,E,w)}}const x=new(Qh(f)>65535?Kn:$n)(f,1);x.version=y;const g=s.get(h);g&&e.remove(g),s.set(h,x)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ny(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){t.drawElements(s,d,a,f*c),n.update(d,s,1)}function h(f,d,p){if(p===0)return;let y,x;if(r)y=t,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](s,d,a,f*c,p),n.update(d,s,p)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function iy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ry(t,e){return t[0]-e[0]}function sy(t,e){return Math.abs(e[1])-Math.abs(t[1])}function oy(t){const e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let x=0;x<u;x++)h[x]=[x,0];e[o.id]=h}for(let x=0;x<u;x++){const g=h[x];g[0]=x,g[1]=l[x]}h.sort(sy);for(let x=0;x<8;x++)x<u&&h[x][1]?(i[x][0]=h[x][0],i[x][1]=h[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(ry);const f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const g=i[x],m=g[0],_=g[1];m!==Number.MAX_SAFE_INTEGER&&_?(f&&o.getAttribute("morphTarget"+x)!==f[m]&&o.setAttribute("morphTarget"+x,f[m]),d&&o.getAttribute("morphNormal"+x)!==d[m]&&o.setAttribute("morphNormal"+x,d[m]),n[x]=_,p+=_):(f&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),d&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),n[x]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function ay(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(u.isGeometry&&h.updateFromObject(c),e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}function Wi(t=null,e=1,n=1,i=1){Be.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=ft,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Wi.prototype=Object.create(Be.prototype),Wi.prototype.constructor=Wi,Wi.prototype.isDataTexture2DArray=!0;function ji(t=null,e=1,n=1,i=1){Be.call(this,null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=ft,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ji.prototype=Object.create(Be.prototype),ji.prototype.constructor=ji,ji.prototype.isDataTexture3D=!0;const ru=new Be,cy=new Wi,ly=new ji,su=new $t,ou=[],au=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function qi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=au[e];n===void 0&&(n=new Int32Array(e),au[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function dy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function py(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Pt(n,i))return;hu.set(i),t.uniformMatrix2fv(this.addr,!1,hu),Tt(n,i)}}function my(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Pt(n,i))return;lu.set(i),t.uniformMatrix3fv(this.addr,!1,lu),Tt(n,i)}}function gy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Pt(n,i))return;cu.set(i),t.uniformMatrix4fv(this.addr,!1,cu),Tt(n,i)}}function yy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||ru,r)}function xy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cy,r)}function vy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ly,r)}function _y(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||su,r)}function by(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wy(t,e){const n=this.cache;Pt(n,e)||(t.uniform2iv(this.addr,e),Tt(n,e))}function My(t,e){const n=this.cache;Pt(n,e)||(t.uniform3iv(this.addr,e),Tt(n,e))}function Sy(t,e){const n=this.cache;Pt(n,e)||(t.uniform4iv(this.addr,e),Tt(n,e))}function Ty(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ey(t){switch(t){case 5126:return hy;case 35664:return uy;case 35665:return fy;case 35666:return dy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return by;case 35667:case 35671:return wy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return xy}}function Ay(t,e){t.uniform1fv(this.addr,e)}function Ly(t,e){t.uniform1iv(this.addr,e)}function Cy(t,e){t.uniform2iv(this.addr,e)}function Ry(t,e){t.uniform3iv(this.addr,e)}function Py(t,e){t.uniform4iv(this.addr,e)}function Iy(t,e){const n=qi(e,this.size,2);t.uniform2fv(this.addr,n)}function Dy(t,e){const n=qi(e,this.size,3);t.uniform3fv(this.addr,n)}function Fy(t,e){const n=qi(e,this.size,4);t.uniform4fv(this.addr,n)}function Oy(t,e){const n=qi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ny(t,e){const n=qi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function By(t,e){const n=qi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gy(t,e,n){const i=e.length,r=uu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||ru,r[s])}function zy(t,e,n){const i=e.length,r=uu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||su,r[s])}function Uy(t){switch(t){case 5126:return Ay;case 35664:return Iy;case 35665:return Dy;case 35666:return Fy;case 35674:return Oy;case 35675:return Ny;case 35676:return By;case 5124:case 35670:return Ly;case 35667:case 35671:return Cy;case 35668:case 35672:return Ry;case 35669:case 35673:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35680:case 36300:case 36308:case 36293:return zy}}function Hy(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ey(e.type)}function fu(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Uy(e.type)}fu.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Tt(e,t)};function du(t){this.id=t,this.seq=[],this.map={}}du.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const Za=/(\w+)(\])?(\[|\.)?/g;function pu(t,e){t.seq.push(e),t.map[e.id]=e}function Vy(t,e,n){const i=t.name,r=i.length;for(Za.lastIndex=0;;){const s=Za.exec(i),o=Za.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){pu(n,l===void 0?new Hy(a,t,e):new fu(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new du(a),pu(n,h)),n=h}}}function Cn(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Vy(r,s,this)}}Cn.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)},Cn.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)},Cn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}},Cn.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};function mu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let ky=0;function Wy(t){const e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function gu(t){switch(t){case dt:return["Linear","( value )"];case Mr:return["sRGB","( value )"];case Cs:return["RGBE","( value )"];case Ma:return["RGBM","( value, 7.0 )"];case Sa:return["RGBM","( value, 16.0 )"];case Ta:return["RGBD","( value, 256.0 )"];case Ls:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Gh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function yu(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Wy(s)}function Hr(t,e){const n=gu(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function jy(t,e){const n=gu(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function qy(t,e){let n;switch(e){case Bl:n="Linear";break;case Gl:n="Reinhard";break;case zl:n="OptimizedCineon";break;case Ul:n="ACESFilmic";break;case Hl:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Xy(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function Yy(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Zy(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function Vr(t){return t!==""}function xu(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(t){return t.replace(Jy,$y)}function $y(t,e){const n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ja(n)}const Ky=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(t){return t.replace(Qy,bu).replace(Ky,ex)}function ex(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),bu(t,e,n,i)}function bu(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wu(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tx(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===na?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function nx(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case bi:case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ix(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case dr:case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function rx(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ur:e="ENVMAP_BLENDING_MULTIPLY";break;case Ol:e="ENVMAP_BLENDING_MIX";break;case Nl:e="ENVMAP_BLENDING_ADD";break}return e}function sx(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=tx(n),l=nx(n),u=ix(n),h=rx(n),f=t.gammaFactor>0?t.gammaFactor:1,d=n.isWebGL2?"":Xy(n),p=Yy(s),y=r.createProgram();let x,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=[p].filter(Vr).join(`
`),x.length>0&&(x+=`
`),g=[d,p].filter(Vr).join(`
`),g.length>0&&(g+=`
`)):(x=[wu(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),g=[d,wu(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vn?"#define TONE_MAPPING":"",n.toneMapping!==Vn?Re.tonemapping_pars_fragment:"",n.toneMapping!==Vn?qy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Re.encodings_pars_fragment,n.map?Hr("mapTexelToLinear",n.mapEncoding):"",n.matcap?Hr("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Hr("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Hr("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Hr("lightMapTexelToLinear",n.lightMapEncoding):"",jy("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Ja(o),o=xu(o,n),o=vu(o,n),a=Ja(a),a=xu(a,n),a=vu(a,n),o=_u(o),a=_u(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===Ea?"":"out highp vec4 pc_fragColor;",n.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+x+o,b=m+g+a,w=mu(r,35633,_),v=mu(r,35632,b);if(r.attachShader(y,w),r.attachShader(y,v),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const P=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(w).trim(),I=r.getShaderInfoLog(v).trim();let F=!0,O=!0;if(r.getProgramParameter(y,35714)===!1){F=!1;const D=yu(r,w,"vertex"),C=yu(r,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",P,D,C)}else P!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",P):(z===""||I==="")&&(O=!1);O&&(this.diagnostics={runnable:F,programLog:P,vertexShader:{log:z,prefix:x},fragmentShader:{log:I,prefix:g}})}r.deleteShader(w),r.deleteShader(v);let E;this.getUniforms=function(){return E===void 0&&(E=new Cn(r,y)),E};let L;return this.getAttributes=function(){return L===void 0&&(L=Zy(r,y)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=v,this}function ox(t,e,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(v){const L=v.skeleton.bones;if(l)return 1024;{const z=Math.floor((u-20)/4),I=Math.min(z,L.length);return I<L.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+L.length+" bones. This GPU supports "+I+"."),0):I}}function x(v){let E;return v&&v.isTexture?E=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),E=v.texture.encoding):E=dt,E}function g(v,E,L,P,z){const I=P.fog,F=v.isMeshStandardMaterial?P.environment:null,O=e.get(v.envMap||F),D=d[v.type],C=z.isSkinnedMesh?y(z):0;v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let N,k;if(D){const Q=Gt[D];N=Q.vertexShader,k=Q.fragmentShader}else N=v.vertexShader,k=v.fragmentShader;const Y=t.getRenderTarget();return{isWebGL2:a,shaderID:D,shaderName:v.type,vertexShader:N,fragmentShader:k,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y!==null?x(Y.texture):t.outputEncoding,map:!!v.map,mapEncoding:x(v.map),matcap:!!v.matcap,matcapEncoding:x(v.matcap),envMap:!!O,envMapMode:O&&O.mapping,envMapEncoding:x(O),envMapCubeUV:!!O&&(O.mapping===bi||O.mapping===pr),lightMap:!!v.lightMap,lightMapEncoding:x(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:x(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Hh,tangentSpaceNormalMap:v.normalMapType===qn,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.transmissionMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:v.skinning&&C>0,maxBones:C,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:v.toneMapped?t.toneMapping:Vn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===hr,flipSided:v.side===et,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.fragmentShader),E.push(v.vertexShader)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);if(v.isRawShaderMaterial===!1){for(let L=0;L<p.length;L++)E.push(v[p[L]]);E.push(t.outputEncoding),E.push(t.gammaFactor)}return E.push(v.customProgramCacheKey),E.join()}function _(v){const E=d[v.type];let L;if(E){const P=Gt[E];L=nu.clone(P.uniforms)}else L=v.uniforms;return L}function b(v,E){let L;for(let P=0,z=o.length;P<z;P++){const I=o[P];if(I.cacheKey===E){L=I,++L.usedTimes;break}}return L===void 0&&(L=new sx(t,E,v,r),o.push(L)),L}function w(v){if(--v.usedTimes===0){const E=o.indexOf(v);o[E]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:b,releaseProgram:w,programs:o}}function ax(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mu(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(f,d,p,y,x,g){let m=e[n];const _=t.get(p);return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,program:_.program||s,groupOrder:y,renderOrder:f.renderOrder,z:x,group:g},e[n]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.program=_.program||s,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=x,m.group=g),n++,m}function c(f,d,p,y,x,g){const m=a(f,d,p,y,x,g);(p.transparent===!0?r:i).push(m)}function l(f,d,p,y,x,g){const m=a(f,d,p,y,x,g);(p.transparent===!0?r:i).unshift(m)}function u(f,d){i.length>1&&i.sort(f||cx),r.length>1&&r.sort(d||lx)}function h(){for(let f=n,d=e.length;f<d;f++){const p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function hx(t){let e=new WeakMap;function n(r,s){const o=e.get(r);let a;return o===void 0?(a=new Mu(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Mu(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function ux(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new M,color:new se};break;case"SpotLight":n={position:new M,direction:new M,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new M,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new M,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new M,halfWidth:new M,halfHeight:new M};break}return t[e.id]=n,n}}}function fx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dx=0;function px(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function mx(t,e){const n=new ux,i=fx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new M);const s=new M,o=new Se,a=new Se;function c(u){let h=0,f=0,d=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,y=0,x=0,g=0,m=0,_=0,b=0,w=0;u.sort(px);for(let E=0,L=u.length;E<L;E++){const P=u[E],z=P.color,I=P.intensity,F=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*I,f+=z.g*I,d+=z.b*I;else if(P.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(P.sh.coefficients[D],I);else if(P.isDirectionalLight){const D=n.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const C=P.shadow,N=i.get(P);N.shadowBias=C.bias,N.shadowNormalBias=C.normalBias,N.shadowRadius=C.radius,N.shadowMapSize=C.mapSize,r.directionalShadow[p]=N,r.directionalShadowMap[p]=O,r.directionalShadowMatrix[p]=P.shadow.matrix,_++}r.directional[p]=D,p++}else if(P.isSpotLight){const D=n.get(P);if(D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(z).multiplyScalar(I),D.distance=F,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,P.castShadow){const C=P.shadow,N=i.get(P);N.shadowBias=C.bias,N.shadowNormalBias=C.normalBias,N.shadowRadius=C.radius,N.shadowMapSize=C.mapSize,r.spotShadow[x]=N,r.spotShadowMap[x]=O,r.spotShadowMatrix[x]=P.shadow.matrix,w++}r.spot[x]=D,x++}else if(P.isRectAreaLight){const D=n.get(P);D.color.copy(z).multiplyScalar(I),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),r.rectArea[g]=D,g++}else if(P.isPointLight){const D=n.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const C=P.shadow,N=i.get(P);N.shadowBias=C.bias,N.shadowNormalBias=C.normalBias,N.shadowRadius=C.radius,N.shadowMapSize=C.mapSize,N.shadowCameraNear=C.camera.near,N.shadowCameraFar=C.camera.far,r.pointShadow[y]=N,r.pointShadowMap[y]=O,r.pointShadowMatrix[y]=P.shadow.matrix,b++}r.point[y]=D,y++}else if(P.isHemisphereLight){const D=n.get(P);D.skyColor.copy(P.color).multiplyScalar(I),D.groundColor.copy(P.groundColor).multiplyScalar(I),r.hemi[m]=D,m++}}g>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=d;const v=r.hash;(v.directionalLength!==p||v.pointLength!==y||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==_||v.numPointShadows!==b||v.numSpotShadows!==w)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=g,r.point.length=y,r.hemi.length=m,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=w,v.directionalLength=p,v.pointLength=y,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=_,v.numPointShadows=b,v.numSpotShadows=w,r.version=dx++)}function l(u,h){let f=0,d=0,p=0,y=0,x=0;const g=h.matrixWorldInverse;for(let m=0,_=u.length;m<_;m++){const b=u[m];if(b.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(b.isSpotLight){const w=r.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const w=r.hemi[x];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),w.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function Su(t,e){const n=new mx(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){n.setup(i)}function l(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function gx(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Su(t,e),n.set(s,[]),n.get(s).push(a)):o>=n.get(s).length?(a=new Su(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}function Rn(t){ve.call(this),this.type="MeshDepthMaterial",this.depthPacking=zh,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}Rn.prototype=Object.create(ve.prototype),Rn.prototype.constructor=Rn,Rn.prototype.isMeshDepthMaterial=!0,Rn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Pn(t){ve.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Pn.prototype=Object.create(ve.prototype),Pn.prototype.constructor=Pn,Pn.prototype.isMeshDistanceMaterial=!0,Pn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Tu(t,e,n){let i=new Ur;const r=new V,s=new V,o=new Ge,a=[],c=[],l={},u={0:et,1:vi,2:hr},h=new mt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:xx,fragmentShader:yx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const d=new me;d.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new We(d,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na,this.render=function(w,v,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||w.length===0)return;const L=t.getRenderTarget(),P=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),I=t.state;I.setBlending(sn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,O=w.length;F<O;F++){const D=w[F],C=D.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const N=C.getFrameExtents();if(r.multiply(N),s.copy(C.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/N.x),r.x=s.x*N.x,C.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/N.y),r.y=s.y*N.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===xi){const Y={minFilter:nt,magFilter:nt,format:bt};C.map=new wt(r.x,r.y,Y),C.map.texture.name=D.name+".shadowMap",C.mapPass=new wt(r.x,r.y,Y),C.camera.updateProjectionMatrix()}if(C.map===null){const Y={minFilter:tt,magFilter:tt,format:bt};C.map=new wt(r.x,r.y,Y),C.map.texture.name=D.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const k=C.getViewportCount();for(let Y=0;Y<k;Y++){const J=C.getViewport(Y);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),I.viewport(o),C.updateMatrices(D,Y),i=C.getFrustum(),b(v,E,C.camera,D,this.type)}!C.isPointLightShadow&&this.type===xi&&x(C,E),C.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(L,P,z)};function x(w,v){const E=e.update(p);h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(v,null,E,h,p,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(v,null,E,f,p,null)}function g(w,v,E){const L=w<<0|v<<1|E<<2;let P=a[L];return P===void 0&&(P=new Rn({depthPacking:Uh,morphTargets:w,skinning:v}),a[L]=P),P}function m(w,v,E){const L=w<<0|v<<1|E<<2;let P=c[L];return P===void 0&&(P=new Pn({morphTargets:w,skinning:v}),c[L]=P),P}function _(w,v,E,L,P,z,I){let F=null,O=g,D=w.customDepthMaterial;if(L.isPointLight===!0&&(O=m,D=w.customDistanceMaterial),D===void 0){let C=!1;E.morphTargets===!0&&(C=v.morphAttributes&&v.morphAttributes.position&&v.morphAttributes.position.length>0);let N=!1;w.isSkinnedMesh===!0&&(E.skinning===!0?N=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));const k=w.isInstancedMesh===!0;F=O(C,N,k)}else F=D;if(t.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0){const C=F.uuid,N=E.uuid;let k=l[C];k===void 0&&(k={},l[C]=k);let Y=k[N];Y===void 0&&(Y=F.clone(),k[N]=Y),F=Y}return F.visible=E.visible,F.wireframe=E.wireframe,I===xi?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:u[E.side],F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,L.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(L.matrixWorld),F.nearDistance=P,F.farDistance=z),F}function b(w,v,E,L,P){if(w.visible===!1)return;if(w.layers.test(v.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===xi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);const F=e.update(w),O=w.material;if(Array.isArray(O)){const D=F.groups;for(let C=0,N=D.length;C<N;C++){const k=D[C],Y=O[k.materialIndex];if(Y&&Y.visible){const J=_(w,F,Y,L,E.near,E.far,P);t.renderBufferDirect(E,null,F,J,w,k)}}}else if(O.visible){const D=_(w,F,O,L,E.near,E.far,P);t.renderBufferDirect(E,null,F,D,w,null)}}const I=w.children;for(let F=0,O=I.length;F<O;F++)b(I[F],v,E,L,P)}}function vx(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const X=new Ge;let re=null;const de=new Ge(0,0,0,0);return{setMask:function(ee){re!==ee&&!R&&(t.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){R=ee},setClear:function(ee,fe,xe,Ee,ue){ue===!0&&(ee*=Ee,fe*=Ee,xe*=Ee),X.set(ee,fe,xe,Ee),de.equals(X)===!1&&(t.clearColor(ee,fe,xe,Ee),de.copy(X))},reset:function(){R=!1,re=null,de.set(-1,0,0,0)}}}function s(){let R=!1,X=null,re=null,de=null;return{setTest:function(ee){ee?Q(2929):Z(2929)},setMask:function(ee){X!==ee&&!R&&(t.depthMask(ee),X=ee)},setFunc:function(ee){if(re!==ee){if(ee)switch(ee){case Ll:t.depthFunc(512);break;case Cl:t.depthFunc(519);break;case Rl:t.depthFunc(513);break;case _s:t.depthFunc(515);break;case Pl:t.depthFunc(514);break;case Il:t.depthFunc(518);break;case Dl:t.depthFunc(516);break;case Fl:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);re=ee}},setLocked:function(ee){R=ee},setClear:function(ee){de!==ee&&(t.clearDepth(ee),de=ee)},reset:function(){R=!1,X=null,re=null,de=null}}}function o(){let R=!1,X=null,re=null,de=null,ee=null,fe=null,xe=null,Ee=null,ue=null;return{setTest:function(Me){R||(Me?Q(2960):Z(2960))},setMask:function(Me){X!==Me&&!R&&(t.stencilMask(Me),X=Me)},setFunc:function(Me,Ye,vt){(re!==Me||de!==Ye||ee!==vt)&&(t.stencilFunc(Me,Ye,vt),re=Me,de=Ye,ee=vt)},setOp:function(Me,Ye,vt){(fe!==Me||xe!==Ye||Ee!==vt)&&(t.stencilOp(Me,Ye,vt),fe=Me,xe=Ye,Ee=vt)},setLocked:function(Me){R=Me},setClear:function(Me){ue!==Me&&(t.clearStencil(Me),ue=Me)},reset:function(){R=!1,X=null,re=null,de=null,ee=null,fe=null,xe=null,Ee=null,ue=null}}}const a=new r,c=new s,l=new o;let u={},h=null,f=null,d=null,p=null,y=null,x=null,g=null,m=null,_=null,b=!1,w=null,v=null,E=null,L=null,P=null;const z=t.getParameter(35661);let I=!1,F=0;const O=t.getParameter(7938);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=F>=2);let D=null,C={};const N=new Ge,k=new Ge;function Y(R,X,re){const de=new Uint8Array(4),ee=t.createTexture();t.bindTexture(R,ee),t.texParameteri(R,10241,9728),t.texParameteri(R,10240,9728);for(let fe=0;fe<re;fe++)t.texImage2D(X+fe,0,6408,1,1,0,6408,5121,de);return ee}const J={};J[3553]=Y(3553,3553,1),J[34067]=Y(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Q(2929),c.setFunc(_s),oe(!1),be(ta),Q(2884),U(sn);function Q(R){u[R]!==!0&&(t.enable(R),u[R]=!0)}function Z(R){u[R]!==!1&&(t.disable(R),u[R]=!1)}function ce(R){return h!==R?(t.useProgram(R),h=R,!0):!1}const le={[Hn]:32774,[yl]:32778,[xl]:32779};if(i)le[aa]=32775,le[ca]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(le[aa]=R.MIN_EXT,le[ca]=R.MAX_EXT)}const Fe={[vl]:0,[_l]:1,[bl]:768,[la]:770,[Al]:776,[Tl]:774,[Ml]:772,[wl]:769,[ha]:771,[El]:775,[Sl]:773};function U(R,X,re,de,ee,fe,xe,Ee){if(R===sn){f&&(Z(3042),f=!1);return}if(f||(Q(3042),f=!0),R!==gl){if(R!==d||Ee!==b){if((p!==Hn||g!==Hn)&&(t.blendEquation(32774),p=Hn,g=Hn),Ee)switch(R){case _i:t.blendFuncSeparate(1,771,1,771);break;case ra:t.blendFunc(1,1);break;case sa:t.blendFuncSeparate(0,0,769,771);break;case oa:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case _i:t.blendFuncSeparate(770,771,1,771);break;case ra:t.blendFunc(770,1);break;case sa:t.blendFunc(0,769);break;case oa:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,x=null,m=null,_=null,d=R,b=Ee}return}ee=ee||X,fe=fe||re,xe=xe||de,(X!==p||ee!==g)&&(t.blendEquationSeparate(le[X],le[ee]),p=X,g=ee),(re!==y||de!==x||fe!==m||xe!==_)&&(t.blendFuncSeparate(Fe[re],Fe[de],Fe[fe],Fe[xe]),y=re,x=de,m=fe,_=xe),d=R,b=null}function _e(R,X){R.side===hr?Z(2884):Q(2884);let re=R.side===et;X&&(re=!re),oe(re),R.blending===_i&&R.transparent===!1?U(sn):U(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const de=R.stencilWrite;l.setTest(de),de&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits)}function oe(R){w!==R&&(R?t.frontFace(2304):t.frontFace(2305),w=R)}function be(R){R!==dl?(Q(2884),R!==v&&(R===ta?t.cullFace(1029):R===pl?t.cullFace(1028):t.cullFace(1032))):Z(2884),v=R}function Te(R){R!==E&&(I&&t.lineWidth(R),E=R)}function Ne(R,X,re){R?(Q(32823),(L!==X||P!==re)&&(t.polygonOffset(X,re),L=X,P=re)):Z(32823)}function Pe(R){R?Q(3089):Z(3089)}function j(R){R===void 0&&(R=33984+z-1),D!==R&&(t.activeTexture(R),D=R)}function $(R,X){D===null&&j();let re=C[D];re===void 0&&(re={type:void 0,texture:void 0},C[D]=re),(re.type!==R||re.texture!==X)&&(t.bindTexture(R,X||J[R]),re.type=R,re.texture=X)}function te(){const R=C[D];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function T(R){N.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),N.copy(R))}function q(R){k.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),k.copy(R))}function W(){u={},D=null,C={},h=null,f=null,d=null,p=null,y=null,x=null,g=null,m=null,_=null,b=!1,w=null,v=null,E=null,L=null,P=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Q,disable:Z,useProgram:ce,setBlending:U,setMaterial:_e,setFlipSided:oe,setCullFace:be,setLineWidth:Te,setPolygonOffset:Ne,setScissorTest:Pe,activeTexture:j,bindTexture:$,unbindTexture:te,compressedTexImage2D:ye,texImage2D:ae,texImage3D:A,scissor:T,viewport:q,reset:W}}function _x(t,e,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=new WeakMap;let d,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,T){return p?new OffscreenCanvas(A,T):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(A,T,q,W){let R=1;if((A.width>W||A.height>W)&&(R=W/Math.max(A.width,A.height)),R<1||T===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const X=T?we.floorPowerOfTwo:Math.floor,re=X(R*A.width),de=X(R*A.height);d===void 0&&(d=y(re,de));const ee=q?y(re,de):d;return ee.width=re,ee.height=de,ee.getContext("2d").drawImage(A,0,0,re,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+re+"x"+de+")."),ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return we.isPowerOfTwo(A.width)&&we.isPowerOfTwo(A.height)}function m(A){return a?!1:A.wrapS!==ft||A.wrapT!==ft||A.minFilter!==tt&&A.minFilter!==nt}function _(A,T){return A.generateMipmaps&&T&&A.minFilter!==tt&&A.minFilter!==nt}function b(A,T,q,W){t.generateMipmap(A);const R=i.get(T);R.__maxMipLevel=Math.log(Math.max(q,W))*Math.LOG2E}function w(A,T,q){if(a===!1)return T;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=T;return T===6403&&(q===5126&&(W=33326),q===5131&&(W=33325),q===5121&&(W=33321)),T===6407&&(q===5126&&(W=34837),q===5131&&(W=34843),q===5121&&(W=32849)),T===6408&&(q===5126&&(W=34836),q===5131&&(W=34842),q===5121&&(W=32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function v(A){return A===tt||A===Ss||A===Ts?9728:9729}function E(A){const T=A.target;T.removeEventListener("dispose",E),P(T),T.isVideoTexture&&f.delete(T),o.memory.textures--}function L(A){const T=A.target;T.removeEventListener("dispose",L),z(T),o.memory.textures--}function P(A){const T=i.get(A);T.__webglInit!==void 0&&(t.deleteTexture(T.__webglTexture),i.remove(A))}function z(A){const T=i.get(A),q=i.get(A.texture);if(A){if(q.__webglTexture!==void 0&&t.deleteTexture(q.__webglTexture),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++)t.deleteFramebuffer(T.__webglFramebuffer[W]),T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[W]);else t.deleteFramebuffer(T.__webglFramebuffer),T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer&&t.deleteRenderbuffer(T.__webglColorRenderbuffer),T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer);i.remove(A.texture),i.remove(A)}}let I=0;function F(){I=0}function O(){const A=I;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),I+=1,A}function D(A,T){const q=i.get(A);if(A.isVideoTexture&&j(A),A.version>0&&q.__version!==A.version){const W=A.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(q,A,T);return}}n.activeTexture(33984+T),n.bindTexture(3553,q.__webglTexture)}function C(A,T){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ce(q,A,T);return}n.activeTexture(33984+T),n.bindTexture(35866,q.__webglTexture)}function N(A,T){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ce(q,A,T);return}n.activeTexture(33984+T),n.bindTexture(32879,q.__webglTexture)}function k(A,T){const q=i.get(A);if(A.version>0&&q.__version!==A.version){le(q,A,T);return}n.activeTexture(33984+T),n.bindTexture(34067,q.__webglTexture)}const Y={[mr]:10497,[ft]:33071,[gr]:33648},J={[tt]:9728,[Ss]:9984,[Ts]:9986,[nt]:9729,[ua]:9985,[wi]:9987};function Q(A,T,q){q?(t.texParameteri(A,10242,Y[T.wrapS]),t.texParameteri(A,10243,Y[T.wrapT]),(A===32879||A===35866)&&t.texParameteri(A,32882,Y[T.wrapR]),t.texParameteri(A,10240,J[T.magFilter]),t.texParameteri(A,10241,J[T.minFilter])):(t.texParameteri(A,10242,33071),t.texParameteri(A,10243,33071),(A===32879||A===35866)&&t.texParameteri(A,32882,33071),(T.wrapS!==ft||T.wrapT!==ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,10240,v(T.magFilter)),t.texParameteri(A,10241,v(T.minFilter)),T.minFilter!==tt&&T.minFilter!==nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const W=e.get("EXT_texture_filter_anisotropic");if(W){if(T.type===on&&e.get("OES_texture_float_linear")===null||T.type===vr&&(a||e.get("OES_texture_half_float_linear"))===null)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Z(A,T){A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",E),A.__webglTexture=t.createTexture(),o.memory.textures++)}function ce(A,T,q){let W=3553;T.isDataTexture2DArray&&(W=35866),T.isDataTexture3D&&(W=32879),Z(A,T),n.activeTexture(33984+q),n.bindTexture(W,A.__webglTexture),t.pixelStorei(37440,T.flipY),t.pixelStorei(37441,T.premultiplyAlpha),t.pixelStorei(3317,T.unpackAlignment);const R=m(T)&&g(T.image)===!1,X=x(T.image,R,!1,u),re=g(X)||a,de=s.convert(T.format);let ee=s.convert(T.type),fe=w(T.internalFormat,de,ee);Q(W,T,re);let xe;const Ee=T.mipmaps;if(T.isDepthTexture)fe=6402,a?T.type===on?fe=36012:T.type===xr?fe=33190:T.type===Si?fe=35056:fe=33189:T.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===kn&&fe===6402&&T.type!==yr&&T.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=yr,ee=s.convert(T.type)),T.format===Ti&&fe===6402&&(fe=34041,T.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Si,ee=s.convert(T.type))),n.texImage2D(3553,0,fe,X.width,X.height,0,de,ee,null);else if(T.isDataTexture)if(Ee.length>0&&re){for(let ue=0,Me=Ee.length;ue<Me;ue++)xe=Ee[ue],n.texImage2D(3553,ue,fe,xe.width,xe.height,0,de,ee,xe.data);T.generateMipmaps=!1,A.__maxMipLevel=Ee.length-1}else n.texImage2D(3553,0,fe,X.width,X.height,0,de,ee,X.data),A.__maxMipLevel=0;else if(T.isCompressedTexture){for(let ue=0,Me=Ee.length;ue<Me;ue++)xe=Ee[ue],T.format!==bt&&T.format!==bn?de!==null?n.compressedTexImage2D(3553,ue,fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,ue,fe,xe.width,xe.height,0,de,ee,xe.data);A.__maxMipLevel=Ee.length-1}else if(T.isDataTexture2DArray)n.texImage3D(35866,0,fe,X.width,X.height,X.depth,0,de,ee,X.data),A.__maxMipLevel=0;else if(T.isDataTexture3D)n.texImage3D(32879,0,fe,X.width,X.height,X.depth,0,de,ee,X.data),A.__maxMipLevel=0;else if(Ee.length>0&&re){for(let ue=0,Me=Ee.length;ue<Me;ue++)xe=Ee[ue],n.texImage2D(3553,ue,fe,de,ee,xe);T.generateMipmaps=!1,A.__maxMipLevel=Ee.length-1}else n.texImage2D(3553,0,fe,de,ee,X),A.__maxMipLevel=0;_(T,re)&&b(W,T,X.width,X.height),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function le(A,T,q){if(T.image.length!==6)return;Z(A,T),n.activeTexture(33984+q),n.bindTexture(34067,A.__webglTexture),t.pixelStorei(37440,T.flipY);const W=T&&(T.isCompressedTexture||T.image[0].isCompressedTexture),R=T.image[0]&&T.image[0].isDataTexture,X=[];for(let ue=0;ue<6;ue++)!W&&!R?X[ue]=x(T.image[ue],!1,!0,l):X[ue]=R?T.image[ue].image:T.image[ue];const re=X[0],de=g(re)||a,ee=s.convert(T.format),fe=s.convert(T.type),xe=w(T.internalFormat,ee,fe);Q(34067,T,de);let Ee;if(W){for(let ue=0;ue<6;ue++){Ee=X[ue].mipmaps;for(let Me=0;Me<Ee.length;Me++){const Ye=Ee[Me];T.format!==bt&&T.format!==bn?ee!==null?n.compressedTexImage2D(34069+ue,Me,xe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+ue,Me,xe,Ye.width,Ye.height,0,ee,fe,Ye.data)}}A.__maxMipLevel=Ee.length-1}else{Ee=T.mipmaps;for(let ue=0;ue<6;ue++)if(R){n.texImage2D(34069+ue,0,xe,X[ue].width,X[ue].height,0,ee,fe,X[ue].data);for(let Me=0;Me<Ee.length;Me++){const vt=Ee[Me].image[ue].image;n.texImage2D(34069+ue,Me+1,xe,vt.width,vt.height,0,ee,fe,vt.data)}}else{n.texImage2D(34069+ue,0,xe,ee,fe,X[ue]);for(let Me=0;Me<Ee.length;Me++){const Ye=Ee[Me];n.texImage2D(34069+ue,Me+1,xe,ee,fe,Ye.image[ue])}}A.__maxMipLevel=Ee.length}_(T,de)&&b(34067,T,re.width,re.height),A.__version=T.version,T.onUpdate&&T.onUpdate(T)}function Fe(A,T,q,W){const R=s.convert(T.texture.format),X=s.convert(T.texture.type),re=w(T.texture.internalFormat,R,X);n.texImage2D(W,0,re,T.width,T.height,0,R,X,null),t.bindFramebuffer(36160,A),t.framebufferTexture2D(36160,q,W,i.get(T.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function U(A,T,q){if(t.bindRenderbuffer(36161,A),T.depthBuffer&&!T.stencilBuffer){let W=33189;if(q){const R=T.depthTexture;R&&R.isDepthTexture&&(R.type===on?W=36012:R.type===xr&&(W=33190));const X=Pe(T);t.renderbufferStorageMultisample(36161,X,W,T.width,T.height)}else t.renderbufferStorage(36161,W,T.width,T.height);t.framebufferRenderbuffer(36160,36096,36161,A)}else if(T.depthBuffer&&T.stencilBuffer){if(q){const W=Pe(T);t.renderbufferStorageMultisample(36161,W,35056,T.width,T.height)}else t.renderbufferStorage(36161,34041,T.width,T.height);t.framebufferRenderbuffer(36160,33306,36161,A)}else{const W=s.convert(T.texture.format),R=s.convert(T.texture.type),X=w(T.texture.internalFormat,W,R);if(q){const re=Pe(T);t.renderbufferStorageMultisample(36161,re,X,T.width,T.height)}else t.renderbufferStorage(36161,X,T.width,T.height)}t.bindRenderbuffer(36161,null)}function _e(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const W=i.get(T.depthTexture).__webglTexture;if(T.depthTexture.format===kn)t.framebufferTexture2D(36160,36096,3553,W,0);else if(T.depthTexture.format===Ti)t.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function oe(A){const T=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_e(T.__webglFramebuffer,A)}else if(q){T.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,T.__webglFramebuffer[W]),T.__webglDepthbuffer[W]=t.createRenderbuffer(),U(T.__webglDepthbuffer[W],A,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),U(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function be(A){const T=i.get(A),q=i.get(A.texture);A.addEventListener("dispose",L),q.__webglTexture=t.createTexture(),o.memory.textures++;const W=A.isWebGLCubeRenderTarget===!0,R=A.isWebGLMultisampleRenderTarget===!0,X=g(A)||a;if(a&&A.texture.format===bn&&(A.texture.type===on||A.texture.type===vr)&&(A.texture.format=bt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),W){T.__webglFramebuffer=[];for(let re=0;re<6;re++)T.__webglFramebuffer[re]=t.createFramebuffer()}else if(T.__webglFramebuffer=t.createFramebuffer(),R)if(a){T.__webglMultisampledFramebuffer=t.createFramebuffer(),T.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,T.__webglColorRenderbuffer);const re=s.convert(A.texture.format),de=s.convert(A.texture.type),ee=w(A.texture.internalFormat,re,de),fe=Pe(A);t.renderbufferStorageMultisample(36161,fe,ee,A.width,A.height),t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,T.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),A.depthBuffer&&(T.__webglDepthRenderbuffer=t.createRenderbuffer(),U(T.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(W){n.bindTexture(34067,q.__webglTexture),Q(34067,A.texture,X);for(let re=0;re<6;re++)Fe(T.__webglFramebuffer[re],A,36064,34069+re);_(A.texture,X)&&b(34067,A.texture,A.width,A.height),n.bindTexture(34067,null)}else n.bindTexture(3553,q.__webglTexture),Q(3553,A.texture,X),Fe(T.__webglFramebuffer,A,36064,3553),_(A.texture,X)&&b(3553,A.texture,A.width,A.height),n.bindTexture(3553,null);A.depthBuffer&&oe(A)}function Te(A){const T=A.texture,q=g(A)||a;if(_(T,q)){const W=A.isWebGLCubeRenderTarget?34067:3553,R=i.get(T).__webglTexture;n.bindTexture(W,R),b(W,T,A.width,A.height),n.bindTexture(W,null)}}function Ne(A){if(A.isWebGLMultisampleRenderTarget)if(a){const T=i.get(A);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);const q=A.width,W=A.height;let R=16384;A.depthBuffer&&(R|=256),A.stencilBuffer&&(R|=1024),t.blitFramebuffer(0,0,q,W,0,0,q,W,R,9728),t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Pe(A){return a&&A.isWebGLMultisampleRenderTarget?Math.min(h,A.samples):0}function j(A){const T=o.render.frame;f.get(A)!==T&&(f.set(A,T),A.update())}let $=!1,te=!1;function ye(A,T){A&&A.isWebGLRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),$=!0),A=A.texture),D(A,T)}function ae(A,T){A&&A.isWebGLCubeRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),te=!0),A=A.texture),k(A,T)}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=C,this.setTexture3D=N,this.setTextureCube=k,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ne,this.safeSetTexture2D=ye,this.safeSetTextureCube=ae}function Eu(t,e,n){const i=n.isWebGL2;function r(s){let o;if(s===Mi)return 5121;if(s===jl)return 32819;if(s===ql)return 32820;if(s===Xl)return 33635;if(s===Vl)return 5120;if(s===kl)return 5122;if(s===yr)return 5123;if(s===Wl)return 5124;if(s===xr)return 5125;if(s===on)return 5126;if(s===vr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Yl)return 6406;if(s===bn)return 6407;if(s===bt)return 6408;if(s===Zl)return 6409;if(s===Jl)return 6410;if(s===kn)return 6402;if(s===Ti)return 34041;if(s===Kl)return 6403;if(s===Ql)return 36244;if(s===eh)return 33319;if(s===th)return 33320;if(s===nh)return 36248;if(s===ih)return 36249;if(s===fa||s===da||s===pa||s===ma)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ga||s===ya||s===xa||s===va)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ga)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===_a||s===ba)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===_a)return o.COMPRESSED_RGB8_ETC2;if(s===ba)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===sh||s===oh||s===ah||s===ch||s===lh||s===hh||s===uh||s===fh||s===dh||s===ph||s===mh||s===gh||s===yh||s===xh||s===_h||s===bh||s===wh||s===Mh||s===Sh||s===Th||s===Eh||s===Ah||s===Lh||s===Ch||s===Rh||s===Ph||s===Ih||s===Dh)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===vh)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Si)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Xs(t=[]){Ke.call(this),this.cameras=t}Xs.prototype=Object.assign(Object.create(Ke.prototype),{constructor:Xs,isArrayCamera:!0});function In(){he.call(this),this.type="Group"}In.prototype=Object.assign(Object.create(he.prototype),{constructor:In,isGroup:!0});function kr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(kr.prototype,{constructor:kr,getHandSpace:function(){if(this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const e=new In;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){const u=e.getJointPose(t.hand[l],n),h=c.joints[l];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;const f=c.joints[window.XRHand.INDEX_PHALANX_TIP],d=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=f.position.distanceTo(d.position),y=.02,x=.005;c.inputState.pinching&&p>y+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=y-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Au(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new Ke;u.layers.enable(1),u.viewport=new Ge;const h=new Ke;h.layers.enable(2),h.viewport=new Ge;const f=[u,h],d=new Xs;d.layers.enable(1),d.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=c[I];return F===void 0&&(F=new kr,c[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=c[I];return F===void 0&&(F=new kr,c[I]=F),F.getGripSpace()},this.getHand=function(I){let F=c[I];return F===void 0&&(F=new kr,c[I]=F),F.getHandSpace()};function x(I){const F=l.get(I.inputSource);F&&F.dispatchEvent({type:I.type,data:I.inputSource})}function g(){l.forEach(function(I,F){I.disconnect(F)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(I){s=I,z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(I){if(i=I,i!==null){i.addEventListener("select",x),i.addEventListener("selectstart",x),i.addEventListener("selectend",x),i.addEventListener("squeeze",x),i.addEventListener("squeezestart",x),i.addEventListener("squeezeend",x),i.addEventListener("end",g);const F=e.getContextAttributes();F.xrCompatible!==!0&&e.makeXRCompatible();const O={antialias:F.antialias,alpha:F.alpha,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:r},D=new XRWebGLLayer(i,e,O);i.updateRenderState({baseLayer:D}),i.requestReferenceSpace(o).then(m),i.addEventListener("inputsourceschange",_)}};function _(I){const F=i.inputSources;for(let O=0;O<c.length;O++)l.set(F[O],c[O]);for(let O=0;O<I.removed.length;O++){const D=I.removed[O],C=l.get(D);C&&(C.dispatchEvent({type:"disconnected",data:D}),l.delete(D))}for(let O=0;O<I.added.length;O++){const D=I.added[O],C=l.get(D);C&&C.dispatchEvent({type:"connected",data:D})}}const b=new M,w=new M;function v(I,F,O){b.setFromMatrixPosition(F.matrixWorld),w.setFromMatrixPosition(O.matrixWorld);const D=b.distanceTo(w),C=F.projectionMatrix.elements,N=O.projectionMatrix.elements,k=C[14]/(C[10]-1),Y=C[14]/(C[10]+1),J=(C[9]+1)/C[5],Q=(C[9]-1)/C[5],Z=(C[8]-1)/C[0],ce=(N[8]+1)/N[0],le=k*Z,Fe=k*ce,U=D/(-Z+ce),_e=U*-Z;F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(_e),I.translateZ(U),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const oe=k+U,be=Y+U,Te=le-_e,Ne=Fe+(D-_e),Pe=J*Y/be*oe,j=Q*Y/be*oe;I.projectionMatrix.makePerspective(Te,Ne,Pe,j,oe,be)}function E(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.getCamera=function(I){d.near=h.near=u.near=I.near,d.far=h.far=u.far=I.far,(p!==d.near||y!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),p=d.near,y=d.far);const F=I.parent,O=d.cameras;E(d,F);for(let C=0;C<O.length;C++)E(O[C],F);I.matrixWorld.copy(d.matrixWorld);const D=I.children;for(let C=0,N=D.length;C<N;C++)D[C].updateMatrixWorld(!0);return O.length===2?v(d,u,h):d.projectionMatrix.copy(u.projectionMatrix),d};let L=null;function P(I,F){if(a=F.getViewerPose(s),a!==null){const D=a.views,C=i.renderState.baseLayer;t.setFramebuffer(C.framebuffer);let N=!1;D.length!==d.cameras.length&&(d.cameras.length=0,N=!0);for(let k=0;k<D.length;k++){const Y=D[k],J=C.getViewport(Y),Q=f[k];Q.matrix.fromArray(Y.transform.matrix),Q.projectionMatrix.fromArray(Y.projectionMatrix),Q.viewport.set(J.x,J.y,J.width,J.height),k===0&&d.matrix.copy(Q.matrix),N===!0&&d.cameras.push(Q)}}const O=i.inputSources;for(let D=0;D<c.length;D++){const C=c[D],N=O[D];C.update(N,F,s)}L&&L(I,F)}const z=new iu;z.setAnimationLoop(P),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}Object.assign(Au.prototype,qt.prototype);function bx(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,b){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),u(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?f(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),d(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),x(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,_,b):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const _=t.get(m).envMap;if(_){g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const v=t.get(_).__maxMipLevel;v!==void 0&&(g.maxMipLevel.value=v)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(b=m.clearcoatRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix));let w;m.aoMap?w=m.aoMap:m.lightMap&&(w=m.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===et&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function d(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function x(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function wx(){const t=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return t.style.display="block",t}function Wr(t){t=t||{};const e=t.canvas!==void 0?t.canvas:wx(),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=dt,this.physicallyCorrectLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let y=!1,x=null,g=0,m=0,_=null,b=null,w=-1,v=null;const E=new Ge,L=new Ge;let P=null,z=e.width,I=e.height,F=1,O=null,D=null;const C=new Ge(0,0,z,I),N=new Ge(0,0,z,I);let k=!1;const Y=new Ur;let J=!1,Q=!1;const Z=new Se,ce=new M,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return _===null?F:1}let U=n;function _e(S,G){for(let B=0;B<S.length;B++){const H=S[B],ie=e.getContext(H,G);if(ie!==null)return ie}return null}try{const S={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Ye,!1),e.addEventListener("webglcontextrestored",vt,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),U=_e(G,S),U===null)throw _e(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let oe,be,Te,Ne,Pe,j,$,te,ye,ae,A,T,q,W,R,X,re,de,ee,fe,xe;function Ee(){oe=new ey(U),be=new $g(U,oe,t),be.isWebGL2===!1&&(oe.get("WEBGL_depth_texture"),oe.get("OES_texture_float"),oe.get("OES_texture_half_float"),oe.get("OES_texture_half_float_linear"),oe.get("OES_standard_derivatives"),oe.get("OES_element_index_uint"),oe.get("OES_vertex_array_object"),oe.get("ANGLE_instanced_arrays")),oe.get("OES_texture_float_linear"),fe=new Eu(U,oe,be),Te=new vx(U,oe,be),Te.scissor(L.copy(N).multiplyScalar(F).floor()),Te.viewport(E.copy(C).multiplyScalar(F).floor()),Ne=new iy,Pe=new ax,j=new _x(U,oe,Te,Pe,be,fe,Ne),$=new Qg(p),te=new Ep(U,be),xe=new Zg(U,oe,te,be),ye=new ty(U,te,Ne,xe),ae=new ay(U,ye,te,Ne),re=new oy(U),R=new Kg(Pe),A=new ox(p,$,oe,be,xe,R),T=new bx(Pe),q=new hx(Pe),W=new gx(oe,be),X=new Yg(p,$,Te,ae,a),de=new Jg(U,oe,Ne,be),ee=new ny(U,oe,Ne,be),Ne.programs=A.programs,p.capabilities=be,p.extensions=oe,p.properties=Pe,p.renderLists=q,p.state=Te,p.info=Ne}Ee();const ue=new Au(p,U);this.xr=ue;const Me=new Tu(p,ae,be.maxTextureSize);this.shadowMap=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(z,I,!1))},this.getSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),S=new V),S.set(z,I)},this.setSize=function(S,G,B){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,I=G,e.width=Math.floor(S*F),e.height=Math.floor(G*F),B!==!1&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),S=new V),S.set(z*F,I*F).floor()},this.setDrawingBufferSize=function(S,G,B){z=S,I=G,F=B,e.width=Math.floor(S*B),e.height=Math.floor(G*B),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),S=new Ge),S.copy(E)},this.getViewport=function(S){return S.copy(C)},this.setViewport=function(S,G,B,H){S.isVector4?C.set(S.x,S.y,S.z,S.w):C.set(S,G,B,H),Te.viewport(E.copy(C).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(N)},this.setScissor=function(S,G,B,H){S.isVector4?N.set(S.x,S.y,S.z,S.w):N.set(S,G,B,H),Te.scissor(L.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(S){Te.setScissorTest(k=S)},this.setOpaqueSort=function(S){O=S},this.setTransparentSort=function(S){D=S},this.getClearColor=function(S){return S===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),S=new se),S.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(S,G,B){let H=0;(S===void 0||S)&&(H|=16384),(G===void 0||G)&&(H|=256),(B===void 0||B)&&(H|=1024),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ye,!1),e.removeEventListener("webglcontextrestored",vt,!1),q.dispose(),W.dispose(),Pe.dispose(),$.dispose(),ae.dispose(),xe.dispose(),ue.dispose(),ys.stop()};function Ye(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1,Ee()}function Td(S){const G=S.target;G.removeEventListener("dispose",Td),q0(G)}function q0(S){Ed(S),Pe.remove(S)}function Ed(S){const G=Pe.get(S).program;G!==void 0&&A.releaseProgram(G)}function X0(S,G){S.render(function(B){p.renderBufferImmediate(B,G)})}this.renderBufferImmediate=function(S,G){xe.initAttributes();const B=Pe.get(S);S.hasPositions&&!B.position&&(B.position=U.createBuffer()),S.hasNormals&&!B.normal&&(B.normal=U.createBuffer()),S.hasUvs&&!B.uv&&(B.uv=U.createBuffer()),S.hasColors&&!B.color&&(B.color=U.createBuffer());const H=G.getAttributes();S.hasPositions&&(U.bindBuffer(34962,B.position),U.bufferData(34962,S.positionArray,35048),xe.enableAttribute(H.position),U.vertexAttribPointer(H.position,3,5126,!1,0,0)),S.hasNormals&&(U.bindBuffer(34962,B.normal),U.bufferData(34962,S.normalArray,35048),xe.enableAttribute(H.normal),U.vertexAttribPointer(H.normal,3,5126,!1,0,0)),S.hasUvs&&(U.bindBuffer(34962,B.uv),U.bufferData(34962,S.uvArray,35048),xe.enableAttribute(H.uv),U.vertexAttribPointer(H.uv,2,5126,!1,0,0)),S.hasColors&&(U.bindBuffer(34962,B.color),U.bufferData(34962,S.colorArray,35048),xe.enableAttribute(H.color),U.vertexAttribPointer(H.color,3,5126,!1,0,0)),xe.disableUnusedAttributes(),U.drawArrays(4,0,S.count),S.count=0},this.renderBufferDirect=function(S,G,B,H,ie,Ie){G===null&&(G=le);const Le=ie.isMesh&&ie.matrixWorld.determinant()<0,De=Rd(S,G,H,ie);Te.setMaterial(H,Le);let Ce=B.index;const Qe=B.attributes.position;if(Ce===null){if(Qe===void 0||Qe.count===0)return}else if(Ce.count===0)return;let $e=1;H.wireframe===!0&&(Ce=ye.getWireframeAttribute(B),$e=2),(H.morphTargets||H.morphNormals)&&re.update(ie,B,H,De),xe.setup(ie,H,De,B,Ce);let Ae,Ve=de;Ce!==null&&(Ae=te.get(Ce),Ve=ee,Ve.setIndex(Ae));const _n=Ce!==null?Ce.count:Qe.count,ke=B.drawRange.start*$e,yi=B.drawRange.count*$e,rt=Ie!==null?Ie.start*$e:0,ul=Ie!==null?Ie.count*$e:1/0,_t=Math.max(ke,rt),xs=Math.min(_n,ke+yi,rt+ul)-1,lr=Math.max(0,xs-_t+1);if(lr!==0){if(ie.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Fe()),Ve.setMode(1)):Ve.setMode(4);else if(ie.isLine){let vs=H.linewidth;vs===void 0&&(vs=1),Te.setLineWidth(vs*Fe()),ie.isLineSegments?Ve.setMode(1):ie.isLineLoop?Ve.setMode(2):Ve.setMode(3)}else ie.isPoints?Ve.setMode(0):ie.isSprite&&Ve.setMode(4);if(ie.isInstancedMesh)Ve.renderInstances(_t,lr,ie.count);else if(B.isInstancedBufferGeometry){const vs=Math.min(B.instanceCount,B._maxInstanceCount);Ve.renderInstances(_t,lr,vs)}else Ve.render(_t,lr)}},this.compile=function(S,G){f=W.get(S),f.init(),S.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const B=new WeakMap;S.traverse(function(H){const ie=H.material;if(ie)if(Array.isArray(ie))for(let Ie=0;Ie<ie.length;Ie++){const Le=ie[Ie];B.has(Le)===!1&&(vn(Le,S,H),B.set(Le))}else B.has(ie)===!1&&(vn(ie,S,H),B.set(ie))})};let hl=null;function Y0(S){ue.isPresenting||hl&&hl(S)}const ys=new iu;ys.setAnimationLoop(Y0),typeof window<"u"&&ys.setContext(window),this.setAnimationLoop=function(S){hl=S,ue.setAnimationLoop(S),S===null?ys.stop():ys.start()},this.render=function(S,G){let B,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),B=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;xe.resetDefaultState(),w=-1,v=null,S.autoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(G=ue.getCamera(G)),S.isScene===!0&&S.onBeforeRender(p,S,G,B||_),f=W.get(S,d.length),f.init(),d.push(f),Z.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(Z),Q=this.localClippingEnabled,J=R.init(this.clippingPlanes,Q,G),h=q.get(S,G),h.init(),Ad(S,G,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(O,D),J===!0&&R.beginShadows();const ie=f.state.shadowsArray;Me.render(ie,S,G),f.setupLights(),f.setupLightsView(G),J===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),B!==void 0&&this.setRenderTarget(B),X.render(h,S,G,H);const Ie=h.opaque,Le=h.transparent;Ie.length>0&&Ld(Ie,S,G),Le.length>0&&Ld(Le,S,G),S.isScene===!0&&S.onAfterRender(p,S,G),_!==null&&(j.updateRenderTargetMipmap(_),j.updateMultisampleRenderTarget(_)),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1),d.pop(),d.length>0?f=d[d.length-1]:f=null,h=null};function Ad(S,G,B,H){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){H&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const Le=ae.update(S),De=S.material;De.visible&&h.push(S,Le,De,B,ce.z,null)}}else if(S.isImmediateRenderObject)H&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z),h.push(S,null,S.material,B,ce.z,null);else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ne.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ne.render.frame),!S.frustumCulled||Y.intersectsObject(S))){H&&ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const Le=ae.update(S),De=S.material;if(Array.isArray(De)){const Ce=Le.groups;for(let Qe=0,$e=Ce.length;Qe<$e;Qe++){const Ae=Ce[Qe],Ve=De[Ae.materialIndex];Ve&&Ve.visible&&h.push(S,Le,Ve,B,ce.z,Ae)}}else De.visible&&h.push(S,Le,De,B,ce.z,null)}}const Ie=S.children;for(let Le=0,De=Ie.length;Le<De;Le++)Ad(Ie[Le],G,B,H)}function Ld(S,G,B){const H=G.isScene===!0?G.overrideMaterial:null;for(let ie=0,Ie=S.length;ie<Ie;ie++){const Le=S[ie],De=Le.object,Ce=Le.geometry,Qe=H===null?Le.material:H,$e=Le.group;if(B.isArrayCamera){const Ae=B.cameras;for(let Ve=0,_n=Ae.length;Ve<_n;Ve++){const ke=Ae[Ve];De.layers.test(ke.layers)&&(Te.viewport(E.copy(ke.viewport)),f.setupLightsView(ke),Cd(De,G,ke,Ce,Qe,$e))}}else Cd(De,G,B,Ce,Qe,$e)}}function Cd(S,G,B,H,ie,Ie){if(S.onBeforeRender(p,G,B,H,ie,Ie),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),S.isImmediateRenderObject){const Le=Rd(B,G,ie,S);Te.setMaterial(ie),xe.reset(),X0(S,Le)}else p.renderBufferDirect(B,G,H,ie,S,Ie);S.onAfterRender(p,G,B,H,ie,Ie)}function vn(S,G,B){G.isScene!==!0&&(G=le);const H=Pe.get(S),ie=f.state.lights,Ie=f.state.shadowsArray,Le=ie.state.version,De=A.getParameters(S,ie.state,Ie,G,B),Ce=A.getProgramCacheKey(De);let Qe=H.program,$e=!0;if(Qe===void 0)S.addEventListener("dispose",Td);else if(Qe.cacheKey!==Ce)Ed(S);else if(H.lightsStateVersion!==Le)$e=!1;else if(De.shaderID!==void 0){const ke=S.isMeshStandardMaterial?G.environment:null;H.envMap=$.get(S.envMap||ke);return}else $e=!1;$e&&(De.uniforms=A.getUniforms(S),S.onBeforeCompile(De,p),Qe=A.acquireProgram(De,Ce),H.program=Qe,H.uniforms=De.uniforms,H.outputEncoding=De.outputEncoding);const Ae=H.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(H.numClippingPlanes=R.numPlanes,H.numIntersection=R.numIntersection,Ae.clippingPlanes=R.uniform),H.environment=S.isMeshStandardMaterial?G.environment:null,H.fog=G.fog,H.envMap=$.get(S.envMap||H.environment),H.needsLights=J0(S),H.lightsStateVersion=Le,H.needsLights&&(Ae.ambientLightColor.value=ie.state.ambient,Ae.lightProbe.value=ie.state.probe,Ae.directionalLights.value=ie.state.directional,Ae.directionalLightShadows.value=ie.state.directionalShadow,Ae.spotLights.value=ie.state.spot,Ae.spotLightShadows.value=ie.state.spotShadow,Ae.rectAreaLights.value=ie.state.rectArea,Ae.ltc_1.value=ie.state.rectAreaLTC1,Ae.ltc_2.value=ie.state.rectAreaLTC2,Ae.pointLights.value=ie.state.point,Ae.pointLightShadows.value=ie.state.pointShadow,Ae.hemisphereLights.value=ie.state.hemi,Ae.directionalShadowMap.value=ie.state.directionalShadowMap,Ae.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ae.spotShadowMap.value=ie.state.spotShadowMap,Ae.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ae.pointShadowMap.value=ie.state.pointShadowMap,Ae.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Ve=H.program.getUniforms(),_n=Cn.seqWithValue(Ve.seq,Ae);H.uniformsList=_n}function Rd(S,G,B,H){G.isScene!==!0&&(G=le),j.resetTextureUnits();const ie=G.fog,Ie=B.isMeshStandardMaterial?G.environment:null,Le=_===null?p.outputEncoding:_.texture.encoding,De=$.get(B.envMap||Ie),Ce=Pe.get(B),Qe=f.state.lights;if(J===!0&&(Q===!0||S!==v)){const rt=S===v&&B.id===w;R.setState(B,S,rt)}B.version===Ce.__version?(B.fog&&Ce.fog!==ie||Ce.environment!==Ie||Ce.needsLights&&Ce.lightsStateVersion!==Qe.state.version||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==R.numPlanes||Ce.numIntersection!==R.numIntersection)||Ce.outputEncoding!==Le||Ce.envMap!==De)&&vn(B,G,H):(vn(B,G,H),Ce.__version=B.version);let $e=!1,Ae=!1,Ve=!1;const _n=Ce.program,ke=_n.getUniforms(),yi=Ce.uniforms;if(Te.useProgram(_n.program)&&($e=!0,Ae=!0,Ve=!0),B.id!==w&&(w=B.id,Ae=!0),$e||v!==S){if(ke.setValue(U,"projectionMatrix",S.projectionMatrix),be.logarithmicDepthBuffer&&ke.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),v!==S&&(v=S,Ae=!0,Ve=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const rt=ke.map.cameraPosition;rt!==void 0&&rt.setValue(U,ce.setFromMatrixPosition(S.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ke.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||B.skinning)&&ke.setValue(U,"viewMatrix",S.matrixWorldInverse)}if(B.skinning){ke.setOptional(U,H,"bindMatrix"),ke.setOptional(U,H,"bindMatrixInverse");const rt=H.skeleton;if(rt){const ul=rt.bones;if(be.floatVertexTextures){if(rt.boneTexture===null){let _t=Math.sqrt(ul.length*4);_t=we.ceilPowerOfTwo(_t),_t=Math.max(_t,4);const xs=new Float32Array(_t*_t*4);xs.set(rt.boneMatrices);const lr=new pn(xs,_t,_t,bt,on);rt.boneMatrices=xs,rt.boneTexture=lr,rt.boneTextureSize=_t}ke.setValue(U,"boneTexture",rt.boneTexture,j),ke.setValue(U,"boneTextureSize",rt.boneTextureSize)}else ke.setOptional(U,rt,"boneMatrices")}}return(Ae||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,ke.setValue(U,"receiveShadow",H.receiveShadow)),Ae&&(ke.setValue(U,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&Z0(yi,Ve),ie&&B.fog&&T.refreshFogUniforms(yi,ie),T.refreshMaterialUniforms(yi,B,F,I),Cn.upload(U,Ce.uniformsList,yi,j)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cn.upload(U,Ce.uniformsList,yi,j),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ke.setValue(U,"center",H.center),ke.setValue(U,"modelViewMatrix",H.modelViewMatrix),ke.setValue(U,"normalMatrix",H.normalMatrix),ke.setValue(U,"modelMatrix",H.matrixWorld),_n}function Z0(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function J0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.setFramebuffer=function(S){x!==S&&_===null&&U.bindFramebuffer(36160,S),x=S},this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderList=function(){return h},this.setRenderList=function(S){h=S},this.getRenderTarget=function(){return _},this.setRenderTarget=function(S,G=0,B=0){_=S,g=G,m=B,S&&Pe.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S);let H=x,ie=!1;if(S){const Ie=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(H=Ie[G],ie=!0):S.isWebGLMultisampleRenderTarget?H=Pe.get(S).__webglMultisampledFramebuffer:H=Ie,E.copy(S.viewport),L.copy(S.scissor),P=S.scissorTest}else E.copy(C).multiplyScalar(F).floor(),L.copy(N).multiplyScalar(F).floor(),P=k;if(b!==H&&(U.bindFramebuffer(36160,H),b=H),Te.viewport(E),Te.scissor(L),Te.setScissorTest(P),ie){const Ie=Pe.get(S.texture);U.framebufferTexture2D(36160,36064,34069+G,Ie.__webglTexture,B)}},this.readRenderTargetPixels=function(S,G,B,H,ie,Ie,Le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){let Ce=!1;De!==b&&(U.bindFramebuffer(36160,De),Ce=!0);try{const Qe=S.texture,$e=Qe.format,Ae=Qe.type;if($e!==bt&&fe.convert($e)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae!==Mi&&fe.convert(Ae)!==U.getParameter(35738)&&!(Ae===on&&(be.isWebGL2||oe.get("OES_texture_float")||oe.get("WEBGL_color_buffer_float")))&&!(Ae===vr&&(be.isWebGL2?oe.get("EXT_color_buffer_float"):oe.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U.checkFramebufferStatus(36160)===36053?G>=0&&G<=S.width-H&&B>=0&&B<=S.height-ie&&U.readPixels(G,B,H,ie,fe.convert($e),fe.convert(Ae),Ie):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Ce&&U.bindFramebuffer(36160,b)}}},this.copyFramebufferToTexture=function(S,G,B=0){const H=Math.pow(2,-B),ie=Math.floor(G.image.width*H),Ie=Math.floor(G.image.height*H),Le=fe.convert(G.format);j.setTexture2D(G,0),U.copyTexImage2D(3553,B,Le,S.x,S.y,ie,Ie,0),Te.unbindTexture()},this.copyTextureToTexture=function(S,G,B,H=0){const ie=G.image.width,Ie=G.image.height,Le=fe.convert(B.format),De=fe.convert(B.type);j.setTexture2D(B,0),U.pixelStorei(37440,B.flipY),U.pixelStorei(37441,B.premultiplyAlpha),U.pixelStorei(3317,B.unpackAlignment),G.isDataTexture?U.texSubImage2D(3553,H,S.x,S.y,ie,Ie,Le,De,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(3553,H,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Le,G.mipmaps[0].data):U.texSubImage2D(3553,H,S.x,S.y,Le,De,G.image),H===0&&B.generateMipmaps&&U.generateMipmap(3553),Te.unbindTexture()},this.initTexture=function(S){j.setTexture2D(S,0),Te.unbindTexture()},this.resetState=function(){Te.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function $a(t){Wr.call(this,t)}$a.prototype=Object.assign(Object.create(Wr.prototype),{constructor:$a,isWebGL1Renderer:!0});class Ys{constructor(e,n){Object.defineProperty(this,"isFogExp2",{value:!0}),this.name="",this.color=new se(e),this.density=n!==void 0?n:25e-5}clone(){return new Ys(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Zs{constructor(e,n,i){Object.defineProperty(this,"isFog",{value:!0}),this.name="",this.color=new se(e),this.near=n!==void 0?n:1,this.far=i!==void 0?i:1e3}clone(){return new Zs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Ka extends he{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}function Et(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=we.generateUUID()}Object.defineProperty(Et.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(Et.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e=0){return this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=we.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new Et(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=we.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const ti=new M;function Dn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(Dn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}}),Object.assign(Dn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)ti.x=this.getX(e),ti.y=this.getY(e),ti.z=this.getZ(e),ti.applyMatrix4(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Fn(t){ve.call(this),this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Fn.prototype=Object.create(ve.prototype),Fn.prototype.constructor=Fn,Fn.prototype.isSpriteMaterial=!0,Fn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};let Xi;const jr=new M,Yi=new M,Zi=new M,Ji=new V,qr=new V,Lu=new Se,Js=new M,Xr=new M,$s=new M,Cu=new V,Qa=new V,Ru=new V;function Yr(t){if(he.call(this),this.type="Sprite",Xi===void 0){Xi=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Et(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Dn(n,3,0,!1)),Xi.setAttribute("uv",new Dn(n,2,3,!1))}this.geometry=Xi,this.material=t!==void 0?t:new Fn,this.center=new V(.5,.5)}Yr.prototype=Object.assign(Object.create(he.prototype),{constructor:Yr,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Lu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-Zi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Ks(Js.set(-.5,-.5,0),Zi,s,Yi,i,r),Ks(Xr.set(.5,-.5,0),Zi,s,Yi,i,r),Ks($s.set(.5,.5,0),Zi,s,Yi,i,r),Cu.set(0,0),Qa.set(1,0),Ru.set(1,1);let o=t.ray.intersectTriangle(Js,Xr,$s,!1,jr);if(o===null&&(Ks(Xr.set(-.5,.5,0),Zi,s,Yi,i,r),Qa.set(0,1),o=t.ray.intersectTriangle(Js,$s,Xr,!1,jr),o===null))return;const a=t.ray.origin.distanceTo(jr);a<t.near||a>t.far||e.push({distance:a,point:jr.clone(),uv:ot.getUV(jr,Js,Xr,$s,Cu,Qa,Ru,new V),face:null,object:this})},copy:function(t){return he.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Ks(t,e,n,i,r,s){Ji.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(qr.x=s*Ji.x-r*Ji.y,qr.y=r*Ji.x+s*Ji.y):qr.copy(Ji),t.copy(e),t.x+=qr.x,t.y+=qr.y,t.applyMatrix4(Lu)}const Qs=new M,Pu=new M;function Zr(){he.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Zr.prototype=Object.assign(Object.create(he.prototype),{constructor:Zr,isLOD:!0,copy:function(t){he.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e=0){e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){Qs.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Qs);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){Qs.setFromMatrixPosition(t.matrixWorld),Pu.setFromMatrixPosition(this.matrixWorld);const n=Qs.distanceTo(Pu)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=he.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});const Iu=new M,Du=new Ge,Fu=new Ge,Mx=new M,Ou=new Se;function Jr(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),We.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}Jr.prototype=Object.assign(Object.create(We.prototype),{constructor:Jr,isSkinnedMesh:!0,copy:function(t){return We.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new Ge,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){We.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(t,e){const n=this.skeleton,i=this.geometry;Du.fromBufferAttribute(i.attributes.skinIndex,t),Fu.fromBufferAttribute(i.attributes.skinWeight,t),Iu.fromBufferAttribute(i.attributes.position,t).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=Fu.getComponent(r);if(s!==0){const o=Du.getComponent(r);Ou.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Mx.copy(Iu).applyMatrix4(Ou),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function $r(){he.call(this),this.type="Bone"}$r.prototype=Object.assign(Object.create(he.prototype),{constructor:$r,isBone:!0});const Nu=new Se,Sx=new Se;function Kr(t=[],e=[]){this.uuid=we.generateUUID(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(Kr.prototype,{init:function(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Se)}},calculateInverses:function(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:Sx;Nu.multiplyMatrices(o,e[r]),Nu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)},clone:function(){return new Kr(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new $r),this.bones.push(s),this.boneInverses.push(new Se().fromArray(t.boneInverses[n]))}return this.init(),this},toJSON:function(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}});const Bu=new Se,Gu=new Se,eo=[],Qr=new We;function to(t,e,n){We.call(this,t,e),this.instanceMatrix=new ge(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}to.prototype=Object.assign(Object.create(We.prototype),{constructor:to,isInstancedMesh:!0,copy:function(t){return We.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},getColorAt:function(t,e){e.fromArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Bu),Gu.multiplyMatrices(n,Bu),Qr.matrixWorld=Gu,Qr.raycast(t,eo);for(let s=0,o=eo.length;s<o;s++){const a=eo[s];a.instanceId=r,a.object=this,e.push(a)}eo.length=0}},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new ge(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function qe(t){ve.call(this),this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}qe.prototype=Object.create(ve.prototype),qe.prototype.constructor=qe,qe.prototype.isLineBasicMaterial=!0,qe.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const zu=new M,Uu=new M,Hu=new Se,no=new Ri,io=new cn;function It(t=new me,e=new qe){he.call(this),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}It.prototype=Object.assign(Object.create(he.prototype),{constructor:It,isLine:!0,copy:function(t){return he.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zu.fromBufferAttribute(e,i-1),Uu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zu.distanceTo(Uu);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;Hu.copy(i).invert(),no.copy(t.ray).applyMatrix4(Hu);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new M,c=new M,l=new M,u=new M,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,p=n.attributes.position;if(f!==null){const y=f.array;for(let x=0,g=y.length-1;x<g;x+=h){const m=y[x],_=y[x+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,_),no.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(u);w<t.near||w>t.far||e.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else for(let y=0,x=p.count-1;y<x;y+=h){if(a.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),no.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(u);m<t.near||m>t.far||e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const f=n.vertices,d=f.length;for(let p=0;p<d-1;p+=h){if(no.distanceSqToSegment(f[p],f[p+1],u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const x=t.ray.origin.distanceTo(u);x<t.near||x>t.far||e.push({distance:x,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const ro=new M,so=new M;function gt(t,e){It.call(this,t,e),this.type="LineSegments"}gt.prototype=Object.assign(Object.create(It.prototype),{constructor:gt,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ro.fromBufferAttribute(e,i),so.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ro.distanceTo(so);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)ro.copy(e[i]),so.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ro.distanceTo(so)}return this}});function oo(t,e){It.call(this,t,e),this.type="LineLoop"}oo.prototype=Object.assign(Object.create(It.prototype),{constructor:oo,isLineLoop:!0});function zt(t){ve.call(this),this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}zt.prototype=Object.create(ve.prototype),zt.prototype.constructor=zt,zt.prototype.isPointsMaterial=!0,zt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const Vu=new Se,ec=new Ri,ao=new cn,co=new M;function $i(t=new me,e=new zt){he.call(this),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}$i.prototype=Object.assign(Object.create(he.prototype),{constructor:$i,isPoints:!0,copy:function(t){return he.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;Vu.copy(i).invert(),ec.copy(t.ray).applyMatrix4(Vu);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const u=a.array;for(let h=0,f=u.length;h<f;h++){const d=u[h];co.fromBufferAttribute(l,d),tc(co,d,o,i,t,e,this)}}else for(let u=0,h=l.count;u<h;u++)co.fromBufferAttribute(l,u),tc(co,u,o,i,t,e,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)tc(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function tc(t,e,n,i,r,s,o){const a=ec.distanceSqToPoint(t);if(a<n){const c=new M;ec.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function nc(t,e,n,i,r,s,o,a,c){Be.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:bn,this.minFilter=s!==void 0?s:nt,this.magFilter=r!==void 0?r:nt,this.generateMipmaps=!1;const l=this;function u(){l.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}nc.prototype=Object.assign(Object.create(Be.prototype),{constructor:nc,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Ki(t,e,n,i,r,s,o,a,c,l,u,h){Be.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Ki.prototype=Object.create(Be.prototype),Ki.prototype.constructor=Ki,Ki.prototype.isCompressedTexture=!0;function es(t,e,n,i,r,s,o,a,c){Be.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}es.prototype=Object.create(Be.prototype),es.prototype.constructor=es,es.prototype.isCanvasTexture=!0;function ts(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:kn,l!==kn&&l!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===kn&&(n=yr),n===void 0&&l===Ti&&(n=Si),Be.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:tt,this.minFilter=a!==void 0?a:tt,this.flipY=!1,this.generateMipmaps=!1}ts.prototype=Object.create(Be.prototype),ts.prototype.constructor=ts,ts.prototype.isDepthTexture=!0;let Tx=0;const Kt=new Se,ic=new he,lo=new M;function ze(){Object.defineProperty(this,"id",{value:Tx+=2}),this.uuid=we.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}ze.prototype=Object.assign(Object.create(qt.prototype),{constructor:ze,isGeometry:!0,applyMatrix4:function(t){const e=new pt().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Kt.makeRotationX(t),this.applyMatrix4(Kt),this},rotateY:function(t){return Kt.makeRotationY(t),this.applyMatrix4(Kt),this},rotateZ:function(t){return Kt.makeRotationZ(t),this.applyMatrix4(Kt),this},translate:function(t,e,n){return Kt.makeTranslation(t,e,n),this.applyMatrix4(Kt),this},scale:function(t,e,n){return Kt.makeScale(t,e,n),this.applyMatrix4(Kt),this},lookAt:function(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this},fromBufferGeometry:function(t){const e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new M().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new se().fromBufferAttribute(o,h));function l(h,f,d,p){const y=o===void 0?[]:[e.colors[h].clone(),e.colors[f].clone(),e.colors[d].clone()],x=s===void 0?[]:[new M().fromBufferAttribute(s,h),new M().fromBufferAttribute(s,f),new M().fromBufferAttribute(s,d)],g=new Lr(h,f,d,x,y,p);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new V().fromBufferAttribute(a,h),new V().fromBufferAttribute(a,f),new V().fromBufferAttribute(a,d)]),c!==void 0&&e.faceVertexUvs[1].push([new V().fromBufferAttribute(c,h),new V().fromBufferAttribute(c,f),new V().fromBufferAttribute(c,d)])}const u=t.groups;if(u.length>0)for(let h=0;h<u.length;h++){const f=u[h],d=f.start,p=f.count;for(let y=d,x=d+p;y<x;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),f.materialIndex):l(y,y+1,y+2,f.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new Se;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new M,e=new M;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t=!0){const e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new M;if(t){const n=new M,i=new M;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const t=new ze;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new M,l={a:new M,b:new M,c:new M};r.push(c),s.push(l)}}const i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n=0){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,u=t.colors;e!==void 0&&(i=new pt().getNormalMatrix(e));for(let h=0,f=o.length;h<f;h++){const p=o[h].clone();e!==void 0&&p.applyMatrix4(e),s.push(p)}for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone());for(let h=0,f=c.length;h<f;h++){const d=c[h];let p,y;const x=d.vertexNormals,g=d.vertexColors,m=new Lr(d.a+r,d.b+r,d.c+r);m.normal.copy(d.normal),i!==void 0&&m.normal.applyMatrix3(i).normalize();for(let _=0,b=x.length;_<b;_++)p=x[_].clone(),i!==void 0&&p.applyMatrix3(i).normalize(),m.vertexNormals.push(p);m.color.copy(d.color);for(let _=0,b=g.length;_<b;_++)y=g[_],m.vertexColors.push(y.clone());m.materialIndex=d.materialIndex+n,a.push(m)}for(let h=0,f=t.faceVertexUvs.length;h<f;h++){const d=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=d.length;p<y;p++){const x=d[p],g=[];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(t=4){const e={},n=[],i=[],r=Math.pow(10,t);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],u=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[u]===void 0?(e[u]=a,n.push(this.vertices[a]),i[a]=n.length-1):i[a]=i[e[u]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=i[l.a],l.b=i[l.b],l.c=i[l.c];const u=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(u[h]===u[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,u=this.faceVertexUvs.length;l<u;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-n.length;return this.vertices=n,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const i=t[e];this.vertices.push(new M(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){const c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}const e=[];for(let d=0;d<this.vertices.length;d++){const p=this.vertices[d];e.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let d=0;d<this.faces.length;d++){const p=this.faces[d],y=!0,x=!1,g=this.faceVertexUvs[0][d]!==void 0,m=p.normal.length()>0,_=p.vertexNormals.length>0,b=p.color.r!==1||p.color.g!==1||p.color.b!==1,w=p.vertexColors.length>0;let v=0;if(v=l(v,0,0),v=l(v,1,y),v=l(v,2,x),v=l(v,3,g),v=l(v,4,m),v=l(v,5,_),v=l(v,6,b),v=l(v,7,w),n.push(v),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){const E=this.faceVertexUvs[0][d];n.push(f(E[0]),f(E[1]),f(E[2]))}if(m&&n.push(u(p.normal)),_){const E=p.vertexNormals;n.push(u(E[0]),u(E[1]),u(E[2]))}if(b&&n.push(h(p.color)),w){const E=p.vertexColors;n.push(h(E[0]),h(E[1]),h(E[2]))}}function l(d,p,y){return y?d|1<<p:d&~(1<<p)}function u(d){const p=d.x.toString()+d.y.toString()+d.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(d.x,d.y,d.z)),r[p]}function h(d){const p=d.r.toString()+d.g.toString()+d.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(d.getHex())),o[p]}function f(d){const p=d.x.toString()+d.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(d.x,d.y)),c[p]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new ze().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let h=0,f=e.length;h<f;h++)this.vertices.push(e[h].clone());const n=t.colors;for(let h=0,f=n.length;h<f;h++)this.colors.push(n[h].clone());const i=t.faces;for(let h=0,f=i.length;h<f;h++)this.faces.push(i[h].clone());for(let h=0,f=t.faceVertexUvs.length;h<f;h++){const d=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=d.length;p<y;p++){const x=d[p],g=[];for(let m=0,_=x.length;m<_;m++){const b=x[m];g.push(b.clone())}this.faceVertexUvs[h].push(g)}}const r=t.morphTargets;for(let h=0,f=r.length;h<f;h++){const d={};if(d.name=r[h].name,r[h].vertices!==void 0){d.vertices=[];for(let p=0,y=r[h].vertices.length;p<y;p++)d.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){d.normals=[];for(let p=0,y=r[h].normals.length;p<y;p++)d.normals.push(r[h].normals[p].clone())}this.morphTargets.push(d)}const s=t.morphNormals;for(let h=0,f=s.length;h<f;h++){const d={};if(s[h].vertexNormals!==void 0){d.vertexNormals=[];for(let p=0,y=s[h].vertexNormals.length;p<y;p++){const x=s[h].vertexNormals[p],g={};g.a=x.a.clone(),g.b=x.b.clone(),g.c=x.c.clone(),d.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){d.faceNormals=[];for(let p=0,y=s[h].faceNormals.length;p<y;p++)d.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(d)}const o=t.skinWeights;for(let h=0,f=o.length;h<f;h++)this.skinWeights.push(o[h].clone());const a=t.skinIndices;for(let h=0,f=a.length;h<f;h++)this.skinIndices.push(a[h].clone());const c=t.lineDistances;for(let h=0,f=c.length;h<f;h++)this.lineDistances.push(c[h]);const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class rc extends ze{constructor(e,n,i,r,s,o){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o},this.fromBufferGeometry(new zr(e,n,i,r,s,o)),this.mergeVertices()}}class sc extends me{constructor(e=1,n=8,i=0,r=Math.PI*2){super(),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],c=[],l=new M,u=new V;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const d=i+h/n*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}}class ku extends ze{constructor(e,n,i,r){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},this.fromBufferGeometry(new sc(e,n,i,r)),this.mergeVertices()}}class ns extends me{constructor(e=1,n=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const y=[],x=i/2;let g=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function m(){const b=new M,w=new M;let v=0;const E=(n-e)/i;for(let L=0;L<=s;L++){const P=[],z=L/s,I=z*(n-e)+e;for(let F=0;F<=r;F++){const O=F/r,D=O*c+a,C=Math.sin(D),N=Math.cos(D);w.x=I*C,w.y=-z*i+x,w.z=I*N,h.push(w.x,w.y,w.z),b.set(C,E,N).normalize(),f.push(b.x,b.y,b.z),d.push(O,1-z),P.push(p++)}y.push(P)}for(let L=0;L<r;L++)for(let P=0;P<s;P++){const z=y[P][L],I=y[P+1][L],F=y[P+1][L+1],O=y[P][L+1];u.push(z,I,O),u.push(I,F,O),v+=6}l.addGroup(g,v,0),g+=v}function _(b){const w=p,v=new V,E=new M;let L=0;const P=b===!0?e:n,z=b===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,x*z,0),f.push(0,z,0),d.push(.5,.5),p++;const I=p;for(let F=0;F<=r;F++){const D=F/r*c+a,C=Math.cos(D),N=Math.sin(D);E.x=P*N,E.y=x*z,E.z=P*C,h.push(E.x,E.y,E.z),f.push(0,z,0),v.x=C*.5+.5,v.y=N*.5*z+.5,d.push(v.x,v.y),p++}for(let F=0;F<r;F++){const O=w+F,D=I+F;b===!0?u.push(D,D+1,O):u.push(D+1,D,O),L+=3}l.addGroup(g,L,b===!0?1:2),g+=L}}}class oc extends ze{constructor(e,n,i,r,s,o,a,c){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c},this.fromBufferGeometry(new ns(e,n,i,r,s,o,a,c)),this.mergeVertices()}}class Wu extends oc{constructor(e,n,i,r,s,o,a){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class ju extends ns{constructor(e=1,n=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeBufferGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class ni extends me{constructor(e,n,i=1,r=0){super(),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(s.slice(),3)),this.setAttribute("uv",new ne(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new M,b=new M,w=new M;for(let v=0;v<n.length;v+=3)d(n[v+0],_),d(n[v+1],b),d(n[v+2],w),c(_,b,w,m)}function c(m,_,b,w){const v=w+1,E=[];for(let L=0;L<=v;L++){E[L]=[];const P=m.clone().lerp(b,L/v),z=_.clone().lerp(b,L/v),I=v-L;for(let F=0;F<=I;F++)F===0&&L===v?E[L][F]=P:E[L][F]=P.clone().lerp(z,F/I)}for(let L=0;L<v;L++)for(let P=0;P<2*(v-L)-1;P++){const z=Math.floor(P/2);P%2===0?(f(E[L][z+1]),f(E[L+1][z]),f(E[L][z])):(f(E[L][z+1]),f(E[L+1][z+1]),f(E[L+1][z]))}}function l(m){const _=new M;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(m),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function u(){const m=new M;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const b=x(m)/2/Math.PI+.5,w=g(m)/Math.PI+.5;o.push(b,1-w)}p(),h()}function h(){for(let m=0;m<o.length;m+=6){const _=o[m+0],b=o[m+2],w=o[m+4],v=Math.max(_,b,w),E=Math.min(_,b,w);v>.9&&E<.1&&(_<.2&&(o[m+0]+=1),b<.2&&(o[m+2]+=1),w<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function d(m,_){const b=m*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function p(){const m=new M,_=new M,b=new M,w=new M,v=new V,E=new V,L=new V;for(let P=0,z=0;P<s.length;P+=9,z+=6){m.set(s[P+0],s[P+1],s[P+2]),_.set(s[P+3],s[P+4],s[P+5]),b.set(s[P+6],s[P+7],s[P+8]),v.set(o[z+0],o[z+1]),E.set(o[z+2],o[z+3]),L.set(o[z+4],o[z+5]),w.copy(m).add(_).add(b).divideScalar(3);const I=x(w);y(v,z+0,m,I),y(E,z+2,_,I),y(L,z+4,b,I)}}function y(m,_,b,w){w<0&&m.x===1&&(o[_]=m.x-1),b.x===0&&b.z===0&&(o[_]=w/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}}class ac extends ni{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class qu extends ze{constructor(e,n){super(),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new ac(e,n)),this.mergeVertices()}}const ho=new M,uo=new M,cc=new M,fo=new ot;class lc extends me{constructor(e,n){super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:n},n=n!==void 0?n:1,e.isGeometry&&(e=new me().fromGeometry(e));const r=Math.pow(10,4),s=Math.cos(we.DEG2RAD*n),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:y,b:x,c:g}=fo;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),fo.getNormal(cc),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const _=(m+1)%3,b=h[m],w=h[_],v=fo[u[m]],E=fo[u[_]],L=`${b}_${w}`,P=`${w}_${b}`;P in f&&f[P]?(cc.dot(f[P].normal)<=s&&(d.push(v.x,v.y,v.z),d.push(E.x,E.y,E.z)),f[P]=null):L in f||(f[L]={index0:l[m],index1:l[_],normal:cc.clone()})}}for(const p in f)if(f[p]){const{index0:y,index1:x}=f[p];ho.fromBufferAttribute(a,y),uo.fromBufferAttribute(a,x),d.push(ho.x,ho.y,ho.z),d.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new ne(d,3))}}const Ex={triangulate:function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=Xu(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(i&&(s=Px(t,e,s,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let p=n;p<r;p+=n)h=t[p],f=t[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?1/d:0}return is(s,o,n,a,c,d),o}};function Xu(t,e,n,i,r){let s,o;if(r===Vx(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Ju(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Ju(s,t[s],t[s+1],o);return o&&po(o,o.next)&&(ss(o),o=o.next),o}function On(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(po(n,n.next)||Xe(n.prev,n,n.next)===0)){if(ss(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function is(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Nx(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?Lx(t,i,r,s):Ax(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),ss(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=Cx(On(t),e,n),is(t,e,n,i,r,s,2)):o===2&&Rx(t,e,n,i,r,s):is(On(t),e,n,i,r,s,1);break}}}function Ax(t){const e=t.prev,n=t,i=t.next;if(Xe(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(Qi(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Xe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Lx(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Xe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=hc(a,c,e,n,i),f=hc(l,u,e,n,i);let d=t.prevZ,p=t.nextZ;for(;d&&d.z>=h&&p&&p.z<=f;){if(d!==t.prev&&d!==t.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Xe(d.prev,d,d.next)>=0||(d=d.prevZ,p!==t.prev&&p!==t.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Xe(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=h;){if(d!==t.prev&&d!==t.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Xe(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=f;){if(p!==t.prev&&p!==t.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Xe(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Cx(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!po(r,s)&&Yu(r,i,i.next,s)&&rs(r,s)&&rs(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),ss(i),ss(i.next),i=t=s),i=i.next}while(i!==t);return On(i)}function Rx(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zx(o,a)){let c=Zu(o,a);o=On(o,o.next),c=On(c,c.next),is(o,e,n,i,r,s),is(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function Px(t,e,n,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=Xu(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Gx(l));for(r.sort(Ix),s=0;s<r.length;s++)Dx(r[s],n),n=On(n,n.next);return n}function Ix(t,e){return t.x-e.x}function Dx(t,e){if(e=Fx(t,e),e){const n=Zu(e,t);On(e,e.next),On(n,n.next)}}function Fx(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s){if(s=f,f===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&Qi(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),rs(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&Ox(o,n)))&&(o=n,u=h)),n=n.next;while(n!==a);return o}function Ox(t,e){return Xe(t.prev,t,e.prev)<0&&Xe(e.next,t,t.next)<0}function Nx(t,e,n,i){let r=t;do r.z===null&&(r.z=hc(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Bx(r)}function Bx(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function hc(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Gx(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Qi(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function zx(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Ux(t,e)&&(rs(t,e)&&rs(e,t)&&Hx(t,e)&&(Xe(t.prev,t,e.prev)||Xe(t,e.prev,e))||po(t,e)&&Xe(t.prev,t,t.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function po(t,e){return t.x===e.x&&t.y===e.y}function Yu(t,e,n,i){const r=go(Xe(t,e,n)),s=go(Xe(t,e,i)),o=go(Xe(n,i,t)),a=go(Xe(n,i,e));return!!(r!==s&&o!==a||r===0&&mo(t,n,e)||s===0&&mo(t,i,e)||o===0&&mo(n,t,i)||a===0&&mo(n,e,i))}function mo(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function go(t){return t>0?1:t<0?-1:0}function Ux(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Yu(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function rs(t,e){return Xe(t.prev,t,t.next)<0?Xe(t,e,t.next)>=0&&Xe(t,t.prev,e)>=0:Xe(t,e,t.prev)<0||Xe(t,t.next,e)<0}function Hx(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Zu(t,e){const n=new uc(t.i,t.x,t.y),i=new uc(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ju(t,e,n,i){const r=new uc(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ss(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function uc(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vx(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}const mn={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return mn.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];$u(t),Ku(n,t);let s=t.length;e.forEach($u);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Ku(n,e[a]);const o=Ex.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function $u(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ku(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class os extends me{constructor(e,n){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:d-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,x=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:kx;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let _,b=!1,w,v,E,L;g&&(_=g.getSpacedPoints(u),b=!0,f=!1,w=g.computeFrenetFrames(u,!1),v=new M,E=new M,L=new M),f||(x=0,d=0,p=0,y=0);const P=a.extractPoints(l);let z=P.shape;const I=P.holes;if(!mn.isClockWise(z)){z=z.reverse();for(let j=0,$=I.length;j<$;j++){const te=I[j];mn.isClockWise(te)&&(I[j]=te.reverse())}}const O=mn.triangulateShape(z,I),D=z;for(let j=0,$=I.length;j<$;j++){const te=I[j];z=z.concat(te)}function C(j,$,te){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(te).add(j)}const N=z.length,k=O.length;function Y(j,$,te){let ye,ae,A;const T=j.x-$.x,q=j.y-$.y,W=te.x-j.x,R=te.y-j.y,X=T*T+q*q,re=T*R-q*W;if(Math.abs(re)>Number.EPSILON){const de=Math.sqrt(X),ee=Math.sqrt(W*W+R*R),fe=$.x-q/de,xe=$.y+T/de,Ee=te.x-R/ee,ue=te.y+W/ee,Me=((Ee-fe)*R-(ue-xe)*W)/(T*R-q*W);ye=fe+T*Me-j.x,ae=xe+q*Me-j.y;const Ye=ye*ye+ae*ae;if(Ye<=2)return new V(ye,ae);A=Math.sqrt(Ye/2)}else{let de=!1;T>Number.EPSILON?W>Number.EPSILON&&(de=!0):T<-Number.EPSILON?W<-Number.EPSILON&&(de=!0):Math.sign(q)===Math.sign(R)&&(de=!0),de?(ye=-q,ae=T,A=Math.sqrt(X)):(ye=T,ae=q,A=Math.sqrt(X/2))}return new V(ye/A,ae/A)}const J=[];for(let j=0,$=D.length,te=$-1,ye=j+1;j<$;j++,te++,ye++)te===$&&(te=0),ye===$&&(ye=0),J[j]=Y(D[j],D[te],D[ye]);const Q=[];let Z,ce=J.concat();for(let j=0,$=I.length;j<$;j++){const te=I[j];Z=[];for(let ye=0,ae=te.length,A=ae-1,T=ye+1;ye<ae;ye++,A++,T++)A===ae&&(A=0),T===ae&&(T=0),Z[ye]=Y(te[ye],te[A],te[T]);Q.push(Z),ce=ce.concat(Z)}for(let j=0;j<x;j++){const $=j/x,te=d*Math.cos($*Math.PI/2),ye=p*Math.sin($*Math.PI/2)+y;for(let ae=0,A=D.length;ae<A;ae++){const T=C(D[ae],J[ae],ye);oe(T.x,T.y,-te)}for(let ae=0,A=I.length;ae<A;ae++){const T=I[ae];Z=Q[ae];for(let q=0,W=T.length;q<W;q++){const R=C(T[q],Z[q],ye);oe(R.x,R.y,-te)}}}const le=p+y;for(let j=0;j<N;j++){const $=f?C(z[j],ce[j],le):z[j];b?(E.copy(w.normals[0]).multiplyScalar($.x),v.copy(w.binormals[0]).multiplyScalar($.y),L.copy(_[0]).add(E).add(v),oe(L.x,L.y,L.z)):oe($.x,$.y,0)}for(let j=1;j<=u;j++)for(let $=0;$<N;$++){const te=f?C(z[$],ce[$],le):z[$];b?(E.copy(w.normals[j]).multiplyScalar(te.x),v.copy(w.binormals[j]).multiplyScalar(te.y),L.copy(_[j]).add(E).add(v),oe(L.x,L.y,L.z)):oe(te.x,te.y,h/u*j)}for(let j=x-1;j>=0;j--){const $=j/x,te=d*Math.cos($*Math.PI/2),ye=p*Math.sin($*Math.PI/2)+y;for(let ae=0,A=D.length;ae<A;ae++){const T=C(D[ae],J[ae],ye);oe(T.x,T.y,h+te)}for(let ae=0,A=I.length;ae<A;ae++){const T=I[ae];Z=Q[ae];for(let q=0,W=T.length;q<W;q++){const R=C(T[q],Z[q],ye);b?oe(R.x,R.y+_[u-1].y,_[u-1].x+te):oe(R.x,R.y,h+te)}}}Fe(),U();function Fe(){const j=r.length/3;if(f){let $=0,te=N*$;for(let ye=0;ye<k;ye++){const ae=O[ye];be(ae[2]+te,ae[1]+te,ae[0]+te)}$=u+x*2,te=N*$;for(let ye=0;ye<k;ye++){const ae=O[ye];be(ae[0]+te,ae[1]+te,ae[2]+te)}}else{for(let $=0;$<k;$++){const te=O[$];be(te[2],te[1],te[0])}for(let $=0;$<k;$++){const te=O[$];be(te[0]+N*u,te[1]+N*u,te[2]+N*u)}}i.addGroup(j,r.length/3-j,0)}function U(){const j=r.length/3;let $=0;_e(D,$),$+=D.length;for(let te=0,ye=I.length;te<ye;te++){const ae=I[te];_e(ae,$),$+=ae.length}i.addGroup(j,r.length/3-j,1)}function _e(j,$){let te=j.length;for(;--te>=0;){const ye=te;let ae=te-1;ae<0&&(ae=j.length-1);for(let A=0,T=u+x*2;A<T;A++){const q=N*A,W=N*(A+1),R=$+ye+q,X=$+ae+q,re=$+ae+W,de=$+ye+W;Te(R,X,re,de)}}}function oe(j,$,te){c.push(j),c.push($),c.push(te)}function be(j,$,te){Ne(j),Ne($),Ne(te);const ye=r.length/3,ae=m.generateTopUV(i,r,ye-3,ye-2,ye-1);Pe(ae[0]),Pe(ae[1]),Pe(ae[2])}function Te(j,$,te,ye){Ne(j),Ne($),Ne(ye),Ne($),Ne(te),Ne(ye);const ae=r.length/3,A=m.generateSideWallUV(i,r,ae-6,ae-3,ae-2,ae-1);Pe(A[0]),Pe(A[1]),Pe(A[3]),Pe(A[1]),Pe(A[2]),Pe(A[3])}function Ne(j){r.push(c[j*3+0]),r.push(c[j*3+1]),r.push(c[j*3+2])}function Pe(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=me.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return Wx(n,i,e)}}const kx={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new V(s,o),new V(a,c),new V(l,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],p=e[r*3+2],y=e[s*3],x=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<.01?[new V(o,1-c),new V(l,1-h),new V(f,1-p),new V(y,1-g)]:[new V(a,1-c),new V(u,1-h),new V(d,1-p),new V(x,1-g)]}};function Wx(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class fc extends ze{constructor(e,n){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new os(e,n)),this.mergeVertices()}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return jx(n,i,e)}}function jx(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class dc extends ni{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class Qu extends ze{constructor(e,n){super(),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new dc(e,n)),this.mergeVertices()}}class pc extends me{constructor(e,n=12,i=0,r=Math.PI*2){super(),this.type="LatheBufferGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=we.clamp(r,0,Math.PI*2);const s=[],o=[],a=[],c=1/n,l=new M,u=new V;for(let h=0;h<=n;h++){const f=i+h*c*r,d=Math.sin(f),p=Math.cos(f);for(let y=0;y<=e.length-1;y++)l.x=e[y].x*d,l.y=e[y].y,l.z=e[y].x*p,o.push(l.x,l.y,l.z),u.x=h/n,u.y=y/(e.length-1),a.push(u.x,u.y)}for(let h=0;h<n;h++)for(let f=0;f<e.length-1;f++){const d=f+h*e.length,p=d,y=d+e.length,x=d+e.length+1,g=d+1;s.push(p,y,g),s.push(y,x,g)}if(this.setIndex(s),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.computeVertexNormals(),r===Math.PI*2){const h=this.attributes.normal.array,f=new M,d=new M,p=new M,y=n*e.length*3;for(let x=0,g=0;x<e.length;x++,g+=3)f.x=h[g+0],f.y=h[g+1],f.z=h[g+2],d.x=h[y+g+0],d.y=h[y+g+1],d.z=h[y+g+2],p.addVectors(f,d).normalize(),h[g+0]=h[y+g+0]=p.x,h[g+1]=h[y+g+1]=p.y,h[g+2]=h[y+g+2]=p.z}}}class ef extends ze{constructor(e,n,i,r){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},this.fromBufferGeometry(new pc(e,n,i,r)),this.mergeVertices()}}class yo extends ni{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class tf extends ze{constructor(e,n){super(),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new yo(e,n)),this.mergeVertices()}}function er(t,e,n){me.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new M,l=new M,u=new M,h=new M,f=new M;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const d=e+1;for(let p=0;p<=n;p++){const y=p/n;for(let x=0;x<=e;x++){const g=x/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,u),h.subVectors(l,u)):(t(g+a,y,u),h.subVectors(u,l)),y-a>=0?(t(g,y-a,u),f.subVectors(l,u)):(t(g,y+a,u),f.subVectors(u,l)),c.crossVectors(h,f).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=p*d+y,g=p*d+y+1,m=(p+1)*d+y+1,_=(p+1)*d+y;i.push(x,g,_),i.push(g,m,_)}this.setIndex(i),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(s,3)),this.setAttribute("uv",new ne(o,2))}er.prototype=Object.create(me.prototype),er.prototype.constructor=er;function as(t,e,n){ze.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new er(t,e,n)),this.mergeVertices()}as.prototype=Object.create(ze.prototype),as.prototype.constructor=as;class nf extends ze{constructor(e,n,i,r){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r},this.fromBufferGeometry(new qs(e,n,i,r)),this.mergeVertices()}}class rf extends ze{constructor(e,n,i,r){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r},this.fromBufferGeometry(new ni(e,n,i,r)),this.mergeVertices()}}class mc extends me{constructor(e=.5,n=1,i=8,r=1,s=0,o=Math.PI*2){super(),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const f=(n-e)/r,d=new M,p=new V;for(let y=0;y<=r;y++){for(let x=0;x<=i;x++){const g=s+x/i*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/n+1)/2,p.y=(d.y/n+1)/2,u.push(p.x,p.y)}h+=f}for(let y=0;y<r;y++){const x=y*(i+1);for(let g=0;g<i;g++){const m=g+x,_=m,b=m+i+1,w=m+i+2,v=m+1;a.push(_,b,v),a.push(b,w,v)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(u,2))}}class sf extends ze{constructor(e,n,i,r,s,o){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new mc(e,n,i,r,s,o)),this.mergeVertices()}}class gc extends me{constructor(e,n=12){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(s,3)),this.setAttribute("uv",new ne(o,2));function l(u){const h=r.length/3,f=u.extractPoints(n);let d=f.shape;const p=f.holes;mn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,g=p.length;x<g;x++){const m=p[x];mn.isClockWise(m)===!0&&(p[x]=m.reverse())}const y=mn.triangulateShape(d,p);for(let x=0,g=p.length;x<g;x++){const m=p[x];d=d.concat(m)}for(let x=0,g=d.length;x<g;x++){const m=d[x];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let x=0,g=y.length;x<g;x++){const m=y[x],_=m[0]+h,b=m[1]+h,w=m[2]+h;i.push(_,b,w),c+=3}}}toJSON(){const e=me.prototype.toJSON.call(this),n=this.parameters.shapes;return qx(n,e)}}function qx(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class yc extends ze{constructor(e,n){super(),this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new gc(e,n)),this.mergeVertices()}toJSON(){const e=ze.prototype.toJSON.call(this),n=this.parameters.shapes;return Xx(n,e)}}function Xx(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class xo extends me{constructor(e=1,n=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new M,f=new M,d=[],p=[],y=[],x=[];for(let g=0;g<=i;g++){const m=[],_=g/i;let b=0;g==0&&o==0?b=.5/n:g==i&&c==Math.PI&&(b=-.5/n);for(let w=0;w<=n;w++){const v=w/n;h.x=-e*Math.cos(r+v*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+v*s)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),x.push(v+b,1-_),m.push(l++)}u.push(m)}for(let g=0;g<i;g++)for(let m=0;m<n;m++){const _=u[g][m+1],b=u[g][m],w=u[g+1][m],v=u[g+1][m+1];(g!==0||o>0)&&d.push(_,b,v),(g!==i-1||c<Math.PI)&&d.push(b,w,v)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(x,2))}}class of extends ze{constructor(e,n,i,r,s,o,a){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new xo(e,n,i,r,s,o,a)),this.mergeVertices()}}class xc extends ni{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class af extends ze{constructor(e,n){super(),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new xc(e,n)),this.mergeVertices()}}class vc extends os{constructor(e,n={}){const i=n.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new me;const r=i.generateShapes(e,n.size);n.depth=n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n),this.type="TextBufferGeometry"}}class cf extends ze{constructor(e,n){super(),this.type="TextGeometry",this.parameters={text:e,parameters:n},this.fromBufferGeometry(new vc(e,n)),this.mergeVertices()}}class _c extends me{constructor(e=1,n=.4,i=8,r=6,s=Math.PI*2){super(),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new M,h=new M,f=new M;for(let d=0;d<=i;d++)for(let p=0;p<=r;p++){const y=p/r*s,x=d/i*Math.PI*2;h.x=(e+n*Math.cos(x))*Math.cos(y),h.y=(e+n*Math.cos(x))*Math.sin(y),h.z=n*Math.sin(x),a.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=r;p++){const y=(r+1)*d+p-1,x=(r+1)*(d-1)+p-1,g=(r+1)*(d-1)+p,m=(r+1)*d+p;o.push(y,x,m),o.push(x,g,m)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}}class lf extends ze{constructor(e,n,i,r,s){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},this.fromBufferGeometry(new _c(e,n,i,r,s)),this.mergeVertices()}}class bc extends me{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],l=[],u=[],h=new M,f=new M,d=new M,p=new M,y=new M,x=new M,g=new M;for(let _=0;_<=i;++_){const b=_/i*s*Math.PI*2;m(b,s,o,e,d),m(b+.01,s,o,e,p),x.subVectors(p,d),g.addVectors(p,d),y.crossVectors(x,g),g.crossVectors(y,x),y.normalize(),g.normalize();for(let w=0;w<=r;++w){const v=w/r*Math.PI*2,E=-n*Math.cos(v),L=n*Math.sin(v);h.x=d.x+(E*g.x+L*y.x),h.y=d.y+(E*g.y+L*y.y),h.z=d.z+(E*g.z+L*y.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(_/i),u.push(w/r)}}for(let _=1;_<=i;_++)for(let b=1;b<=r;b++){const w=(r+1)*(_-1)+(b-1),v=(r+1)*_+(b-1),E=(r+1)*_+b,L=(r+1)*(_-1)+b;a.push(w,v,L),a.push(v,E,L)}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(u,2));function m(_,b,w,v,E){const L=Math.cos(_),P=Math.sin(_),z=w/b*_,I=Math.cos(z);E.x=v*(2+I)*.5*L,E.y=v*(2+I)*P*.5,E.z=v*Math.sin(z)*.5}}}class hf extends ze{constructor(e,n,i,r,s,o,a){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},a!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new bc(e,n,i,r,s,o)),this.mergeVertices()}}class wc extends me{constructor(e,n=64,i=1,r=8,s=!1){super(),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new M,c=new M,l=new V;let u=new M;const h=[],f=[],d=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(d,2));function y(){for(let _=0;_<n;_++)x(_);x(s===!1?n:0),m(),g()}function x(_){u=e.getPointAt(_/n,u);const b=o.normals[_],w=o.binormals[_];for(let v=0;v<=r;v++){const E=v/r*Math.PI*2,L=Math.sin(E),P=-Math.cos(E);c.x=P*b.x+L*w.x,c.y=P*b.y+L*w.y,c.z=P*b.z+L*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=n;_++)for(let b=1;b<=r;b++){const w=(r+1)*(_-1)+(b-1),v=(r+1)*_+(b-1),E=(r+1)*_+b,L=(r+1)*(_-1)+b;p.push(w,v,L),p.push(v,E,L)}}function m(){for(let _=0;_<=n;_++)for(let b=0;b<=r;b++)l.x=_/n,l.y=b/r,d.push(l.x,l.y)}}toJSON(){const e=me.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class uf extends ze{constructor(e,n,i,r,s,o){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s},o!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");const a=new wc(e,n,i,r,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals,this.fromBufferGeometry(a),this.mergeVertices()}}class Mc extends me{constructor(e){super(),this.type="WireframeGeometry";const n=[],i=[0,0],r={},s=["a","b","c"];if(e&&e.isGeometry){const o=e.faces;for(let a=0,c=o.length;a<c;a++){const l=o[a];for(let u=0;u<3;u++){const h=l[s[u]],f=l[s[(u+1)%3]];i[0]=Math.min(h,f),i[1]=Math.max(h,f);const d=i[0]+","+i[1];r[d]===void 0&&(r[d]={index1:i[0],index2:i[1]})}}for(const a in r){const c=r[a];let l=e.vertices[c.index1];n.push(l.x,l.y,l.z),l=e.vertices[c.index2],n.push(l.x,l.y,l.z)}}else if(e&&e.isBufferGeometry){const o=new M;if(e.index!==null){const a=e.attributes.position,c=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:c.count,materialIndex:0}]);for(let u=0,h=l.length;u<h;++u){const f=l[u],d=f.start,p=f.count;for(let y=d,x=d+p;y<x;y+=3)for(let g=0;g<3;g++){const m=c.getX(y+g),_=c.getX(y+(g+1)%3);i[0]=Math.min(m,_),i[1]=Math.max(m,_);const b=i[0]+","+i[1];r[b]===void 0&&(r[b]={index1:i[0],index2:i[1]})}}for(const u in r){const h=r[u];o.fromBufferAttribute(a,h.index1),n.push(o.x,o.y,o.z),o.fromBufferAttribute(a,h.index2),n.push(o.x,o.y,o.z)}}else{const a=e.attributes.position;for(let c=0,l=a.count/3;c<l;c++)for(let u=0;u<3;u++){const h=3*c+u;o.fromBufferAttribute(a,h),n.push(o.x,o.y,o.z);const f=3*c+(u+1)%3;o.fromBufferAttribute(a,f),n.push(o.x,o.y,o.z)}}}this.setAttribute("position",new ne(n,3))}}var yt=Object.freeze({__proto__:null,BoxGeometry:rc,BoxBufferGeometry:zr,CircleGeometry:ku,CircleBufferGeometry:sc,ConeGeometry:Wu,ConeBufferGeometry:ju,CylinderGeometry:oc,CylinderBufferGeometry:ns,DodecahedronGeometry:qu,DodecahedronBufferGeometry:ac,EdgesGeometry:lc,ExtrudeGeometry:fc,ExtrudeBufferGeometry:os,IcosahedronGeometry:Qu,IcosahedronBufferGeometry:dc,LatheGeometry:ef,LatheBufferGeometry:pc,OctahedronGeometry:tf,OctahedronBufferGeometry:yo,ParametricGeometry:as,ParametricBufferGeometry:er,PlaneGeometry:nf,PlaneBufferGeometry:qs,PolyhedronGeometry:rf,PolyhedronBufferGeometry:ni,RingGeometry:sf,RingBufferGeometry:mc,ShapeGeometry:yc,ShapeBufferGeometry:gc,SphereGeometry:of,SphereBufferGeometry:xo,TetrahedronGeometry:af,TetrahedronBufferGeometry:xc,TextGeometry:cf,TextBufferGeometry:vc,TorusGeometry:lf,TorusBufferGeometry:_c,TorusKnotGeometry:hf,TorusKnotBufferGeometry:bc,TubeGeometry:uf,TubeBufferGeometry:wc,WireframeGeometry:Mc});function ii(t){ve.call(this),this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(t)}ii.prototype=Object.create(ve.prototype),ii.prototype.constructor=ii,ii.prototype.isShadowMaterial=!0,ii.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this};function gn(t){mt.call(this,t),this.type="RawShaderMaterial"}gn.prototype=Object.create(mt.prototype),gn.prototype.constructor=gn,gn.prototype.isRawShaderMaterial=!0;function Qt(t){ve.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}Qt.prototype=Object.create(ve.prototype),Qt.prototype.constructor=Qt,Qt.prototype.isMeshStandardMaterial=!0,Qt.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function Nn(t){Qt.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=we.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}Nn.prototype=Object.create(Qt.prototype),Nn.prototype.constructor=Nn,Nn.prototype.isMeshPhysicalMaterial=!0,Nn.prototype.copy=function(t){return Qt.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new se).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Bn(t){ve.call(this),this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Bn.prototype=Object.create(ve.prototype),Bn.prototype.constructor=Bn,Bn.prototype.isMeshPhongMaterial=!0,Bn.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ri(t){ve.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ri.prototype=Object.create(ve.prototype),ri.prototype.constructor=ri,ri.prototype.isMeshToonMaterial=!0,ri.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function si(t){ve.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}si.prototype=Object.create(ve.prototype),si.prototype.constructor=si,si.prototype.isMeshNormalMaterial=!0,si.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function oi(t){ve.call(this),this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}oi.prototype=Object.create(ve.prototype),oi.prototype.constructor=oi,oi.prototype.isMeshLambertMaterial=!0,oi.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ai(t){ve.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ai.prototype=Object.create(ve.prototype),ai.prototype.constructor=ai,ai.prototype.isMeshMatcapMaterial=!0,ai.prototype.copy=function(t){return ve.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ci(t){qe.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}ci.prototype=Object.create(qe.prototype),ci.prototype.constructor=ci,ci.prototype.isLineDashedMaterial=!0,ci.prototype.copy=function(t){return qe.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Yx=Object.freeze({__proto__:null,ShadowMaterial:ii,SpriteMaterial:Fn,RawShaderMaterial:gn,ShaderMaterial:mt,PointsMaterial:zt,MeshPhysicalMaterial:Nn,MeshStandardMaterial:Qt,MeshPhongMaterial:Bn,MeshToonMaterial:ri,MeshNormalMaterial:si,MeshLambertMaterial:oi,MeshDepthMaterial:Rn,MeshDistanceMaterial:Pn,MeshBasicMaterial:Rt,MeshMatcapMaterial:ai,LineDashedMaterial:ci,LineBasicMaterial:qe,Material:ve});const je={arraySlice:function(t,e,n){return je.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r=30){const s=t.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*r;if(!(p<n||p>=i)){h.push(l.times[d]);for(let y=0;y<u;++y)f.push(l.values[d*u+y])}}h.length!==0&&(l.times=je.convertArray(h,l.times.constructor),l.values=je.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let y;if(s<=a.times[0]){const g=u,m=h-u;y=je.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*h+u,m=g+h-u;y=je.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=u,_=h-u;g.evaluate(s),y=je.arraySlice(g.resultBuffer,m,_)}c==="quaternion"&&new ct().fromArray(y).normalize().conjugate().toArray(y);const x=l.times.length;for(let g=0;g<x;++g){const m=g*d+f;if(c==="quaternion")ct.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{const _=d-f*2;for(let b=0;b<_;++b)l.values[m+b]-=y[b]}}}return t.blendMode=wa,t}};function At(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(At.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),Object.assign(At.prototype,{beforeStart_:At.prototype.copySampleValue_,afterEnd_:At.prototype.copySampleValue_});function vo(t,e,n,i){At.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}vo.prototype=Object.assign(Object.create(At.prototype),{constructor:vo,DefaultSettings_:{endingStart:Wn,endingEnd:Wn},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case jn:r=t,o=2*e-n;break;case wr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case jn:s=t,a=2*n-e;break;case wr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,d=(n-e)/(i-e),p=d*d,y=p*d,x=-h*y+2*h*p-h*d,g=(1+h)*y+(-1.5-2*h)*p+(-.5+h)*d+1,m=(-1-f)*y+(1.5+f)*p+.5*d,_=f*y-f*p;for(let b=0;b!==o;++b)r[b]=x*s[l+b]+g*s[c+b]+m*s[a+b]+_*s[u+b];return r}});function cs(t,e,n,i){At.call(this,t,e,n,i)}cs.prototype=Object.assign(Object.create(At.prototype),{constructor:cs,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function _o(t,e,n,i){At.call(this,t,e,n,i)}_o.prototype=Object.assign(Object.create(At.prototype),{constructor:_o,interpolate_:function(t){return this.copySampleValue_(t-1)}});function at(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=je.convertArray(e,this.TimeBufferType),this.values=je.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(at,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:je.convertArray(t.times,Array),values:je.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}}),Object.assign(at.prototype,{constructor:at,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:br,InterpolantFactoryMethodDiscrete:function(t){return new _o(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new cs(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new vo(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case _r:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case Es:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return Es}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=je.arraySlice(n,r,s),this.values=je.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&je.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){const t=je.arraySlice(this.times),e=je.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Es,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const u=o*n,h=u-n,f=u+n;for(let d=0;d!==n;++d){const p=e[u+d];if(p!==e[h+d]||p!==e[f+d]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const u=o*n,h=s*n;for(let f=0;f!==n;++f)e[h+f]=e[u+f]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=je.arraySlice(t,0,s),this.values=je.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=je.arraySlice(this.times,0),e=je.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function bo(t,e,n){at.call(this,t,e,n)}bo.prototype=Object.assign(Object.create(at.prototype),{constructor:bo,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:_r,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function wo(t,e,n,i){at.call(this,t,e,n,i)}wo.prototype=Object.assign(Object.create(at.prototype),{constructor:wo,ValueTypeName:"color"});function tr(t,e,n,i){at.call(this,t,e,n,i)}tr.prototype=Object.assign(Object.create(at.prototype),{constructor:tr,ValueTypeName:"number"});function Mo(t,e,n,i){At.call(this,t,e,n,i)}Mo.prototype=Object.assign(Object.create(At.prototype),{constructor:Mo,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let c=t*o;for(let l=c+o;c!==l;c+=4)ct.slerpFlat(r,0,s,c-o,s,c,a);return r}});function ls(t,e,n,i){at.call(this,t,e,n,i)}ls.prototype=Object.assign(Object.create(at.prototype),{constructor:ls,ValueTypeName:"quaternion",DefaultInterpolation:br,InterpolantFactoryMethodLinear:function(t){return new Mo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function So(t,e,n,i){at.call(this,t,e,n,i)}So.prototype=Object.assign(Object.create(at.prototype),{constructor:So,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:_r,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function nr(t,e,n,i){at.call(this,t,e,n,i)}nr.prototype=Object.assign(Object.create(at.prototype),{constructor:nr,ValueTypeName:"vector"});function Lt(t,e=-1,n,i=As){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=we.generateUUID(),this.duration<0&&this.resetDuration()}function Zx(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return wo;case"quaternion":return ls;case"bool":case"boolean":return bo;case"string":return So}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function Jx(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zx(t.type);if(t.times===void 0){const n=[],i=[];je.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Lt,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,o=n.length;s!==o;++s)e.push(Jx(n[s]).scale(i));const r=new Lt(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(at.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=je.getKeyframeOrder(a);a=je.sortedArray(a,1,l),c=je.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new tr(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Lt(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.name.match(r);if(l&&l.length>1){const u=l[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Lt.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,d,p){if(f.length!==0){const y=[],x=[];je.flattenJSON(f,y,x,d),y.length!==0&&p.push(new u(h,y,x))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let d;for(d=0;d<h.length;d++)if(h[d].morphTargets)for(let p=0;p<h[d].morphTargets.length;p++)f[h[d].morphTargets[p]]=-1;for(const p in f){const y=[],x=[];for(let g=0;g!==h[d].morphTargets.length;++g){const m=h[d];y.push(m.time),x.push(m.morphTarget===p?1:0)}i.push(new tr(".morphTargetInfluence["+p+"]",y,x))}a=f.length*s}else{const f=".bones["+e[u].name+"]";n(nr,f+".position",h,"pos",i),n(ls,f+".quaternion",h,"rot",i),n(nr,f+".scale",h,"scl",i)}}return i.length===0?null:new Lt(r,a,i,o)}}),Object.assign(Lt.prototype,{resetDuration:function(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Lt(this.name,this.duration,t,this.blendMode)},toJSON:function(){return Lt.toJSON(this)}});const li={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Sc(t,e,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],d=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}const ff=new Sc;function Oe(t){this.manager=t!==void 0?t:ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Oe.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Ut={};function Dt(t){Oe.call(this,t)}Dt.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Dt,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=li.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Ut[t]!==void 0){Ut[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let f;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let x=0;x<h.length;x++)p[x]=h.charCodeAt(x);d==="blob"?f=new Blob([p.buffer],{type:l}):f=p.buffer;break;case"document":f=new DOMParser().parseFromString(h,l);break;case"json":f=JSON.parse(h);break;default:f=h;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(t)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ut[t]=[],Ut[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){const u=this.response,h=Ut[t];if(delete Ut[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),li.add(t,u);for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(t)}else{for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){const u=Ut[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=Ut[t];delete Ut[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){const u=Ut[t];delete Ut[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function Tc(t){Oe.call(this,t)}Tc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Tc,load:function(t,e,n,i){const r=this,s=new Dt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=Lt.parse(t[n]);e.push(i)}return e}});function Ec(t){Oe.call(this,t)}Ec.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Ec,load:function(t,e,n,i){const r=this,s=[],o=new Ki,a=new Dt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(t[u],function(h){const f=r.parse(h,!0);s[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=nt),o.image=s,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,h=t.length;u<h;++u)l(u);else a.load(t,function(u){const h=r.parse(u,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[d].mipmaps.push(h.mipmaps[d*h.mipmapCount+p]),s[d].format=h.format,s[d].width=h.width,s[d].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=nt),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function ir(t){Oe.call(this,t)}ir.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ir,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=li.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),li.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function To(t){Oe.call(this,t)}To.prototype=Object.assign(Object.create(Oe.prototype),{constructor:To,load:function(t,e,n,i){const r=new $t,s=new ir(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function Eo(t){Oe.call(this,t)}Eo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Eo,load:function(t,e,n,i){const r=this,s=new pn,o=new Dt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:ft,s.wrapT=c.wrapT!==void 0?c.wrapT:ft,s.magFilter=c.magFilter!==void 0?c.magFilter:nt,s.minFilter=c.minFilter!==void 0?c.minFilter:nt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=wi),c.mipmapCount===1&&(s.minFilter=nt),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function Ao(t){Oe.call(this,t)}Ao.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Ao,load:function(t,e,n,i){const r=new Be,s=new ir(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?bn:bt,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function pe(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(pe.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,f=(s-l)/h;return(i+f)/(r-1)},getTangent:function(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new V:new M);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new M,i=[],r=[],s=[],o=new M,a=new Se;for(let f=0;f<=t;f++){const d=f/t;i[f]=this.getTangentAt(d,new M),i[f].normalize()}r[0]=new M,s[0]=new M;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(we.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(we.clamp(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let d=1;d<=t;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Ct(t,e,n,i,r,s,o,a){pe.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Ct.prototype=Object.create(pe.prototype),Ct.prototype.constructor=Ct,Ct.prototype.isEllipseCurve=!0,Ct.prototype.getPoint=function(t,e){const n=e||new V,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,f=c-this.aY;a=h*l-f*u+this.aX,c=h*u+f*l+this.aY}return n.set(a,c)},Ct.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Ct.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},Ct.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function rr(t,e,n,i,r,s){Ct.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}rr.prototype=Object.create(Ct.prototype),rr.prototype.constructor=rr,rr.prototype.isArcCurve=!0;function Ac(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Lo=new M,Lc=new Ac,Cc=new Ac,Rc=new Ac;function ht(t=[],e=!1,n="centripetal",i=.5){pe.call(this),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}ht.prototype=Object.create(pe.prototype),ht.prototype.constructor=ht,ht.prototype.isCatmullRomCurve3=!0,ht.prototype.getPoint=function(t,e=new M){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Lo.subVectors(i[0],i[1]).add(i[0]),c=Lo);const u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Lo.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(l),f);p<1e-4&&(p=1),d<1e-4&&(d=p),y<1e-4&&(y=p),Lc.initNonuniformCatmullRom(c.x,u.x,h.x,l.x,d,p,y),Cc.initNonuniformCatmullRom(c.y,u.y,h.y,l.y,d,p,y),Rc.initNonuniformCatmullRom(c.z,u.z,h.z,l.z,d,p,y)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(c.x,u.x,h.x,l.x,this.tension),Cc.initCatmullRom(c.y,u.y,h.y,l.y,this.tension),Rc.initCatmullRom(c.z,u.z,h.z,l.z,this.tension));return n.set(Lc.calc(a),Cc.calc(a),Rc.calc(a)),n},ht.prototype.copy=function(t){pe.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},ht.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},ht.prototype.fromJSON=function(t){pe.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new M().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function df(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function $x(t,e){const n=1-t;return n*n*e}function Kx(t,e){return 2*(1-t)*t*e}function Qx(t,e){return t*t*e}function hs(t,e,n,i){return $x(t,e)+Kx(t,n)+Qx(t,i)}function ev(t,e){const n=1-t;return n*n*n*e}function tv(t,e){const n=1-t;return 3*n*n*t*e}function nv(t,e){return 3*(1-t)*t*t*e}function iv(t,e){return t*t*t*e}function us(t,e,n,i,r){return ev(t,e)+tv(t,n)+nv(t,i)+iv(t,r)}function Ht(t=new V,e=new V,n=new V,i=new V){pe.call(this),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}Ht.prototype=Object.create(pe.prototype),Ht.prototype.constructor=Ht,Ht.prototype.isCubicBezierCurve=!0,Ht.prototype.getPoint=function(t,e=new V){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(us(t,i.x,r.x,s.x,o.x),us(t,i.y,r.y,s.y,o.y)),n},Ht.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},Ht.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},Ht.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function en(t=new M,e=new M,n=new M,i=new M){pe.call(this),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}en.prototype=Object.create(pe.prototype),en.prototype.constructor=en,en.prototype.isCubicBezierCurve3=!0,en.prototype.getPoint=function(t,e=new M){const n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(us(t,i.x,r.x,s.x,o.x),us(t,i.y,r.y,s.y,o.y),us(t,i.z,r.z,s.z,o.z)),n},en.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},en.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},en.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function xt(t=new V,e=new V){pe.call(this),this.type="LineCurve",this.v1=t,this.v2=e}xt.prototype=Object.create(pe.prototype),xt.prototype.constructor=xt,xt.prototype.isLineCurve=!0,xt.prototype.getPoint=function(t,e=new V){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},xt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},xt.prototype.getTangent=function(t,e){const n=e||new V;return n.copy(this.v2).sub(this.v1).normalize(),n},xt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},xt.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},xt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Vt(t=new M,e=new M){pe.call(this),this.type="LineCurve3",this.v1=t,this.v2=e}Vt.prototype=Object.create(pe.prototype),Vt.prototype.constructor=Vt,Vt.prototype.isLineCurve3=!0,Vt.prototype.getPoint=function(t,e=new M){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n},Vt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},Vt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},Vt.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},Vt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function kt(t=new V,e=new V,n=new V){pe.call(this),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}kt.prototype=Object.create(pe.prototype),kt.prototype.constructor=kt,kt.prototype.isQuadraticBezierCurve=!0,kt.prototype.getPoint=function(t,e=new V){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(hs(t,i.x,r.x,s.x),hs(t,i.y,r.y,s.y)),n},kt.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},kt.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},kt.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function tn(t=new M,e=new M,n=new M){pe.call(this),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}tn.prototype=Object.create(pe.prototype),tn.prototype.constructor=tn,tn.prototype.isQuadraticBezierCurve3=!0,tn.prototype.getPoint=function(t,e=new M){const n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(hs(t,i.x,r.x,s.x),hs(t,i.y,r.y,s.y),hs(t,i.z,r.z,s.z)),n},tn.prototype.copy=function(t){return pe.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},tn.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},tn.prototype.fromJSON=function(t){return pe.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Wt(t=[]){pe.call(this),this.type="SplineCurve",this.points=t}Wt.prototype=Object.create(pe.prototype),Wt.prototype.constructor=Wt,Wt.prototype.isSplineCurve=!0,Wt.prototype.getPoint=function(t,e=new V){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(df(o,a.x,c.x,l.x,u.x),df(o,a.y,c.y,l.y,u.y)),n},Wt.prototype.copy=function(t){pe.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this},Wt.prototype.toJSON=function(){const t=pe.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t},Wt.prototype.fromJSON=function(t){pe.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new V().fromArray(i))}return this};var Pc=Object.freeze({__proto__:null,ArcCurve:rr,CatmullRomCurve3:ht,CubicBezierCurve:Ht,CubicBezierCurve3:en,EllipseCurve:Ct,LineCurve:xt,LineCurve3:Vt,QuadraticBezierCurve:kt,QuadraticBezierCurve3:tn,SplineCurve:Wt});function yn(){pe.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}yn.prototype=Object.assign(Object.create(pe.prototype),{constructor:yn,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new xt(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){pe.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=pe.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){pe.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Pc[i.type]().fromJSON(i))}return this}});function jt(t){yn.call(this),this.type="Path",this.currentPoint=new V,t&&this.setFromPoints(t)}jt.prototype=Object.assign(Object.create(yn.prototype),{constructor:jt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new xt(this.currentPoint.clone(),new V(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new kt(this.currentPoint.clone(),new V(t,e),new V(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new Ht(this.currentPoint.clone(),new V(t,e),new V(n,i),new V(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=[this.currentPoint.clone()].concat(t),n=new Wt(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const c=new Ct(t,e,n,i,r,s,o,a);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return yn.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=yn.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return yn.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function Gn(t){jt.call(this,t),this.uuid=we.generateUUID(),this.type="Shape",this.holes=[]}Gn.prototype=Object.assign(Object.create(jt.prototype),{constructor:Gn,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){jt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=jt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){jt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new jt().fromJSON(i))}return this}});function He(t,e=1){he.call(this),this.type="Light",this.color=new se(t),this.intensity=e}He.prototype=Object.assign(Object.create(he.prototype),{constructor:He,isLight:!0,copy:function(t){return he.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=he.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Co(t,e,n){He.call(this,t,n),this.type="HemisphereLight",this.position.copy(he.DefaultUp),this.updateMatrix(),this.groundColor=new se(e)}Co.prototype=Object.assign(Object.create(He.prototype),{constructor:Co,isHemisphereLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function xn(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}Object.assign(xn.prototype,{_projScreenMatrix:new Se,_lightPositionWorld:new M,_lookTarget:new M,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function Ic(){xn.call(this,new Ke(50,1,.5,500)),this.focus=1}Ic.prototype=Object.assign(Object.create(xn.prototype),{constructor:Ic,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=we.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),xn.prototype.updateMatrices.call(this,t)}});function Ro(t,e,n,i,r,s){He.call(this,t,e),this.type="SpotLight",this.position.copy(he.DefaultUp),this.updateMatrix(),this.target=new he,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new Ic}Ro.prototype=Object.assign(Object.create(He.prototype),{constructor:Ro,isSpotLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Dc(){xn.call(this,new Ke(90,1,.5,500)),this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}Dc.prototype=Object.assign(Object.create(xn.prototype),{constructor:Dc,isPointLightShadow:!0,updateMatrices:function(t,e=0){const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function Po(t,e,n,i){He.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new Dc}Po.prototype=Object.assign(Object.create(He.prototype),{constructor:Po,isPointLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function sr(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){Jt.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}sr.prototype=Object.assign(Object.create(Jt.prototype),{constructor:sr,isOrthographicCamera:!0,copy:function(t,e){return Jt.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(t){const e=he.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function Fc(){xn.call(this,new sr(-5,5,5,-5,.5,500))}Fc.prototype=Object.assign(Object.create(xn.prototype),{constructor:Fc,isDirectionalLightShadow:!0,updateMatrices:function(t){xn.prototype.updateMatrices.call(this,t)}});function Io(t,e){He.call(this,t,e),this.type="DirectionalLight",this.position.copy(he.DefaultUp),this.updateMatrix(),this.target=new he,this.shadow=new Fc}Io.prototype=Object.assign(Object.create(He.prototype),{constructor:Io,isDirectionalLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Do(t,e){He.call(this,t,e),this.type="AmbientLight"}Do.prototype=Object.assign(Object.create(He.prototype),{constructor:Do,isAmbientLight:!0});function Fo(t,e,n,i){He.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Fo.prototype=Object.assign(Object.create(He.prototype),{constructor:Fo,isRectAreaLight:!0,copy:function(t){return He.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=He.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class pf{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new M)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e=[],n=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Ft(t,e){He.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new pf}Ft.prototype=Object.assign(Object.create(He.prototype),{constructor:Ft,isLightProbe:!0,copy:function(t){return He.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=He.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function Oo(t){Oe.call(this,t),this.textures={}}Oo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Oo,load:function(t,e,n,i){const r=this,s=new Dt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new Yx[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new se().setHex(t.sheen)),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new se().setHex(s.value);break;case"v2":i.uniforms[r].value=new V().fromArray(s.value);break;case"v3":i.uniforms[r].value=new M().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Ge().fromArray(s.value);break;case"m3":i.uniforms[r].value=new pt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Se().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new V().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new V().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const Oc={decodeText:function(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function fs(){me.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}fs.prototype=Object.assign(Object.create(me.prototype),{constructor:fs,isInstancedBufferGeometry:!0,copy:function(t){return me.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=me.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function No(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),ge.call(this,t,e,n),this.meshPerAttribute=i||1}No.prototype=Object.assign(Object.create(ge.prototype),{constructor:No,isInstancedBufferAttribute:!0,copy:function(t){return ge.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=ge.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function Bo(t){Oe.call(this,t)}Bo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Bo,load:function(t,e,n,i){const r=this,s=new Dt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(f,d){if(e[d]!==void 0)return e[d];const y=f.interleavedBuffers[d],x=r(f,y.buffer),g=Nr(y.type,x),m=new Et(g,y.stride);return m.uuid=y.uuid,e[d]=m,m}function r(f,d){if(n[d]!==void 0)return n[d];const y=f.arrayBuffers[d],x=new Uint32Array(y).buffer;return n[d]=x,x}const s=t.isInstancedBufferGeometry?new fs:new me,o=t.data.index;if(o!==void 0){const f=Nr(o.type,o.array);s.setIndex(new ge(f,1))}const a=t.data.attributes;for(const f in a){const d=a[f];let p;if(d.isInterleavedBufferAttribute){const y=i(t.data,d.data);p=new Dn(y,d.itemSize,d.offset,d.normalized)}else{const y=Nr(d.type,d.array),x=d.isInstancedBufferAttribute?No:ge;p=new x(y,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),s.setAttribute(f,p)}const c=t.data.morphAttributes;if(c)for(const f in c){const d=c[f],p=[];for(let y=0,x=d.length;y<x;y++){const g=d[y];let m;if(g.isInterleavedBufferAttribute){const _=i(t.data,g.data);m=new Dn(_,g.itemSize,g.offset,g.normalized)}else{const _=Nr(g.type,g.array);m=new ge(_,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[f]=p}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,d=u.length;f!==d;++f){const p=u[f];s.addGroup(p.start,p.count,p.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const f=new M;h.center!==void 0&&f.fromArray(h.center),s.boundingSphere=new cn(f,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});class rv extends Oe{constructor(e){super(e)}load(e,n,i,r){const s=this,o=this.path===""?Oc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Dt(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,n)},i,r)}parse(e,n){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){n!==void 0&&n(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,i),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),n!==void 0){let h=!1;for(const f in o)if(o[f]instanceof HTMLImageElement){h=!0;break}h===!1&&n(l)}return l}parseShapes(e){const n={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new Gn().fromJSON(e[i]);n[s.uuid]=s}return n}parseSkeletons(e,n){const i={},r={};if(n.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Kr().fromJSON(e[s],r);i[a.uuid]=a}return i}parseGeometries(e,n){const i={};let r;if(e!==void 0){const s=new Bo;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new yt[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":c=new yt[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new yt[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new yt[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new yt[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new yt[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new yt[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new yt[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new yt[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new yt[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new yt[l.type](new Pc[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new yt[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new yt[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":r=[];for(let h=0,f=l.shapes.length;h<f;h++){const d=n[l.shapes[h]];r.push(d)}c=new yt[l.type](r,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":r=[];for(let h=0,f=l.shapes.length;h<f;h++){const d=n[l.shapes[h]];r.push(d)}const u=l.options.extrudePath;u!==void 0&&(l.options.extrudePath=new Pc[u.type]().fromJSON(u)),c=new yt[l.type](r,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=s.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),i[l.uuid]=c}}return i}parseMaterials(e,n){const i={},r={};if(e!==void 0){const s=new Oo;s.setTextures(n);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let u=0;u<c.materials.length;u++){const h=c.materials[u];i[h.uuid]===void 0&&(i[h.uuid]=s.parse(h)),l.push(i[h.uuid])}r[c.uuid]=l}else i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const n={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=Lt.parse(r);n[s.uuid]=s}return n}parseImages(e,n){const i=this,r={};let s;function o(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l;return o(u)}else return c.data?{data:Nr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Sc(n);s=new ir(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){r[h.uuid]=[];for(let d=0,p=f.length;d<p;d++){const y=f[d],x=a(y);x!==null&&(x instanceof HTMLImageElement?r[h.uuid].push(x):r[h.uuid].push(new pn(x.data,x.width,x.height)))}}else{const d=a(h.url);d!==null&&(r[h.uuid]=d)}}}return r}parseTextures(e,n){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),n[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;const l=n[a.image];Array.isArray(l)?(c=new $t(l),l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new pn(l.data,l.width,l.height):c=new Be(l),l&&(c.needsUpdate=!0)),c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,sv)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],mf),c.wrapT=i(a.wrap[1],mf)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,gf)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,gf)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),r[a.uuid]=c}return r}parseObject(e,n,i,r){let s;function o(u){return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),n[u]}function a(u){if(u!==void 0){if(Array.isArray(u)){const h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];i[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),h.push(i[p])}return h}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}let c,l;switch(e.type){case"Scene":s=new Ka,e.background!==void 0&&Number.isInteger(e.background)&&(s.background=new se(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Zs(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Ys(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new Ke(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new sr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new Do(e.color,e.intensity);break;case"DirectionalLight":s=new Io(e.color,e.intensity);break;case"PointLight":s=new Po(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Fo(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Ro(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new Co(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new Ft().fromJSON(e);break;case"SkinnedMesh":c=o(e.geometry),l=a(e.material),s=new Jr(c,l),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=o(e.geometry),l=a(e.material),s=new We(c,l);break;case"InstancedMesh":c=o(e.geometry),l=a(e.material);const u=e.count,h=e.instanceMatrix;s=new to(c,l,u),s.instanceMatrix=new ge(new Float32Array(h.array),16);break;case"LOD":s=new Zr;break;case"Line":s=new It(o(e.geometry),a(e.material));break;case"LineLoop":s=new oo(o(e.geometry),a(e.material));break;case"LineSegments":s=new gt(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":s=new $i(o(e.geometry),a(e.material));break;case"Sprite":s=new Yr(a(e.material));break;case"Group":s=new In;break;case"Bone":s=new $r;break;default:s=new he}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let h=0;h<u.length;h++)s.add(this.parseObject(u[h],n,i,r))}if(e.animations!==void 0){const u=e.animations;for(let h=0;h<u.length;h++){const f=u[h];s.animations.push(r[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const u=e.levels;for(let h=0;h<u.length;h++){const f=u[h],d=s.getObjectByProperty("uuid",f.object);d!==void 0&&s.addLevel(d,f.distance)}}return s}bindSkeletons(e,n){Object.keys(n).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=n[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const sv={UVMapping:bs,CubeReflectionMapping:fr,CubeRefractionMapping:dr,EquirectangularReflectionMapping:ws,EquirectangularRefractionMapping:Ms,CubeUVReflectionMapping:bi,CubeUVRefractionMapping:pr},mf={RepeatWrapping:mr,ClampToEdgeWrapping:ft,MirroredRepeatWrapping:gr},gf={NearestFilter:tt,NearestMipmapNearestFilter:Ss,NearestMipmapLinearFilter:Ts,LinearFilter:nt,LinearMipmapNearestFilter:ua,LinearMipmapLinearFilter:wi};function Nc(t){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Oe.call(this,t),this.options={premultiplyAlpha:"none"}}Nc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Nc,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=li.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){li.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function Bc(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}Object.assign(Bc.prototype,{moveTo:function(t,e){return this.currentPath=new jt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){const m=[];for(let _=0,b=g.length;_<b;_++){const w=g[_],v=new Gn;v.curves=w.curves,m.push(v)}return m}function i(g,m){const _=m.length;let b=!1;for(let w=_-1,v=0;v<_;w=v++){let E=m[w],L=m[v],P=L.x-E.x,z=L.y-E.y;if(Math.abs(z)>Number.EPSILON){if(z<0&&(E=m[v],P=-P,L=m[w],z=-z),g.y<E.y||g.y>L.y)continue;if(g.y===E.y){if(g.x===E.x)return!0}else{const I=z*(g.x-E.x)-P*(g.y-E.y);if(I===0)return!0;if(I<0)continue;b=!b}}else{if(g.y!==E.y)continue;if(L.x<=g.x&&g.x<=E.x||E.x<=g.x&&g.x<=L.x)return!0}}return b}const r=mn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Gn,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],f=[];let d=[],p=0,y;f[p]=void 0,d[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!u&&f[p]&&p++,f[p]={s:new Gn,p:y},f[p].s.curves=a.curves,u&&p++,d[p]=[]):d[p].push({h:a,p:y[0]});if(!f[0])return n(s);if(f.length>1){let g=!1;const m=[];for(let _=0,b=f.length;_<b;_++)h[_]=[];for(let _=0,b=f.length;_<b;_++){const w=d[_];for(let v=0;v<w.length;v++){const E=w[v];let L=!0;for(let P=0;P<f.length;P++)i(E.p,f[P].p)&&(_!==P&&m.push({froms:_,tos:P,hole:v}),L?(L=!1,h[P].push(E)):g=!0);L&&h[_].push(E)}}m.length>0&&(g||(d=h))}let x;for(let g=0,m=f.length;g<m;g++){c=f[g].s,l.push(c),x=d[g];for(let _=0,b=x.length;_<b;_++)c.holes.push(x[_].h)}return l}});function Gc(t){this.type="Font",this.data=t}Object.assign(Gc.prototype,{isFont:!0,generateShapes:function(t,e=100){const n=[],i=ov(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function ov(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=s;else{const h=av(u,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function av(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new Bc;let a,c,l,u,h,f,d,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,g=y.length;x<g;)switch(y[x++]){case"m":a=y[x++]*e+n,c=y[x++]*e+i,o.moveTo(a,c);break;case"l":a=y[x++]*e+n,c=y[x++]*e+i,o.lineTo(a,c);break;case"q":l=y[x++]*e+n,u=y[x++]*e+i,h=y[x++]*e+n,f=y[x++]*e+i,o.quadraticCurveTo(h,f,l,u);break;case"b":l=y[x++]*e+n,u=y[x++]*e+i,h=y[x++]*e+n,f=y[x++]*e+i,d=y[x++]*e+n,p=y[x++]*e+i,o.bezierCurveTo(h,f,d,p,l,u);break}}return{offsetX:s.ha*e,path:o}}function zc(t){Oe.call(this,t)}zc.prototype=Object.assign(Object.create(Oe.prototype),{constructor:zc,load:function(t,e,n,i){const r=this,s=new Dt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new Gc(t)}});let Go;const Uc={getContext:function(){return Go===void 0&&(Go=new(window.AudioContext||window.webkitAudioContext)),Go},setContext:function(t){Go=t}};function zo(t){Oe.call(this,t)}zo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:zo,load:function(t,e,n,i){const r=this,s=new Dt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);Uc.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function Hc(t,e,n){Ft.call(this,void 0,n);const i=new se().set(t),r=new se().set(e),s=new M(i.r,i.g,i.b),o=new M(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Hc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Hc,isHemisphereLightProbe:!0,copy:function(t){return Ft.prototype.copy.call(this,t),this},toJSON:function(t){return Ft.prototype.toJSON.call(this,t)}});function Vc(t,e){Ft.call(this,void 0,e);const n=new se().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Vc.prototype=Object.assign(Object.create(Ft.prototype),{constructor:Vc,isAmbientLightProbe:!0,copy:function(t){return Ft.prototype.copy.call(this,t),this},toJSON:function(t){return Ft.prototype.toJSON.call(this,t)}});const yf=new Se,xf=new Se;function vf(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ke,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ke,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(vf.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(we.DEG2RAD*e.fov*.5)/e.zoom;let a,c;xf.elements[12]=-r,yf.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(xf),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(yf)}});class _f{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bf();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bf(){return(typeof performance>"u"?Date:performance).now()}const hi=new M,wf=new ct,cv=new M,ui=new M;class lv extends he{constructor(){super(),this.type="AudioListener",this.context=Uc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _f}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(hi,wf,cv),ui.set(0,0,-1).applyQuaternion(wf),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(hi.x,r),n.positionY.linearRampToValueAtTime(hi.y,r),n.positionZ.linearRampToValueAtTime(hi.z,r),n.forwardX.linearRampToValueAtTime(ui.x,r),n.forwardY.linearRampToValueAtTime(ui.y,r),n.forwardZ.linearRampToValueAtTime(ui.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(hi.x,hi.y,hi.z),n.setOrientation(ui.x,ui.y,ui.z,i.x,i.y,i.z)}}class kc extends he{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const fi=new M,Mf=new ct,hv=new M,di=new M;class uv extends kc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,n,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=n,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(fi,Mf,hv),di.set(0,0,1).applyQuaternion(Mf);const n=this.panner;if(n.positionX){const i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(fi.x,i),n.positionY.linearRampToValueAtTime(fi.y,i),n.positionZ.linearRampToValueAtTime(fi.z,i),n.orientationX.linearRampToValueAtTime(di.x,i),n.orientationY.linearRampToValueAtTime(di.y,i),n.orientationZ.linearRampToValueAtTime(di.z,i)}else n.setPosition(fi.x,fi.y,fi.z),n.setOrientation(di.x,di.y,di.z)}}class Sf{constructor(e,n=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}}function Wc(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Wc.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ct.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;ct.multiplyQuaternionsFlat(t,s,t,e,t,n),ct.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const jc="\\[\\]\\.:\\/",fv=new RegExp("["+jc+"]","g"),qc="[^"+jc+"]",dv="[^"+jc.replace("\\.","")+"]",pv=/((?:WC+[\/:])*)/.source.replace("WC",qc),mv=/(WCOD+)?/.source.replace("WCOD",dv),gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),xv=new RegExp("^"+pv+mv+gv+yv+"$"),vv=["material","materials","bones"];function Tf(t,e,n){const i=n||ut.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Tf.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function ut(t,e,n){this.path=e,this.parsedPath=n||ut.parseTrackName(e),this.node=ut.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(ut,{Composite:Tf,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new ut.Composite(t,e,n):new ut(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(fv,"")},parseTrackName:function(t){const e=xv.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}}),Object.assign(ut.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ut.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),Object.assign(ut.prototype,{_getValue_unbound:ut.prototype.getValue,_setValue_unbound:ut.prototype.setValue});function Ef(){this.uuid=we.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(Ef.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){const h=arguments[l],f=h.uuid;let d=e[f];if(d===void 0){d=a++,e[f]=d,t.push(h);for(let p=0,y=s;p!==y;++p)r[p].push(new ut(h,n[p],i[p]))}else if(d<c){o=t[d];const p=--c,y=t[p];e[y.uuid]=d,t[d]=y,e[f]=p,t[p]=h;for(let x=0,g=s;x!==g;++x){const m=r[x],_=m[p];let b=m[d];m[d]=_,b===void 0&&(b=new ut(h,n[x],i[x])),m[p]=b}}else t[d]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const u=r++,h=t[u];e[h.uuid]=l,t[l]=h,e[c]=u,t[u]=a;for(let f=0,d=i;f!==d;++f){const p=n[f],y=p[u],x=p[l];p[l]=y,p[u]=x}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=e[l];if(u!==void 0)if(delete e[l],u<r){const h=--r,f=t[h],d=--s,p=t[d];e[f.uuid]=u,t[u]=f,e[p.uuid]=h,t[h]=p,t.pop();for(let y=0,x=i;y!==x;++y){const g=n[y],m=g[h],_=g[d];g[u]=m,g[h]=_,g.pop()}}else{const h=--s,f=t[h];h>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let d=0,p=i;d!==p;++d){const y=n[d];y[u]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(u);for(let h=l,f=a.length;h!==f;++h){const d=a[h];u[h]=new ut(d,t,e)}return u},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class _v{constructor(e,n,i=null,r=n.blendMode){this._mixer=e,this._clip=n,this._localRoot=i,this.blendMode=r;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:Wn,endingEnd:Wn};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Oh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case wa:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case As:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===Nh;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===Fh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=jn,r.endingEnd=jn):(e?r.endingStart=this.zeroSlopeAtStart?jn:Wn:r.endingStart=wr,n?r.endingEnd=this.zeroSlopeAtEnd?jn:Wn:r.endingEnd=wr)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}}function Xc(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Xc.prototype=Object.assign(Object.create(qt.prototype),{constructor:Xc,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){const h=i[u],f=h.name;let d=l[f];if(d!==void 0)s[u]=d;else{if(d=s[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,a,f));continue}const p=e&&e._propertyBindings[u].binding.parsedPath;d=new Wc(ut.create(n,f,p),h.ValueTypeName,h.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,a,f),s[u]=d}o[u].resultBuffer=d.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new cs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?Lt.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=As),a!==void 0){const u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new _v(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Lt.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,e[l]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class Uo{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Uo(this.value.clone===void 0?this.value:this.value.clone())}}function Yc(t,e,n){Et.call(this,t,e),this.meshPerAttribute=n||1}Yc.prototype=Object.assign(Object.create(Et.prototype),{constructor:Yc,isInstancedInterleavedBuffer:!0,copy:function(t){return Et.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=Et.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=Et.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Zc(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Zc.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}}),Object.assign(Zc.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function Jc(t,e,n,i){this.ray=new Ri(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Af(t,e){return t.distance-e.distance}function $c(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)$c(r[s],e,n,!0)}}Object.assign(Jc.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(t,e,n){const i=n||[];return $c(t,this,i,e),i.sort(Af),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)$c(t[r],this,i,e);return i.sort(Af),i}});class bv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(we.clamp(n/this.radius,-1,1))),this}}class wv{constructor(e,n,i){return this.radius=e!==void 0?e:1,this.theta=n!==void 0?n:0,this.y=i!==void 0?i:0,this}set(e,n,i){return this.radius=e,this.theta=n,this.y=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=n,this}}const Lf=new V;class Cf{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new V(1/0,1/0),this.max=n!==void 0?n:new V(-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Lf.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new V),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new V),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Lf.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rf=new M,Ho=new M;class Pf{constructor(e,n){this.start=e!==void 0?e:new M,this.end=n!==void 0?n:new M}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new M),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new M),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new M),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Rf.subVectors(e,this.start),Ho.subVectors(this.end,this.start);const i=Ho.dot(Ho);let s=Ho.dot(Rf)/i;return n&&(s=we.clamp(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new M),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}}function ds(t){he.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}ds.prototype=Object.create(he.prototype),ds.prototype.constructor=ds,ds.prototype.isImmediateRenderObject=!0;const If=new M;class Mv extends he{constructor(e,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new me,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new ne(r,3));const s=new qe({fog:!1,toneMapped:!1});this.cone=new gt(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),If.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(If),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const zn=new M,Vo=new Se,Kc=new Se;class Df extends gt{constructor(e){const n=Ff(e),i=new me,r=[],s=[],o=new se(0,0,1),a=new se(0,1,0);for(let l=0;l<n.length;l++){const u=n[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new ne(r,3)),i.setAttribute("color",new ne(s,3));const c=new qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Kc.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(Vo.multiplyMatrices(Kc,a.matrixWorld),zn.setFromMatrixPosition(Vo),r.setXYZ(o,zn.x,zn.y,zn.z),Vo.multiplyMatrices(Kc,a.parent.matrixWorld),zn.setFromMatrixPosition(Vo),r.setXYZ(o+1,zn.x,zn.y,zn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Ff(t){const e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Ff(t.children[n]));return e}class Sv extends We{constructor(e,n,i){const r=new xo(n,4,2),s=new Rt({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Tv=new M,Of=new se,Nf=new se;class Ev extends he{constructor(e,n,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;const r=new yo(n);r.rotateY(Math.PI*.5),this.material=new Rt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new ge(o,3)),this.add(new We(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const n=e.geometry.getAttribute("color");Of.copy(this.light.color),Nf.copy(this.light.groundColor);for(let i=0,r=n.count;i<r;i++){const s=i<r/2?Of:Nf;n.setXYZ(i,s.r,s.g,s.b)}n.needsUpdate=!0}e.lookAt(Tv.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Bf extends gt{constructor(e=10,n=10,i=4473924,r=8947848){i=new se(i),r=new se(r);const s=n/2,o=e/n,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=n;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const y=f===s?i:r;y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3,y.toArray(l,d),d+=3}const u=new me;u.setAttribute("position",new ne(c,3)),u.setAttribute("color",new ne(l,3));const h=new qe({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class Av extends gt{constructor(e=10,n=16,i=8,r=64,s=4473924,o=8947848){s=new se(s),o=new se(o);const a=[],c=[];for(let h=0;h<=n;h++){const f=h/n*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const y=h&1?s:o;c.push(y.r,y.g,y.b),c.push(y.r,y.g,y.b)}for(let h=0;h<=i;h++){const f=h&1?s:o,d=e-e/i*h;for(let p=0;p<r;p++){let y=p/r*(Math.PI*2),x=Math.sin(y)*d,g=Math.cos(y)*d;a.push(x,0,g),c.push(f.r,f.g,f.b),y=(p+1)/r*(Math.PI*2),x=Math.sin(y)*d,g=Math.cos(y)*d,a.push(x,0,g),c.push(f.r,f.g,f.b)}}const l=new me;l.setAttribute("position",new ne(a,3)),l.setAttribute("color",new ne(c,3));const u=new qe({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}}const Gf=new M,ko=new M,zf=new M;class Lv extends he{constructor(e,n,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,n===void 0&&(n=1);let r=new me;r.setAttribute("position",new ne([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new qe({fog:!1,toneMapped:!1});this.lightPlane=new It(r,s),this.add(this.lightPlane),r=new me,r.setAttribute("position",new ne([0,0,0,0,0,1],3)),this.targetLine=new It(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Gf.setFromMatrixPosition(this.light.matrixWorld),ko.setFromMatrixPosition(this.light.target.matrixWorld),zf.subVectors(ko,Gf),this.lightPlane.lookAt(ko),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ko),this.targetLine.scale.z=zf.length()}}const Wo=new M,Ze=new Jt;class Cv extends gt{constructor(e){const n=new me,i=new qe({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={},a=new se(16755200),c=new se(16711680),l=new se(43775),u=new se(16777215),h=new se(3355443);f("n1","n2",a),f("n2","n4",a),f("n4","n3",a),f("n3","n1",a),f("f1","f2",a),f("f2","f4",a),f("f4","f3",a),f("f3","f1",a),f("n1","f1",a),f("n2","f2",a),f("n3","f3",a),f("n4","f4",a),f("p","n1",c),f("p","n2",c),f("p","n3",c),f("p","n4",c),f("u1","u2",l),f("u2","u3",l),f("u3","u1",l),f("c","t",u),f("p","c",h),f("cn1","cn2",h),f("cn3","cn4",h),f("cf1","cf2",h),f("cf3","cf4",h);function f(p,y,x){d(p,x),d(y,x)}function d(p,y){r.push(0,0,0),s.push(y.r,y.g,y.b),o[p]===void 0&&(o[p]=[]),o[p].push(r.length/3-1)}n.setAttribute("position",new ne(r,3)),n.setAttribute("color",new ne(s,3)),super(n,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,n=this.pointMap,i=1,r=1;Ze.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Je("c",n,e,Ze,0,0,-1),Je("t",n,e,Ze,0,0,1),Je("n1",n,e,Ze,-i,-r,-1),Je("n2",n,e,Ze,i,-r,-1),Je("n3",n,e,Ze,-i,r,-1),Je("n4",n,e,Ze,i,r,-1),Je("f1",n,e,Ze,-i,-r,1),Je("f2",n,e,Ze,i,-r,1),Je("f3",n,e,Ze,-i,r,1),Je("f4",n,e,Ze,i,r,1),Je("u1",n,e,Ze,i*.7,r*1.1,-1),Je("u2",n,e,Ze,-i*.7,r*1.1,-1),Je("u3",n,e,Ze,0,r*2,-1),Je("cf1",n,e,Ze,-i,0,1),Je("cf2",n,e,Ze,i,0,1),Je("cf3",n,e,Ze,0,-r,1),Je("cf4",n,e,Ze,0,r,1),Je("cn1",n,e,Ze,-i,0,-1),Je("cn2",n,e,Ze,i,0,-1),Je("cn3",n,e,Ze,0,-r,-1),Je("cn4",n,e,Ze,0,r,-1),e.getAttribute("position").needsUpdate=!0}}function Je(t,e,n,i,r,s,o){Wo.set(r,s,o).unproject(i);const a=e[t];if(a!==void 0){const c=n.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Wo.x,Wo.y,Wo.z)}}const jo=new Xt;class Uf extends gt{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new me;s.setIndex(new ge(i,1)),s.setAttribute("position",new ge(r,3)),super(s,new qe({color:n,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&jo.setFromObject(this.object),jo.isEmpty())return;const n=jo.min,i=jo.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=n.x,s[4]=i.y,s[5]=i.z,s[6]=n.x,s[7]=n.y,s[8]=i.z,s[9]=i.x,s[10]=n.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=n.z,s[15]=n.x,s[16]=i.y,s[17]=n.z,s[18]=n.x,s[19]=n.y,s[20]=n.z,s[21]=i.x,s[22]=n.y,s[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return gt.prototype.copy.call(this,e),this.object=e.object,this}}class Rv extends gt{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new me;s.setIndex(new ge(i,1)),s.setAttribute("position",new ne(r,3)),super(s,new qe({color:n,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class Pv extends It{constructor(e,n=1,i=16776960){const r=i,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new me;o.setAttribute("position",new ne(s,3)),o.computeBoundingSphere(),super(o,new qe({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new me;c.setAttribute("position",new ne(a,3)),c.computeBoundingSphere(),this.add(new We(c,new Rt({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let n=-this.plane.constant;Math.abs(n)<1e-8&&(n=1e-8),this.scale.set(.5*this.size,.5*this.size,n),this.children[0].material.side=n<0?et:vi,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const Hf=new M;let qo,Qc;class Iv extends he{constructor(e,n,i,r,s,o){super(),this.type="ArrowHelper",e===void 0&&(e=new M(0,0,1)),n===void 0&&(n=new M(0,0,0)),i===void 0&&(i=1),r===void 0&&(r=16776960),s===void 0&&(s=.2*i),o===void 0&&(o=.2*s),qo===void 0&&(qo=new me,qo.setAttribute("position",new ne([0,0,0,0,1,0],3)),Qc=new ns(0,.5,1,5,1),Qc.translate(0,-.5,0)),this.position.copy(n),this.line=new It(qo,new qe({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new We(Qc,new Rt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Hf.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Hf,n)}}setLength(e,n,i){n===void 0&&(n=.2*e),i===void 0&&(i=.2*n),this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class Vf extends gt{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new me;r.setAttribute("position",new ne(n,3)),r.setAttribute("color",new ne(i,3));const s=new qe({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}}const kf=new Float32Array(1),Dv=new Int32Array(kf.buffer),Fv={toHalfFloat:function(t){kf[0]=t;const e=Dv[0];let n=e>>16&32768,i=e>>12&2047;const r=e>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&e&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}},or=4,Un=8,nn=Math.pow(2,Un),Wf=[.125,.215,.35,.446,.526,.582],jf=Un-or+1+Wf.length,ar=20,rn={[dt]:0,[Mr]:1,[Cs]:2,[Ma]:3,[Sa]:4,[Ta]:5,[Ls]:6},el=new sr,{_lodPlanes:ps,_sizeLods:qf,_sigmas:Xo}=Bv(),Xf=new se;let tl=null;const pi=(1+Math.sqrt(5))/2,cr=1/pi,Yf=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,pi,cr),new M(0,pi,-cr),new M(cr,0,pi),new M(-cr,0,pi),new M(pi,cr,0),new M(-pi,cr,0)];class Ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Gv(ar),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tl=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=$f(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Jf(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ps.length;e++)ps[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(tl),e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e){tl=this._renderer.getRenderTarget();const n=this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){const n={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:Mi,format:$l,encoding:Nv(e)?e.encoding:Cs,depthBuffer:!1},i=Zf(n);return i.depthBuffer=!e,this._pingPongRenderTarget=Zf(n),i}_compileMaterial(e){const n=new We(ps[0],e);this._renderer.compile(n,el)}_sceneToCubeUV(e,n,i,r){const a=new Ke(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.outputEncoding,f=u.toneMapping;u.getClearColor(Xf);const d=u.getClearAlpha();u.toneMapping=Vn,u.outputEncoding=dt;let p=e.background;if(p&&p.isColor){p.convertSRGBToLinear();const y=Math.max(p.r,p.g,p.b),x=Math.min(Math.max(Math.ceil(Math.log2(y)),-128),127);p=p.multiplyScalar(Math.pow(2,-x));const g=(x+128)/255;u.setClearColor(p,g),e.background=null}for(let y=0;y<6;y++){const x=y%3;x==0?(a.up.set(0,c[y],0),a.lookAt(l[y],0,0)):x==1?(a.up.set(0,0,c[y]),a.lookAt(0,l[y],0)):(a.up.set(0,c[y],0),a.lookAt(0,0,l[y])),Yo(r,x*nn,y>2?nn:0,nn,nn),u.setRenderTarget(r),u.render(e,a)}u.toneMapping=f,u.outputEncoding=h,u.setClearColor(Xf,d)}_textureToCubeUV(e,n){const i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=$f()):this._equirectShader==null&&(this._equirectShader=Jf());const r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new We(ps[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=rn[e.encoding],o.outputEncoding.value=rn[n.texture.encoding],Yo(n,0,0,3*nn,2*nn),i.setRenderTarget(n),i.render(s,el)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<jf;r++){const s=Math.sqrt(Xo[r]*Xo[r]-Xo[r-1]*Xo[r-1]),o=Yf[(r-1)%Yf.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(ps[r],l),f=l.uniforms,d=qf[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ar-1),y=s/p,x=isFinite(s)?1+Math.floor(u*y):ar;x>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ar}`);const g=[];let m=0;for(let v=0;v<ar;++v){const E=v/y,L=Math.exp(-E*E/2);g.push(L),v==0?m+=L:v<x&&(m+=2*L)}for(let v=0;v<g.length;v++)g[v]=g[v]/m;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=p,f.mipInt.value=Un-i,f.inputEncoding.value=rn[e.texture.encoding],f.outputEncoding.value=rn[e.texture.encoding];const _=qf[r],b=3*Math.max(0,nn-2*_),w=(r===0?0:2*nn)+2*_*(r>Un-or?r-Un+or:0);Yo(n,b,w,3*_,2*_),c.setRenderTarget(n),c.render(h,el)}}function Nv(t){return t===void 0||t.type!==Mi?!1:t.encoding===dt||t.encoding===Mr||t.encoding===Ls}function Bv(){const t=[],e=[],n=[];let i=Un;for(let r=0;r<jf;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>Un-or?o=Wf[r-Un+or-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,p=2,y=1,x=new Float32Array(d*f*h),g=new Float32Array(p*f*h),m=new Float32Array(y*f*h);for(let b=0;b<h;b++){const w=b%3*2/3-1,v=b>2?0:-1,E=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];x.set(E,d*f*b),g.set(u,p*f*b);const L=[b,b,b,b,b,b];m.set(L,y*f*b)}const _=new me;_.setAttribute("position",new ge(x,d)),_.setAttribute("uv",new ge(g,p)),_.setAttribute("faceIndex",new ge(m,y)),t.push(_),i>or&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function Zf(t){const e=new wt(3*nn,3*nn,t);return e.texture.mapping=bi,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Yo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Gv(t){const e=new Float32Array(t),n=new M(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:rn[dt]},outputEncoding:{value:rn[dt]}},vertexShader:nl(),fragmentShader:`

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

			${il()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Jf(){const t=new V(1,1);return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:rn[dt]},outputEncoding:{value:rn[dt]}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${il()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function $f(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:rn[dt]},outputEncoding:{value:rn[dt]}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${il()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function il(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function zv(t,e,n,i,r,s,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new Lr(t,e,n,r,s,o)}const Uv=0,Hv=1,Vv=0,kv=1,Wv=2;function jv(t){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),t}function qv(t=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t}function Xv(t,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new $i(t,e)}function Yv(t){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Yr(t)}function Zv(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new $i(t,e)}function Jv(t){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new zt(t)}function $v(t){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new zt(t)}function Kv(t){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new zt(t)}function Qv(t,e,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new M(t,e,n)}function e0(t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new ge(t,e).setUsage(Xn)}function t0(t,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new Cr(t,e)}function n0(t,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new Rr(t,e)}function i0(t,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Pr(t,e)}function r0(t,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new Ir(t,e)}function s0(t,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new $n(t,e)}function o0(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Dr(t,e)}function a0(t,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Kn(t,e)}function c0(t,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new ne(t,e)}function l0(t,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Or(t,e)}pe.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(pe.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(yn.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new ze;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.vertices.push(new M(r.x,r.y,r.z||0))}return e}}),Object.assign(jt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function Kf(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ht.call(this,t),this.type="catmullrom",this.closed=!0}Kf.prototype=Object.create(ht.prototype);function Qf(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ht.call(this,t),this.type="catmullrom"}Qf.prototype=Object.create(ht.prototype);function rl(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ht.call(this,t),this.type="catmullrom"}rl.prototype=Object.create(ht.prototype),Object.assign(rl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});function h0(t){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Vf(t)}function u0(t,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Uf(t,e)}function f0(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new gt(new lc(t.geometry),new qe({color:e!==void 0?e:16777215}))}Bf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Df.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function d0(t,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new gt(new Mc(t.geometry),new qe({color:e!==void 0?e:16777215}))}Object.assign(Oe.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Oc.extractUrlBase(t)}}),Oe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function p0(t){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Dt(t)}function m0(t){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Eo(t)}Object.assign(Cf.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(Xt.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(cn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}}),Ur.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Pf.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)},Object.assign(we,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),we.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),we.ceilPowerOfTwo(t)}}),Object.assign(pt.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Object.assign(Se.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},getInverse:function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()}}),Yt.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},Object.assign(ct.prototype,{multiplyVector3:function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}}),Object.assign(Ri.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(ot.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(ot,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(t,e,n,i)}}),Object.assign(Gn.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new fc(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new yc(this,t)}}),Object.assign(V.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(M.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Ge.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(ze.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.assign(he.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(he.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.assign(We.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}),Object.defineProperties(We.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Bh},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Object.defineProperties(Zr.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(Kr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),Jr.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(pe.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}}),Ke.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(He.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(ge.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Xn},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Xn)}}}),Object.assign(ge.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Xn:Sr),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(me.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new ge(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}}),Object.defineProperties(me.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.defineProperties(fs.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}}),Object.defineProperties(Jc.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}}),Object.defineProperties(Et.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Xn},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}}),Object.assign(Et.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?Xn:Sr),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}}),Object.assign(os.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),Object.assign(Ka.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}}),Object.defineProperties(Uo.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(ve.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===ia}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}}),Object.defineProperties(Bn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(Nn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}}),Object.defineProperties(mt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),Object.assign(Wr.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(Wr.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?Mr:dt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(Tu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function g0(t,e,n){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new dn(t,n)}Object.defineProperties(wt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Object.defineProperties(kc.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new zo().load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}}),Sf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},ei.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},ei.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)};const y0={merge:function(t,e,n){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");let i;e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),i=e.matrix,e=e.geometry),t.merge(e,i,n)},center:function(t){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),t.center()}};Yn.crossOrigin=void 0,Yn.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Ao;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},Yn.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new To;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s},Yn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Yn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function x0(){console.error("THREE.CanvasRenderer has been removed")}function v0(){console.error("THREE.JSONLoader has been removed.")}const _0={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function b0(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));var w0=Object.freeze({__proto__:null,ACESFilmicToneMapping:Ul,AddEquation:Hn,AddOperation:Nl,AdditiveAnimationBlendMode:wa,AdditiveBlending:ra,AlphaFormat:Yl,AlwaysDepth:Cl,AlwaysStencilFunc:Vh,AmbientLight:Do,AmbientLightProbe:Vc,AnimationClip:Lt,AnimationLoader:Tc,AnimationMixer:Xc,AnimationObjectGroup:Ef,AnimationUtils:je,ArcCurve:rr,ArrayCamera:Xs,ArrowHelper:Iv,Audio:kc,AudioAnalyser:Sf,AudioContext:Uc,AudioListener:lv,AudioLoader:zo,AxesHelper:Vf,AxisHelper:h0,BackSide:et,BasicDepthPacking:zh,BasicShadowMap:Fd,BinaryTextureLoader:m0,Bone:$r,BooleanKeyframeTrack:bo,BoundingBoxHelper:u0,Box2:Cf,Box3:Xt,Box3Helper:Rv,BoxBufferGeometry:zr,BoxGeometry:rc,BoxHelper:Uf,BufferAttribute:ge,BufferGeometry:me,BufferGeometryLoader:Bo,ByteType:Vl,Cache:li,Camera:Jt,CameraHelper:Cv,CanvasRenderer:x0,CanvasTexture:es,CatmullRomCurve3:ht,CineonToneMapping:zl,CircleBufferGeometry:sc,CircleGeometry:ku,ClampToEdgeWrapping:ft,Clock:_f,ClosedSplineCurve3:Kf,Color:se,ColorKeyframeTrack:wo,CompressedTexture:Ki,CompressedTextureLoader:Ec,ConeBufferGeometry:ju,ConeGeometry:Wu,CubeCamera:ei,CubeGeometry:rc,CubeReflectionMapping:fr,CubeRefractionMapping:dr,CubeTexture:$t,CubeTextureLoader:To,CubeUVReflectionMapping:bi,CubeUVRefractionMapping:pr,CubicBezierCurve:Ht,CubicBezierCurve3:en,CubicInterpolant:vo,CullFaceBack:ta,CullFaceFront:pl,CullFaceFrontBack:Dd,CullFaceNone:dl,Curve:pe,CurvePath:yn,CustomBlending:gl,CustomToneMapping:Hl,CylinderBufferGeometry:ns,CylinderGeometry:oc,Cylindrical:wv,DataTexture:pn,DataTexture2DArray:Wi,DataTexture3D:ji,DataTextureLoader:Eo,DataUtils:Fv,DecrementStencilOp:jd,DecrementWrapStencilOp:Xd,DefaultLoadingManager:ff,DepthFormat:kn,DepthStencilFormat:Ti,DepthTexture:ts,DirectionalLight:Io,DirectionalLightHelper:Lv,DiscreteInterpolant:_o,DodecahedronBufferGeometry:ac,DodecahedronGeometry:qu,DoubleSide:hr,DstAlphaFactor:Ml,DstColorFactor:Tl,DynamicBufferAttribute:e0,DynamicCopyUsage:ap,DynamicDrawUsage:Xn,DynamicReadUsage:rp,EdgesGeometry:lc,EdgesHelper:f0,EllipseCurve:Ct,EqualDepth:Pl,EqualStencilFunc:$d,EquirectangularReflectionMapping:ws,EquirectangularRefractionMapping:Ms,Euler:Ii,EventDispatcher:qt,ExtrudeBufferGeometry:os,ExtrudeGeometry:fc,Face3:Lr,Face4:zv,FaceColors:kv,FileLoader:Dt,FlatShading:ia,Float16BufferAttribute:Fr,Float32Attribute:c0,Float32BufferAttribute:ne,Float64Attribute:l0,Float64BufferAttribute:Or,FloatType:on,Fog:Zs,FogExp2:Ys,Font:Gc,FontLoader:zc,FrontSide:vi,Frustum:Ur,GLBufferAttribute:Zc,GLSL1:lp,GLSL3:Ea,GammaEncoding:Ls,Geometry:ze,GeometryUtils:y0,GreaterDepth:Dl,GreaterEqualDepth:Il,GreaterEqualStencilFunc:tp,GreaterStencilFunc:Qd,GridHelper:Bf,Group:In,HalfFloatType:vr,HemisphereLight:Co,HemisphereLightHelper:Ev,HemisphereLightProbe:Hc,IcosahedronBufferGeometry:dc,IcosahedronGeometry:Qu,ImageBitmapLoader:Nc,ImageLoader:ir,ImageUtils:Yn,ImmediateRenderObject:ds,IncrementStencilOp:Wd,IncrementWrapStencilOp:qd,InstancedBufferAttribute:No,InstancedBufferGeometry:fs,InstancedInterleavedBuffer:Yc,InstancedMesh:to,Int16Attribute:r0,Int16BufferAttribute:Ir,Int32Attribute:o0,Int32BufferAttribute:Dr,Int8Attribute:t0,Int8BufferAttribute:Cr,IntType:Wl,InterleavedBuffer:Et,InterleavedBufferAttribute:Dn,Interpolant:At,InterpolateDiscrete:_r,InterpolateLinear:br,InterpolateSmooth:Es,InvertStencilOp:Yd,JSONLoader:v0,KeepStencilOp:Rs,KeyframeTrack:at,LOD:Zr,LatheBufferGeometry:pc,LatheGeometry:ef,Layers:Oa,LensFlare:b0,LessDepth:Rl,LessEqualDepth:_s,LessEqualStencilFunc:Kd,LessStencilFunc:Jd,Light:He,LightProbe:Ft,Line:It,Line3:Pf,LineBasicMaterial:qe,LineCurve:xt,LineCurve3:Vt,LineDashedMaterial:ci,LineLoop:oo,LinePieces:Hv,LineSegments:gt,LineStrip:Uv,LinearEncoding:dt,LinearFilter:nt,LinearInterpolant:cs,LinearMipMapLinearFilter:zd,LinearMipMapNearestFilter:Gd,LinearMipmapLinearFilter:wi,LinearMipmapNearestFilter:ua,LinearToneMapping:Bl,Loader:Oe,LoaderUtils:Oc,LoadingManager:Sc,LogLuvEncoding:Gh,LoopOnce:Fh,LoopPingPong:Nh,LoopRepeat:Oh,LuminanceAlphaFormat:Jl,LuminanceFormat:Zl,MOUSE:Pd,Material:ve,MaterialLoader:Oo,Math:we,MathUtils:we,Matrix3:pt,Matrix4:Se,MaxEquation:ca,Mesh:We,MeshBasicMaterial:Rt,MeshDepthMaterial:Rn,MeshDistanceMaterial:Pn,MeshFaceMaterial:jv,MeshLambertMaterial:oi,MeshMatcapMaterial:ai,MeshNormalMaterial:si,MeshPhongMaterial:Bn,MeshPhysicalMaterial:Nn,MeshStandardMaterial:Qt,MeshToonMaterial:ri,MinEquation:aa,MirroredRepeatWrapping:gr,MixOperation:Ol,MultiMaterial:qv,MultiplyBlending:oa,MultiplyOperation:ur,NearestFilter:tt,NearestMipMapLinearFilter:Bd,NearestMipMapNearestFilter:Nd,NearestMipmapLinearFilter:Ts,NearestMipmapNearestFilter:Ss,NeverDepth:Ll,NeverStencilFunc:Zd,NoBlending:sn,NoColors:Vv,NoToneMapping:Vn,NormalAnimationBlendMode:As,NormalBlending:_i,NotEqualDepth:Fl,NotEqualStencilFunc:ep,NumberKeyframeTrack:tr,Object3D:he,ObjectLoader:rv,ObjectSpaceNormalMap:Hh,OctahedronBufferGeometry:yo,OctahedronGeometry:tf,OneFactor:_l,OneMinusDstAlphaFactor:Sl,OneMinusDstColorFactor:El,OneMinusSrcAlphaFactor:ha,OneMinusSrcColorFactor:wl,OrthographicCamera:sr,PCFShadowMap:na,PCFSoftShadowMap:ml,PMREMGenerator:Ov,ParametricBufferGeometry:er,ParametricGeometry:as,Particle:Yv,ParticleBasicMaterial:$v,ParticleSystem:Zv,ParticleSystemMaterial:Kv,Path:jt,PerspectiveCamera:Ke,Plane:Yt,PlaneBufferGeometry:qs,PlaneGeometry:nf,PlaneHelper:Pv,PointCloud:Xv,PointCloudMaterial:Jv,PointLight:Po,PointLightHelper:Sv,Points:$i,PointsMaterial:zt,PolarGridHelper:Av,PolyhedronBufferGeometry:ni,PolyhedronGeometry:rf,PositionalAudio:uv,PropertyBinding:ut,PropertyMixer:Wc,QuadraticBezierCurve:kt,QuadraticBezierCurve3:tn,Quaternion:ct,QuaternionKeyframeTrack:ls,QuaternionLinearInterpolant:Mo,REVISION:fl,RGBADepthPacking:Uh,RGBAFormat:bt,RGBAIntegerFormat:ih,RGBA_ASTC_10x10_Format:gh,RGBA_ASTC_10x5_Format:dh,RGBA_ASTC_10x6_Format:ph,RGBA_ASTC_10x8_Format:mh,RGBA_ASTC_12x10_Format:yh,RGBA_ASTC_12x12_Format:xh,RGBA_ASTC_4x4_Format:sh,RGBA_ASTC_5x4_Format:oh,RGBA_ASTC_5x5_Format:ah,RGBA_ASTC_6x5_Format:ch,RGBA_ASTC_6x6_Format:lh,RGBA_ASTC_8x5_Format:hh,RGBA_ASTC_8x6_Format:uh,RGBA_ASTC_8x8_Format:fh,RGBA_BPTC_Format:vh,RGBA_ETC2_EAC_Format:ba,RGBA_PVRTC_2BPPV1_Format:va,RGBA_PVRTC_4BPPV1_Format:xa,RGBA_S3TC_DXT1_Format:da,RGBA_S3TC_DXT3_Format:pa,RGBA_S3TC_DXT5_Format:ma,RGBDEncoding:Ta,RGBEEncoding:Cs,RGBEFormat:$l,RGBFormat:bn,RGBIntegerFormat:nh,RGBM16Encoding:Sa,RGBM7Encoding:Ma,RGB_ETC1_Format:rh,RGB_ETC2_Format:_a,RGB_PVRTC_2BPPV1_Format:ya,RGB_PVRTC_4BPPV1_Format:ga,RGB_S3TC_DXT1_Format:fa,RGFormat:eh,RGIntegerFormat:th,RawShaderMaterial:gn,Ray:Ri,Raycaster:Jc,RectAreaLight:Fo,RedFormat:Kl,RedIntegerFormat:Ql,ReinhardToneMapping:Gl,RepeatWrapping:mr,ReplaceStencilOp:kd,ReverseSubtractEquation:xl,RingBufferGeometry:mc,RingGeometry:sf,SRGB8_ALPHA8_ASTC_10x10_Format:Ph,SRGB8_ALPHA8_ASTC_10x5_Format:Lh,SRGB8_ALPHA8_ASTC_10x6_Format:Ch,SRGB8_ALPHA8_ASTC_10x8_Format:Rh,SRGB8_ALPHA8_ASTC_12x10_Format:Ih,SRGB8_ALPHA8_ASTC_12x12_Format:Dh,SRGB8_ALPHA8_ASTC_4x4_Format:_h,SRGB8_ALPHA8_ASTC_5x4_Format:bh,SRGB8_ALPHA8_ASTC_5x5_Format:wh,SRGB8_ALPHA8_ASTC_6x5_Format:Mh,SRGB8_ALPHA8_ASTC_6x6_Format:Sh,SRGB8_ALPHA8_ASTC_8x5_Format:Th,SRGB8_ALPHA8_ASTC_8x6_Format:Eh,SRGB8_ALPHA8_ASTC_8x8_Format:Ah,Scene:Ka,SceneUtils:_0,ShaderChunk:Re,ShaderLib:Gt,ShaderMaterial:mt,ShadowMaterial:ii,Shape:Gn,ShapeBufferGeometry:gc,ShapeGeometry:yc,ShapePath:Bc,ShapeUtils:mn,ShortType:kl,Skeleton:Kr,SkeletonHelper:Df,SkinnedMesh:Jr,SmoothShading:Od,Sphere:cn,SphereBufferGeometry:xo,SphereGeometry:of,Spherical:bv,SphericalHarmonics3:pf,Spline:rl,SplineCurve:Wt,SplineCurve3:Qf,SpotLight:Ro,SpotLightHelper:Mv,Sprite:Yr,SpriteMaterial:Fn,SrcAlphaFactor:la,SrcAlphaSaturateFactor:Al,SrcColorFactor:bl,StaticCopyUsage:op,StaticDrawUsage:Sr,StaticReadUsage:ip,StereoCamera:vf,StreamCopyUsage:cp,StreamDrawUsage:np,StreamReadUsage:sp,StringKeyframeTrack:So,SubtractEquation:yl,SubtractiveBlending:sa,TOUCH:Id,TangentSpaceNormalMap:qn,TetrahedronBufferGeometry:xc,TetrahedronGeometry:af,TextBufferGeometry:vc,TextGeometry:cf,Texture:Be,TextureLoader:Ao,TorusBufferGeometry:_c,TorusGeometry:lf,TorusKnotBufferGeometry:bc,TorusKnotGeometry:hf,Triangle:ot,TriangleFanDrawMode:Hd,TriangleStripDrawMode:Ud,TrianglesDrawMode:Bh,TubeBufferGeometry:wc,TubeGeometry:uf,UVMapping:bs,Uint16Attribute:s0,Uint16BufferAttribute:$n,Uint32Attribute:a0,Uint32BufferAttribute:Kn,Uint8Attribute:n0,Uint8BufferAttribute:Rr,Uint8ClampedAttribute:i0,Uint8ClampedBufferAttribute:Pr,Uniform:Uo,UniformsLib:K,UniformsUtils:nu,UnsignedByteType:Mi,UnsignedInt248Type:Si,UnsignedIntType:xr,UnsignedShort4444Type:jl,UnsignedShort5551Type:ql,UnsignedShort565Type:Xl,UnsignedShortType:yr,VSMShadowMap:xi,Vector2:V,Vector3:M,Vector4:Ge,VectorKeyframeTrack:nr,Vertex:Qv,VertexColors:Wv,VideoTexture:nc,WebGL1Renderer:$a,WebGLCubeRenderTarget:dn,WebGLMultisampleRenderTarget:La,WebGLRenderTarget:wt,WebGLRenderTargetCube:g0,WebGLRenderer:Wr,WebGLUtils:Eu,WireframeGeometry:Mc,WireframeHelper:d0,WrapAroundEnding:wr,XHRLoader:p0,ZeroCurvatureEnding:Wn,ZeroFactor:vl,ZeroSlopeEnding:jn,ZeroStencilOp:Vd,sRGBEncoding:Mr});Math.clamp=(t,e,n)=>Math.max(e,Math.min(t,n)),Math.wrapAngle=t=>(t=t%(Math.PI*2),t<=-Math.PI?t+Math.PI*2:t>Math.PI?t-Math.PI*2:t),THREE.Vector2.fromAngle=t=>new THREE.Vector2(Math.cos(t),Math.sin(t)),THREE.Curve.prototype.getCurvatureAt=function(t){let e=this.getUtoTmapping(t);const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0,e=n,r=2*n),r>1&&(r=1,e=1-n,i=1-2*n);const s=this.getPoint(i),o=this.getPoint(e),a=this.getPoint(r);return(Math.atan2(a.y-o.y,a.x-o.x)-Math.atan2(o.y-s.y,o.x-s.x))/o.distanceTo(s)};const ed=`#version 300 es
in vec2 position;
in vec2 texture;
out vec2 kernelPosition;

void main(void) {
  kernelPosition = texture;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,M0=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;
precision highp sampler3D;
precision highp samplerCube;

in vec2 kernelPosition;
out vec4 kernelOut;
uniform ivec2 kernelSize;
`;class S0{static alloc(e,n){if(!Number.isInteger(n)||n<1||n>4)throw new Error("Data stride must be an integer between 1 and 4.");const i=Math.pow(Math.ceil(Math.sqrt(e)),2),r=new Float32Array(i*n);return r.gpgpuSize=e,r.gpgpuStride=n,r}constructor(e,n={}){this._setUpGL(),this.outputTextures={},this.sharedTextures={},this.programs=e.map(i=>this._prepareProgram(i));for(const i in n){const r=n[i],{width:s,height:o,channels:a,data:c}=r;this.sharedTextures[i]=this._createTexture(c,s,o,a,r)}}updateSharedTextures(e){this.sharedTextures={};for(const n in e){const i=e[n],{width:r,height:s,channels:o,data:a}=i;this.sharedTextures[n]&&this.gl.deleteTexture(this.sharedTextures[n]),this.sharedTextures[n]=this._createTexture(a,r,s,o,i)}}updateProgram(e,n){const i=typeof e=="number"?this.programs[e]:e;if(!i)throw new Error(`Program with index ${e} does not exist.`);if(n.inputs)throw new Error("The `updateProgram` function cannot be used to update inputs. Use `updateProgramInputs` instead.");n.meta&&(i.meta=Object.assign(i.meta,n.meta)),n.width!==void 0&&n.height!==void 0&&this.updateProgramSize(i,n.width,n.height),typeof n.uniforms=="object"&&this.updateProgramUniforms(i,n.uniforms)}updateProgramInputs(e,n){const i=this.programs[e];if(!i)throw new Error(`Program with index ${e} does not exist.`);if(i.inputTextures.length!=n.length)throw new Error(`You must provide the same number of inputs as when the program was set up: got ${n.length} but expected ${i.inputTextures.length}.`);const r=i.inputWidth,s=i.inputHeight,o=i.config;(o.width===void 0||o.height===void 0)&&(i.inputWidth=void 0,i.inputHeight=void 0,i.inputDataSize=void 0),this._prepareProgramInputs(i,n),(i.inputWidth!=r||i.inputHeight!=s)&&(this.gl.useProgram(i.glProgram),this.gl.uniform2i(i.kernelSizeLocation,i.inputWidth,i.inputHeight),this._prepareProgramOutput(i))}updateProgramSize(e,n,i){const r=typeof e=="number"?this.programs[e]:e;if(!r)throw new Error(`Program with index ${e} does not exist.`);if(r.inputTextures.length!=0)throw new Error("Size can only be updated on programs with no inputs.");n==r.inputWidth&&i==r.inputHeight||(r.inputWidth=n,r.inputHeight=i,r.inputDataSize=n*i,this.gl.useProgram(r.glProgram),this.gl.uniform2i(r.kernelSizeLocation,r.inputWidth,r.inputHeight),this._prepareProgramOutput(r))}updateProgramUniforms(e,n){const i=typeof e=="number"?this.programs[e]:e;if(this.gl.useProgram(i.glProgram),!i)throw new Error(`Program with index ${e} does not exist.`);for(const r in n){const s=n[r];let o;if(o=i.uniforms[r])this._setUniform(o.type,o.location,s);else if(o=i.uniformTextures[r]){if(typeof s!="object"||s.type!="texture")throw new Error(`Expected texture type for uniform ${r}.`);const{width:a,height:c,channels:l,data:u}=o;i.uniformTextures[r].texture&&this.gl.deleteTexture(i.uniformTextures[r].texture),i.uniformTextures[r].texture=this._createTexture(u,a,c,l,o)}else throw new Error(`The uniform ${r} does not exist in this program.`)}}run(){const e=[];for(const n of this.programs){this.gl.useProgram(n.glProgram),this.gl.viewport(0,0,n.inputWidth,n.inputHeight),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,n.frameBuffer);for(const[i,r]of n.inputTextures.entries())this.gl.activeTexture(this.gl.TEXTURE0+i),this.gl.bindTexture(this.gl.TEXTURE_2D,r);for(const i in n.uniformTextures){const r=n.uniformTextures[i];this.gl.activeTexture(this.gl.TEXTURE0+r.index),this.gl.bindTexture(r.target,r.texture||this.sharedTextures[r.name]||this.outputTextures[r.name])}if(typeof n.draw=="function")n.draw(this,n);else if(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureBuffer),this.gl.enableVertexAttribArray(n.textureLocation),this.gl.vertexAttribPointer(n.textureLocation,2,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.enableVertexAttribArray(n.positionLocation),this.gl.vertexAttribPointer(n.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),n.drawProxy){const i=(()=>this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0)).bind(this);n.drawProxy(this,n,i)}else this.gl.drawElements(this.gl.TRIANGLES,6,this.gl.UNSIGNED_SHORT,0);if(n.output&&n.output.name&&!n.output.read)e.push(null);else{const i=new Float32Array(n.inputWidth*n.inputHeight*4);this.gl.readPixels(0,0,n.inputWidth,n.inputHeight,this.gl.RGBA,this.gl.FLOAT,i),e.push(i.subarray(0,n.inputDataSize*4))}}return e}_setUpGL(){let e;if(self.document)e=document.createElement("canvas");else if(self.OffscreenCanvas)e=new OffscreenCanvas(0,0);else throw new Error("Could not create a canvas.");const n={alpha:!1,antialias:!1};if(this.gl=e.getContext("webgl2",n)||e.getContext("experimental-webgl2",n),!this.gl)throw new Error("Unable to initialize WebGL2. Your browser may not support it.");if(!this.gl.getExtension("EXT_color_buffer_float"))throw new Error("Required WebGL extension EXT_color_buffer_float not supported.");if(!this.gl.getExtension("OES_texture_float_linear"))throw new Error("Required WebGL extension OES_texture_float_linear not supported.");this.positionBuffer=this._newBuffer([-1,-1,1,-1,1,1,-1,1]),this.textureBuffer=this._newBuffer([0,0,1,0,1,1,0,1]),this.indexBuffer=this._newBuffer([1,2,0,3,0,2],Uint16Array,this.gl.ELEMENT_ARRAY_BUFFER)}_prepareProgram(e){const n={config:e};n.draw=e.draw,n.drawProxy=e.drawProxy,n.meta=Object.assign({},e.meta),e.width&&e.height&&(n.inputWidth=e.width,n.inputHeight=e.height,n.inputDataSize=e.width*e.height),n.output=e.output;const i=e.kernel;if(typeof i!="string"||i.length==0)throw new Error("Kernel code cannot be empty.");const r=e.inputs||[],s=e.uniforms||{};this._prepareProgramInputs(n,r);let o="";for(const f in r)o+=`uniform sampler2D _input${f};
`;if(n.inputWidth===void 0||n.inputHeight===void 0)throw new Error("Unknown kernel size. You must provide either an input or the `width` and `height` parameters in the kernel config.");n.uniformTextures={},n.uniforms={};for(const f in s){const d=s[f];if(typeof d=="number")n.uniforms[f]={type:"float",value:d},o+=`uniform float ${f};
`;else if(Array.isArray(d)){if(d.length<2||d.length>4)throw new Error("Array uniforms can only have lengths of 2, 3, or 4 elements (corresponding to vec2, vec3, and vec4).");const p=["vec2","vec3","vec4"][d.length-2];n.uniforms[f]={type:p,value:d},o+=`uniform ${p} ${f};
`}else{const{type:p,width:y,height:x,channels:g,data:m,value:_,length:b,name:w}=d;if(p=="texture"||p=="outputTexture"||p=="sharedTexture"){let v,E;d.textureType=="3D"?(v=this.gl.TEXTURE_3D,E="sampler3D"):d.textureType=="2DArray"?(v=this.gl.TEXTURE_2D_ARRAY,E="sampler2DArray"):(v=this.gl.TEXTURE_2D,E="sampler2D"),E=="texture"?n.uniformTextures[f]={target:v,texture:m?this._createTexture(m,y,x,g,d):null}:n.uniformTextures[f]={target:v,texture:null,name:w||f},o+=`uniform ${E} ${f};
`}else n.uniforms[f]={type:p,value:_},b!==void 0?o+=`uniform ${p} ${f}[${b}];
`:o+=`uniform ${p} ${f};
`}}const a=this.gl.createShader(this.gl.VERTEX_SHADER);if(this.gl.shaderSource(a,e.vertexShader||ed),this.gl.compileShader(a),!this.gl.getShaderParameter(a,this.gl.COMPILE_STATUS))throw new Error(`Could not build vertex shader (fatal).

--- CODE DUMP ---
`+(e.vertexShader||ed)+`

--- ERROR LOG ---
`+this.gl.getShaderInfoLog(a));const c=`
void main() {
  kernelOut = vec4(kernel(${[...Array(r.length).keys()].map(f=>`texture(_input${f}, kernelPosition)`).join(", ")}));
}
    `,l=this.gl.createShader(this.gl.FRAGMENT_SHADER),u=M0+o+i+c;if(this.gl.shaderSource(l,u),this.gl.compileShader(l),!this.gl.getShaderParameter(l,this.gl.COMPILE_STATUS)){const f=u.split(`
`);let d=`ERROR: Could not build shader (fatal).

------------------ KERNEL CODE DUMP ------------------
`;for(let p=0;p<f.length;p++)d+=`${p+1}> ${f[p]}
`;throw d+=`
--------------------- ERROR  LOG ---------------------
`+this.gl.getShaderInfoLog(l),new Error(d)}if(n.glProgram=this.gl.createProgram(),this.gl.attachShader(n.glProgram,a),this.gl.attachShader(n.glProgram,l),this.gl.linkProgram(n.glProgram),this.gl.useProgram(n.glProgram),!this.gl.getProgramParameter(n.glProgram,this.gl.LINK_STATUS))throw new Error("Failed to link GLSL program code.");let h=0;for(const f of n.inputTextures){const d=this.gl.getUniformLocation(n.glProgram,`_input${h}`);this.gl.uniform1i(d,h),h++}for(const f in n.uniformTextures){n.uniformTextures[f].index=h;const d=this.gl.getUniformLocation(n.glProgram,f);this.gl.uniform1i(d,h),h++}for(const f in n.uniforms){const{type:d,value:p}=n.uniforms[f],y=n.uniforms[f].location=this.gl.getUniformLocation(n.glProgram,f);p!==void 0&&this._setUniform(d,y,p),delete n.uniforms[f].value}return n.kernelSizeLocation=this.gl.getUniformLocation(n.glProgram,"kernelSize"),this.gl.uniform2i(n.kernelSizeLocation,n.inputWidth,n.inputHeight),n.positionLocation=this.gl.getAttribLocation(n.glProgram,"position"),n.textureLocation=this.gl.getAttribLocation(n.glProgram,"texture"),n.frameBuffer=this.gl.createFramebuffer(),this._prepareProgramOutput(n),n}_prepareProgramInputs(e,n){e.inputTextures&&e.inputTextures.forEach(i=>this.gl.deleteTexture(i)),e.inputTextures=[];for(const[i,r]of n.entries()){if(r.gpgpuSize===void 0||r.gpgpuStride===void 0)throw new Error("GPGPU inputs must be created by the `alloc` function.");const s=Math.sqrt(r.length/r.gpgpuStride);if(s<=0||s%1!=0)throw new Error("GPGPU input size is expected to be a perfect square.");if(e.inputWidth===void 0||e.inputHeight===void 0)e.inputWidth=s,e.inputHeight=s,e.inputDataSize=r.gpgpuSize;else if(s!=e.inputWidth||s!=e.inputHeight)throw new Error(`All GPGPU inputs must be of the same size. Received ${r.gpgpuSize} (internal ${s*s}) but expected ${e.inputDataSize} (internal ${e.inputWidth*e.inputHeight}).`);e.inputTextures.push(this._createTexture(r,s,s,r.gpgpuStride))}}_prepareProgramOutput(e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e.frameBuffer);const n=this._createTexture(null,e.inputWidth,e.inputHeight,4,e.output);if(e.output&&e.output.textureType!=="3D"&&e.output.textureType!=="2DArray"&&(this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,n,0),!(this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER)==this.gl.FRAMEBUFFER_COMPLETE)))throw new Error("Error attaching float texture to framebuffer. Your device is probably incompatible.");e.outputTexture!==void 0&&this.gl.deleteTexture(e.outputTexture),e.outputTexture=n,e.output&&e.output.name&&(this.outputTextures[e.output.name]=n)}_setUniform(e,n,i){switch(e){case"int":this.gl.uniform1i(n,i);break;case"float":Array.isArray(i)?this.gl.uniform1fv(n,i):this.gl.uniform1f(n,i);break;case"vec2":this.gl.uniform2fv(n,i);break;case"vec3":this.gl.uniform3fv(n,i);break;case"vec4":this.gl.uniform4fv(n,i);break;case"mat3":this.gl.uniformMatrix3fv(n,i);break;default:throw new Error(`Unknown uniform type ${e}.`)}}_newBuffer(e,n,i){const r=this.gl.createBuffer();return this.gl.bindBuffer(i||this.gl.ARRAY_BUFFER,r),this.gl.bufferData(i||this.gl.ARRAY_BUFFER,new(n||Float32Array)(e),this.gl.STATIC_DRAW),r}_createTexture(e,n,i,r,s={}){const o=this.gl.createTexture();let a,c;switch(r){case 1:a=this.gl.R32F,c=this.gl.RED;break;case 2:a=this.gl.RG32F,c=this.gl.RG;break;case 3:a=this.gl.RGB32F,c=this.gl.RGB;break;case 4:a=this.gl.RGBA32F,c=this.gl.RGBA;break;default:throw"Texture channels must between 1 and 4."}const l=s.textureType=="3D"?this.gl.TEXTURE_3D:s.textureType=="2DArray"?this.gl.TEXTURE_2D_ARRAY:this.gl.TEXTURE_2D;return this.gl.bindTexture(l,o),this.gl.texParameteri(l,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(l,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(l,this.gl.TEXTURE_WRAP_R,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(l,this.gl.TEXTURE_MIN_FILTER,s.filter=="linear"?this.gl.LINEAR:this.gl.NEAREST),this.gl.texParameteri(l,this.gl.TEXTURE_MAG_FILTER,s.filter=="linear"?this.gl.LINEAR:this.gl.NEAREST),s.textureType=="3D"||s.textureType=="2DArray"?this.gl.texImage3D(l,0,a,n,i,s.depth,0,c,this.gl.FLOAT,e):this.gl.texImage2D(l,0,a,n,i,0,c,this.gl.FLOAT,e),this.gl.bindTexture(l,null),o}}const Zo=8,T0=16,ms=32,E0=.01,td=new THREE.Matrix3,A0=new THREE.Matrix3;class nd{constructor(e,n,i=null){this.start=Object.assign({},e),this.end=Object.assign({},n),e.pos&&(this.start.x=e.pos.x,this.start.y=e.pos.y),n.pos&&(this.end.x=n.pos.x,this.end.y=n.pos.y);const r=this.end.x-this.start.x,s=this.end.y-this.start.y,o=Math.sin(this.start.rot),a=Math.cos(this.start.rot);this.goal={x:a*r+o*s,y:-o*r+a*s,rot:Math.wrapAngle(this.end.rot-this.start.rot),curv:this.end.curv},i?this.params=Object.assign({},i,{p0:this.start.curv,p3:this.end.curv}):this.guessInitialParams(),this.converged=!1}guessInitialParams(){const e=this.goal,n=this.start.curv/ms,i=e.y/ms,r=e.rot/ms,s=e.curv/ms;this.goal={x:e.x,y:0,rot:0,curv:0},this.params={p0:0,p1:0,p2:0,p3:0,sG:e.x};for(let o=0;o<ms;o++)this.params.p0+=n,this.params.p3+=s,this.goal.y+=i,this.goal.rot+=r,this.goal.curv+=s,this.iterate();this.goal=e}optimize(){for(let e=0;e<T0;e++)if(this.iterate())return this.converged=!0,!0;return this.converged=!1,!1}iterate(){const{p0:e,p1:n,p2:i,p3:r,sG:s}=this.params,o=s/Zo,a=s*s,c=a*s;let l=0,u=0,h=0,f=0,d=0,p=0,y=0,x=0,g,m,_,b,w,v;for(let Q=0,Z=0;Q<=Zo;Q++,Z+=o){const ce=Q==0||Q==Zo?1:Q%2==0?2:4,le=e,Fe=(-5.5*e+9*n-4.5*i+r)/s,U=(9*e-22.5*n+18*i-4.5*r)/a;g=(((-4.5*(e-3*n+3*i-r)/c*Z/4+U/3)*Z+Fe/2)*Z+le)*Z,m=Math.cos(g),_=Math.sin(g);const oe=Z/s;b=((3.375*oe-7.5)*oe+4.5)*oe*Z,w=((-3.375*oe+6)*oe-2.25)*oe*Z,v=((3.375*(e-3*n+3*i-r)*oe-3*(2*e-5*n+4*i-r))*oe+.25*(11*e-18*n+9*i-2*r))*oe*oe,l-=ce*_*b,u-=ce*_*w,h-=ce*_*v,f+=ce*m*b,d+=ce*m*w,p+=ce*m*v,y+=ce*m,x+=ce*_}const E=s/Zo/3,L=this.goal.x-y*E,P=this.goal.y-x*E,z=Math.wrapAngle(this.goal.rot-g);if(Math.abs(L)+Math.abs(P)+Math.abs(z)<E0)return!0;td.set(l*E,u*E,m+h*E,f*E,d*E,_+p*E,b,w,v);const[I,F,O,D,C,N,k,Y,J]=A0.getInverse(td).elements;return this.params.p1+=I*L+D*P+k*z,this.params.p2+=F*L+C*P+Y*z,this.params.sG+=O*L+N*P+J*z,!1}buildPath(e){const{p0:n,p1:i,p2:r,p3:s,sG:o}=this.params,a=o*o,c=a*o,l=n,u=(-5.5*n+9*i-4.5*r+s)/o,h=(9*n-22.5*i+18*r-4.5*s)/a,f=-4.5*(n-3*i+3*r-s)/c,d=[{pos:new THREE.Vector2(this.start.x,this.start.y),rot:this.start.rot,curv:this.start.curv}],p=o/(e-1);let y=p,x=0,g=0,m=Math.cos(d[0].rot),_=Math.sin(d[0].rot);for(let b=1;b<e-1;b++){const w=(((f*y/4+h/3)*y+u/2)*y+l)*y+this.start.rot,v=((f*y+h)*y+u)*y+l,E=Math.cos(w),L=Math.sin(w);x=x*(b-1)/b+(E+m)/(2*b),g=g*(b-1)/b+(L+_)/(2*b),d.push({pos:new THREE.Vector2(y*x+this.start.x,y*g+this.start.y),rot:w,curv:v}),y+=p,m=E,_=L}return d.push({pos:new THREE.Vector2(this.end.x,this.end.y),rot:this.end.rot,curv:this.end.curv}),d}}class L0{constructor(e,n,i){this.start=Object.assign({},e),this.end=Object.assign({},n),e.pos&&(this.start.x=e.pos.x,this.start.y=e.pos.y),n.pos&&(this.end.x=n.pos.x,this.end.y=n.pos.y);const r=this.end.x-this.start.x,s=this.end.y-this.start.y,o=Math.sin(this.start.rot),a=Math.cos(this.start.rot);this.goal={x:a*r+o*s,y:-o*r+a*s,rot:Math.wrapAngle(this.end.rot-this.start.rot),curv:this.end.curv},this.params=Object.assign({},i,{p0:this.start.curv,p1:this.start.dCurv||0,p2:this.start.ddCurv||0,p5:this.end.curv})}buildPath(e){const{p0:n,p1:i,p2:r,p3:s,p4:o,p5:a,sG:c}=this.params,l=c*c,u=l*c,h=n,f=i,d=r/2,p=(-71.875*n+81*s-10.125*o+a-21.25*i*c-2.75*r*l)/u,y=(166.5*n-202.5*s+40.5*o-4.5*a+45*i*c+4.5*r*l)/(l*l),x=(-95.625*n+121.5*s-30.375*o+4.5*a-24.75*i*c-2.25*r*l)/(l*u),g=[{pos:new THREE.Vector2(this.start.x,this.start.y),rot:this.start.rot,curv:this.start.curv}],m=c/(e-1);let _=m,b=0,w=0,v=Math.cos(g[0].rot),E=Math.sin(g[0].rot);for(let L=1;L<e-1;L++){const P=(((((x*_/6+y/5)*_+p/4)*_+d/3)*_+f/2)*_+h)*_+this.start.rot,z=((((x*_+y)*_+p)*_+d)*_+f)*_+h,I=Math.cos(P),F=Math.sin(P);b=b*(L-1)/L+(I+v)/(2*L),w=w*(L-1)/L+(F+E)/(2*L),g.push({pos:new THREE.Vector2(_*b+this.start.x,_*w+this.start.y),rot:P,curv:z}),_+=m,v=I,E=F}return g.push({pos:new THREE.Vector2(this.end.x,this.end.y),rot:this.end.rot,curv:this.end.curv}),g}}const C0=`#version 300 es
uniform mat3 xform;
in vec2 position;

void main(void) {
  gl_Position = vec4((xform * vec3(position, 1)).xy, 0, 1);
}
`,R0=`
  vec4 kernel() {
    return vec4(1, 0, 0, 1);
  }
`;let Jo,id;var rd={setUp(){return{kernel:R0,vertexShader:C0,output:{name:"xyObstacleGrid"},draw:(t,e)=>{const n=t.gl;if(n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),Jo.length>0){const i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,Jo,n.STATIC_DRAW),n.enableVertexAttribArray(e.positionLocation),n.vertexAttribPointer(e.positionLocation,2,n.FLOAT,!1,0,0);const r=n.getUniformLocation(e.glProgram,"xform");n.uniformMatrix3fv(r,!1,id.elements),n.drawArrays(n.TRIANGLES,0,Jo.length/2),n.deleteBuffer(i)}}}},update(t,e,n,i,r,s){Jo=new Float32Array(Array.prototype.concat.apply([],s.map(c=>c.vertices)));const o=new THREE.Matrix3;o.set(1,0,-i.x,0,1,-i.y,0,0,1);const a=new THREE.Matrix3;return a.set(2/(e*t.xyGridCellSize),0,0,0,2/(n*t.xyGridCellSize),0,0,0,1),id=a.multiply(o).multiply(r),{width:e,height:n}}};const P0=`

vec4 kernel() {
  float centerlineWidth = float(textureSize(centerline, 0).x);

  vec2 sl = (kernelPosition - 0.5) * vec2(kernelSize) * vec2(slGridCellSize) + slCenterPoint;
  float centerlineCoord = sl.x / centerlineStationInterval / centerlineWidth * (centerlineWidth - 1.0) / centerlineWidth + (0.5 / centerlineWidth);
  if (centerlineCoord < 0.0 || centerlineCoord > 1.0) return vec4(0);

  vec3 centerlineSample = texture(centerline, vec2(centerlineCoord, 0)).xyz;
  float perpindicular = centerlineSample.z + radians(90.0);
  vec2 xy = centerlineSample.xy + sl.yy * vec2(cos(perpindicular), sin(perpindicular));

  vec2 xyTexCoords = (xy - xyCenterPoint) / vec2(textureSize(xyObstacleGrid, 0)) / vec2(xyGridCellSize) + 0.5;
  return texture(xyObstacleGrid, xyTexCoords);
}

`;var sd={setUp(){return{kernel:P0,output:{name:"slObstacleGrid"},uniforms:{xyObstacleGrid:{type:"outputTexture"},slGridCellSize:{type:"float"},xyGridCellSize:{type:"float"},slCenterPoint:{type:"vec2"},xyCenterPoint:{type:"vec2"},centerlineStationInterval:{type:"float"},centerline:{type:"sharedTexture"}}}},update(t,e,n,i,r){return{width:e,height:n,uniforms:{slGridCellSize:t.slGridCellSize,xyGridCellSize:t.xyGridCellSize,slCenterPoint:[i.x,i.y],xyCenterPoint:[r.x,r.y],centerlineStationInterval:t.centerlineStationInterval}}}};const od=`

// TODO: test performance of returning early if non-zero pixel found
vec4 kernel() {
  float val = 0.0;

  for (int d = 0; d <= collisionDilation; d++) {
    val = max(val, texture(slObstacleGrid, kernelPosition + delta * vec2(d)).r);
    val = max(val, texture(slObstacleGrid, kernelPosition + delta * vec2(-d)).r);
  }

  for (int d = collisionDilation + 1; d <= collisionDilation + hazardDilation; d++) {
    val = max(val, texture(slObstacleGrid, kernelPosition + delta * vec2(d)).r * 0.5);
    val = max(val, texture(slObstacleGrid, kernelPosition + delta * vec2(-d)).r * 0.5);
  }

  val = max(val, step(0.1, val) * 0.5);

  return vec4(val, 0, 0, 1);
}

`;var ad={setUp(){return[{kernel:od,output:{name:"slObstacleGridStationDilated"},uniforms:{slObstacleGrid:{type:"outputTexture"},delta:{type:"vec2"},collisionDilation:{type:"int"},hazardDilation:{type:"int"}}},{kernel:od,output:{name:"slObstacleGridDilated"},uniforms:{slObstacleGrid:{type:"outputTexture",name:"slObstacleGridStationDilated"},delta:{type:"vec2"},collisionDilation:{type:"int"},hazardDilation:{type:"int"}}}]},update(t,e,n){return[{width:e,height:n,uniforms:{delta:[1/e,0],collisionDilation:Math.ceil(t.collisionDilationS/t.slGridCellSize),hazardDilation:Math.ceil(t.hazardDilationS/t.slGridCellSize)}},{width:e,height:n,uniforms:{delta:[0,1/n],collisionDilation:Math.ceil(t.collisionDilationL/t.slGridCellSize),hazardDilation:Math.ceil(t.hazardDilationL/t.slGridCellSize)}}]}};const I0=`#version 300 es
uniform mat3 xform;
in vec3 position;
out float color;

void main(void) {
  gl_Position = vec4((xform * vec3(position.xy, 1)).xy, position.z, 1);

  // The z coordinate is 0.25 for collision zone and 0.75 for hazard zone,
  // so that the collision zone is drawn on top.
  // Convert this to 1.0 for collision zone, 0.5 for hazard zone
  color = (1.0 - step(0.5, position.z)) * 0.5 + 0.5;
}
`,D0=`
  in float color;

  vec4 kernel() {
    return vec4(color, 0, 0, 1);
  }
`;let gs,cd;const sl=20;var ld={setUp(){return{kernel:D0,vertexShader:I0,output:{name:"slDynamicObstacleGrid",textureType:"2DArray",depth:sl},draw:(t,e)=>{const n=t.gl;n.enable(n.DEPTH_TEST);const i=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,i),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT16,e.inputWidth,e.inputHeight),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,i);for(let r=0;r<sl;r++){if(n.framebufferTextureLayer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,e.outputTexture,0,r),!(n.checkFramebufferStatus(n.FRAMEBUFFER)==n.FRAMEBUFFER_COMPLETE))throw new Error("Error attaching float texture to framebuffer. Your device is probably incompatible.");if(n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),gs[r].length>0){const o=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,gs[r],n.STATIC_DRAW),n.enableVertexAttribArray(e.positionLocation),n.vertexAttribPointer(e.positionLocation,3,n.FLOAT,!1,0,0);const a=n.getUniformLocation(e.glProgram,"xform");if(n.uniformMatrix3fv(a,!1,cd.elements),n.drawArrays(n.TRIANGLES,0,gs[r].length/3),r==0){const c=new Float32Array(e.inputWidth*e.inputHeight*4);n.readPixels(0,0,e.inputWidth,e.inputHeight,n.RGBA,n.FLOAT,c),t._dynamicObstacleGrid=c}n.deleteBuffer(o)}}n.bindRenderbuffer(n.RENDERBUFFER,null),n.deleteRenderbuffer(i),n.disable(n.DEPTH_TEST)}}},update(t,e,n,i,r,s,o,a){gs=[];let c=s;for(let h=0;h<sl;h++){const f=Array.prototype.concat.apply([],a.map(d=>d.verticesInTimeRange(c,c+o,t)));gs.push(new Float32Array(f)),c+=o}const l=new THREE.Matrix3;l.set(1,0,-i.x-r,0,1,-i.y,0,0,1);const u=new THREE.Matrix3;return u.set(2/(e*t.slGridCellSize),0,0,0,2/(n*t.slGridCellSize),0,0,0,1),cd=u.multiply(l),{width:e,height:n}}};const F0=`

vec4 kernel() {
  vec2 xy = (kernelPosition - 0.5) * vec2(kernelSize) * vec2(xyGridCellSize) + xyCenterPoint;

  int numSamples = textureSize(centerline, 0).x;
  int closest = 0;
  float closestDist = distance(xy, texelFetch(centerline, ivec2(0, 0), 0).xy);
  for (int i = 1; i < numSamples; i++) {
    float dist = distance(xy, texelFetch(centerline, ivec2(i, 0), 0).xy);
    if (dist < closestDist) {
      closestDist = dist;
      closest = i;
    }
  }

  vec2 closestPos = texelFetch(centerline, ivec2(closest, 0), 0).xy;
  vec2 prev, next;
  int prevIndex, nextIndex;

  if (closest == 0) {
    prevIndex = 0;
    nextIndex = 1;
    prev = closestPos;
    next = texelFetch(centerline, ivec2(1, 0), 0).xy;
  } else if (closest == numSamples - 1) {
    prevIndex = closest - 1;
    nextIndex = closest;
    prev = texelFetch(centerline, ivec2(prevIndex, 0), 0).xy;
    next = closestPos;
  } else {
    vec2 before = texelFetch(centerline, ivec2(closest - 1, 0), 0).xy;
    vec2 after = texelFetch(centerline, ivec2(closest + 1, 0), 0).xy;

    if (distance(before, xy) < distance(after, xy)) {
      prevIndex = closest - 1;
      nextIndex = closest;
      prev = before;
      next = closestPos;
    } else {
      prevIndex = closest;
      nextIndex = closest + 1;
      prev = closestPos;
      next = after;
    }
  }

  float dist = distance(prev, next);
  float progress = clamp(dot(xy - prev, next - prev) / dist / dist, 0.0, 1.0);
  vec2 projectedPos = (next - prev) * vec2(progress) + prev;

  return vec4(
    (float(prevIndex) + progress) * centerlineStationInterval,
    sign(determinant(mat2(next - prev, xy - prev))) * distance(xy, projectedPos),
    0,
    0
  );
}

`;var hd={setUp(){return{kernel:F0,output:{name:"xyslMap",filter:"linear"},uniforms:{centerline:{type:"sharedTexture"},xyCenterPoint:{type:"vec2"},xyGridCellSize:{type:"float"},centerlineStationInterval:{type:"float"}}}},update(t,e,n,i){return{width:e,height:n,uniforms:{xyCenterPoint:[i.x,i.y],xyGridCellSize:t.xyGridCellSize,centerlineStationInterval:t.centerlineStationInterval}}}};const ud=`

const int NEWTON_ITERATIONS = 16;
const int RELAXATION_ITERATIONS = 16;
const float CONVERGENCE_ERROR = 0.01;

// These two consts must stay in sync.
const int SIMPSONS_INTERVALS = 8;
//const float SIMPSONS_COEFFS[SIMPSONS_INTERVALS + 1] = float[](1.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 1.0);
const float SIMPSONS_COEFFS[SIMPSONS_INTERVALS + 1] = float[](1.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 1.0);

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = PI + PI;

const float RELAXATION_ITERATIONS_F = float(RELAXATION_ITERATIONS);
const float SIMPSONS_INTERVALS_F = float(SIMPSONS_INTERVALS);

float wrapAngle(float angle) {
  angle = mod(angle, TWO_PI);
  if (angle <= -PI) return angle + TWO_PI;
  else if (angle > PI) return angle - TWO_PI;
  return angle;
}

vec4 iterate(vec4 goal, float p0, float p1, float p2, float p3, float sG) {
  float ds = sG / SIMPSONS_INTERVALS_F;
  float sG_2 = sG * sG;
  float sG_3 = sG_2 * sG;

  vec3 dX_p = vec3(0.0);
  vec3 dY_p = vec3(0.0);
  vec2 guess = vec2(0.0);
  float s = 0.0;

  float theta, cosTheta, sinTheta;
  vec3 dT_p;

  for (int i = 0; i <= SIMPSONS_INTERVALS; i++) {
    float coeff = SIMPSONS_COEFFS[i];

    float a = p0;
    float b = (-5.5 * p0 + 9.0 * p1 - 4.5 * p2 + p3) / sG;
    float c = (9.0 * p0 - 22.5 * p1 + 18.0 * p2 - 4.5 * p3) / sG_2;
    float d = (-4.5 * (p0 - 3.0 * p1 + 3.0 * p2 - p3)) / sG_3;

    theta = (((d * s / 4.0 + c / 3.0) * s + b / 2.0) * s + a) * s;
    cosTheta = cos(theta);
    sinTheta = sin(theta);

    float s_sG = s / sG;

    dT_p = vec3(
      // p1
      ((3.375 * s_sG - 7.5) * s_sG + 4.5) * s_sG * s,

      // p2
      ((-3.375 * s_sG + 6.0) * s_sG - 2.25) * s_sG * s,

      // sG
      ((3.375 * (p0 - 3.0 * p1 + 3.0 * p2 - p3) * s_sG - 3.0 * (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3)) * s_sG + 0.25 * (11.0 * p0 - 18.0 * p1 + 9.0 * p2 - 2.0 * p3)) * s_sG * s_sG
    );

    dX_p -= coeff * sinTheta * dT_p;
    dY_p += coeff * cosTheta * dT_p;

    guess += coeff * vec2(cosTheta, sinTheta);

    s += ds;
  }

  float hOver3 = sG / SIMPSONS_INTERVALS_F / 3.0;

  vec3 delta;
  delta.xy = goal.xy - guess * hOver3;
  delta.z = wrapAngle(goal.z - theta);

  if (abs(delta.x) + abs(delta.y) + abs(delta.z) < CONVERGENCE_ERROR)
    return vec4(p1, p2, sG, 1.0);

  dX_p.xyz *= hOver3;
  dY_p.xyz *= hOver3;
  dX_p.z += cosTheta;
  dY_p.z += sinTheta;

  mat3 invJacobian = inverse(transpose(mat3(dX_p, dY_p, dT_p)));

  vec3 deltaP = invJacobian * delta;
  vec4 params = vec4(p1, p2, sG, 0.0);
  params.xyz += deltaP;

  return params;
}

/* Input:
 *   start: (vec4)
 *     x: x position,
 *     y: y position,
 *     z: theta rotation,
 *     w: k curvature
 *   end: (vec4)
 *     x: x position,
 *     y: y position,
 *     z: theta rotation,
 *     w: k curvature
 *
 * Output: (vec4)
 *   x: p1,
 *   y: p2,
 *   z: sG,
 *   w: 1 if converged, 0 if not
 */

vec4 optimize(vec4 start, vec4 end) {
  // Translate and rotate start and end so that start is at the origin
  float sinRot = sin(start.z);
  float cosRot = cos(start.z);

  vec4 diff = end - start;
  vec4 goal;
  goal.xy = mat2(cosRot, -sinRot, sinRot, cosRot) * diff.xy;
  goal.z = wrapAngle(diff.z);
  goal.w = end.w;

  vec4 originalGoal = goal;
  vec4 dGoal;
  dGoal.x = 0.0;
  dGoal.yzw = goal.yzw / RELAXATION_ITERATIONS_F;
  float dK0 = start.w / RELAXATION_ITERATIONS_F;

  // Relax the goal to (x, 0, 0, 0)
  goal.yzw = vec3(0, 0, 0);

  // Relax the params to (0, 0, 0, 0, goal.x)
  float p0 = 0.0;
  float p1 = 0.0;
  float p2 = 0.0;
  float p3 = 0.0;
  float sG = goal.x;

  if (sG < 0.1) return vec4(0.0);

  for (int i = 0; i < RELAXATION_ITERATIONS; i++) {
    p0 += dK0;
    p3 += dGoal.w;
    goal += dGoal;
    
    vec4 result = iterate(goal, p0, p1, p2, p3, sG);
    p1 = result.x;
    p2 = result.y;
    sG = result.z;
  }

  goal = originalGoal;

  for (int i = 0; i < NEWTON_ITERATIONS; i++) {
    vec4 result = iterate(goal, p0, p1, p2, p3, sG);
    if (result.w == 1.0) {
      result.w = step(0.0, result.z);
      return result;
    }

    p1 = result.x;
    p2 = result.y;
    sG = result.z;
  }

  return vec4(p1, p2, sG, 0.0);
}

`,O0=ud+`

// width: station * latitude index
// height: station_conn * lattice_conn
//
// lattice:
// width: latitudes
// height: stations

vec4 kernel() {
  ivec2 indexes = ivec2(kernelPosition * vec2(kernelSize));

  int endStation = indexes.x / numLatitudes;
  int endLatitude = int(mod(float(indexes.x), float(numLatitudes)));

  int startStation = endStation - stationConnectivity + indexes.y / latitudeConnectivity;
  int startLatitude = endLatitude - latitudeConnectivity / 2 + int(mod(float(indexes.y), float(latitudeConnectivity)));

  if (startStation < 0 || startStation >= numStations || startLatitude < 0 || startLatitude >= numLatitudes)
    return vec4(0.0);

  vec4 start = texelFetch(lattice, ivec2(startLatitude, startStation), 0);
  vec4 end = texelFetch(lattice, ivec2(endLatitude, endStation), 0);

  return optimize(start, end);
}

`,N0=ud+`

vec4 kernel() {
  ivec2 indexes = ivec2(kernelPosition * vec2(kernelSize));

  vec4 start = vec4(0, 0, 0, curvVehicle);
  vec4 end = texelFetch(lattice, indexes, 0);

  return optimize(start, end);
}

`;var fd={setUp(){return[{kernel:O0,output:{name:"cubicPaths",read:!0},uniforms:{lattice:{type:"sharedTexture"},numStations:{type:"int"},numLatitudes:{type:"int"},stationConnectivity:{type:"int"},latitudeConnectivity:{type:"int"}}},{kernel:N0,output:{name:"cubicPathsFromVehicle",read:!0},uniforms:{lattice:{type:"sharedTexture"},curvVehicle:{type:"float"}}}]},update(t,e){return[{width:t.lattice.numStations*t.lattice.numLatitudes,height:t.lattice.stationConnectivity*t.lattice.latitudeConnectivity,uniforms:{numStations:t.lattice.numStations,numLatitudes:t.lattice.numLatitudes,stationConnectivity:t.lattice.stationConnectivity,latitudeConnectivity:t.lattice.latitudeConnectivity}},{width:t.lattice.numLatitudes,height:t.lattice.stationConnectivity,uniforms:{curvVehicle:e.curv}}]}};const B0=`

const int NEWTON_ITERATIONS = 32;
const int RELAXATION_ITERATIONS = 32;
const float CONVERGENCE_ERROR = 0.01;

// These two consts must stay in sync.
const int SIMPSONS_INTERVALS = 8;
const float SIMPSONS_COEFFS[SIMPSONS_INTERVALS + 1] = float[](1.0, 4.0, 2.0, 4.0, 2.0, 4.0, 2.0, 4.0, 1.0);

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = PI + PI;

const float RELAXATION_ITERATIONS_F = float(RELAXATION_ITERATIONS);
const float SIMPSONS_INTERVALS_F = float(SIMPSONS_INTERVALS);

float wrapAngle(float angle) {
  angle = mod(angle, TWO_PI);
  if (angle <= -PI) return angle + TWO_PI;
  else if (angle > PI) return angle - TWO_PI;
  return angle;
}

vec4 iterate(vec4 goal, float p0, float p1, float p2, float p3, float p4, float p5, float sG) {
  float ds = sG / SIMPSONS_INTERVALS_F;
  float sG_2 = sG * sG;
  float sG_3 = sG_2 * sG;

  vec3 dX_p = vec3(0.0);
  vec3 dY_p = vec3(0.0);
  vec2 guess = vec2(0.0);
  float s = 0.0;

  float theta, cosTheta, sinTheta;
  vec3 dT_p;

  for (int i = 0; i <= SIMPSONS_INTERVALS; i++) {
    float coeff = SIMPSONS_COEFFS[i];

    float a = p0;
    float b = p1;
    float c = p2 / 2.0;
    float d = (-71.875 * p0 + 81.0 * p3 - 10.125 * p4 + p5 - 21.25 * p1 * sG - 2.75 * p2 * sG_2) / sG_3;
    float e = (166.5 * p0 - 202.5 * p3 + 40.5 * p4 - 4.5 * p5 + 45.0 * p1 * sG + 4.5 * p2 * sG_2) / (sG_2 * sG_2);
    float f = (-95.625 * p0 + 121.5 * p3 - 30.375 * p4 + 4.5 * p5 - 24.75 * p1 * sG - 2.25 * p2 * sG_2) / (sG_2 * sG_3);

    theta = (((((f * s / 6.0 + e / 5.0) * s + d / 4.0) * s + c / 3.0) * s + b / 2.0) * s + a) * s;
    cosTheta = cos(theta);
    sinTheta = sin(theta);

    float s_2 = s * s;
    float s_sG = s / sG;
    float s_sG_2 = s_sG * s_sG;
    float s_sG_3 = s_sG_2 * s_sG;
    float s_sG_4 = s_sG_3 * s_sG;
    float s_sG_5 = s_sG_4 * s_sG;

    dT_p = vec3(
      // p3
      ((20.25 * s_sG - 40.5) * s_sG + 20.25) * s_sG_3 * s,

      // p4
      ((-5.0625 * s_sG + 8.1) * s_sG - 2.53125) * s_sG_3 * s,

      // sG
      (53.90625 * p0 - 60.75 * p3 + 7.59375 * p4 - 0.75 * p5) * s_sG_4 + 10.625 * p1 * s * s_sG_3 + 0.6875 * p2 * s_2 * s_sG_2 + (-133.2 * p0 + 162.0 * p3 - 32.4 * p4 + 3.6 * p5) * s_sG_5 + (-27.0) * p1 * s * s_sG_4 - 1.8 * p2 * s_2 * s_sG_3 + (79.6875 * p0 - 101.25 * p3 + 25.3125 * p4 - 3.75 * p5) * s_sG_5 * s_sG + 16.5 * p1 * s * s_sG_5 + 1.125 * p2 * s_2 * s_sG_4
    );

    dX_p -= coeff * sinTheta * dT_p;
    dY_p += coeff * cosTheta * dT_p;

    guess += coeff * vec2(cosTheta, sinTheta);

    s += ds;
  }

  float hOver3 = sG / SIMPSONS_INTERVALS_F / 3.0;

  vec3 delta;
  delta.xy = goal.xy - guess * hOver3;
  delta.z = wrapAngle(goal.z - theta);

  if (abs(delta.x) + abs(delta.y) + abs(delta.z) < CONVERGENCE_ERROR)
    return vec4(p3, p4, sG, 1.0);

  dX_p.xyz *= hOver3;
  dY_p.xyz *= hOver3;
  dX_p.z += cosTheta;
  dY_p.z += sinTheta;

  mat3 invJacobian = inverse(transpose(mat3(dX_p, dY_p, dT_p)));

  vec3 deltaP = invJacobian * delta;
  vec4 params = vec4(p3, p4, sG, 0.0);
  params.xyz += deltaP;

  return params;
}

vec4 optimize(vec4 start, vec4 end) {
  // Translate and rotate start and end so that start is at the origin
  float sinRot = sin(start.z);
  float cosRot = cos(start.z);

  vec4 diff = end - start;
  vec4 goal;
  goal.xy = mat2(cosRot, -sinRot, sinRot, cosRot) * diff.xy;
  goal.z = wrapAngle(diff.z);
  goal.w = end.w;

  vec4 originalGoal = goal;
  vec4 dGoal;
  dGoal.x = 0.0;
  dGoal.yzw = goal.yzw / RELAXATION_ITERATIONS_F;
  float d_K0 = start.w / RELAXATION_ITERATIONS_F;
  float d_dK0 = dCurvVehicle / RELAXATION_ITERATIONS_F;
  float d_ddK0 = ddCurvVehicle / RELAXATION_ITERATIONS_F;

  // Relax the goal to (x, 0, 0, 0)
  goal.yzw = vec3(0, 0, 0);

  // Relax the params to (0, 0, 0, 0, goal.x)
  float p0 = 0.0;
  float p1 = 0.0;
  float p2 = 0.0;
  float p3 = 0.0;
  float p4 = 0.0;
  float p5 = 0.0;
  float sG = goal.x;

  if (sG < 0.1) return vec4(0.0);

  for (int i = 0; i < RELAXATION_ITERATIONS; i++) {
    p0 += d_K0;
    p1 += d_dK0;
    p2 += d_ddK0;
    p5 += dGoal.w;
    goal += dGoal;
    
    vec4 result = iterate(goal, p0, p1, p2, p3, p4, p5, sG);
    p3 = result.x;
    p4 = result.y;
    sG = result.z;
  }

  goal = originalGoal;

  for (int i = 0; i < NEWTON_ITERATIONS; i++) {
    vec4 result = iterate(goal, p0, p1, p2, p3, p4, p5, sG);
    if (result.w == 1.0) {
      result.w = step(0.0, result.z);
      return result;
    }

    p3 = result.x;
    p4 = result.y;
    sG = result.z;
  }

  return vec4(p3, p4, sG, 0.0);
}

vec4 kernel() {
  ivec2 latticeIndexes = ivec2(kernelPosition * vec2(kernelSize));

  vec4 start = vec4(0, 0, 0, curvVehicle);
  vec4 end = texelFetch(lattice, latticeIndexes, 0);

  return optimize(start, end);
}

`;var dd={setUp(){return{kernel:B0,output:{name:"quinticPathsFromVehicle",read:!0},uniforms:{lattice:{type:"sharedTexture"},curvVehicle:{type:"float"},dCurvVehicle:{type:"float"},ddCurvVehicle:{type:"float"}}}},update(t,e){return{width:t.lattice.numLatitudes,height:t.lattice.stationConnectivity,uniforms:{curvVehicle:e.curv,dCurvVehicle:e.dCurv,ddCurvVehicle:e.ddCurv}}}};const pd=`

const float smallV = 0.01;
vec4 pathSamples[128];
float pathSampleCurvRates[128];

float calculateAcceleration(int index, float initialVelocitySq, float distance) {
  if (index <= 4) {
    // [aMaxHard, aMinHard, aMaxSoft, aMinSoft, 0]
    return accelerationProfiles[index];
  } else {
    float finalVelocity = finalVelocityProfiles[index - 5];
    if (distance < 0.001) return 0.0;
    return clamp((finalVelocity * finalVelocity - initialVelocitySq) / (2.0 * distance), accelerationProfiles[1], accelerationProfiles[0]);
  }
}

vec2 xy2sl(vec4 xytk) {
  vec2 xy = xytk.xy + rearAxleToCenter * vec2(cos(xytk.z), sin(xytk.z));
  vec2 xyTexCoords = (xy - xyCenterPoint) / vec2(textureSize(xyslMap, 0)) / vec2(xyGridCellSize) + 0.5;
  return texture(xyslMap, xyTexCoords).xy;
}

float sampleStaticCost(vec4 xytk) {
  vec2 sl = xy2sl(xytk);
  vec2 slTexCoords = (sl - slCenterPoint) / vec2(textureSize(slObstacleGrid, 0)) / vec2(slGridCellSize) + 0.5;
  float obstacleCost = texture(slObstacleGrid, slTexCoords).r;

  if (obstacleCost >= 0.75) return -1.0; // Infinite cost

  obstacleCost = step(0.25, obstacleCost) * obstacleHazardCost;

  float absLatitude = abs(sl.y);
  if (absLatitude >= laneShoulderLatitude) return -1.0;

  float laneCost = abs(absLatitude - laneCenterLatitude) * laneCostSlope + step(0.0, -sl.y * sign(lanePreference)) * lanePreferenceDiscount;

  return obstacleCost + laneCost;
}

float sampleDynamicCost(vec4 xytk, float time, float velocity, float acceleration) {
  vec2 sl = xy2sl(xytk);
  vec2 slTexCoords = (sl - slCenterPoint) / vec2(textureSize(slDynamicObstacleGrid, 0).xy) / vec2(slGridCellSize) + 0.5;
  float dynamicFrame = floor(time / dynamicFrameTime);

  float obstacleCost = texture(slDynamicObstacleGrid, vec3(slTexCoords, dynamicFrame)).r;

  if (obstacleCost > 0.75) return -1.0; // Infinite cost

  return step(0.25, obstacleCost) * obstacleHazardCost;
}

float calculateAverageStaticCost(int numSamples) {
  float averageStaticCost = 0.0;

  for (int i = 0; i < numSamples; i++) {
    float cost = sampleStaticCost(pathSamples[i]);

    if (cost < 0.0) return cost;

    averageStaticCost += cost;
  }

  averageStaticCost /= float(numSamples);

  return averageStaticCost;
}

float calculateAverageDynamicCost(int numSamples, float pathLength, float initialTime, float initialVelocity, float acceleration, float abandonThreshold) {
  float s = 0.0;
  float ds = pathLength / float(numSamples - 1);
  float averageDynamicCost = 0.0;
  float maxVelocity = 0.0;
  float maxLateralAcceleration = 0.0;
  float numSamples_f = float(numSamples);

  for (int i = 0; i < numSamples; i++) {
    vec4 pathSample = pathSamples[i]; // vec4(x-pos, y-pos, theta (rotation), kappa (curvature))

    float velocitySq = 2.0 * acceleration * s + initialVelocity * initialVelocity;
    float velocity = max(smallV, sqrt(max(0.0, velocitySq)));
    maxVelocity = max(maxVelocity, velocity);
    maxLateralAcceleration = max(maxLateralAcceleration, abs(pathSample.w * velocity * velocity));

    float time = 2.0 * s / (initialVelocity + velocity) + initialTime;

    float dCurv = pathSampleCurvRates[i] * velocity;
    if (dCurv > dCurvatureMax) return -1.0;

    float cost = sampleDynamicCost(pathSample, time, velocity, acceleration);
    if (cost < 0.0) return cost;

    averageDynamicCost += cost;
    if (averageDynamicCost / numSamples_f >= abandonThreshold) return -1.0;

    s += ds;
  }

  averageDynamicCost /= numSamples_f;

  // Apply speeding penality if any velocity along the trajectory is over the speed limit
  averageDynamicCost += step(speedLimit, maxVelocity) * speedLimitPenalty;

  // Apply hard acceleration/deceleration penalties if the acceleration/deceleration exceeds the soft limits
  averageDynamicCost += step(accelerationProfiles[2] + 0.0001, acceleration) * hardAccelerationPenalty;
  averageDynamicCost += (1.0 - step(accelerationProfiles[3], acceleration)) * hardDecelerationPenalty;

  // Penalize lateral acceleration
  averageDynamicCost += step(softLateralAccelerationLimit, maxLateralAcceleration) * softLateralAccelerationPenalty;
  averageDynamicCost += linearLateralAccelerationPenalty * maxLateralAcceleration;

  return averageDynamicCost;
}

vec3 calculateAVT(int accelerationIndex, float initialVelocity, float initialTime, float pathLength) {
  float initialVelocitySq = initialVelocity * initialVelocity;
  float acceleration = calculateAcceleration(accelerationIndex, initialVelocitySq, pathLength);

  float finalVelocitySq = 2.0 * acceleration * pathLength + initialVelocitySq;
  float finalVelocity = max(smallV, sqrt(max(0.0, finalVelocitySq)));

  float finalTime = initialTime;

  if (acceleration == 0.0) {
    finalTime += pathLength / finalVelocity;
  } else if (finalVelocitySq <= 0.0) { // Calculate final time if the vehicle stops before the end of the trajectory
    float distanceLeft = pathLength - (smallV * smallV - initialVelocitySq) / (2.0 * acceleration);
    finalTime += (finalVelocity - initialVelocity) / acceleration + distanceLeft / smallV;
  } else {
    finalTime += 2.0 * pathLength / (finalVelocity + initialVelocity);
  }

  return vec3(acceleration, finalVelocity, finalTime);
}

`,md=`

int sampleCubicPath(vec4 start, vec4 end, vec4 cubicPathParams) {
  float p0 = start.w;
  float p1 = cubicPathParams.x;
  float p2 = cubicPathParams.y;
  float p3 = end.w;
  float sG = cubicPathParams.z;

  if (sG <= 0.0) return 0;

  int numSamples = int(ceil(sG / pathSamplingStep)) + 1;

  float sG_2 = sG * sG;
  float sG_3 = sG_2 * sG;

  float a = p0;
  float b = (-5.5 * p0 + 9.0 * p1 - 4.5 * p2 + p3) / sG;
  float c = (9.0 * p0 - 22.5 * p1 + 18.0 * p2 - 4.5 * p3) / sG_2;
  float d = (-4.5 * (p0 - 3.0 * p1 + 3.0 * p2 - p3)) / sG_3;

  pathSamples[0] = start;

  float ds = sG / float(numSamples - 1);
  float s = ds;
  vec2 dxy = vec2(0);
  vec2 prevCosSin = vec2(cos(start.z), sin(start.z));

  for (int i = 1; i < numSamples; i++) {
    float rot = (((d * s / 4.0 + c / 3.0) * s + b / 2.0) * s + a) * s + start.z;
    float curv = ((d * s + c) * s + b) * s + a;

    vec2 cosSin = vec2(cos(rot), sin(rot));
    dxy = dxy * vec2(float(i - 1) / float(i)) + (cosSin + prevCosSin) / vec2(2 * i);

    pathSamples[i] = vec4(dxy * vec2(s) + start.xy, rot, curv);
    pathSampleCurvRates[i] = b + s * (2.0 * c + 3.0 * d * s);

    s += ds;
    prevCosSin = cosSin;
  }

  return numSamples;
}

`,gd=`

int sampleQuinticPath(vec4 start, vec4 end, vec4 quinticPathParams) {
  float p0 = start.w;
  float p1 = dCurvVehicle;
  float p2 = ddCurvVehicle;
  float p3 = quinticPathParams.x;
  float p4 = quinticPathParams.y;
  float p5 = end.w;
  float sG = quinticPathParams.z;

  if (sG <= 0.0) return 0;

  int numSamples = int(ceil(sG / pathSamplingStep)) + 1;

  float sG_2 = sG * sG;
  float sG_3 = sG_2 * sG;

  float a = p0;
  float b = p1;
  float c = p2 / 2.0;
  float d = (-71.875 * p0 + 81.0 * p3 - 10.125 * p4 + p5 - 21.25 * p1 * sG - 2.75 * p2 * sG_2) / sG_3;
  float e = (166.5 * p0 - 202.5 * p3 + 40.5 * p4 - 4.5 * p5 + 45.0 * p1 * sG + 4.5 * p2 * sG_2) / (sG_2 * sG_2);
  float f = (-95.625 * p0 + 121.5 * p3 - 30.375 * p4 + 4.5 * p5 - 24.75 * p1 * sG - 2.25 * p2 * sG_2) / (sG_2 * sG_3);

  pathSamples[0] = start;

  float ds = sG / float(numSamples - 1);
  float s = ds;
  vec2 dxy = vec2(0);
  vec2 prevCosSin = vec2(cos(start.z), sin(start.z));

  for (int i = 1; i < numSamples; i++) {
    float rot = (((((f * s / 6.0 + e / 5.0) * s + d / 4.0) * s + c / 3.0) * s + b / 2.0) * s + a) * s + start.z;
    float curv = ((((f * s + e) * s + d) * s + c) * s + b) * s + a;

    vec2 cosSin = vec2(cos(rot), sin(rot));
    dxy = dxy * vec2(float(i - 1) / float(i)) + (cosSin + prevCosSin) / vec2(2 * i);

    pathSamples[i] = vec4(dxy * vec2(s) + start.xy, rot, curv);
    pathSampleCurvRates[i] = b + s * (2.0 * c + s * (3.0 * d + s * (4.0 * e + 5.0 * f * s)));

    s += ds;
    prevCosSin = cosSin;
  }

  return numSamples;
}

`,mi=8,$o=4,Ko=2,ol={xyslMap:{type:"outputTexture"},slObstacleGrid:{type:"outputTexture",name:"slObstacleGridDilated"},slDynamicObstacleGrid:{type:"outputTexture",name:"slDynamicObstacleGrid",textureType:"2DArray"},accelerationProfiles:{type:"float",length:5},finalVelocityProfiles:{type:"float",length:3},xyCenterPoint:{type:"vec2"},xyGridCellSize:{type:"float"},slCenterPoint:{type:"vec2"},slGridCellSize:{type:"float"},laneCenterLatitude:{type:"float"},laneShoulderLatitude:{type:"float"},laneCostSlope:{type:"float"},lanePreference:{type:"float"},lanePreferenceDiscount:{type:"float"},obstacleHazardCost:{type:"float"},speedLimit:{type:"float"},speedLimitPenalty:{type:"float"},hardAccelerationPenalty:{type:"float"},hardDecelerationPenalty:{type:"float"},softLateralAccelerationLimit:{type:"float"},softLateralAccelerationPenalty:{type:"float"},linearLateralAccelerationPenalty:{type:"float"},dCurvatureMax:{type:"float"},pathSamplingStep:{type:"float"},rearAxleToCenter:{type:"float"},dynamicFrameTime:{type:"float"}};function al(t,e,n,i){return{accelerationProfiles:[3.5,-6.5,2,-3,0],finalVelocityProfiles:[.999*t.speedLimit,1,.01],xyCenterPoint:[e.x,e.y],xyGridCellSize:t.xyGridCellSize,slCenterPoint:[n.x,n.y],slGridCellSize:t.slGridCellSize,laneCenterLatitude:t.laneCenterLatitude,laneShoulderLatitude:t.laneShoulderLatitude,laneCostSlope:t.laneCostSlope,lanePreference:t.lanePreference,lanePreferenceDiscount:t.lanePreferenceDiscount,obstacleHazardCost:t.obstacleHazardCost,speedLimit:t.speedLimit,speedLimitPenalty:t.speedLimitPenalty,hardAccelerationPenalty:t.hardAccelerationPenalty,hardDecelerationPenalty:t.hardDecelerationPenalty,softLateralAccelerationLimit:t.softLateralAccelerationLimit,softLateralAccelerationPenalty:t.softLateralAccelerationPenalty,linearLateralAccelerationPenalty:t.linearLateralAccelerationPenalty,dCurvatureMax:t.dCurvatureMax,pathSamplingStep:t.pathSamplingStep,rearAxleToCenter:t.rearAxleToCenter,dynamicFrameTime:i}}function yd(t){return pd+(t=="cubic"?md:gd)+`

/* Calculate cost of a {cubic|quintic} path from vehicle to (stationConnectivity * numLatitudes * numAccelerations) nodes
 *   width: numLatitudes
 *   height: station * numAccelerations
 */
vec4 kernel() {
  ivec2 indexes = ivec2(kernelPosition * vec2(kernelSize));

  int latitude = indexes.x;
  int station = indexes.y / numAccelerations;
  int accelerationIndex = int(mod(float(indexes.y), float(numAccelerations)));

  vec4 pathStart = vec4(0, 0, 0, curvVehicle);
  vec4 pathEnd = texelFetch(lattice, ivec2(latitude, station), 0);

  vec4 pathParams = texelFetch(pathsFromVehicle, ivec2(latitude, station), 0);

  // If the path didn't converge
  if (pathParams.w == 0.0) return vec4(-1);

  int numSamples = ${t=="cubic"?"sampleCubicPath":"sampleQuinticPath"}(pathStart, pathEnd, pathParams);
  float pathLength = pathParams.z;

  if (numSamples < 2) return vec4(-1);

  float averageStaticCost = calculateAverageStaticCost(numSamples);
  if (averageStaticCost < 0.0) return vec4(-1);

  int slIndex = station * kernelSize.x + latitude;
  float hysteresisAdjustment = (slIndex == firstLatticePoint || slIndex == secondLatticePoint) ?  0.0 : hysteresisDiscount;
  averageStaticCost += hysteresisAdjustment;

  vec3 avt = calculateAVT(accelerationIndex, velocityVehicle, 0.0, pathLength);
  float acceleration = avt.x;
  float finalVelocity = avt.y;
  float finalTime = avt.z;

  float averageDynamicCost = calculateAverageDynamicCost(numSamples, pathLength, 0.0, velocityVehicle, acceleration, 1.0 / 0.0);
  if (averageDynamicCost < 0.0) return vec4(-1);

  averageDynamicCost += accelerationChangePenalty;

  // The cost of a trajectory is the average sample cost scaled by the path length
  float totalCost = (averageStaticCost + averageDynamicCost + ${t=="cubic"?"(cubicPathPenalty * velocityVehicle * velocityVehicle)":"0.0"}) * pathLength;
  ${t!="cubic"?"totalCost = -1.0;":""}

  return vec4(totalCost, finalVelocity, finalTime, ${t=="cubic"?"-2":"-1"});
}

`}var xd={setUp(){return[{kernel:yd("cubic"),output:{name:"cubicPathFromVehicleCosts"},uniforms:Object.assign({},ol,{lattice:{type:"sharedTexture"},pathsFromVehicle:{type:"outputTexture",name:"cubicPathsFromVehicle"},firstLatticePoint:{type:"int"},secondLatticePoint:{type:"int"},velocityVehicle:{type:"float"},curvVehicle:{type:"float"},numAccelerations:{type:"int"},cubicPathPenalty:{type:"float"},hysteresisDiscount:{type:"float"},accelerationChangePenalty:{type:"float"}})},{kernel:yd("quintic"),output:{name:"quinticPathFromVehicleCosts"},uniforms:Object.assign({},ol,{lattice:{type:"sharedTexture"},pathsFromVehicle:{type:"outputTexture",name:"quinticPathsFromVehicle"},firstLatticePoint:{type:"int"},secondLatticePoint:{type:"int"},velocityVehicle:{type:"float"},curvVehicle:{type:"float"},dCurvVehicle:{type:"float"},ddCurvVehicle:{type:"float"},numAccelerations:{type:"int"},hysteresisDiscount:{type:"float"},accelerationChangePenalty:{type:"float"}})}]},update(t,e,n,i,r,s,o){return[{width:t.lattice.numLatitudes,height:t.lattice.stationConnectivity*mi,uniforms:Object.assign({},al(t,n,i,o),{firstLatticePoint:r,secondLatticePoint:s,velocityVehicle:e.velocity,curvVehicle:e.curv,numAccelerations:mi,cubicPathPenalty:t.cubicPathPenalty,hysteresisDiscount:t.hysteresisDiscount,accelerationChangePenalty:t.accelerationChangePenalty})},{width:t.lattice.numLatitudes,height:t.lattice.stationConnectivity*mi,uniforms:Object.assign({},al(t,n,i,o),{firstLatticePoint:r,secondLatticePoint:s,velocityVehicle:e.velocity,curvVehicle:e.curv,dCurvVehicle:e.dCurv,ddCurvVehicle:e.ddCurv,numAccelerations:mi,hysteresisDiscount:t.hysteresisDiscount,accelerationChangePenalty:t.accelerationChangePenalty})}]}};const G0=pd+md+gd+`

vec4 kernel() {
  ivec2 indexes = ivec2(kernelPosition * vec2(kernelSize));

  int latitude = indexes.y;

  int numPerTime = numAccelerations * numVelocities;
  int timeIndex = indexes.x / numPerTime;
  indexes.x -= timeIndex * numPerTime;
  int velocityIndex = indexes.x / numAccelerations;
  int accelerationIndex = int(mod(float(indexes.x), float(numAccelerations)));

  int minLatitude = max(latitude - latitudeConnectivity / 2, 0);
  int maxLatitude = min(latitude + latitudeConnectivity / 2, numLatitudes - 1);

  int slIndex = station * numLatitudes + latitude;

  vec4 pathEnd = texelFetch(lattice, ivec2(latitude, station), 0);

  float minVelocity = velocityRanges[velocityIndex];
  float maxVelocity = velocityRanges[velocityIndex + 1];

  float minTime = timeRanges[timeIndex];
  float maxTime = timeRanges[timeIndex + 1];

  vec4 bestTrajectory = vec4(-1); // -1 means infinite cost
  float bestTerminalCost = 1.0 / 0.0;

  float hysteresisAdjustment = (slIndex == firstLatticePoint || slIndex == secondLatticePoint) ?  0.0 : hysteresisDiscount;

  for (int prevStation = max(station - stationConnectivity, 0); prevStation < station; prevStation++) {
    int stationConnectivityIndex = prevStation - station + stationConnectivity;

    for (int prevLatitude = minLatitude; prevLatitude <= maxLatitude; prevLatitude++) {
      int latitudeConnectivityIndex = prevLatitude - latitude + latitudeConnectivity / 2;
      int connectivityIndex = stationConnectivityIndex * latitudeConnectivity + latitudeConnectivityIndex;

      vec4 pathStart = texelFetch(lattice, ivec2(prevLatitude, prevStation), 0);
      vec4 cubicPathParams = texelFetch(cubicPaths, ivec2(slIndex, connectivityIndex), 0);

      // If the path didn't converge
      if (cubicPathParams.w == 0.0) continue;

      int numSamples = sampleCubicPath(pathStart, pathEnd, cubicPathParams);
      float pathLength = cubicPathParams.z;

      if (numSamples < 2) continue;

      float averageStaticCost = calculateAverageStaticCost(numSamples);
      if (averageStaticCost < 0.0) continue;

      averageStaticCost += hysteresisAdjustment;

      if (averageStaticCost * pathLength >= bestTerminalCost) continue;

      for (int prevVelocity = 0; prevVelocity < numVelocities; prevVelocity++) {
        for (int prevTime = 0; prevTime < numTimes; prevTime++) {
          for (int prevAccel = 0; prevAccel < numAccelerations; prevAccel++) {
            int avtIndex = prevTime * numPerTime + prevVelocity * numAccelerations + prevAccel;

            // Cost table entry:
            //   x: cost so far
            //   y: end velocity
            //   z: end time
            //   w: parent index
            vec4 costTableEntry = texelFetch(costTable, ivec3(avtIndex, prevLatitude, prevStation), 0);

            // If cost entry is infinity
            if (costTableEntry.x < 0.0 || averageStaticCost * pathLength + costTableEntry.x >= bestTerminalCost) continue;

            vec3 avt = calculateAVT(accelerationIndex, costTableEntry.y, costTableEntry.z, pathLength);
            float acceleration = avt.x;
            float finalVelocity = avt.y;
            float finalTime = avt.z;

            if (averageStaticCost * pathLength + costTableEntry.x + extraTimePenalty * finalTime >= bestTerminalCost) continue;

            // If the calculated final velocity does not match this fragment's velocity range, then skip this trajectory
            if (finalVelocity < minVelocity || finalVelocity >= maxVelocity) continue;

            // If the calculated final time does not match this fragment's time range, then skip this trajectory
            if (finalTime < minTime || finalTime >= maxTime) continue;

            float abandonThreshold = (bestTerminalCost - extraTimePenalty * finalTime - costTableEntry.x) / pathLength - averageStaticCost;
            float averageDynamicCost = calculateAverageDynamicCost(numSamples, pathLength, costTableEntry.z, costTableEntry.y, acceleration, abandonThreshold);
            if (averageDynamicCost < 0.0) continue;

            if (accelerationIndex != prevAccel)
              averageDynamicCost += accelerationChangePenalty;

            // The cost of a trajectory is the average sample cost scaled by the path length
            float totalCost = (averageStaticCost + averageDynamicCost) * pathLength + costTableEntry.x;

            float terminalCost = totalCost + extraTimePenalty * finalTime;
            if (terminalCost >= bestTerminalCost) continue;
            bestTerminalCost = terminalCost;

            int incomingIndex = avtIndex + numPerTime * numTimes * (prevLatitude + numLatitudes * prevStation);
            bestTrajectory = vec4(totalCost, finalVelocity, finalTime, incomingIndex);
          }
        }
      }
    }
  }

  if (station < stationConnectivity) {
    ivec2 slaIndex = ivec2(latitude, station * numAccelerations + accelerationIndex);

    vec4 costTableEntry = texelFetch(cubicPathFromVehicleCosts, slaIndex, 0);
    float terminalCost;

    if (costTableEntry.x >= 0.0) {
      terminalCost = costTableEntry.x + extraTimePenalty * costTableEntry.z;

      if (terminalCost < bestTerminalCost) {
        bestTerminalCost = terminalCost;
        bestTrajectory = costTableEntry;
      }
    }

    costTableEntry = texelFetch(quinticPathFromVehicleCosts, slaIndex, 0);

    if (costTableEntry.x >= 0.0) {
      terminalCost = costTableEntry.x + extraTimePenalty * costTableEntry.z;

      if (terminalCost < bestTerminalCost) {
        bestTerminalCost = terminalCost;
        bestTrajectory = costTableEntry;
      }
    }
  }

  return bestTrajectory;
}

`;var vd={setUp(){return{kernel:G0,output:{name:"graphSearch"},uniforms:Object.assign({},ol,{lattice:{type:"sharedTexture"},costTable:{type:"sharedTexture",textureType:"2DArray"},cubicPaths:{type:"outputTexture"},cubicPathFromVehicleCosts:{type:"outputTexture"},quinticPathFromVehicleCosts:{type:"outputTexture"},firstLatticePoint:{type:"int"},secondLatticePoint:{type:"int"},velocityVehicle:{type:"float"},curvVehicle:{type:"float"},dCurvVehicle:{type:"float"},ddCurvVehicle:{type:"float"},extraTimePenalty:{type:"float"},hysteresisDiscount:{type:"float"},accelerationChangePenalty:{type:"float"},numStations:{type:"int"},numLatitudes:{type:"int"},numAccelerations:{type:"int"},numVelocities:{type:"int"},numTimes:{type:"int"},stationConnectivity:{type:"int"},latitudeConnectivity:{type:"int"},velocityRanges:{type:"float",length:$o+1},timeRanges:{type:"float",length:Ko+1},station:{type:"int"}}),drawProxy:(t,e,n)=>{const i=mi*$o*Ko,r=e.meta.lattice.numLatitudes,s=new Float32Array(i*r*e.meta.lattice.numStations*4);for(let o=0;o<e.meta.lattice.numStations;o++)t.updateProgramUniforms(e,{station:o}),n(),t.gl.readPixels(0,0,i,r,t.gl.RGBA,t.gl.FLOAT,s,o*i*r*4),t.gl.bindTexture(t.gl.TEXTURE_2D_ARRAY,t.sharedTextures.costTable),t.gl.copyTexSubImage3D(t.gl.TEXTURE_2D_ARRAY,0,0,0,o,0,0,i,r);t._graphSearchCostTable=s}}},update(t,e,n,i,r,s,o){return{width:mi*$o*Ko,height:t.lattice.numLatitudes,meta:{lattice:t.lattice},uniforms:Object.assign({},al(t,n,i,o),{firstLatticePoint:r,secondLatticePoint:s,velocityVehicle:e.velocity,curvVehicle:e.curv,dCurvVehicle:e.dCurv,ddCurvVehicle:e.ddCurv,extraTimePenalty:t.extraTimePenalty,hysteresisDiscount:t.hysteresisDiscount,accelerationChangePenalty:t.accelerationChangePenalty,numStations:t.lattice.numStations,numLatitudes:t.lattice.numLatitudes,numAccelerations:mi,numVelocities:$o,numTimes:Ko,stationConnectivity:t.lattice.stationConnectivity,latitudeConnectivity:t.lattice.latitudeConnectivity,velocityRanges:[0,t.speedLimit/3,t.speedLimit*2/3,t.speedLimit,1e6],timeRanges:[0,10,1e6]})}}};const Qo=8,_d=4,bd=2;class z0{constructor(){this.previousStartStation=null,this.previousFirstLatticePoint=-1,this.previousSecondLatticePoint=-1,this.previousFirstAcceleration=-1,this.previousSecondLatticePoint=-1,performance.now();const e=[rd.setUp(),sd.setUp(),...ad.setUp(),ld.setUp(),hd.setUp(),...fd.setUp(),dd.setUp(),...xd.setUp(),vd.setUp()].map(n=>Object.assign({},n,{width:1,height:1}));this.gpgpu=new S0(e)}reset(){this.previousStartStation=null,this.previousFirstLatticePoint=-1,this.previousSecondLatticePoint=-1,this.previousFirstAcceleration=-1,this.previousSecondLatticePoint=-1}plan(e,n,i,r,s,o){const a=this._latticeStationInterval(),c=i.sampleStations(n,Math.ceil((this.config.spatialHorizon+a)/this.config.centerlineStationInterval)+1,this.config.centerlineStationInterval),l=U0(e),u=c.map(_e=>({pos:_e.pos.clone().applyMatrix3(l),rot:_e.rot-e.rot,curv:_e.curv})),h=new Float32Array(u.length*3),f=new THREE.Vector2(0,0),d=new THREE.Vector2(0,0);for(let _e=0;_e<u.length;_e++){const oe=u[_e],be=oe.pos;h[_e*3+0]=be.x,h[_e*3+1]=be.y,h[_e*3+2]=oe.rot,f.max(be),d.min(be)}const p=f.clone().sub(d),y=d.clone().add(f).divideScalar(2),x=Math.ceil((p.x+this.config.gridMargin*2)/this.config.xyGridCellSize),g=Math.ceil((p.y+this.config.gridMargin*2)/this.config.xyGridCellSize),m=this.config.spatialHorizon+a*2,_=new THREE.Vector2(this.config.spatialHorizon/2,0),b=Math.ceil(m/this.config.slGridCellSize),w=Math.ceil((this.config.roadWidth+this.config.gridMargin*2)/this.config.slGridCellSize);let v;this.previousStartStation===null||n+a/2>this.previousStartStation?(v=(this.previousStartStation===null?n:this.previousStartStation)+a,this.previousStartStation=v,this.previousFirstLatticePoint-=this.config.lattice.numLatitudes,this.previousSecondLatticePoint-=this.config.lattice.numLatitudes):v=this.previousStartStation;const E=this._buildLattice(i,v,e.rot,l),P=this.config.spatialHorizon/this.config.speedLimit/this.config.numDynamicFrames;for(const[_e,oe]of[rd.update(this.config,x,g,y,l,s),sd.update(this.config,b,w,_,y),...ad.update(this.config,b,w),ld.update(this.config,b,w,_,n,r,P,o),hd.update(this.config,x,g,y),...fd.update(this.config,e),dd.update(this.config,e),...xd.update(this.config,e,y,_,this.previousFirstLatticePoint,this.previousSecondLatticePoint,P),vd.update(this.config,e,y,_,this.previousFirstLatticePoint,this.previousSecondLatticePoint,P)].entries())this.gpgpu.updateProgram(_e,oe);this.gpgpu.updateSharedTextures({centerline:{width:u.length,height:1,channels:3,filter:"linear",data:h},costTable:{width:Qo*_d*bd,height:this.config.lattice.numLatitudes,depth:this.config.lattice.numStations,channels:4,textureType:"2DArray"},lattice:{width:this.config.lattice.numLatitudes,height:this.config.lattice.numStations,channels:4,data:E}}),this.gpgpu._graphSearchCostTable=null,this.gpgpu._dynamicObstacleGrid=null,performance.now();const z=this.gpgpu.run(),I=this.gpgpu._graphSearchCostTable,F=z[6],O=z[7],D=z[8];let C=[Number.POSITIVE_INFINITY],N;const k=I.length/4;for(let _e=0;_e<k;_e++){const oe=this._unpackCostTableIndex(_e),be=[I[_e*4],I[_e*4+1],I[_e*4+2],I[_e*4+3]];be[0]<0||(be[0]+=this._terminalCost(oe,be),be[0]<C[0]&&(N=_e,C=be))}const Y=new THREE.Matrix3().getInverse(l);let J=null,Q=null,Z=null,ce=-1,le=-1,Fe=-1,U=-1;return isFinite(C[0])&&([J,Q,Z,ce,le,Fe,U]=this._reconstructTrajectory(N,I,F,O,D,e,E),Q.forEach(_e=>{_e.pos=_e.pos.applyMatrix3(Y),_e.rot+=e.rot}),J.forEach(_e=>{_e.pos=_e.pos.applyMatrix3(Y),_e.rot+=e.rot})),this.previousFirstLatticePoint=ce,this.previousFirstAcceleration=le,this.previousSecondLatticePoint=Fe,this.previousSecondAcceleration=U,{path:J,fromVehicleSegment:Q,fromVehicleParams:Z,latticeStartStation:this.previousStartStation,dynamicObstacleGrid:{data:this.gpgpu._dynamicObstacleGrid,width:b,height:w}}}_buildLattice(e,n,i,r){const s=e.sampleStations(n,this.config.lattice.numStations,this._latticeStationInterval()),o=Math.floor(this.config.lattice.numLatitudes/2),a=new Float32Array(this.config.lattice.numStations*this.config.lattice.numLatitudes*4);let c=0;for(let l=0;l<s.length;l++){const u=s[l];for(let h=0;h<this.config.lattice.numLatitudes;h++){const f=(h-o)/o*this.config.roadWidth/2,d=u.rot-i,p=THREE.Vector2.fromAngle(d+Math.PI/2).multiplyScalar(f).add(u.pos.clone().applyMatrix3(r)),y=u.curv==0?0:1/(1/u.curv-f);a[c++]=p.x,a[c++]=p.y,a[c++]=d,a[c++]=y}}return a}_latticeStationInterval(){return this.config.spatialHorizon/this.config.lattice.numStations}_terminalCost([e,n,i,r,s],[o,a,c,l]){return e!=this.config.lattice.numStations-1&&a>.05?Number.POSITIVE_INFINITY:this.config.spatialHorizon/this.config.lattice.numStations*(e+1)*-this.config.stationReachDiscount+c*this.config.extraTimePenalty}_unpackCostTableIndex(e){if(e<0)return[-1,e+2,null,null,null];const n=Qo*_d,i=n*bd,r=this.config.lattice.numLatitudes*i,s=Math.floor(e/r);e-=s*r;const o=Math.floor(e/i);e-=o*i;const a=Math.floor(e/n);e-=a*n;const c=Math.floor(e/Qo),l=e%Qo;return[s,o,a,c,l]}_reconstructTrajectory(e,n,i,r,s,o,a){let c=this._unpackCostTableIndex(e);c.push(n[e*4+1]);const l=[c];let u=0;for(;c[0]>=0&&u++<100;){e=n[e*4+3],c=this._unpackCostTableIndex(e);const m=c[0]>=0?n[e*4+1]:o.velocity;c.push(m),l.unshift(c)}if(u>=100)throw new Error("Infinite loop encountered while reconstructing trajectory.");const h=[];let f=[],d=null;for(let m=0;m<l.length-1;m++){const[_,b,w,v,E,L]=l[m],[P,z,I,F,O,D]=l[m+1];let C,N;if(_<0){const ce={pos:new THREE.Vector2(0,0),rot:0,curv:o.curv},le=(P*this.config.lattice.numLatitudes+z)*4,Fe={pos:new THREE.Vector2(a[le],a[le+1]),rot:a[le+2],curv:a[le+3]};if(b==0){C=r[le+2];const U={p1:r[le],p2:r[le+1],sG:C};N=new nd(ce,Fe,U),d={type:"cubic",params:U}}else{C=s[le+2];const U={p3:s[le],p4:s[le+1],sG:C};N=new L0(ce,Fe,U),d={type:"quintic",params:U}}}else{const ce=(_*this.config.lattice.numLatitudes+b)*4,le=(P*this.config.lattice.numLatitudes+z)*4,Fe={pos:new THREE.Vector2(a[ce],a[ce+1]),rot:a[ce+2],curv:a[ce+3]},U={pos:new THREE.Vector2(a[le],a[le+1]),rot:a[le+2],curv:a[le+3]},_e=P*this.config.lattice.numLatitudes+z,be=(((_-P+this.config.lattice.stationConnectivity)*this.config.lattice.latitudeConnectivity+b-z+Math.floor(this.config.lattice.latitudeConnectivity/2))*this.config.lattice.numStations*this.config.lattice.numLatitudes+_e)*4;C=i[be+2],N=new nd(Fe,U,{p1:i[be],p2:i[be+1],sG:C})}const k=N.buildPath(Math.ceil(C/.25)),Y=L*L,J=(D*D-Y)/2/C,Q=C/(k.length-1);let Z=0;for(let ce=0;ce<k.length;ce++)k[ce].velocity=Math.sqrt(2*J*Z+Y),k[ce].acceleration=J,Z+=Q;_<0?f=k:(m>0&&k.shift(),h.push(...k))}let p=null,y=null,x=null,g=null;return l.length>=2&&(p=l[1][0]*this.config.lattice.numLatitudes+l[1][1],y=l[1][4]),l.length>=3&&(x=l[2][0]*this.config.lattice.numLatitudes+l[2][1],g=l[2][4]),[h,f,d,p,y,x,g]}}function U0({pos:t,rot:e}){const n=new THREE.Matrix3;n.set(1,0,-t.x,0,1,-t.y,0,0,1);const i=Math.cos(e),r=Math.sin(e),s=new THREE.Matrix3;return s.set(i,r,0,-r,i,0,0,0,1),s.multiply(n)}const wd=3.7;new THREE.Geometry,new THREE.Geometry,new THREE.Geometry;class cl{static hydrate(e){Object.setPrototypeOf(e,cl.prototype)}constructor(){this.anchors=[],this.centerlines=[],this.sampleLengths=[],this.arcLengths=[],this.leftBoundaries=[],this.rightBoundaries=[]}get centerline(){return[].concat(...this.centerlines)}get leftBoundary(){return[].concat(...this.leftBoundaries)}get rightBoundary(){return[].concat(...this.rightBoundaries)}get arcLength(){return this.arcLengths.reduce((e,n)=>e+n,0)}sampleStations(e,n,i){const r=[];let s=0,o=0,a=0,c=e;for(;a+this.arcLengths[s]<c;)if(a+=this.arcLengths[s],++s>=this.arcLengths.length)return r;for(let l=0;l<n;l++){let u=this.sampleLengths[s][o];for(;a+u<c;){if(a+=u,++o>=this.sampleLengths[s].length&&(o=0,++s>=this.sampleLengths.length))return r;u=this.sampleLengths[s][o]}const[h,f,d,p]=this.anchorsForSplineIndex(s),y=(o+(c-a)/u)/this.sampleLengths[s].length,x=gi(y,h,f,d,p),g=Sd(y,h,f,d,p),m=Math.atan2(g.y,g.x),_=H0(y,h,f,d,p);r.push({pos:x,rot:m,curv:_}),c+=i}return r}stationLatitudeFromPosition(e,n=null){const[i,r,s,o]=this._findClosestSample(e,n);if(i===void 0)return[0,0,0];let a,c,l,u;if(i==0&&r==0)a=this.centerlines[i][r],c=this.centerlines[i][r+1],l=0,u=this.sampleLengths[i][r];else if(i==this.centerlines.length-1&&r==this.centerlines[i].length-1)a=this.centerlines[i][r-1],c=this.centerlines[i][r],l=o,u=s;else{a=r==0?this.centerlines[i-1][this.centerlines[i-1].length-1]:this.centerlines[i][r-1],c=r==this.centerlines[i].length-1?this.centerlines[i+1][0]:this.centerlines[i][r+1];const y=this.centerlines[i][r];e.clone().sub(a).dot(y.clone().sub(a))/a.distanceToSquared(y)<1?(c=y,l=o,u=s):(a=y,l=s,u=s+this.sampleLengths[i][r])}const h=Math.clamp(e.clone().sub(a).dot(c.clone().sub(a))/a.distanceToSquared(c),0,1),f=c.clone().sub(a).multiplyScalar(h).add(a),d=l+(u-l)*h,p=Math.sign((c.x-a.x)*(e.y-a.y)-(c.y-a.y)*(e.x-a.x))*e.distanceTo(f);return[d,p,i]}_findClosestSample(e,n=null){let i=Number.POSITIVE_INFINITY,r,s,o,a,c=0,l=0,u=0,h=this.centerlines.length-1;if(n!==null&&(u=Math.max(0,n-2),h=Math.min(this.centerlines.length-1,n+2)),u>0){for(let f=0;f<u;f++)c+=this.arcLengths[f];l=c-this.sampleLengths[u-1][this.sampleLengths[u-1].length-1]}for(let f=u;f<=h;f++){const d=this.centerlines[f];for(let p=0;p<d.length;p++){const y=e.distanceToSquared(d[p]);y<i&&(i=y,r=f,s=p,o=c,a=l),l=c,c+=this.sampleLengths[f][p]}}return[r,s,o,a]}addAnchor(e,n=!0){const i=this.anchors.push(e)-1;if(n)for(let r=i-2;r<i;r++)this.resample(r)}updateAnchor(e,n){this.anchors[e]=n;for(let i=e-2;i<=e+1;i++)this.resample(i)}removeAnchor(e){if(e<0||e>=this.anchors.length)return;this.anchors.splice(e,1);const n=e<this.anchors.length?e:e-1;this.centerlines.splice(n,1),this.sampleLengths.splice(n,1),this.leftBoundaries.splice(n,1),this.rightBoundaries.splice(n,1),this.arcLengths.splice(n,1);for(let i=n-2;i<=n;i++)this.resample(i)}resample(e){if(e<0||e>this.anchors.length-2)return;const[n,i,r,s]=this.anchorsForSplineIndex(e),o=[],a=[],c=[],l=[];let u=null;const h=Math.max(10,Math.ceil(i.distanceTo(r)/1)),f=e==this.anchors.length-2?h+1:h;for(let d=0;d<f;d++){const p=d/h,y=gi(p,n,i,r,s);o.push(y),u!=null&&a.push(u.distanceTo(y)),u=y;const x=Sd(p,n,i,r,s),g=new THREE.Vector2(-x.y,x.x);c.push(g.clone().multiplyScalar(-wd).add(y)),l.push(g.clone().multiplyScalar(wd).add(y))}a.push(u.distanceTo(r)),this.centerlines[e]=o,this.sampleLengths[e]=a,this.leftBoundaries[e]=c,this.rightBoundaries[e]=l,this.arcLengths[e]=a.reduce((d,p)=>d+p,0)}resampleAll(){for(let e=0;e<this.anchors.length;e++)this.resample(e)}anchorsForSplineIndex(e){let n;return e==0?n=[this.anchors[0]].concat(this.anchors.slice(0,3)):n=this.anchors.slice(e-1,e+3),n[3]===void 0&&(n[3]=n[2]),n}}function Md(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function gi(t,e,n,i,r){return new THREE.Vector2(Md(t,e.x,n.x,i.x,r.x),Md(t,e.y,n.y,i.y,r.y))}function Sd(t,e,n,i,r){let o=t-1e-4,a=t+1e-4;o<0&&(o=0),a>1&&(a=1);const c=gi(o,e,n,i,r);return gi(a,e,n,i,r).sub(c).normalize()}function H0(t,e,n,i,r){t==0&&(t=1e-4),t==1&&(t=1-1e-4);let o=t-1e-4,a=t+1e-4;o<0&&(o=0),a>1&&(a=1);const c=gi(o,e,n,i,r),l=gi(t,e,n,i,r),u=gi(a,e,n,i,r);return(Math.atan2(u.y-l.y,u.x-l.x)-Math.atan2(l.y-c.y,l.x-c.x))/l.distanceTo(c)}class ea{static hydrate(e){Object.setPrototypeOf(e,ea.prototype),Object.setPrototypeOf(e.pos,THREE.Vector2.prototype)}static fromJSON(e){return new ea(new THREE.Vector2(e.p[0],e.p[1]),e.r,e.w,e.h)}constructor(e,n,i,r){this.pos=e,this.rot=n,this.width=i,this.height=r,this.updateVertices()}toJSON(){const e=n=>+n.toFixed(5);return{p:[e(this.pos.x),e(this.pos.y)],r:e(this.rot),w:e(this.width),h:e(this.height)}}updateVertices(){this.vertices=[];const e=Math.cos(this.rot),n=Math.sin(this.rot),i=this.width/2,r=this.height/2,s=i*e,o=i*n,a=r*e,c=r*n,l=[-s-c+this.pos.x,-o+a+this.pos.y],u=[-s+c+this.pos.x,-o-a+this.pos.y],h=[s+c+this.pos.x,o-a+this.pos.y],f=[s-c+this.pos.x,o+a+this.pos.y];this.vertices=[l[0],l[1],u[0],u[1],h[0],h[1],h[0],h[1],f[0],f[1],l[0],l[1]]}}const V0={w:2.5,h:1},k0={w:1.2,h:.6},W0={w:.6,h:.6};class ll{static hydrate(e){Object.setPrototypeOf(e,ll.prototype),Object.setPrototypeOf(e.startPos,THREE.Vector2.prototype),Object.setPrototypeOf(e.velocity,THREE.Vector2.prototype)}constructor(e,n,i,r){switch(this.type=e,this.startPos=n,this.velocity=i,this.parallel=r,e){case"cyclist":this.size=Object.assign({},k0);break;case"pedestrian":this.size=Object.assign({},W0);break;default:this.size=Object.assign({},V0)}r||([this.size.w,this.size.h]=[this.size.h,this.size.w])}positionAtTime(e){return this.velocity.clone().multiplyScalar(e).add(this.startPos)}positionsInTimeRange(e,n,i){const r=(n-e)/i,s=[];let o=e;for(let a=0;a<=i;a++)s.push(this.positionAtTime(o)),o+=r;return s}verticesInTimeRange(e,n,i){const r=this.positionsInTimeRange(e,n,i.numDynamicSubframes),s=[],o=this.size.w+i.dynamicHazardDilationS+i.collisionDilationS,a=this.size.h+i.dynamicHazardDilationL+i.collisionDilationL;r.forEach(u=>{const h=[-o+u.x,a+u.y],f=[o+u.x,a+u.y],d=[o+u.x,-a+u.y],p=[-o+u.x,-a+u.y];s.push(h[0],h[1],.75,f[0],f[1],.75,d[0],d[1],.75,d[0],d[1],.75,p[0],p[1],.75,h[0],h[1],.75)});const c=this.size.w+i.collisionDilationS,l=this.size.h+i.collisionDilationL;return r.forEach(u=>{const h=[-c+u.x,l+u.y],f=[c+u.x,l+u.y],d=[c+u.x,-l+u.y],p=[-c+u.x,-l+u.y];s.push(h[0],h[1],.25,f[0],f[1],.25,d[0],d[1],.25,d[0],d[1],.25,p[0],p[1],.25,h[0],h[1],.25)}),s}}function j0(){globalThis.THREE=w0;let t;try{t=new z0}catch(e){console.log("Error initializing path planner:"),console.log(e),self.postMessage({error:!0});return}self.onmessage=function(e){const{config:n,vehiclePose:i,vehicleStation:r,lanePath:s,startTime:o,staticObstacles:a,dynamicObstacles:c,reset:l}=e.data;cl.hydrate(s),a.forEach(u=>ea.hydrate(u)),c.forEach(u=>ll.hydrate(u)),l&&t.reset(),t.config=n;try{const{path:u,fromVehicleSegment:h,fromVehicleParams:f,latticeStartStation:d,dynamicObstacleGrid:p}=t.plan(i,r,s,o,a,c);self.postMessage({path:u,fromVehicleSegment:h,fromVehicleParams:f,vehiclePose:i,vehicleStation:r,latticeStartStation:d,config:n,dynamicObstacleGrid:p})}catch(u){console.log("PathPlannerWorker error"),console.log(u)}}}j0()})();
