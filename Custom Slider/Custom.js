
  let slider1=[
    {
      title:"A Beautiful Landscape",
      image:"https://picsum.photos/id/10/600/400",
    },
    {
      title:"Stationery on Table",
      image:"https://picsum.photos/id/20/600/400",
    },
    {
      title:"A Coffee Mug",
      image:"https://picsum.photos/id/30/600/400",
    },
    ]

    let sliderbl= ''
    slider1.forEach((i)=>{
      sliderbl +=`
      <div><img src=${i.image} title=" ${i.title}" ></div> 
      `
    })

    document.getElementById("mySlider").innerHTML=sliderbl

    $(".slider").bxSlider({
      autoControls: true,
      auto: true,
      pager: true,
      slideWidth: 600,
      mode: "fade",
      captions: true,
      speed: 1000
    });