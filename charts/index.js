let mode = 'vr'
let saElement = document.getElementById('sa').getContext('2d')
let saChart = new Chart(saElement, {
  type: 'bar',
  data: {
    labels: ['discomfort', 'nausea', 'dizziness', 'headache', 'visual impairment'],
    datasets: [
      {
        label: 'picking up objects',
        data: [3, 3, 3, 3, 3],
        grouped: true,
        backgroundColor: [
          '#4472C4',
          '#4472C4',
          '#4472C4',
          '#4472C4'
        ],
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1
      },
      {
        label: 'throwing objects',
        data: [1, 1, 1, 1, 1],
        grouped: true,
        backgroundColor: [
          '#ED7D31',
          '#ED7D31',
          '#ED7D31',
          '#ED7D31'
        ],
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1
      },
      {
        label: 'walking',
        data: [6, 5, 5, 4, 5],
        grouped: true,
        backgroundColor: [
          '#92D050',
          '#92D050',
          '#92D050',
          '#92D050'
        ],
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1
      },
      {
        label: 'rotating (body/head)',
        data: [4, 4, 3, 3, 4],
        grouped: true,
        backgroundColor: [
          '#FFC000',
          '#FFC000',
          '#FFC000',
          '#FFC000'
        ],
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Count of symptom occurrences (VR)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 6,
        min: 0
      }
    }
  }
})

document.addEventListener('keypress', e => {
  if (e.keyCode == 99) {
    if (mode === 'vr') {
      saChart.data.datasets[0].data[0] = 0
      saChart.data.datasets[0].data[1] = 0
      saChart.data.datasets[0].data[2] = 0
      saChart.data.datasets[0].data[3] = 0
      saChart.data.datasets[0].data[4] = 0

      saChart.data.datasets[1].data[0] = 0
      saChart.data.datasets[1].data[1] = 0
      saChart.data.datasets[1].data[2] = 0
      saChart.data.datasets[1].data[3] = 0
      saChart.data.datasets[1].data[4] = 0

      saChart.data.datasets[2].data[0] = 1
      saChart.data.datasets[2].data[1] = 0
      saChart.data.datasets[2].data[2] = 0
      saChart.data.datasets[2].data[3] = 0
      saChart.data.datasets[2].data[4] = 0

      saChart.data.datasets[3].data[0] = 2
      saChart.data.datasets[3].data[1] = 0
      saChart.data.datasets[3].data[2] = 1
      saChart.data.datasets[3].data[3] = 1
      saChart.data.datasets[3].data[4] = 0

      saChart.options.plugins.title.text = "Count of symptom occurrences (Non-VR)"
      mode = 'nonVr'
    } else {
      saChart.data.datasets[0].data[0] = 3
      saChart.data.datasets[0].data[1] = 3
      saChart.data.datasets[0].data[2] = 3
      saChart.data.datasets[0].data[3] = 3
      saChart.data.datasets[0].data[4] = 3

      saChart.data.datasets[1].data[0] = 1
      saChart.data.datasets[1].data[1] = 1
      saChart.data.datasets[1].data[2] = 1
      saChart.data.datasets[1].data[3] = 1
      saChart.data.datasets[1].data[4] = 1

      saChart.data.datasets[2].data[0] = 6
      saChart.data.datasets[2].data[1] = 5
      saChart.data.datasets[2].data[2] = 5
      saChart.data.datasets[2].data[3] = 4
      saChart.data.datasets[2].data[4] = 5

      saChart.data.datasets[3].data[0] = 4
      saChart.data.datasets[3].data[1] = 4
      saChart.data.datasets[3].data[2] = 3
      saChart.data.datasets[3].data[3] = 3
      saChart.data.datasets[3].data[4] = 4

      saChart.options.plugins.title.text = "Count of symptom occurrences (VR)"
      mode = 'vr'
      console.log('bomba')
    }
    saChart.update()
  }
})