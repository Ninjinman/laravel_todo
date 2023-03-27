
// キャンバスの取得
const canvas = document.querySelector('#background');

// キャンバスの幅と高さの設定
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 描画コンテキストの取得
const ctx = canvas.getContext('2d');

function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fill();
}

// 50個の円形をランダムな位置に描画
for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50;
    drawCircle(x, y, radius);
}

class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

const colors = ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67", "#F79F1F", "#A3CB38", "#1289A7", "#D980FA", "#B53471", "#EE5A24", "#009432", "#0652DD", "#9980FA", "#833471", "#EA2027", "#006266", "#1B1464", "#5758BB", "#6F1E51"];

const circles = [];

// 50個の円形をランダムな位置と速度で生成
for (let i = 0; i < 50; i++) {
    let radius = Math.random() * 20 + 10;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = (Math.random() - 0.5) * 4;
    let dy = (Math.random() - 0.5) * 4;
    let color = colors[Math.floor(Math.random() * colors.length)];
    circles.push(new Circle(x, y, dx, dy, radius, color));
}

function animate() {
    // キャンバスをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // すべての円形を更新
    circles.forEach(circle => {
        circle.update();
    });

    // 次のフレームをリクエスト
    requestAnimationFrame(animate);
  }
  
  // アニメーションを開始
  animate();