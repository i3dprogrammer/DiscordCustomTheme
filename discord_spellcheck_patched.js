module.exports = {
  cld: require('cld'),
  Spellchecker: require('spellchecker').Spellchecker,
  keyboardLayout: require('keyboard-layout'),
};



var StyleList = [
    {
        specifier: ['.app'],
        rules: 'background-image: url(https://i.imgur.com/Z0QE4ji.jpg) !important; background-size: cover !important;'
    },
    {
        specifier: [
            '.theme-light .embedFieldName-NFrena',
            '.theme-light .topic-2QX7LI',
            '.theme-light .embedDescription-1Cuq9a',
            '.theme-light .iconForeground-3y9f0B',
            '.theme-light .title-1aVOXw',
            '.theme-light .channelName-3stJzi',
            '.theme-light .groupDM-3qU0Ks .channelName-3stJzi',
            '.theme-light .groupDMManaged-1GyXtq .channelName-3stJzi',
            '.theme-light .input-autosize-input',
            '.theme-light .attachButtonPlus-rUdX-B',
            '.theme-light .textArea-2Spzkt',
            '.theme-light .typing-2GQL18',
            '.theme-light .username-_4ZSMR'
        ],
        rules: 'color: white;'
    },
    {
        specifier: ['.theme-light .nameMutedText-3Vj4bM', '.theme-light .nameMutedVoice-3oxyQZ', '.theme-light .nameDefaultText-24KCy5', '.theme-light .nameDefaultVoice-3WUH7s', '.nameLockedText-3pqQcL', '.nameLockedVoice-26MhB1'],
        rules: 'color: #a5a5a5 !important;'
    },
    {
        specifier: ['.theme-light .markup-2BOw-j', '.theme-light'],
        rules: 'color: #cecece !important;'
    },
    {
        specifier: ['.iconCollapsed-3hFp_8', '.iconDefault-3Gr8d2', '.nameCollapsed-34uFWo', '.nameDefault-2DI02H'],
        rules: 'color: #00ab00;'
    },
    {
        specifier: ['.theme-light .activity-1IYsbk'],
        rules: 'color: #d6d6d6;'
    },
    {
        specifier: [
            '.theme-light .embedFieldValue-nELq2s',
            '.theme-light .embedFooterText-28V_Wb'
        ],
        rules: 'color: #adacac;'
    },
    {
        specifier: ['.theme-light .dividerEnabled-2TTlcf'],
        rules: 'border-bottom-color: rgba(152, 152, 152, 0.5) !important;'
    },
    {
        specifier: ['.scrollerWrap-2su1QI'],
        rules: 'padding: 10px 0px;'
    },
    {
        specifier: ['.theme-light .inner-zqa7da'],
        rules: 'background-color: rgba(0, 0, 0, 0.5); border: 1px rgba(255,255,255,0.3) solid;'
    },
    {
        specifier: ['.theme-light .reaction-1ELvT8.reactionMe-23mbRf .reactionCount-2ddRoS'],
        rules: 'color: #0012bb;'
    },
    {
        specifier: ['.nameDefault-2s3kbY'],
        rules: 'color: rgba(255, 255, 255, 0.86);'
    },
    {
        specifier: ['.theme-light .guildsAdd-21_IdK'],
        rules: 'border-radius: 50%; border: 1px currentColor dashed; color: rgba(255, 255, 255, .5);'
    },
    {
        specifier: [
		'.theme-light .divider-3gKybi>span',
		'.theme-light .markup-2BOw-j code',
		'.theme-light .markup-2BOw-j code.inline'
	],
        rules: 'background: rgba(255, 255, 255, 0.5); color: black;'
    },
    {
        specifier: [
            '.theme-light .divider-3gKybi',
            '.theme-light .divider-3gKybi:before'
        ],
        rules: 'background-color: transparent;'
    },
    {
        specifier: [
		'.theme-light .divider-3gKybi.dividerRed-MKoLlr>span',
		'.theme-light .reactionCount-2ddRoS'
	],
        rules: 'color: blue;'
    },
    {
        specifier: ['.theme-light .size-1Arx_I'],
        rules: 'color: rgba(255, 255, 255, 0.50);'
    },
    {
        specifier: [
            '.guildsWrapper-5TJh6A',
            '.channels-Ie2l6A',
            '.theme-light .chat-3bRxxu',
            '.theme-light .activityFeed-28jde9',
            '.theme-light .content-yTz4x3',
            '.theme-light .noChannel-Z1DQK7',
            '.members-1998pB',
            '.theme-light .typing-2GQL18',
            '.theme-light .guildsAdd-21_IdK',
            '.flex-1xMQg5',
            ".app *[class^='layer'], .app *[class*=' layer']",
        ],
        rules: 'background-color: transparent !important; background: transparent;'
    },
    {
        specifier: ['.theme-light .embedAuthorName-3mnTWj'],
        rules: 'color: white !important;'
    }    
]


var sheet = document.styleSheets[0];

StyleList.forEach(css => {
    css.specifier.forEach(spec => {
        sheet.insertRule(`${spec} { ${css.rules} }`, sheet.cssRules.length)
    })
})