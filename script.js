let baseCharacterImage;
let baseCharacterLoaded = false;
let selectSkin = null;
let selectHair = null;
let selectBackHair = null;
let selectFace = null;
let selectClothing = null;
let selectAccessory = null;
let selectForeground = null;
let selectBackground = null;

function loadCharacter(){
    const canvas = document.getElementById('character-canvas');
    const ctx = canvas.getContext('2d');

    //Thiết lập kích thước của canvas
    const scaleFactor = window.innerHeight * 2;

    canvas.width= scaleFactor;
    canvas.height = scaleFactor;

    // Load hình ảnh nhân vật
    baseCharacterImage = new Image();
    baseCharacterImage.src = 'assets/characters/phong_des0.png';
    baseCharacterImage.onload = () => {
        console.log("Tải nhân vật thành công!");
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Xóa canvas trước khi vẽ lại
        
        // Vẽ nền trắng sau lưng hình ảnh nhân vật
        ctx.fillStyle = '#ffffff59';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(baseCharacterImage, 0, 0, canvas.width, canvas.height);
        baseCharacterLoaded = true;
    };

    baseCharacterLoaded = false;
}

function loadClothingOption(category){
    const clothingMenu = document.getElementById('clothing-menu');
    clothingMenu.innerHTML= '';
    
    let clothingItems = [];
    if(category === 'skin'){
        clothingItems = ['assets/clothing/skins/Phong_skin.png', 'assets/clothing/skins/Le_skin.png', 'assets/clothing/skins/Liz_skin.png', 'assets/clothing/skins/Cus_skin.png'];
    } else if(category === 'face'){
        clothingItems = ['assets/clothing/faces/Phong_normal.png', 'assets/clothing/faces/Phong_happy.png', 'assets/clothing/faces/Phong_angry.png', 'assets/clothing/faces/Phong_regret.png', 'assets/clothing/faces/Phong_sad.png', 'assets/clothing/faces/Phong_shy.png', 'assets/clothing/faces/Phong_surprised.png', 'assets/clothing/faces/Le_normal.png', 'assets/clothing/faces/Le_angry.png', 'assets/clothing/faces/Le_sad.png', 'assets/clothing/faces/Le_shy.png', 'assets/clothing/faces/Le_surprised.png', 'assets/clothing/faces/Liz_emotion_normal.png', 'assets/clothing/faces/Liz_emotion_angry.png', 'assets/clothing/faces/Liz_emotion_sad.png', 'assets/clothing/faces/Liz_emotion_shy.png', 'assets/clothing/faces/Liz_emotion_smile.png', 'assets/clothing/faces/Liz_emotion_suprised.png', 'assets/clothing/faces/Cus_emotion_normal.png', 'assets/clothing/faces/Cus_emotion_angry.png', 'assets/clothing/faces/Cus_emotion_sad.png', 'assets/clothing/faces/Cus_emotion_smile.png', 'assets/clothing/faces/Cus_emotion_surprised.png'];
    } else if(category === 'hair'){
        clothingItems = ['assets/clothing/hairs/Phong_hair_normal.png', 'assets/clothing/hairs/Phong_hair_ponytail.png', 'assets/clothing/hairs/Phong_hair_short.png', 'assets/clothing/hairs/Le_ normal.png', 'assets/clothing/hairs/Le_ponytail.png', 'assets/clothing/hairs/Le_wedding.png', 'assets/clothing/hairs/Liz_hair_normal.png', 'assets/clothing/hairs/Liz_hair_custom.png', 'assets/clothing/hairs/Cus_hair_normal.png', 'assets/clothing/hairs/Cus_hair_braidedbelt.png'];
    } else if(category === 'back-hair'){
        clothingItems = ['assets/clothing/back-hairs/Phong_hair_normal2.png', 'assets/clothing/back-hairs/Phong_hair_ponytail2.png'];
    } else if(category === 'clothing'){
        clothingItems = ['assets/clothing/clothings/Phong_clothing_normal.png','assets/clothing/clothings/Phong_clothing_hoodie.png','assets/clothing/clothings/Phong_clothing_summer.png','assets/clothing/clothings/Phong_clothing_wedding.png','assets/clothing/clothings/Phong_clothing_winter.png', 'assets/clothing/clothings/Le_clothing_normal.png', 'assets/clothing/clothings/Le_clothing_summer.png', 'assets/clothing/clothings/Le_clothing_wedding.png', 'assets/clothing/clothings/Le_clothing_winter.png', 'assets/clothing/clothings/Liz_clothing_normal.png', 'assets/clothing/clothings/Liz_clothing_shirt.png', 'assets/clothing/clothings/Liz_clothing_summer.png', 'assets/clothing/clothings/Liz_clothing_vest.png', 'assets/clothing/clothings/Liz_clothing_wedding.png', 'assets/clothing/clothings/Liz_clothing_winter.png', 'assets/clothing/clothings/Liz_clothing_wool.png', 'assets/clothing/clothings/Cus_clothing_normal.png', 'assets/clothing/clothings/Cus_clothing_summer.png', 'assets/clothing/clothings/Cus_clothing_wedding.png', 'assets/clothing/clothings/Cus_clothing_wool.png', 'assets/clothing/clothings/Cus_winter_summer.png'];
    } else if(category === 'accessory'){
        clothingItems = ['assets/clothing/accessories/strawhat.png', 'assets/clothing/accessories/bouquet.png', 'assets/clothing/accessories/hat.png'];
    } else if(category === 'foreground'){
        clothingItems = ['assets/clothing/foregrounds/sparkle.png', 'assets/clothing/foregrounds/heart.png', 'assets/clothing/foregrounds/mark.png', 'assets/clothing/foregrounds/point.png', 'assets/clothing/foregrounds/sad.png'];
    }

    clothingItems.forEach(itemSrc => {
        const img = document.createElement('img');
        img.src = itemSrc;
        img.classList.add('clothing-item');

        //Click chọn trang phục
        img.onclick = () => {
            if(category === 'skin'){
                selectSkin = (selectSkin === itemSrc) ? null : itemSrc;
            } else if(category === 'face'){
                selectFace = (selectFace === itemSrc) ? null : itemSrc;
            } else if (category === 'clothing') {
                selectClothing = (selectClothing === itemSrc) ? null : itemSrc;
            } else if(category === 'hair') {
                selectHair = (selectHair === itemSrc) ? null : itemSrc;
            } else if(category === 'back-hair'){
                selectBackHair = (selectBackHair === itemSrc) ? null : itemSrc;
            } else if (category === 'accessory') {
                selectAccessory = (selectAccessory === itemSrc) ? null : itemSrc;
            } else if (category === 'foreground') {
                selectForeground = (selectForeground === itemSrc) ? null : itemSrc;
            }
            redrawCharacter();
        };

        //Click lần nữa để xóa lựa chọn
        img.ondbclick = () => {
            if (category === 'skin' && selectSkin === itemSrc){
                selectSkin = null;
            } else if (category === 'face' && selectClothing === itemSrc) {
                selectClothing = null;
            } else if (category === 'clothing' && selectClothing === itemSrc) {
                selectClothing = null;
            } else if(category === 'hair' && selectHair === itemSrc) {
                selectHair = null;
            } else if(category === 'back-hair' && selectBackHair === itemSrc){
                selectBackHair = null;
            } else if (category === 'accessory' && selectAccessory === itemSrc) {
                selectAccessory = null;
            } else if (category === 'foreground' && selectForeground === itemSrc) {
                selectForeground = null;
            }
            redrawCharacter();
        };

        clothingMenu.appendChild(img);
    });
}

