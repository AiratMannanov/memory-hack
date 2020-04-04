import React from "react";
import Tree from "react-d3-tree";
import clone from "clone";

const debugData = {
  name: "1",
  children: [
    {
      name: "11"
    },
    {
      name: "12",
      children: [
        {
          name: "121"
        },
        {
          name: "122"
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
    data: debugData
  };

  injectedNodesCount = 0;

  addChildNode = () => {
    console.log(this.state.data.children);

    const nextData = clone(this.state.data);
    const target = nextData.children;
    this.injectedNodesCount++;
    target.push({
      name: `Inserted Node ${this.injectedNodesCount}`,
      id: `inserted-node-${this.injectedNodesCount}`
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

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <button onClick={this.addChildNode}>Add Node</button>
        <button onClick={this.removeChildNode}>Remove Node</button>
        <Tree
          data={this.state.data}
          translate={this.state.translate}
          orientation={"vertical"}
        />
      </div>
    );
  }
}
