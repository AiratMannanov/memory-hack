import React from "react";
import Tree from "react-d3-tree";
import clone from "clone";
// import './Tree.scss';
// const map = {
//   'Иван0': debugData,
//   'Александр00': debugData.children[0]
// }
const manCircle = {
  shape: 'circle',
  shapeProps: {
    r: 10,
    fill: '#2d9bf5',
    stroke: 'none',
  }
};
const womanCircle = {
  shape: 'circle',
  shapeProps: {
    r: 10,
    fill: 'pink',
    stroke: 'none',
  },
};
const debugData = {
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
const containerStyles = {
  width: "100%",
  height: "100vh"
};
function getTreeRoot(tree) {
  let root = tree;
  while (root && root.parent) {
    root = root.parent;
  }
  return root;
}
export default class CenteredTree extends React.Component {
  state = {
    data: debugData,
    value: ''
  };

  handleClick = (nodeData, evt) => {
    const { id, name } = nodeData;
    nodeData.parent.children = nodeData.parent.children.map((child) => {
      if (child.idx === nodeData.idx) {
        // console.log(child.idx);
        // console.log(nodeData.idx);

        console.log(child);
        if (child.children) {
          child.children.push({
            name: "FFFFFFFFFFFFFFFFFFFFFFFF",
            idx: "Стас24",
            nodeSvgShape: manCircle,
            children: [],
          });
        } else {
          child.children = [];
          child.children.push({
            name: "Стас",
            idx: "Стас24",
            nodeSvgShape: manCircle,
            children: [],
          });
        }
      }
      return child;
    });
    // УДАЛЕНИЕ ЭЛЕМЕНТА
    // nodeData.parent.children = nodeData.parent.children.filter((child) => child.idx !== nodeData.idx);
    // if (nodeData.parent._children) {
    //   nodeData.parent._children = nodeData.parent._children.filter((child) => child.idx !== nodeData.idx);
    // }
    this.setState((prevState) => {
      return {
        data: getTreeRoot(nodeData),
      };
    });
  }
  getFiniteValue(obj) {
    getProp(obj);
    function getProp(o) {
      for (var prop in o) {
        if (typeof (o[prop]) === 'object') {
          getProp(o[prop]);
        } else {
          console.log('Finite value: ', o[prop])
        }
      }
    }
  }
  addChildNode = (e) => {
    // e.preventDefault();
    const nextData = clone(this.state.data);
    const target = nextData.children[0].children;
    this.injectedNodesCount++;
    target.push({
      name: `${e}`,
      id: `inserted-node-${e}`
    });
    this.setState({
      data: nextData
    });
  };
  removeChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    target.pop();
    this.setState({
      data: nextData
    });
  };
  componentDidMount() {
    // Get treeContainer's dimensions so we can center the tree
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 6
      }
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  test(e) {
    e.preventDefault();
    const modal = document.querySelector('.modal');
    modal.classList.remove('target')
  }
  render() {

    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)} className="top-tree">
        <form onSubmit={(e) => this.addChildNode(e)}>
          <input name="aaa" type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
          <button>Add Node</button>
        </form>
        <button onClick={this.removeChildNode}>Remove Node</button>
        <div id="Modal1" className="modal target">
          <div className="modal-dialog">
            <div className="modal-content">
              <header>
                <a href="#" className="closebtn" onClick={(e) => this.test(e)}>X</a>
              </header>
              <div className="modal-body">
                <div className="m-title">
                  <h1>Title Here</h1>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quidem alias nulla eius nemo? Unde neque libero aliquid totam voluptatibus hic, reiciendis quod odit accusantium velit. Laudantium fugit quod debitis.
              </div>
            </div>
          </div>
        </div>
        <Tree
          data={this.state.data}
          translate={this.state.translate}
          orientation={"vertical"}
          onClick={this.handleClick}
          // nodeSize={{x: 300, y: 150} }
          scaleExtent={{ min: 0.1, max: 2 }}
          separation={{ siblings: 2, nonSiblings: 2 }}
          // initialDepth={1}
          // nodeSvgShape={{shape: 'none'}}
          collapsible={false}
          textLayout={{ x: '18', y: '-8' }}
        />
      </div>
    );
  }
}
