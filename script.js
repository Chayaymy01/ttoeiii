function nextStep(stepNumber) {
    // ซ่อนทุกหน้าโดยการเอาคลาส active ออก
    document.querySelectorAll('.step-content').forEach(step => {
        step.classList.remove('active');
    });
    
    // แสดงหน้าที่เลือกโดยการเติมคลาส active เข้าไป (ลบโค้ดเก่าที่สั่ง display = 'none' ออกแล้ว)
    document.getElementById(`step${stepNumber}`).classList.add('active');
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // เปลี่ยนเป็น fixed เพื่อให้ปุ่มลอยตัวและวิ่งหนีไปตำแหน่งใหม่ทันทีที่ถูกกด
    noBtn.style.position = 'fixed';
    
    // สุ่มตำแหน่งใหม่บนหน้าจอ
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}


function celebrate() {
    const finalTitle = document.getElementById('finalTitle');
    const finalGif = document.getElementById('finalGif');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    finalTitle.innerHTML = "ไม่รู้ว่าดีกันจริงมั้ย แต่เค้าตั้งใจทำให้นะมีเพลงให้ฟังด้วย  เค้ารักเธอนะ ";
    
    finalGif.src = "imgs/กล้วย.jpg";
    
    noBtn.style.display = 'none';
    
    yesBtn.style.transform = 'scale(1.2)';
    yesBtn.innerHTML = "กดฟัง เพลง ";
    yesBtn.onclick = function() {
        window.open("https://www.youtube.com/watch?v=bGbII_DDtTs", "_blank");
    };
}