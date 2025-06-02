const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Esporte', 'Política', 'Música', 'Economia', 'Cultura', 'Outros'],
      datasets: [{
        label: '# de Noticias',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
