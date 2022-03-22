const {
  containerWidth,
  registerNextClick,
 } = setup();

 const elements = Array.from(document.querySelectorAll('.element'));

//  registerNextClick(function (timestamp) {
//   const nextPositions = elements.map((element)=>{
//   const top = element.offsetTop;
//   const nextPosition = +((Math.sin(top + timestamp/1000) + 1) / 2 * containerWidth);
//   return nextPosition;
//    })
//   elements.forEach((element, index) => {
//     const nextPosition = nextPositions[index]
//     element.style.transform = `translateX(${nextPosition}px)`;
//   });
//  });

// registerNextClick(function (timestamp) {
//   const nextPositions = elements.map((element)=>{
//   const top = element.offsetTop;
//   const nextPosition = +((Math.sin(top + timestamp/1000) + 1) / 2 * containerWidth);
//   return nextPosition;
//    })
//   elements.forEach((element, index) => {
//     const top = element.offsetTop;
//     const nextPosition = +((Math.sin(top + timestamp/1000) + 1) / 2 * containerWidth);
//     requestAnimationFrame(()=>{
//       // all the reads happen, then all the writes happen
//       element.style.transform = `translateX(${nextPosition}px)`;
//     })
//   });
//  });


registerNextClick(function (timestamp) {
   elements.forEach((element, index)=>{
     fastdom.measure(()=>{
      const top = element.offsetTop;
      const nextPosition = +((Math.sin(top + timestamp/1000) + 1) / 2 * containerWidth);
      fastdom.mutate(()=>{
        element.style.transform = `translateX(${nextPosition}px)`;
      })
     })
   })
 });