import React, {useState} from 'react';

const ArrowToTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
          <i class="fas fa-arrow-up fa-2x"></i>
        </button>
  );
}

export default ArrowToTop;