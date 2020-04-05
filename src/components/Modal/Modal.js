// import React from 'react';
// import { debugData, manCircle, womanCircle } from '../../utils/config';

// function getTreeRoot(tree) {
//   let root = tree;
//   while (root && root.parent) {
//     root = root.parent;
//   }
//   return root;
// }

// const Modal = ({ state, changeState }) => {
//   console.log(state, changeState);

//   const closeModal = (e) => {
//     e.preventDefault();
//     const modal = document.querySelector('.modal');
//     modal.classList.remove('target');
//   }

//   const addChildNode = (e) => {
//     e.preventDefault();
//     console.log(state.nodeData);
//     console.log(state.data);
//     console.log(state.value);
//     const { nodeData, value } = state;
//     //ADDING
//     if (nodeData.parent) {
//       nodeData.parent.children = nodeData.parent.children.map((child) => {
//         if (child.idx === nodeData.idx) {
//           if (child.children) {
//             child.children.push({
//               name: value,
//               idx: `${value}${nodeData.parent.name}`,
//               nodeSvgShape: manCircle,
//               children: [],
//             });
//           } else {
//             child.children = [];
//             child.children.push({
//               name: value,
//               idx: `${value}${nodeData.parent.name}`,
//               nodeSvgShape: manCircle,
//               children: [],
//             });
//           }
//         }
//         return child;
//       });
//     } else {
//       nodeData.children.push({
//         name: value,
//         idx: `${value}${nodeData.name}`,
//         nodeSvgShape: manCircle,
//         children: [],
//       });
//     }
//     changeState({
//       data: getTreeRoot(nodeData),
//     });
//     const modal = document.querySelector('.modal');
//     modal.classList.remove('target');
//   };

//   const removeChildNode = () => {
//     // УДАЛЕНИЕ ЭЛЕМЕНТА
//     const { nodeData } = state;
//     const { parent } = nodeData;
//     if (parent) {
//       parent.children = parent.children.filter((child) => child.idx !== nodeData.idx);
//       if (parent._children) {
//         parent._children = parent._children.filter((child) => child.idx !== nodeData.idx);
//       }
//       changeState({
//           data: getTreeRoot(nodeData),
//       });
//     } else {
//       changeState({
//           data: {},
//         });
//     }
//     const modal = document.querySelector('.modal');
//     modal.classList.remove('target');
//   };

//   const handleChange = (event) => {
//     changeState({value: event.target.value});
//   }

//   return (
//     <div id="Modal1" className="modal">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           {/* <header>
//             <a href="#" className="closebtn" onClick={(e) => this.closeModal(e)}>X</a>
//           </header> */}
//           <div className="modal-body">
//             <div className="m-title">
//               <h1>Внесите изменения</h1>
//             </div>
//             <div className="form-edit">
//               <form onSubmit={(e) => addChildNode(e)}>
//                 <input name="aaa" type="text" value={state.value} onChange={(e) => handleChange(e)}></input>
//                 <button>Добавить</button>
//               </form>
//               <button onClick={removeChildNode}>Удалить</button>
//               <button onClick={(e) => closeModal(e)}>Закрыть</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
