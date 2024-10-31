=== Postcodex Lookup ===
Contributors: postcodex,reallygooddigital
Donate link: https://postcodex.io/
Requires at least: 5.5.3
Tested up to: 5.8
Requires PHP: 7.3
Stable tag: 1.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin adds functionality to your Woocommerce checkout form to look up UK addresses from a postcode entered by your customer.

This makes for a better user experience and reduces errors in user input, particularly on mobile devices.

Documentation: https://postcodex.io/docs/wordpress/

== Description ==
This plugin adds functionality to your Woocommerce checkout form to look up UK addresses from a postcode entered by your customer.

This makes for a better user experience and reduces errors in user input, particularly on mobile devices.

The plugin is free, but it requires an account with postcodex in order to function. You can create an account for free at https://console.postcodex.io/

Documentation: https://postcodex.io/docs/wordpress/

== Installation ==
Install and activate the plugin through the Wordpress plugins menu (or, if you prefer, upload the plugin zip manually to /wp-content/plugins/ and extract)
Access the plugin settings either via the Installed Plugins screen, or from the link in the left hand menu in the admin dashboard.
On this screen you'll see three settings:

API Key: On this screen, enter your API key and save your changes to confirm that your key is valid. If you don't have an API key yet, you can get one free at https://console.postcodex.io/signup

Please note that although it is free to create an account and you will receive some free credits to get you started and to allow you to test, you will need to purchase more in order to continue to use the plugin.

Autosearch: You can also choose whether or not you want searches to happen automatically. If you choose to enable automatic search, the plugin may trigger a search more than once as your user types. This makes for a better user experience, but it may use more credits. If autosearch is disabled, the user will need to enter the whole postcode and then click the \"search\" button to perform the address lookup. This may reduce your credit spend, but it means a slightly less intuitive experience for your customer.
Debug Log: Finally, you can choose to enable logging. Although your activity can be managed through your control panel at https://console.postcodex.io/ you may also want to create a log file at the Wordpress end of things e.g. for testing or debugging. This option is only available if Woocommerce is installed and active.
== Frequently Asked Questions ==

= How do I set this up? =

Full documentation and examples can be found here: https://postcodex.io/docs/wordpress/

= Is this plugin compatible with Gravity Forms/Contact Form 7/WP Forms/Formidable? =

It should work with any form as long as the address and postcode fields are single line text fields. We've tested it with Woocommerce, Gravity Forms, Contact Form 7, Formidable and WP Forms and you can read <a href="https://postcodex.io/docs/wordpress/">specific documentation for each of those here</a>. If there's a plugin you'd specifically like us to test and document, let us know.

= Which countries does the plugin provide lookups for? =

Only UK addresses are supported. We use Royal Mail data (we're an Authorised Royal Mail PAF� Solutions Provider) so if it's in their database, it's in our plugin.

= How do I get an API key? =

You can get your API key from within your postcodex admin panel as well as in the welcome email you receive when you register with us.

= Do you have more in-depth documentation for the API? =

Of course, you can view all of our docs here: https://postcodex.io/docs/

= Can the plugin look up an address if I start typing the first line, instead of the postcode? =

No, but that's going to be available soon!

== Screenshots ==

1. Shows address lookup in action.

== Changelog ==

= 1.0.1 =

* Enhanced the postcode lookup call api

= 1.0.0 =

* Initial plugin version, tested to Woocommerce 4.5.2

== Upgrade Notice ==

= 1.0.0 =

* Initial release version
