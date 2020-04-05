// const map = {
//   'Иван0': debugData,
//   'Александр00': debugData.children[0]
// }

export const manCircle = {
  shape: 'circle',
  shapeProps: {
    r: 10,
    fill: '#2d9bf5',
    stroke: 'none',
  }
};

export const womanCircle = {
  shape: 'circle',
  shapeProps: {
    r: 10,
    fill: 'pink',
    stroke: 'none',
  },
};

export const debugData = {
  name: "Иван",
  idx: "Иван0",
  attributes: {
    keyA: 'val A',
    keyB: 'val B',
    keyC: 'val C',
  },
  sex: 'man',
  nodeSvgShape: manCircle,
  children: [
    {
      name: "Мария",
      idx: "Мария10",
      nodeSvgShape: womanCircle,
      children: [
        {
          name: "Анастасия",
          idx: "Анастасия20",
          nodeSvgShape: womanCircle,
          children: [
            {
              name: "Михаил",
              idx: "Михаил30",
              nodeSvgShape: manCircle,
              children: [
                {
                  name: "Колыван",
                  idx: "Колыван40",
                  nodeSvgShape: manCircle,
                  children: [],
                },
                {
                  name: "Мария",
                  idx: "Мария41",
                  nodeSvgShape: womanCircle,
                  children: [],
                }
              ]
            },
          ]
        },
        {
          name: "Айрат",
          idx: "Айрат21",
          nodeSvgShape: manCircle,
          children: [],
        },
        {
          name: "Тёма",
          idx: "Тёма22",
          nodeSvgShape: manCircle,
          children: [],
        },
        {
          name: "Даня",
          idx: "Даня23",
          nodeSvgShape: manCircle,
          children: [],
        },
        {
          name: "Стас",
          idx: "Стас24",
          nodeSvgShape: manCircle,
          children: [],
        }
      ]
    }
  ]
};
