/*
 * JS for images generated by Exadel Tiggzi
 *
 * Created on: Saturday, July 14, 2012, 04:28:23 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "bundle"; /* Object & array with components "name-to-id" mapping */
var n2id_buf = {
    'mobilelabel4': 'j_4',
    'accessToken': 'j_5',
    'mobilebutton2': 'j_6',
    'mobilelabel8': 'j_7',
    'mobilegrid2': 'j_8',
    'mobilegridcell3': 'j_9',
    'mobileimage2': 'j_10',
    'userId': 'j_11',
    'mobilegridcell4': 'j_12',
    'userName': 'j_13',
    'mobilebutton3': 'j_14'
};
if ("n2id" in window && window.n2id !== undefined) {
    $.extend(n2id, n2id_buf);
} else {
    window.n2id = n2id_buf;
}
Tiggr.AppPages = [{
    "name": "images",
    "location": "images.html"
}, {
    "name": "current",
    "location": "images.html"
}];
Tiggr.CurrentScreen = 'j_0';

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function unwrapAndApply(selector, content) {
    Tiggr.unwrapAndApply(selector, content);
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
/*************************
 *      SERVICES          *
 *************************/
var Barcode_service = new Tiggr.BarCodeService({});
var Facebook_friends = new Tiggr.RestService({
    'url': 'https://graph.facebook.com/me/friends',
    'dataType': 'json',
    'type': 'get',
});
var twitterservice = new Tiggr.RestService({
    'url': 'http://search.twitter.com/search.json',
    'dataType': 'jsonp',
    'type': 'get',
});
var facebook_photo = new Tiggr.RestService({
    'url': 'https://graph.facebook.com/',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',
});
/*************************
 * NONVISUAL COMPONENTS  *
 *************************/
var datasources = [];
var restservice3 = new Tiggr.DataSource(Facebook_friends, {
    'onComplete': function(jqXHR, textStatus) {
        $t.refreshScreenFormElements("j_0");
    },
    'onSuccess': function(data) {},
    'onError': function(jqXHR, textStatus, errorThrown) {},
    'outMappings': [{
        'PATH': ['data'],
        'ID': 'mobilegrid2',
        'SET': [{
            'PATH': ['id'],
            'ID': 'userId',
            'ATTR': '@'
        }, {
            'PATH': ['id'],
            'ID': 'mobileimage2',
            'ATTR': 'src'
        }, {
            'PATH': ['name'],
            'ID': 'userName',
            'ATTR': '@'
        }]
    }],
    'inMappings': [{
        'PATH': ['access_token'],
        'ID': 'accessToken',
        'ATTR': 'value'
    }]
});
datasources.push(restservice3);
var restservice4 = new Tiggr.DataSource(facebook_photo, {
    'onComplete': function(jqXHR, textStatus) {
        $t.refreshScreenFormElements("j_0");
    },
    'onSuccess': function(data) {},
    'onError': function(jqXHR, textStatus, errorThrown) {},
    'outMappings': [],
    'inMappings': []
});
datasources.push(restservice4);
/************************
 * EVENTS AND HANDLERS  *
 ************************/
// screen onload
screen_3F95_onLoad = j_0_onLoad = function() {
    createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
    Tiggr.__registerComponent('mobilelabel4', new Tiggr.BaseComponent({
        id: 'mobilelabel4',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('accessToken', new Tiggr.BaseComponent({
        id: 'accessToken',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilebutton2', new Tiggr.BaseComponent({
        id: 'mobilebutton2',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilelabel8', new Tiggr.BaseComponent({
        id: 'mobilelabel8',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilegrid2', new Tiggr.BaseComponent({
        id: 'mobilegrid2',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilegridcell3', new Tiggr.BaseComponent({
        id: 'mobilegridcell3',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobileimage2', new Tiggr.BaseComponent({
        id: 'mobileimage2',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('userId', new Tiggr.BaseComponent({
        id: 'userId',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilegridcell4', new Tiggr.BaseComponent({
        id: 'mobilegridcell4',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('userName', new Tiggr.BaseComponent({
        id: 'userName',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilebutton3', new Tiggr.BaseComponent({
        id: 'mobilebutton3',
        context: '#j_3'
    }));
    for (var idx = 0; idx < datasources.length; idx++) {
        datasources[idx].__setupDisplay();
    }
    screen_3F95_elementsExtraJS();
    j_0_windowEvents();
    screen_3F95_elementsEvents();
}
// screen window events
screen_3F95_windowEvents = j_0_windowEvents = function() {
    $('#j_0').bind('pageshow orientationchange', function() {
        adjustContentHeightWithPadding();
    });
}
// screen elements extra js
screen_3F95_elementsExtraJS = j_0_elementsExtraJS = function() {
    // screen (screen-3F95) extra code
}
// screen elements handler
screen_3F95_elementsEvents = j_0_elementsEvents = function() {
    $("a :input,a a,a fieldset label").live({
        click: function(event) {
            event.stopPropagation();
        }
    });
    $('#j_3 [name="mobilebutton2"]').die().live({
        vclick: function() {
            if (!$(this).attr('disabled')) {
                try {
                    restservice3.execute({})
                } catch (ex) {
                    console.log(ex.name + '  ' + ex.message);
                    hideSpinner();
                };
            }
        },
    });
    $('#j_3 [name="mobilebutton3"]').die().live({
        vclick: function() {
            if (!$(this).attr('disabled')) { < div id = "fb-root" > < /div>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '395036493876911', / / App ID
                channelUrl: '//WWW.YOUR_DOMAIN.COM/channel.html',
                // Channel File
                status: true,
                // check login status
                cookie: true,
                // enable cookies to allow the server to access the session
                xfbml: true // parse XFBML
            });
        // Additional initialization code here
    };
    // Load the SDK Asynchronously
    (function(d) {
        var js, id = 'facebook-jssdk',
            ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document)); < /script>;

}},});
        
        
}


$("body").undelegate("pagebeforeshow").delegate("#j_0" ,"pagebeforeshow", function(event,ui) {
	j_0_onLoad();
});