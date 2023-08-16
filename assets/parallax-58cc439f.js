let t=0,a=0;function p(l,n,d){const r=n.getBoundingClientRect(),{clientX:i,clientY:o}=d;t=i-window.innerWidth/2,a=o-r.height/2,l.forEach(e=>{let s=e.dataset.speedx,c=e.dataset.speedy;e.dataset.speedx==.015&&e.dataset.speedy==.01?e.style.transform=`translateX(calc(-50% + ${t*s}%)) translateY(calc(-50% + ${a*c}%))`:e.style.transform=`
          translateX(calc(0% + ${t*s}%)) 
          translateY(calc(0% + ${a*c}%))
          `})}export{p as parallaxReachOut};