function loadBackgroundOption(){
    const clothingMenu = document.getElementById('clothing-menu');
    clothingMenu.innerHTML = '';

    const backgroundItems = ['assets/backgrounds/background1.png', 'assets/backgrounds/background2.png', 'assets/backgrounds/background3.png','assets/backgrounds/background4.png', 'assets/backgrounds/background5.png', 'assets/backgrounds/background6.jpg', 'assets/backgrounds/background7.jpg', 'assets/backgrounds/background8.png', 'assets/backgrounds/background10.jpg', 'assets/backgrounds/background11.jpg'];

    backgroundItems.forEach(itemSrc => {
        const img = document.createElement('img');
        img.src = itemSrc;
        img.classList.add('clothing-item');

        //Click chọn nền
        img.onclick = () => {
            selectBackground = (selectBackground === itemSrc) ? null : itemSrc;
            redrawCharacter();
        };

        //Click lần nữa để xóa lựa chọn
        img.ondbclick = () => {
            if(selectBackground === itemSrc) {
                selectBackground = null;
            }
            redrawCharacter();
        };

        clothingMenu.appendChild(img);
    });
}

//Hàm ẩn menu trước khi được chọn
function hideAllMenu(){
    const menu = document.querySelectorAll('.menu-container');
    menu.forEach(menu => {
        menu.classList.add('hidden');
    });
}

function selectCategory(category){
    hideAllMenu();

    const clothingMenu = document.getElementById('clothing-menu');
    clothingMenu.classList.remove('hidden');
    clothingMenu.innerHTML = '';
    
    //Hiển thị các item trong danh mục đã chọn
    if(category === 'background'){
        loadBackgroundOption();
    } else{
        loadClothingOption(category);
    }
}

