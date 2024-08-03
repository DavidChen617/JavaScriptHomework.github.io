
window.addEventListener('click', (e) => { console.log(e.target) })
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
document.querySelector('.close-btn').addEventListener('click', function (event) {
    console.log(event.target)
    console.log(this)

    if (event.target == this) {
        closeModal();
    }
});



// 都會選取到父層
document.querySelectorAll('.buy-iphone-tail-item .exChangeplan,.buy-iphone-tail-item .no-exChange,.buy-iphone-tail-item .exChangeplan-how-to-work').forEach(item => {
    item.addEventListener('click', (e) => {

        let target = e.target.closest('.exChangeplan, .buy-iphone-tail-item .no-exChange,.exChangeplan-how-to-work');
        console.log(target);

        if (target.classList.contains('exChangeplan')) {

            document.querySelector('.postalInput').style.display = 'block';


        }
        else if (target.classList.contains('no-exChange')) {
            document.querySelector('.postalInput').style.display = 'none';


        }
        else {
            document.getElementById('modal').style.display = 'block';
        }
    });
});

document.querySelectorAll('.colornav-item').forEach(item => {
    item.addEventListener('mouseover', (e) => {
        const label = item.querySelector('.colornav-label').textContent;
        document.querySelector('.sapn-color').textContent = label;
    });

    item.addEventListener('mouseout', () => {
        document.querySelector('.sapn-color').textContent = '';
    });
});



const caoacitGroup = document.querySelector('.caoacity-group');

createPrimaryImg(); //桌機 幻燈片

function caoacity(tar) { //容量動態變動

    caoacitGroup.textContent = "";
    let node;
    if (tar == 'Pro15') {

        const template = document.querySelector('#Pro15');

        node = template.content.querySelector('#caoacity-node-15pro').cloneNode(true);
    }
    else {
        const template = document.querySelector('template#ProMax15');

        node = template.content.querySelector('#caoacity-node-15proMax').cloneNode(true);
    }

    caoacitGroup.appendChild(node);

}

function slideshowPro15(e) { //幻燈片動態變動

    // console.dir(e.target.parentElement.parentElement.parentElement.childNodes['carousel-inner-pc'].textContent)


    // const slideshow = document.querySelector('.slideshow');
    // const carouse = slideshow.querySelector('#carouselExampleControls');
    // if (carouse) {
    //     carouse.remove();  // 移除整个 .slideshow 节点
    // };
    // const template = document.querySelector('.template-slideshow');
    // const clone = template.content.querySelector('#carouselExampleControls').cloneNode(true);
    // slideshow.append(clone);
}


