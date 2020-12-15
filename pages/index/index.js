//index.js
//获取应用实例
const app = getApp()
Page({
 
  data: {
    imgUrls: [                   
      '../../public/img/goodsDetail/goods.png',
      '../../public/img/goodsDetail/goods.png',
      '../../public/img/goodsDetail/goods.png',
     
  ],
  indicatorDots: true,
  autoplay: true,
  interval: 5000,
  duration: 1300,
 
    cateItems:[
      {
        cate_id:1,
        cate_name:'学生食堂',
        children: [
       
          { 
            child_id: 1, 
            name: '烤冷面', 
            text:"",
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/klm.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '米线', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/mx.png"  
          },
          { 
            child_id: 3, 
            name: '杂粮煎饼', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/zljb.jpg"  
          },
          { 
            child_id: 4, 
            name: '五谷鱼粉', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/wgyf.jpg"  
          }
        ]
      },
      
      {
        cate_id:2,
        cate_name:'教工食堂',
        children: [
       
          { 
            child_id: 1, 
            name: '小笼包', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/xlb.jpeg" 
          }, 
          { 
            child_id: 2, 
            name: '酱香饼', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/jxb.jpg"  
          }, 
          { 
            child_id: 3, 
            name: '重庆小面', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/cqxm.jpg"
          }, 
          { 
            child_id: 4, 
            name: '肉沫拌面', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/rmbm.jpg"  
          }
        ]
      },
      {
        cate_id:3,
        cate_name:'西点房',
        children: [
       
          { 
            child_id: 1, 
            name: '巧克力布丁', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/qklbd.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '三明治', 
            image: "cloud://breakfast-2g1m3rj408423bcd.6272-breakfast-2g1m3rj408423bcd-1303848850/food/smz.jpg"  
          }, 
      
        ]
      },
      {
        cate_id: 4,
        cate_name: '西餐厅'
        
      },
     
    ],
    curNav:1,
    curIndex:0
  },
 
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
  },
  imgH:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh=e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw=e.detail.width;
    var swiperH=winWid*imgh/imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
        Hei:swiperH　　　　　　　　//设置高度
    })
},

})
  
  

