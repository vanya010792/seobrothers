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
    if( document.querySelector( '.sb-faq' ) ) {
        $( '.sb-faq__title' ).click( function () {
            let thisIndex = $( '.sb-faq__title' ).index( this );
            for( let a = 0; a < $( '.sb-faq__title' ).length; a++ ) {
                if( a !== thisIndex ) {
                    $( '.sb-faq__title' ).eq(a).removeClass( 'sb-faq__title--active' );
                }
            }
            $( this ).toggleClass('sb-faq__title--active');
        });
    }

});