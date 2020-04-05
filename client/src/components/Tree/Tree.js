import React from "react";
import Tree from "react-d3-tree";
import { connect } from "react-redux";
import { setInfo } from '../../redux/actions/actions';
import clone from "clone";
import { debugData, manCircle, womanCircle } from '../../utils/config';
import './Tree.scss';

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

class CenteredTree extends React.Component {
  constructor(props) {
    super(props);
  }

  
  state = {
    data: {
      name: `${this.props.personInfo.firstName ? this.props.personInfo.firstName : 'Добавь Героя'} 
      ${this.props.personInfo.lastName ? this.props.personInfo.lastName : ''} 
      ${this.props.personInfo.middleName ? this.props.personInfo.middleName : ''}`,
      idx: `${this.props.personInfo.firstName ? this.props.personInfo.firstName : 'Добавь Героя'} 
      ${this.props.personInfo.lastName ? this.props.personInfo.lastName : ''} 
      ${this.props.personInfo.middleName ? this.props.personInfo.middleName : ''}`,
      nodeSvgShape: manCircle,
      children: [],
    },
    value: '',
  };

  handleClick = (nodeData, evt) => {
    //MODAL
    const modal = document.querySelector('.modal');
    modal.classList.add('target');
    this.setState((prevState) => {
      return {
        nodeData,
      };
    });
  }

  addChildNode = (e) => {
    e.preventDefault();
    console.log(this.state.nodeData);
    console.log(this.state.data);
    console.log(this.state.value);
    const { nodeData, value } = this.state;
    //ADDING
    if (nodeData.parent) {
      nodeData.parent.children = nodeData.parent.children.map((child) => {
        if (child.idx === nodeData.idx) {
          if (child.children) {
            child.children.push({
              name: value,
              idx: `${value}${nodeData.parent.name}`,
              nodeSvgShape: manCircle,
              children: [],
            });
          } else {
            child.children = [];
            child.children.push({
              name: value,
              idx: `${value}${nodeData.parent.name}`,
              nodeSvgShape: manCircle,
              children: [],
            });
          }
        }
        return child;
      });
    } else {
      if (!nodeData.children) {
        nodeData.children = [];
      }
      nodeData.children.push({
        name: value,
        idx: `${value}${nodeData.name}`,
        nodeSvgShape: manCircle,
        children: [],
      });
    }
    this.setState((prevState) => {
      return {
        data: getTreeRoot(nodeData),
        value: '',
      };
    });
    const modal = document.querySelector('.modal');
    modal.classList.remove('target');
  };

  removeChildNode = () => {
    // УДАЛЕНИЕ ЭЛЕМЕНТА
    const { nodeData } = this.state;
    const { parent } = nodeData;
    if (parent) {
      parent.children = parent.children.filter((child) => child.idx !== nodeData.idx);
      if (parent._children) {
        parent._children = parent._children.filter((child) => child.idx !== nodeData.idx);
      }
      this.setState((prevState) => {
        return {
          data: getTreeRoot(nodeData),
          value: '',
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          data: {},
          value: '',
        };
      });
    }
    const modal = document.querySelector('.modal');
    modal.classList.remove('target');
  };

  componentDidMount() {
    // Get treeContainer's dimensions so we can center the tree
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 1.8,
        y: dimensions.height / 6
      }
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  closeModal(e) {
    e.preventDefault();
    const modal = document.querySelector('.modal');
    modal.classList.remove('target');
    this.setState((prevState) => {
      return {
        value: '',
      };
    });
  }

  render() {
    console.log('PROOOOOOOOOPS', this.props);
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)} className="top-tree">
        <div id="Modal1" className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <header>
                <a href="#" className="closebtn" onClick={(e) => this.closeModal(e)}>X</a>
              </header> */}
              <div className="modal-body">
                <div className="m-title">
                  <h1>Внесите изменения</h1>
                </div>
                <div className="form-edit">
                  <form className="form-edit-first" onSubmit={(e) => this.addChildNode(e)}>
                    <input name="aaa" type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}></input>
                    <button>Добавить</button>
                  </form>
                  <div className="btn-remove-close form-edit-first">
                    <button onClick={this.removeChildNode}>Удалить</button>
                    <button onClick={(e) => this.closeModal(e)}>Закрыть</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <Tree
          data={this.state.data}
          translate={this.state.translate}
          orientation={"vertical"}
          onClick={this.handleClick}
          // nodeSize={{x: 300, y: 150}	}
          scaleExtent={{ min: 0.1, max: 2 }}
          separation={{ siblings: 2, nonSiblings: 2 }}
          // initialDepth={1}
          // nodeSvgShape={{shape: 'none'}}
          collapsible={false}
          textLayout={{ x: '18', y: '-8' }}
        />
        <div className="social">
          <img className="icon" src="./instagram.png" alt="instagram" />
          <img className="icon" src="./facebook.png" alt="facebook" />
          <img className="icon" src="./vk.png" alt="vk" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  personInfo: state.personInfo
});

const mapDispatchToProps = (dispatch) => ({
  setInfo: (payload) => dispatch(setInfo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CenteredTree)
