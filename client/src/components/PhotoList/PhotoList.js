import React, {useEffect, useState, Suspense} from 'react'
const Photo = React.lazy(() => import('../Photo/Photo'));


function PhotoList() {

const [info, setInfo] = useState([])
const array = ['post-11','post-12','post-13','post-21','post-22','post-23','post-31','post-32','post-33']
useEffect(() => {
  // fetch('thoto').then(res => setInfo(res))
  // setInfo()
}, [])

  return (
    <div className="container-photo">
      <Suspense fallback={'loading'} >
        {array.map((el, idx) => <Photo styleClass={el}/>)}
      </Suspense> 
    </div>
  )
}

export default PhotoList
