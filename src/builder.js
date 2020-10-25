const timeSlots = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const columnWidth = 80
const rowHeight = 60
const fontSize = 28

function drawTemplate(labelsPeople, labelsTimes) {
  const widgets = []
  widgets.push(getHelpLabel())
  for (let rowIdx = 0; rowIdx < labelsPeople.length; rowIdx++) {
    const rowY = rowIdx * rowHeight + 10 * rowIdx
    const rowLabel = labelsPeople[rowIdx]
    const rowColor = "#FFFFFF"
    if (rowLabel) {
      widgets.push(getRowLabel(rowLabel, rowY, rowColor))
    }
    for (let colIdx = 0; colIdx < labelsTimes.length; colIdx++) {
      const colX = colIdx * columnWidth + 2 * colIdx
      const colLabel = labelsTimes[colIdx]
      if (rowIdx === 1) {
        widgets.push(getColumnLabel(colLabel, colX))
      }
      widgets.push(getShape(colX, rowY, rowColor))
    }
  }
  miro.board.widgets.create(widgets)
}

function getHelpLabel() {
  return {
    type: 'text',
    x: 0,
    y: -120,
    text: '<b>How to use?</b> Change colour in grid to GREEN if you are available and to RED if you are not.',
    width: 250,
    style: {
      borderWidth: 1,
      backgroundColor: '#fcf6e6',
      textColor: '#525151',
      fontSize: 10,
    },
  }
}

function getShape(x, y, color) {
  return {
    type: 'shape',
    x: x,
    y: y,
    width: columnWidth,
    height: rowHeight,
    style: {
      borderWidth: 0,
      backgroundColor: color,
    },
  }
}

function getRowLabel(text, y) {
  return {
    type: 'text',
    x: -(columnWidth / 2 + fontSize)-(columnWidth/2),
    y: y,
    text: text,
    width: columnWidth+50,
    height: fontSize,
    style: {
      fontSize: fontSize,
      textColor: '#555',
      textAlign: 'r',
    },
  }
}

function getColumnLabel(text, x) {
  return {
    type: 'text',
    x: x,
    y: -(rowHeight / 2 + fontSize),
    text: text,
    width: columnWidth,
    height: fontSize,
    style: {
      fontSize: fontSize,
      textColor: '#555',
      textAlign: 'c',
    },
  }
}

// here be dragons..
function listenForSelection() {
  miro.addListener('SELECTION_UPDATED', widget => {
    console.log(widget)
  })
}

function changeColor() {
  
}