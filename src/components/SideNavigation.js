import React, { useState } from 'react'

const SideNavigation = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const hideWhenVisible = { display: menuVisible ? 'none' : '' }
    const showWhenVisible = { display: menuVisible ? '' : 'none' }

    return (
        <div>
            <div class="menu" style={hideWhenVisible}>
                <p onClick={() => setMenuVisible(true)}><i class="far fa-plus-square white-background"></i> Menu</p>
            </div>
            <div class="menu" style={showWhenVisible}>
                <p onClick={() => setMenuVisible(false)}><i class="far fa-minus-square white-background"></i> Menu</p>
                <p>is open</p>           
            </div>        
        </div>
    );
}

export default SideNavigation;