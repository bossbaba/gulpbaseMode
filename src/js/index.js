console.log('index.js loading')
requirejs(['config'],()=>{
  requirejs(['jquery','header','footer'],($)=>{
    console.log($)
    console.log($('header'),'>>>>>index')
  })
})