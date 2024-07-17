(function () {
  initActive()
  bindEvenInit()
  var mycard = $('#mycard')
  
    let mycardTop = mycard&&mycard.offset()&&mycard.offset().top;
    // let height=$('.header').height()
    // console.log(mycardTop,height)
    window.onscroll = function () {
      var e = e || window.event;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop )
      if (scrollTop > mycardTop) {
        mycard.addClass('scroll')
      } else {
        mycard.removeClass('scroll')
      }
    }
 

  

  function initActive () {
    let root = document.querySelector(':root')
    var active = sessionStorage.getItem('wttandroid')
    
    
    if (active && active == 'true') { //非第一次登录 且是开灯(白色)
      $('#myRadio').removeClass('active')
      $('.navigation').removeClass('active')

      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#fff')
      root.style.setProperty('--headerCOlor', '#fff')
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
      root.style.setProperty('--headerFont', '#00283A' )
      root.style.setProperty('--fontColor', '#fff' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor', '#f4f5f7')
    } else { //第一次登录或是黑色时 默认变成黑色
      $('#myRadio').addClass('active')
      $('.navigation').addClass('active')
      
      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#00283A')
      root.style.setProperty('--headerCOlor', '#00283A')
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
      root.style.setProperty('--headerFont', '#fff' )
      root.style.setProperty('--fontColor', '#00283A' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor','#02162b' )
    }
  }



  $('#myRadio').click(function () {
    // h1
    let root = document.querySelector(':root')

    if ($('#myRadio').hasClass('active')) { //现在黑色变成白色
      sessionStorage.setItem('wttandroid', true)
      
      $('#myRadio').removeClass('active')
      $('.navigation').removeClass('active')

      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#fff')
      root.style.setProperty('--headerCOlor', '#fff')
      root.style.setProperty('--headerhover', 'rgb(255, 255, 255,.8)')
      root.style.setProperty('--headerFont', '#00283A' )
      root.style.setProperty('--fontColor', '#fff' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor', '#f4f5f7')

    } else {//现在白色变成黑色
      sessionStorage.setItem('wttandroid', false)
      
      $('#myRadio').addClass('active')
      $('.navigation').addClass('active')
      
      root.style.setProperty('--backColor', '#fff')
      root.style.setProperty('--borderline', '#00283A')
      root.style.setProperty('--headerCOlor', '#00283A')
      root.style.setProperty('--headerhover', 'rgb(0, 40, 58,.8)')
      root.style.setProperty('--headerFont', '#fff' )
      root.style.setProperty('--fontColor', '#00283A' )
      root.style.setProperty('--mainColor', '#ff8181' )
      root.style.setProperty('--bagColor','#02162b' )
    }
})

  

   
$('#zhezhao>.close').click(function () {
  console.log('遮罩层')
  if ($('#zhezhao').hasClass('active')) {
    $('#zhezhao').removeClass('active')
    document.getElementById('videoResumeC').pause();
  } else {
    $('#zhezhao').addClass('active')
  }
})
  
$('#minmenu').click(function () {
  console.log('遮罩层')
  if ($('#minmenu').hasClass('active')) {
    $('#minmenu').removeClass('active');
    $('.menu_list').removeClass('active');
    
  } else {
    $('#minmenu').addClass('active')
    $('.menu_list').addClass('active')
  }
})
  
  

  
  
  // loadding
  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      let opacity = $('.lodding-wrap').css('opacity');
      let timer = null;
      timer = opacity&&setInterval(() => {
        opacity-=0.1
        $('.lodding-wrap').css('opacity', opacity);
        console.log(opacity)
        if (opacity <= 0) {
          $('.lodding-wrap').css('display','none');
          clearInterval(timer)
        }
      }, 100);
     
    }
  }

  

            //锚点定位初始化
            function bindEvenInit(){
              $('.navbtn').bind("click touch",function () {
                //scrollTop 滚动到  $(this).attr('href')锚点关联id所在位置
                $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top-100)},500)
                return false
              })
            }
})()

document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // 阻止默认的右键菜单
  var customMenu = document.getElementById('customContextMenu');
  customMenu.style.display = 'block';
  customMenu.style.left = e.pageX + 'px';
  customMenu.style.top = e.pageY + 'px';
}, false);

// 点击空白处隐藏自定义菜单
window.addEventListener('click', function() {
  var customMenu = document.getElementById('customContextMenu');
  customMenu.style.display = 'none';
}, false);

function openLinksModal() {
  // 创建弹窗内容
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = `
        <a href="#" onclick="openLink('https://www.mcmod.cn/class/15446.html')">mc百科</a><br>
        <a href="#" onclick="openLink('https://www.curseforge.com/minecraft/mc-mods/elainalike')">curseforge</a><br>
        <a href="#" onclick="openLink('https://modrinth.com/mod/elainalike')">Modrinth</a><br>
        <button onclick="closeModal()">关闭</button>
    `;

  // 创建弹窗背景
  var modalBackground = document.createElement('div');
  modalBackground.style.position = 'fixed';
  modalBackground.style.top = '0';
  modalBackground.style.left = '0';
  modalBackground.style.width = '100%';
  modalBackground.style.height = '100%';
  modalBackground.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modalBackground.style.zIndex = '1000';
  modalBackground.style.display = 'none';
  modalBackground.appendChild(modalContent);

  // 将弹窗背景添加到body中
  document.body.appendChild(modalBackground);

  // 显示弹窗
  modalBackground.style.display = 'block';
}

function openLink(url) {
  // 打开链接
  window.open(url, '_blank');
  // 关闭弹窗
  closeModal();
}

function closeModal() {
  // 找到弹窗背景并移除
  var modalBackground = document.querySelector('div[style*="position: fixed"]');
  if (modalBackground) {
    modalBackground.parentNode.removeChild(modalBackground);
  }
}