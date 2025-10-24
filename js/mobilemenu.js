//JS互動-抓取控制顯示與隱藏行動選單及透明黑色遮罩所需元素
//取得漢堡選單按鈕
const navButton = document.getElementById('J_nav-button'); 
//取得行動選單
const mobileNav = document.getElementById('J_mobile-nav');
//取得選單關閉按鈕
const closeButton = document.getElementById('J_mobile-nav_close-btn');
//取得透明黑色遮罩
const mask = document.getElementById('J_mask');

//顯示與隱藏行動選單及透明黑色遮罩
function showAndHide() {
    //點擊漢堡選單按鈕，顯示透明黑色遮罩及行動選單
    navButton.addEventListener('click', function() {
    mask.style.display = 'block';
    mobileNav.style.display = 'block';
    })

    //點擊選單關閉按鈕，關閉透明黑色遮罩及行動選單
    closeButton.addEventListener('click', function() {
    mask.style.display = 'none';
    mobileNav.style.display = 'none';
    })
};
showAndHide();

//JS互動-抓取行動選單內下拉選單所需元素
//用事件冒泡監聽整個行動選單
const mobileMenu = document.getElementById('J_moblie-menu');
//點擊行動選單h3時，旁邊的span img會跟著換圖片"icon-arrow-up.svg"
const iconArrow = document.getElementById('icon-arrow');
//點擊行動選單內的Features或Company標題，顯示或隱藏對應的下拉選單
mobileMenu.addEventListener('click', function(event){
    //取得被點擊的目標
    const target = event.target;
    //判斷點擊目標是否為Features或Company標題
    if(target.tagName === 'H3'){
    //取得點擊目標的下一個元素(下拉選單)
    const dropdown = target.nextElementSibling;
    //切換下拉選單的顯示與隱藏
    if(dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
    //切換旁邊箭頭圖片
    const img = target.querySelector('span img'); 
    //判斷目前圖片是向下還是向上，並切換圖片
    if(img.getAttribute('src') === '/images/icon-arrow-down.svg'){
        img.setAttribute('src', '/images/icon-arrow-up.svg');
    } else {
        img.setAttribute('src', '/images/icon-arrow-down.svg');
    }
    }
});