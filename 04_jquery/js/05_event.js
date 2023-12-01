/**
 * mouseover/mouseout
 *  - 자식요소 접근시에도 이벤트발생
 * mouseenter/mouseleave
 *  - 자식요소 접근시에는 이벤트발생 안함
 */
$('.outer')
    // .mouseover(()=>{
    //     console.log('mouseover');
    // })
    // .mouseout(()=>{
    //     console.log('mouseout');
    // })
    // .mouseenter(()=>{
    //     console.log('mouseenter');
    // })
    // .mouseleave(()=>{
    //     console.log('mouseleave');
    // })
    // hover이벤트는 존재하지 않는다.
    .hover(()=>{
        console.log('mouseenter');
    }, () => {
        console.log('mouseleave');
    });

$(title).hover((e) => {
    $(e.target).addClass('reverse');
}, (e) => {
    $(e.target).removeClass('reverse');
});

$(counter).on('click', (e) => {
    let n = $(e.target).html();
    $(e.target).html(--n);

    if(n == 0)
    $(e.target).off('click'); // 이벤트핸들러 제거
});

//1회용
$(one).one('click', (e) => {
    console.log('🍖');
    $(e.target).html('🍖');
});

// trigger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); // 클릭이벤트 발생
});


// @실습문제
// $(memo).on('keyup', (e) => {
//     const textCnt = $(memo).get(0).value.length;
//     $(len).get(0).innerText = textCnt;
//     if(textCnt>30){
//         $(len).css('color', 'red');
//         $(memo).css('color', 'red');
//     } else {
//         $(len).css('color', 'black');
//         $(memo).css('color', 'black');
//     }
// });

// $('form[name=memoFrm]').on('submit', (e) => {
//     const textCnt = $(memo).get(0).value.length;
//     console.log(textCnt);
//     if(textCnt > 30){
//         alert('30자 이상의 메모는 제출할 수 없습니다.')
//         return false;
//     }
// });

$(memo).keyup((e) => {
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';
    const fontWeight = len > 30 ? '700' : 400;
    $("#len").html(len)
        .html(len)
        .css('color', color)
        .css('fontWeight', fontWeight);
});

$(document.memoFrm).submit((e) => {
    const $memo = $(e.target.memo);
    if($memo.val().length > 30){
        e.preventDefault();
    }

    // 초기화
    // jquery객체에는 reset이 없다.
    $(e.target).get(0).reset();
});