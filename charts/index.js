let modeSa = 'nonVr'
let modeSymp = 'disc'
let modePadi = 'nonVr'
let modeExc = 'nonVr'
let currSlide = null

Reveal.on('slidechanged', event => {
  currSlide = event.currentSlide.getAttribute('data-state')
})

let sympElement = document.getElementById('symp').getContext('2d')
let sympChart = new Chart(sympElement, {
  type: 'bar',
  data: {
    labels: ['0', '1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'VR',
        data: [3, 3, 1, 1, 1, 1, 0],
        grouped: true,
        backgroundColor: [
          '#4472C4',
          '#4472C4',
          '#4472C4',
          '#4472C4',
          '#4472C4',
          '#4472C4',
          '#4472C4'
        ],
      },
      {
        label: 'Non-VR',
        data: [8, 2, 0, 0, 0, 0, 0],
        grouped: true,
        backgroundColor: '#ED7D31'
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'General discomfort',
        font: {
          size: 20
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 9,
        min: 0
      }
    }
  }
})

let saElement = document.getElementById('sa').getContext('2d')
let saChart = new Chart(saElement, {
  type: 'bar',
  data: {
    labels: ['discomfort', 'nausea', 'dizziness', 'headache', 'visual impairment'],
    datasets: [
      {
        label: 'picking up objects',
        data: [0, 0, 0, 0, 0],
        grouped: true,
        backgroundColor: [
          '#4472C4',
          '#4472C4',
          '#4472C4',
          '#4472C4'
        ],
      },
      {
        label: 'throwing objects',
        data: [0, 0, 0, 0, 0],
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
        data: [1, 0, 0, 0, 0],
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
        data: [2, 0, 1, 1, 0],
        grouped: true,
        backgroundColor: [
          '#FFC000',
          '#FFC000',
          '#FFC000',
          '#FFC000'
        ]
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Non-VR',
        font: {
          size: 16
        }
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

let padiElement = document.getElementById('padi').getContext('2d')
let padiChart = new Chart(padiElement, {
  type: 'bar',
  data: {
    labels: ['0', '1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Panic',
        data: [4, 3, 2, 1, 0, 0, 0],
        grouped: true,
        backgroundColor: '#9DD053',
      },
      {
        label: 'Distress',
        data: [3, 5, 1, 1, 0, 0, 0],
        grouped: true,
        backgroundColor: '#305597'
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Non-VR',
        font: {
          size: 20
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 9,
        min: 0
      }
    }
  }
})

let excElement = document.getElementById('exc').getContext('2d')
let excChart = new Chart(excElement, {
  type: 'bar',
  data: {
    labels: ['0', '1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Excitement level',
        data: [1, 1, 3, 4, 1, 0, 0],
        grouped: true,
        backgroundColor: '#E57E27',
        barThickness: 40,
      },
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Non-VR',
        font: {
          size: 20
        }
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

function toggleSaChart () {
  if (modeSa === 'vr') {
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

    saChart.options.plugins.title.text = "Non-VR"
    modeSa = 'nonVr'
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

    saChart.options.plugins.title.text = "VR"
    modeSa = 'vr'
  }
  saChart.update()
}

function toggleSympChart () {
  if (modeSymp === 'disc') {
    sympChart.data.datasets[0].data[0] = 4
    sympChart.data.datasets[0].data[1] = 2
    sympChart.data.datasets[0].data[2] = 0
    sympChart.data.datasets[0].data[3] = 2
    sympChart.data.datasets[0].data[4] = 0
    sympChart.data.datasets[0].data[5] = 1
    sympChart.data.datasets[0].data[6] = 1

    sympChart.data.datasets[1].data[0] = 9
    sympChart.data.datasets[1].data[1] = 1
    sympChart.data.datasets[1].data[2] = 0
    sympChart.data.datasets[1].data[3] = 0
    sympChart.data.datasets[1].data[4] = 0
    sympChart.data.datasets[1].data[5] = 0
    sympChart.data.datasets[1].data[6] = 0

    sympChart.options.plugins.title.text = 'Dizziness'
    modeSymp = 'diz'
  } else {
    sympChart.data.datasets[0].data[0] = 3
    sympChart.data.datasets[0].data[1] = 3
    sympChart.data.datasets[0].data[2] = 1
    sympChart.data.datasets[0].data[3] = 1
    sympChart.data.datasets[0].data[4] = 1
    sympChart.data.datasets[0].data[5] = 1
    sympChart.data.datasets[0].data[6] = 0

    sympChart.data.datasets[1].data[0] = 8
    sympChart.data.datasets[1].data[1] = 2
    sympChart.data.datasets[1].data[2] = 0
    sympChart.data.datasets[1].data[3] = 0
    sympChart.data.datasets[1].data[4] = 0
    sympChart.data.datasets[1].data[5] = 0
    sympChart.data.datasets[1].data[6] = 0

    sympChart.options.plugins.title.text = 'General discomfort'
    modeSymp = 'disc'
  }
  sympChart.update()
}

function togglePadiChart () {
  if (modePadi === 'vr') {
    padiChart.data.datasets[0].data[0] = 4
    padiChart.data.datasets[0].data[1] = 3
    padiChart.data.datasets[0].data[2] = 2
    padiChart.data.datasets[0].data[3] = 1
    padiChart.data.datasets[0].data[4] = 0
    padiChart.data.datasets[0].data[5] = 0
    padiChart.data.datasets[0].data[6] = 0

    padiChart.data.datasets[1].data[0] = 3
    padiChart.data.datasets[1].data[1] = 5
    padiChart.data.datasets[1].data[2] = 1
    padiChart.data.datasets[1].data[3] = 1
    padiChart.data.datasets[1].data[4] = 0
    padiChart.data.datasets[1].data[5] = 0
    padiChart.data.datasets[1].data[6] = 0

    padiChart.options.plugins.title.text = 'Non-VR'
    modePadi = 'nonVr'
  } else {
    padiChart.data.datasets[0].data[0] = 0
    padiChart.data.datasets[0].data[1] = 0
    padiChart.data.datasets[0].data[2] = 5
    padiChart.data.datasets[0].data[3] = 2
    padiChart.data.datasets[0].data[4] = 2
    padiChart.data.datasets[0].data[5] = 1
    padiChart.data.datasets[0].data[6] = 0

    padiChart.data.datasets[1].data[0] = 0
    padiChart.data.datasets[1].data[1] = 0
    padiChart.data.datasets[1].data[2] = 0
    padiChart.data.datasets[1].data[3] = 8
    padiChart.data.datasets[1].data[4] = 1
    padiChart.data.datasets[1].data[5] = 0
    padiChart.data.datasets[1].data[6] = 0

    padiChart.options.plugins.title.text = 'VR'
    modePadi = 'vr'
  }
  padiChart.update()
}

function toggleExcChart () {
  if (modeExc === 'vr') {
    excChart.data.datasets[0].data[0] = 1
    excChart.data.datasets[0].data[1] = 1
    excChart.data.datasets[0].data[2] = 3
    excChart.data.datasets[0].data[3] = 4
    excChart.data.datasets[0].data[4] = 1
    excChart.data.datasets[0].data[5] = 0
    excChart.data.datasets[0].data[6] = 0
    excChart.options.plugins.title.text = 'Non-VR'

    modeExc = 'nonVr'
  } else {
    excChart.data.datasets[0].data[0] = 0
    excChart.data.datasets[0].data[1] = 0
    excChart.data.datasets[0].data[2] = 0
    excChart.data.datasets[0].data[3] = 3
    excChart.data.datasets[0].data[4] = 5
    excChart.data.datasets[0].data[5] = 1
    excChart.data.datasets[0].data[6] = 1

    excChart.options.plugins.title.text = 'VR'
    modeExc = 'vr'
  }
  excChart.update()
}

document.addEventListener('keypress', e => {
  if (e.keyCode === 99 && currSlide === 'sa') {
    toggleSaChart()
  }
  if (e.keyCode === 99 && currSlide === 'symp') {
    toggleSympChart()
  }
  if (e.keyCode === 99 && currSlide === 'padi') {
    togglePadiChart()
  }
  if (e.keyCode === 99 && currSlide === 'exc') {
    toggleExcChart()
  }
})

