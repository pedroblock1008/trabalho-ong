window.addEventListener('load', function() {
    const canvas = document.getElementById('pizza-chart');
    const ctx = canvas.getContext('2d');
    
    // Dados: [40, 30, 30] para educação, saúde, ambiente
    const data = [40, 30, 30];
    const colors = ['#FF6384', '#36A2EB', '#FFCE56'];
    let startAngle = 0;
    
    data.forEach((value, index) => {
        ctx.fillStyle = colors[index];
        ctx.beginPath();
        ctx.moveTo(150, 150); // Centro
        ctx.arc(150, 150, 150, startAngle, startAngle + (Math.PI * 2 * (value / 100)));
        ctx.closePath();
        ctx.fill();
        startAngle += Math.PI * 2 * (value / 100);
    });
    
    // Legenda: adicione texto com ctx.fillText()
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.fillText('Educação: 40%', 10, 20);
    // Adicione para outros
});