function applyClothing(itemSrc, category){
    //Thêm item đã chọn lên canvas
    const canvas = document.getElementById('character-canvas');
    const ctx = canvas.getContext('2d');

    const clothingItem = new Image();
    clothingItem.src = itemSrc;
    clothingItem.onload = () => {
        //Cập nhật trạng thái của danh mục menu
        if(category === 'skin'){
            selectSkin = clothingItem;
        } else if (category === 'face'){
            selectFace = clothingItem;
        } else if (category === 'clothing'){
            selectClothing = clothingItem;
        } else if(category === 'hair'){
            selectHair = clothingItem;
        } else if(category === 'back-hair'){
            selectBackHair = clothingItem;
        } else if (category === 'accessory'){
            selectAccessory = clothingItem;
        } else if (category === 'foreground'){
            selectForeground = clothingItem;
        }

        //Vẽ lại với các mục đã chọn
        redrawCharacter();
    };
}

function applyBackground(itemSrc) {
    const canvas = document.getElementById('character-canvas');
    const ctx = canvas.getContext('2d');

    const backgroundImage = new Image();
    backgroundImage.src = itemSrc;
    backgroundImage.onload = () => {
        console.log("Đã tải nền thành công!", itemSrc);

        // Cập nhật trạng thái của nền đã chọn
        selectBackground = backgroundImage;

        // Vẽ lại toàn bộ hình ảnh
        redrawCharacter();
    };
}

function redrawCharacter(){
    const canvas = document.getElementById('character-canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);   //Xóa canvas

    // Vẽ nền trắng sau lưng hình ảnh nhân vật
    ctx.fillStyle = '#ffffff59'; // Màu trắng
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Vẽ background trước nếu có
    if(selectBackground){
        const backgroundImg = new Image();
        backgroundImg.src = selectBackground;
        backgroundImg.onload = () => {
            ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
        };
    }

    //Vẽ back-hair nếu có
    if(selectBackHair){
        const backHairImg = new Image();
        backHairImg.src = selectBackHair;
        backHairImg.onload = () => {
            ctx.drawImage(backHairImg, 0, 0, canvas.width, canvas.height);
        };
    }

    //Vẽ nhân vật
    if (baseCharacterLoaded) {
        ctx.drawImage(baseCharacterImage, 0, 0, canvas.width, canvas.height);

        if(selectSkin){
            const skinImage = new Image();
            skinImage.src = selectSkin;
            skinImage.onload = () => {
                ctx.drawImage(skinImage, 0, 0, canvas.width, canvas.height);
            };
        }
        if (selectFace) {
            const faceImage = new Image();
            faceImage.src = selectFace;
            faceImage.onload = () => {
                ctx.drawImage(faceImage, 0, 0, canvas.width, canvas.height);
            };
        }
        if (selectClothing) {
            //ctx.drawImage(selectClothing, 0, 0, canvas.width, canvas.height);
            const clothingImage = new Image();
            clothingImage.src = selectClothing;
            clothingImage.onload = () => {
                ctx.drawImage(clothingImage, 0, 0, canvas.width, canvas.height);
            };
        }
        if (selectHair) {
            const hairImage = new Image();
            hairImage.src = selectHair;
            hairImage.onload = () => {
                ctx.drawImage(hairImage, 0, 0, canvas.width, canvas.height);
            };
        }
        if (selectAccessory) {
            //ctx.drawImage(selectAccessories, 0, 0, canvas.width, canvas.height);
            const accessoryImage = new Image();
            accessoryImage.src = selectAccessory;
            accessoryImage.onload = () => {
                ctx.drawImage(accessoryImage, 0, 0, canvas.width, canvas.height);
            };
        }
        if(selectForeground) {
            const foregroundImage = new Image();
            foregroundImage.src = selectForeground;
            foregroundImage.onload = () => {
                ctx.drawImage(foregroundImage, 0, 0, canvas.width, canvas.height);
            };
        }
    }
}

function saveCharacter() {
    // Lưu hình ảnh của nhân vật hiện tại
    const canvas = document.getElementById('character-canvas');
    const link = document.createElement('a');
    link.download = 'character.png';
    link.href = canvas.toDataURL();
    link.click();
}

function resetCharacter() {
    // Tải lại các lựa chọn trang phục
    const canvas = document.getElementById('character-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    loadCharacter();
    selectSkin = null;
    selectHair = null;
    selectBackHair = null;
    selectFace = null;
    selectClothing = null;
    selectAccessory = null;
    selectBackground = null;
    selectForeground = null;
}

function loadImage(src){
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Tải ảnh ${src} thất bại!'));
    });
}

