export default {
    // 实时变化Signature
    makeSignature(params, reqTime) {
        let paramsKeys = Object.keys(params).sort();
        let paramsStr = '';
        for (let paramsKey of paramsKeys) {
            paramsStr += `${paramsKey}=${params[paramsKey]}&`;
        }
        return $.md5(paramsStr + reqTime);
    },

    // 获取网站来源
    getUrlParam(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },

    // gTag
    gtag() {
        dataLayer.push(arguments);
    },
    
    
    // 分享
    doShare(code) {
        switch (code) {
            case 'fb':
                fbq('track', 'AddToWishlist');
                gtag('event', '完成Facebook分享');

                window.open('https://www.facebook.com/sharer.php?display=popup&u=' + WEBSITE_URL, 'sharer', 'toolbar=0,status=0,resizable=1,width=626,height=436');
                break;

            case 'twi':
                fbq('track', 'AddToWishlist');
                gtag('event', '完成Twitter分享');
                window.open(encodeURI('https://twitter.com/intent/tweet?url=' + WEBSITE_URL + '&text=' + SHARE_CONTEXT));
                break;
        }
    }

    
}