document.addEventListener('scroll', function () {
    var sticky = document.querySelector('.sticky');
    var triggerPoint = 150; // 設定顯示點位置，例如 300px

    if (window.scrollY >= triggerPoint) {
        sticky.classList.add('visible');
    } else {
        sticky.classList.remove('visible');
    }
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.querySelectorAll('.color').forEach(box => {
    box.addEventListener('click', () => {
        // 移除所有 .box 元素的 active 類別
        document.querySelectorAll('.color').forEach(b => b.classList.remove('active'));

        // 將點擊的 .box 元素添加 active 類別
        box.classList.add('active');
    });
});


// 监听所有 .caoacity- 元素的点击事件
document.querySelectorAll('[class^="caoacity-"]').forEach(box => {

    box.addEventListener('click', (e) => {
        const target = e.target;

        document.querySelectorAll('.caoacity-').forEach(b => {
            b.classList.remove('active');

        });

        target.classList.add('active');

        const price = target.querySelector('.price-point').textContent;

        stickyPrice.textContent = price;


    });
});

const stickyTitle = document.querySelector('.sticky-header-title');
const stickyPrice = document.querySelector('.sticky-header-price');

// ==========================
const select15Pro = document.querySelectorAll('.buy-iphone-body-column-item-15Pro');

// Helper function to update display content
function updateDisplay(price, title) {
    // console.log(price,title)
    const priceDisplay = document.querySelector('.price-display');
    const titleDisplay = document.querySelector('.title-display');


    console.log(title)
    priceDisplay.textContent = `NT$${price}起`;
    titleDisplay.textContent = title;

    stickyPrice.textContent = `NT$${price}起`;
    stickyTitle.textContent = title;


}

// Event handler function
function handleClick(event) {
    const item = event.target.closest('.buy-iphone-body-column-item-15Pro');
    console.log(item);
    if (item) {
        // Remove active class from all items
        select15Pro.forEach(box => box.classList.remove('active'));

        // Add active class to clicked item
        item.classList.add('active');

        // Update display content
        const radioInput = item.querySelector('input[type="radio"]');
        console.log(radioInput);
        if (radioInput) {
            const price = radioInput.getAttribute('data-price');
            const title = radioInput.getAttribute('data-title');
            updateDisplay(price, title);

            // Call other functions
            caoacity(item.getAttribute('data-id'));
            slideshowPro15(event);

        }
    }
}
// creatPrimaryImg();
// Attach event handler to all items
select15Pro.forEach(box => box.addEventListener('click', handleClick));


//=====================
document.addEventListener('DOMContentLoaded', () => {
    const part1 = document.querySelector('.select-color');
    const part2 = document.querySelector('.how-much-storage-space');
    const part3 = document.querySelector('.buy-iphone-tail-item');
    const part4 = document.querySelector('.caoacity-group');
    // console.log(part4)
    // 設置部分2、3和4的禁用狀態
    function setDisabledState(disabled) {
        if (disabled) {
            // console.log('true')
            part1.classList.add('disabled');
            part2.classList.add('disabled');
            part3.classList.add('disabled');
            part4.classList.add('disabled');
            // console.log(part4 + '被關了')
        } else {
            // console.log(part4 + '打開了')
            part1.classList.remove('disabled');
            part2.classList.remove('disabled');
            part3.classList.remove('disabled');
            part4.classList.remove('disabled');
        }
    }

    // 初始化設置為禁用狀態
    setDisabledState(true);
    // 監聽部分1的選擇狀態Ｆ
    select15Pro.forEach(item => {
        item.addEventListener('click', () => {
            setDisabledState(false);

            // console.log(part5)
        });
    });

});


//pic  手機裝置


const carouselUrl = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0loc2FoMjNHVy9XNkZuMkNHZ1ZMYTVYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RqNmtrN2xOOEt0YzdDN1YyR3pXNTcwQktjMmh6SzVQWUdWM3NIWmg0YTZZPQ==&traceId=1';

document.querySelector('.carousel-img1').src = carouselUrl;


const carouse2Url = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL2RmOUZ0bkRhSmo2WHI5WEJWZ2lWZVpYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3Qzelc5NlJHdW9PTGxCYUtQNGFGY0hwVjU4bDBtQXdmcWJhYjA2TkplaXFVPQ==&traceId=1';

document.querySelector('.carousel-img2').src = carouse2Url;


const carouse3Url = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0loc2FoMjNHVy9XNkZuMkNHZ1ZMYTVYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RqNmtrN2xOOEt0YzdDN1YyR3pXNTcwQktjMmh6SzVQWUdWM3NIWmg0YTZZPQ==&traceId=1';

document.querySelector('.carousel-img3').src = carouse3Url;


const carouse4Url = 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_AV2?wid=724&hei=488&fmt=jpeg&qlt=95&.v=1693080287141';

document.querySelector('.carousel-img4').src = carouse4Url;

//pic 
//顏色

const primaryColor = 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-naturaltitanium-202309?wid=204&amp;hei=204&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385156';

document.querySelector('#primary').src = primaryColor;



const blueColor = 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-bluetitanium-202309?wid=204&amp;amp;hei=204&amp;amp;fmt=jpeg&amp;amp;qlt=90&amp;amp;.v=1692895385157';

document.querySelector('#blue').src = blueColor;


const whiteColor = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-whitetitanium-202309?wid=204&amp;amp;hei=204&amp;amp;fmt=jpeg&amp;amp;qlt=90&amp;amp;.v=1692895385155";

document.querySelector('#white').src = whiteColor;


const blackColor = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-blacktitanium-202309?wid=204&amp;amp;hei=204&amp;amp;fmt=jpeg&amp;amp;qlt=90&amp;amp;.v=1692895384718";

document.querySelector('#black').src = blackColor;


//pic

// const iphone1Url = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1';

// const iphone2Url = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL2RmOUZ0bkRhSmo2WHI5WEJWZ2lWZVpYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3Qzelc5NlJHdW9PTGxCYUtQNGFGY0hwVjU4bDBtQXdmcWJhYjA2TkplaXFVPQ==&traceId=1';


// const iphone3Url = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0loc2FoMjNHVy9XNkZuMkNHZ1ZMYTVYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RqNmtrN2xOOEt0YzdDN1YyR3pXNTcwQktjMmh6SzVQWUdWM3NIWmg0YTZZPQ==&traceId=1';


// const iphone4Url = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL2xvUnBuYWV4cEhMS1BPZjdQeWJZVnBYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RIcnNzVDh6RFFYbklzdWhDVW5vRXk3bTN6OWFscEplRXJVNDhWeU9jWUtFPQ==&traceId=1';







const btn = document.querySelector('.add');
const display = document.querySelector('.display');

function createPrimaryImg() {
    const container = document.querySelector('.carousel-inner-pc'); //裝顏色相片的容器
    const selectColorEl = document.querySelector('.template-carousel-primaryColor').content
        .querySelector('.primaryColor')
        .cloneNode(true);
    // console.log(selectColorEl)
    container.textContent = "";

    container.appendChild(selectColorEl);
    console.log('進來了')

    const primaryImgUrl1 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1';

    const primaryImgUrl2 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL2RmOUZ0bkRhSmo2WHI5WEJWZ2lWZVpYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3Qzelc5NlJHdW9PTGxCYUtQNGFGY0hwVjU4bDBtQXdmcWJhYjA2TkplaXFVPQ==&traceId=1';


    const primaryImgUrl3 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0loc2FoMjNHVy9XNkZuMkNHZ1ZMYTVYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RqNmtrN2xOOEt0YzdDN1YyR3pXNTcwQktjMmh6SzVQWUdWM3NIWmg0YTZZPQ==&traceId=1';


    const primaryImgUrl4 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL2xvUnBuYWV4cEhMS1BPZjdQeWJZVnBYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RIcnNzVDh6RFFYbklzdWhDVW5vRXk3bTN6OWFscEplRXJVNDhWeU9jWUtFPQ==&traceId=1';

    // console.log(document.querySelector('.primaryColor1'))

    document.querySelector('#primaryColor1').src = primaryImgUrl1;
    document.querySelector('#primaryColor2').src = primaryImgUrl2;
    document.querySelector('#primaryColor3').src = primaryImgUrl3;
    document.querySelector('#primaryColor4').src = primaryImgUrl4;
}


function createBlueImg() {
    const container = document.querySelector('.carousel-inner-pc'); //裝顏色相片的容器
    const selectColorEl = document.querySelector('.template-carousel-blueColor').content
        .querySelector('.blueColor')
        .cloneNode(true);
    container.textContent = "";
    container.appendChild(selectColorEl);

    const blueImgUrl1 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT3B3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSncvTitpdit2K0pPbnlhL04zRlVpb29BPT0=&traceId=1';


    const blueImgUrl2 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyTzBUcHByTUhHbE9qS2hVejA2Vzk2M0tyeklvaXVkOCtBWFpMeWRrK0lya3lwU2htSWFYNUxrcUx0RW1zN3h2QzNJMlJrV2FWNTZZV0JjQTRReG1NdThRPT0=&traceId=1';


    const blueImgUrl3 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT25hRlBISGtSY21yRmFhS24xOU1mRWFyeklvaXVkOCtBWFpMeWRrK0lya3lwU2htSWFYNUxrcUx0RW1zN3h2QzMwNnhpdUJnd0QxYk5raUFOTCs1K21BPT0=&traceId=1';


    const blueImgUrl4 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT0ZpOVRraUptMWVNajRXK05xdHlzazZyeklvaXVkOCtBWFpMeWRrK0lya3lwU2htSWFYNUxrcUx0RW1zN3h2QzNGTXltRnlCdHhadDhRRzZpOXdkeWxRPT0=&traceId=1';


    document.querySelector('#blueColor1').src = blueImgUrl1;
    document.querySelector('#blueColor2').src = blueImgUrl2;
    document.querySelector('#blueColor3').src = blueImgUrl3;
    document.querySelector('#blueColor4').src = blueImgUrl4;

}

function createWhiteImg() {
    const container = document.querySelector('.carousel-inner-pc'); //裝顏色相片的容器

    const selectColorEl = document.querySelector('.template-carousel-whiteColor').content
        .querySelector('.whiteColor')
        .cloneNode(true);
    container.textContent = "";
    container.appendChild(selectColorEl);
    const whiteImgUrl1 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemN5bURtdG84aElEZERZa0lIV3FCN1lBPT0=&traceId=1';

    const whiteImgUrl2 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNUNUcEx1KzZ4TU5aSmJ4VzBKZWFPSGppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9XNVZCekptOVp3bldoZUNpK3BudFFnPT0=&traceId=1';


    const whiteImgUrl3 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNVpEeWhrZkdKWXBoNVhqVm8yYk9VTXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi93dUM3OHlyVzlyREJKNTVVOTZNZ1lnPT0=&traceId=1';


    const whiteImgUrl4 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNVpBUWF3RDkwNHZqdTNEb0VrUHNLd1RpOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9pSnZ5ZGc0Nk83a01iRVBkUXpDbU93PT0=&traceId=1';


    document.querySelector('#whiteColor1').src = whiteImgUrl1;
    document.querySelector('#whiteColor2').src = whiteImgUrl2;
    document.querySelector('#whiteColor3').src = whiteImgUrl3;
    document.querySelector('#whiteColor4').src = whiteImgUrl4;

}

function createBlackImg() {
    const container = document.querySelector('#carouselExampleControls .carousel-inner-pc'); //裝顏色相片的容器

    const selectColorEl = document.querySelector('.template-carousel-blackColor').content
        .querySelector('.blackColor')
        .cloneNode(true);
    container.textContent = "";
    container.appendChild(selectColorEl);

    const blackImgUrl1 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNnaGZTejMxa0hnUE1YYTBGeVJZdVBBPT0=&traceId=1';

    const blackImgUrl2 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQUNUcEx1KzZ4TU5aSmJ4VzBKZWFPSGppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9qV1U2Vmt3MHBMZzBGazk0bnloUEpBPT0=&traceId=1';


    const blackImgUrl3 = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQVpEeWhrZkdKWXBoNVhqVm8yYk9VTXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9NQllOblpUSkJRMnZ5WVpqUUxuOFF3PT0=&traceId=1';


    const blackImgUrl4 = ' https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQVpBUWF3RDkwNHZqdTNEb0VrUHNLd1RpOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9QOUJWemFhWEZHRFBGUDZlTUVHMXVRPT0=&traceId=1';


    document.querySelector('#blackColor1').src = blackImgUrl1;
    document.querySelector('#blackColor2').src = blackImgUrl2;
    document.querySelector('#blackColor3').src = blackImgUrl3;
    document.querySelector('#blackColor4').src = blackImgUrl4;

}

// 定義事件處理程序
const selectColorsHandlers = {
    primaryColor: () => { createPrimaryImg() },
    blueColor: () => { createBlueImg() },
    whiteColor: () => { createWhiteImg() },
    blackColor: () => { createBlackImg() },
};

// 獲取 ul 元素
const ulElement = document.querySelector('.colornav-items');



// 設置事件委託
ulElement.addEventListener('click', (event) => {

    const imgElement = event.target.closest('img');
    console.log(imgElement);

    if (imgElement) {
        const color = imgElement.getAttribute('data-color');
        console.log(color)
        const handler = selectColorsHandlers[color];

        if (handler) {
            handler();
            ColorIphone = handler();
        } else {
            console.log('Unknown color.');
        }
    }
});

const primaryImg = document.querySelector("#primary");
primaryImg.addEventListener('click', () => { createPrimaryImg() })


const blueImg = document.querySelector("#blue");
blueImg.addEventListener('click', () => { createBlueImg() })


const whiteImg = document.querySelector("#white");
whiteImg.addEventListener('click', () => { createWhiteImg() })


const blackImg = document.querySelector("#primary");
blackImg.addEventListener('click', () => { createBlackImg() })

