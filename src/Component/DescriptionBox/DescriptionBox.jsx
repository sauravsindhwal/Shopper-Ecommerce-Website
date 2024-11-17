import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review (120)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum suscipit, facilis ipsa ipsam unde aliquam perspiciatis 
                quibusdam quo consequatur ab ex quae quisquam temporibus dolore autem doloribus aperiam. Quibusdam.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique cupiditate dolor, cum ab est omnis possimus atque ad voluptas deserunt, 
            maiores facilis repellendus neque nisi dolores repudiandae distinctio exercitationem mollitia.</p>
        </div>
    </div>
  )
}

export default DescriptionBox