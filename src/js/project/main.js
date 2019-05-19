document.addEventListener( 'DOMContentLoaded', function () {

    document.querySelector( '.sb-head__menu_toggle' ).addEventListener( 'click', function () {
        if( this.classList.contains( 'sb-head__menu_toggle--active' ) ) {
            this.classList.remove( 'sb-head__menu_toggle--active' );
            document.querySelector( '.sb-head__nav' ).classList.remove( 'sb-head__nav--active' );
        } else {
            this.classList.add( 'sb-head__menu_toggle--active' );
            document.querySelector( '.sb-head__nav' ).classList.add( 'sb-head__nav--active' );
        }
    });

});