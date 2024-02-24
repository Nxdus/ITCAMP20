let section = document.querySelector('section');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    let first_text = document.getElementById('first-section-text')
    let Name = ''

    if (value <= 100) {
        first_text.innerHTML = 'สวัสดีครับ';
    } else if (value > 100 && value < 200) {
        first_text.innerHTML = 'พี่ๆจาก IT CAMP';
    } else if (value > 200 && value < 300) {
        first_text.innerHTML = 'ผมชื่อไผ่ตงนะครับ';
    } else if (value > 300 && value < 400) {
        first_text.innerHTML = 'ว่าแต่พี่ชื่ออะไรหรอครับ ?';
    } else if (value > 400 && value < 405) {
        let inputBox = document.getElementById('Name-input-box')

        inputBox.style.display = 'flex';

        document.getElementById('Name-submit').onclick = function() {
            Name = document.getElementById('Name-input').value;
            if (Name != '') {
                first_text.textContent = 'สวัสดีครับพี่ ' + Name;
                inputBox.style.display = 'none';
            }
        }
    } else if (value > 500 && value < 600) {
        first_text.innerHTML = 'ยินดีที่ได้รู้จักนะครับ :)';
    } else if (value > 600) {
        window.scrollTo(0, 0);
    }
})