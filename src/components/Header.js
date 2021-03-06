import React from "react";

function Header() {
    return (
        <header className='ld-header ld-theme-shake'>
        <div className='ld-header__container'>
          <svg aria-label="Merck KGaA, Darmstadt, Germany" class="ld-header__logo ld-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5921 7H19.1a.2882.2882 0 0 0-.1926.076l-2.9895 2.7586c-1.0241.9456-2.4024 1.4765-3.9177 1.4765-1.5796 0-3.0088-.5797-4.0444-1.5964 0 0-2.199-2.0294-2.2179-2.0477A2.5535 2.5535 0 0 0 4.0665 7h-1.785C2.126 7 2 7.1239 2 7.2766v7.7509c0 .765.6301 1.3843 1.4083 1.3843h.9133c.1564 0 .2831-.1249.2831-.2783l.0007-2.7582c0-.7208.5987-1.3155 1.3204-1.3155 1.3434 0 2.3067 1.1309 3.177 1.8863 1.0661.9254 1.8871 1.8169 2.8974 1.8169 1.0092 0 1.8306-.8915 2.8966-1.8169.8707-.7554 1.834-1.8863 3.1767-1.8863.718 0 1.3137.5887 1.3208 1.3039v1.6638c0 .765.6305 1.3829 1.4089 1.3829h.6079c.1588 0 .3061.0014.3061.0014.1561 0 .2828-.1249.2828-.2779V8.3842C22 7.6196 21.3692 7 20.5921 7Z" fill="currentcolor"/></svg>
          <div className='ld-header_site-name ld-typo--h5'>Temecula Cell Culture</div>
        </div>
      </header>
    );
}

export default Header;