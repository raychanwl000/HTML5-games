/* vim: set shiftwidth=4:tagstop=4: */
/*
 * =================================================
 *
 *                EIT Webapp API
 *
 * =================================================
 */

window.eitWebapp = {

    /**
      * Set the location of proxy.php
      * change this setting when proxy.php is not in the same location
      * with ebook_api.js
      *
      */
    proxyPhpLocation: '/games/proxy.php',


    /**
     * Get current logged in user.
     *
     * @asyncronous
     *
     * @param callback Callback function, prototype: 
     *                 callback(bool is_successful, object userObject)
     *
     * @return jQuery jqXHR object
     *
     */
    whoami: function(callback) {
        return (function($) {
            return $.get(window.eitWebapp.proxyPhpLocation+'?func=whoami', function(data) {
                callback(true, data);
            }).fail(function() {
                callback(false, null);
            });
        })(jQuery);
    },

    /**
     * Logoff and destroy session
     *
     * @asyncronous
     *
     * @param callback Callback function, prototype: 
     *                 callback(bool is_successful)
     *
     * @return jQuery jqXHR object
     *
     */
    logoff: function(callback) {
        return (function($) {
            return $.get(window.eitWebapp.proxyPhpLocation+'?func=logoff', function() {
                callback(true);
            }).fail(function() {
                callback(false);
            });
        })(jQuery);
    },
    
    /**
     * Submit results
     *
     * @asyncronous
     *
     * @param answers Array of answers
     * @param callback Callback function, prototype: 
     *                 callback(bool is_successful)
     *
     * @return jQuery jqXHR object
     *
     */

    submitResult: function(answers, callback) {
        return (function($) {
            return $.post(window.eitWebapp.proxyPhpLocation+'?func=submit-result', { "answers": answers }, function(data) {
                callback(true, data);
            }, 'json').fail(function() {
                callback(false, null);
            });
        })(jQuery);
    },

    /**
     * Get results
     *
     * @asyncronous
     *
     * @param callback Callback function, prototype: 
     *                 callback(bool is_successful)
     *
     * @return jQuery jqXHR object
     *
     */

    getResult: function(callback) {
        return (function($) {
            return $.get(window.eitWebapp.proxyPhpLocation+'?func=get-result')
            .success( function(data) {
                callback(true, data);
            })
            .fail(function() {
                callback(false, null);
            });
        })(jQuery);
    },

};

