import React from "react";
import Tree from "react-d3-tree";
import clone from "clone";

const debugData = {
  name: "Иванов Иван Иванович",
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
      name: "Иванов Александр Иванович"
    },
    {
      name: "Иванов Алексей Александрович",
      children: [
        {
          name: "Иванов Михаил Алексеевич",
          children: [
            {
              name: "Иванов Михаил Алексеевич"
            },
            {
              name: "Иванова Мария Алексеевна"
            }
          ]
        },
        {
          name: "Иванова Мария Алексеевна"
        },
        {
          name: "Иванова Мария Алексеевна"
        },
        {
          name: "Иванова Мария Алексеевна"
        },
        {
          name: "Иванова Мария Алексеевна"
        }
      ]
    }
  ]
};

const containerStyles = {
  width: "100%",
  height: "100vh"
};

export default class CenteredTree extends React.PureComponent {
  state = {
    data: debugData,
    value: ''
  };

  handleClick = (nodeData, evt) => {
    console.log(nodeData, evt);
  }

  injectedNodesCount = 0;

  addChildNode = (e) => {
    e.preventDefault();
    const nextData = clone(this.state.data);
    const target = nextData.children;
    this.injectedNodesCount++;
    target.push({
      name: `${this.state.value}`,
      id: `inserted-node-${this.state.value}`
    });
    this.setState({
      data: nextData
    });
  };

  removeChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    target.pop();
    this.injectedNodesCount--;
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
