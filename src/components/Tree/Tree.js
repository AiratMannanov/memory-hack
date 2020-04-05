import React from "react";
import Tree from "react-d3-tree";
import clone from "clone";

// const map = {
//   'Иван0': debugData,
//   'Александр00': debugData.children[0]
// }

const debugData = {
  name: "Иван",
  idx: "Иван0",
  attributes: {
    keyA: 'val A',
    keyB: 'val B',
    keyC: 'val C',
  },
  sex: 'man',
  nodeSvgShape: {
    shape: 'circle',
    shapeProps: {
      r: 10,
      fill: 'blue',
    },
  },
  styles: {
    links: {
            fill:"none",
            stroke: "#000",
            strokeWidth: "2px",
            strokeDasharray:"2,2"
          },
  },
  children: [
    {
      name: "Александр",
      idx: "Александр00",
      children: [],
    },
    {
      name: "Алексей",
      idx: "Алексей01",
      children: [
        {
          name: "Михаил",
          idx: "Михаил20",
          children: [
            {
              name: "Колыван",
              idx: "Колыван30",
              children: [],
            },
            {
              name: "Мария",
              idx: "Мария31",
              children: [],
            }
          ]
        },
        {
          name: "Айрат",
          idx: "Айрат21",
          children: [],
        },
        {
          name: "Тёма",
          idx: "Тёма22",
          children: [],
        },
        {
          name: "Даня",
          idx: "Даня23",
          children: [],
        },
        {
          name: "Стас",
          idx: "Стас24",
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
    // console.log(nodeData, evt);
    const { id, name } = nodeData;
    // console.log(nodeData);
    // console.log(JSON.stringify(this.state.data));

    nodeData.parent.children = nodeData.parent.children.filter((child) => child.idx !== nodeData.idx);
    if (nodeData.parent._children) {
      nodeData.parent._children = nodeData.parent._children.filter((child) => child.idx !== nodeData.idx);
    }
    this.setState((prevState) => {
      return {
        data: getTreeRoot(nodeData),
      };
    });

    // const nodeStr = JSON.stringify(nodeData.parent)
    // console.log(nodeStr);

    // if (name === 'Иванов Александр Иванович') {
      //this.addChildNode('gagasgasdfgfadsg');
    // }
    // console.log(id);
  }

  getFiniteValue(obj) {
    getProp(obj);

    function getProp(o) {
        for(var prop in o) {
            if(typeof(o[prop]) === 'object') {
                getProp(o[prop]);
            } else {
                console.log('Finite value: ',o[prop])
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
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <form onSubmit={(e) => this.addChildNode(e)}>
          <input name="aaa" type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
          <button>Add Node</button>
        </form>
        <button onClick={this.removeChildNode}>Remove Node</button>
        <Tree
          data={this.state.data}
          translate={this.state.translate}
          orientation={"vertical"}
          onClick={this.handleClick}
          // nodeSize={{x: 300, y: 150}	}
          scaleExtent={{min: 0.1, max:2}}
          separation={{siblings: 2, nonSiblings: 2}}
          // initialDepth={1}
          // nodeSvgShape={{shape: 'none'}}
          collapsible={false}
        />
      </div>
    );
  }
}
