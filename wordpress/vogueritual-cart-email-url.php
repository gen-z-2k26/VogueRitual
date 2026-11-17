<?php
/**
 * Cart abandonment emails: rewrite the WordPress host to the storefront.
 * Paste into Snippets, or the bottom of the theme functions.php.
 * If WordPress is not on wp.vogueritual.us, change only the first array.
 */
add_filter('wcf_ca_email_body_before_send', function ($body) {
    return str_replace(
        ['https://wp.vogueritual.us', 'http://wp.vogueritual.us'],
        'https://www.vogueritual.us',
        $body
    );
}, 20);