function randomCharacter(){
    const categories = {
        'background':['assets/backgrounds/background1.png', 'assets/backgrounds/background2.png', 'assets/backgrounds/background3.png','assets/backgrounds/background4.png', 'assets/backgrounds/background5.png', 'assets/backgrounds/background6.jpg', 'assets/backgrounds/background7.jpg', 'assets/backgrounds/background8.png', 'assets/backgrounds/background10.jpg', 'assets/backgrounds/background11.jpg'],
        'back-hair':['assets/clothing/back-hairs/Phong_hair_normal2.png', 'assets/clothing/back-hairs/Phong_hair_ponytail2.png'],
        'skin':['assets/clothing/skins/Phong_skin.png', 'assets/clothing/skins/Le_skin.png', 'assets/clothing/skins/Liz_skin.png', 'assets/clothing/skins/Cus_skin.png'],
        'face':['assets/clothing/faces/Phong_normal.png', 'assets/clothing/faces/Phong_happy.png', 'assets/clothing/faces/Phong_angry.png', 'assets/clothing/faces/Phong_regret.png', 'assets/clothing/faces/Phong_sad.png', 'assets/clothing/faces/Phong_shy.png', 'assets/clothing/faces/Phong_surprised.png', 'assets/clothing/faces/Le_normal.png', 'assets/clothing/faces/Le_angry.png', 'assets/clothing/faces/Le_sad.png', 'assets/clothing/faces/Le_shy.png', 'assets/clothing/faces/Le_surprised.png', 'assets/clothing/faces/Liz_emotion_normal.png', 'assets/clothing/faces/Liz_emotion_angry.png', 'assets/clothing/faces/Liz_emotion_sad.png', 'assets/clothing/faces/Liz_emotion_shy.png', 'assets/clothing/faces/Liz_emotion_smile.png', 'assets/clothing/faces/Liz_emotion_suprised.png', 'assets/clothing/faces/Cus_emotion_normal.png', 'assets/clothing/faces/Cus_emotion_angry.png', 'assets/clothing/faces/Cus_emotion_sad.png', 'assets/clothing/faces/Cus_emotion_smile.png', 'assets/clothing/faces/Cus_emotion_surprised.png'],
        'clothing':['assets/clothing/clothings/Phong_clothing_normal.png','assets/clothing/clothings/Phong_clothing_hoodie.png','assets/clothing/clothings/Phong_clothing_summer.png','assets/clothing/clothings/Phong_clothing_wedding.png','assets/clothing/clothings/Phong_clothing_winter.png', 'assets/clothing/clothings/Le_clothing_normal.png', 'assets/clothing/clothings/Le_clothing_summer.png', 'assets/clothing/clothings/Le_clothing_wedding.png', 'assets/clothing/clothings/Le_clothing_winter.png', 'assets/clothing/clothings/Liz_clothing_normal.png', 'assets/clothing/clothings/Liz_clothing_shirt.png', 'assets/clothing/clothings/Liz_clothing_summer.png', 'assets/clothing/clothings/Liz_clothing_vest.png', 'assets/clothing/clothings/Liz_clothing_wedding.png', 'assets/clothing/clothings/Liz_clothing_winter.png', 'assets/clothing/clothings/Liz_clothing_wool.png', 'assets/clothing/clothings/Cus_clothing_normal.png', 'assets/clothing/clothings/Cus_clothing_summer.png', 'assets/clothing/clothings/Cus_clothing_wedding.png', 'assets/clothing/clothings/Cus_clothing_wool.png', 'assets/clothing/clothings/Cus_winter_summer.png'],
        'hair':['assets/clothing/hairs/Phong_hair_normal.png', 'assets/clothing/hairs/Phong_hair_ponytail.png', 'assets/clothing/hairs/Phong_hair_short.png', 'assets/clothing/hairs/Le_ normal.png', 'assets/clothing/hairs/Le_ponytail.png', 'assets/clothing/hairs/Le_wedding.png', 'assets/clothing/hairs/Liz_hair_normal.png', 'assets/clothing/hairs/Liz_hair_custom.png', 'assets/clothing/hairs/Cus_hair_normal.png', 'assets/clothing/hairs/Cus_hair_braidedbelt.png'],
        'accessory':['assets/clothing/accessories/strawhat.png', 'assets/clothing/accessories/bouquet.png', 'assets/clothing/accessories/hat.png'],
        'foreground':['assets/clothing/foregrounds/sparkle.png', 'assets/clothing/foregrounds/heart.png', 'assets/clothing/foregrounds/mark.png', 'assets/clothing/foregrounds/point.png', 'assets/clothing/foregrounds/sad.png']
    };

    selectBackground = randomItem(categories['background']);
    selectBackHair = randomItem(categories['back-hair']);
    selectSkin = randomItem(categories['skin']);
    selectFace = randomItem(categories['face']);
    selectClothing = randomItem(categories['clothing']);
    selectHair = randomItem(categories['hair']);
    selectAccessory = randomItem(categories['accessory']);
    selectForeground = randomItem(categories['foreground']);

    redrawCharacter();
}

function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

window.onload = () => {
    loadCharacter();
};